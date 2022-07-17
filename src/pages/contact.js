import React from 'react';
import Layout from '../components/layout';

const ContactPage = () => {

    function submitForm()
    {
        var name = document.querySelector('input[name="name"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var subject = document.querySelector('input[name="subject"]').value;
        var message = document.querySelector('textarea[name="message"]').value;
        
        const xhttp = new XMLHttpRequest();
        
        xhttp.onload = function()
        {
            if(this.status === 200)
            {
                if(name === '' || email === '' || subject === '' || message === '' )
                {
                    document.querySelector('#form-message').innerHTML = 
                    `<i class="fa-solid fa-x"></i>
                    <p>All fields are required.</p>`;
                }
                else
                {
                    document.querySelector('#form-message').innerHTML =
                    `<i class="fas fa-check"></i>
                    <p>Thank you, ${name}!</br>Your message has been sent.</p>`;
                    
                    document.querySelector('input[name="name"]').value = "";
                    document.querySelector('input[name="email"]').value = "";
                    document.querySelector('input[name="subject"]').value = "";
                    document.querySelector('textarea[name="message"]').value = "";
                }
            }
            else if(this.status === 400)
            {
                document.querySelector('#form-message').innerHTML =
                `<i class="fa-solid fa-x"></i>
                <p>${JSON.parse(this.response).error.message}</p>`;
            }
            else
            {
                document.querySelector('#form-message').innerHTML =
                `<i class="fa-solid fa-x"></i>
                <p>I'm sorry, your message could not be sent.</br>Please try again later.</p>`;
            }
            
            document.querySelector('#form-message').style.display = "flex";
            document.querySelector('#form-message').style.opacity = "1";
            
            setTimeout(function()
            {
                document.querySelector('#form-message').style.opacity = 0;
            }, 3000);
            setTimeout(function()
            {
                document.querySelector('#form-message').style.display = "none";
            }, 3500);
        }

        xhttp.open("POST", "https://shan-strapi.herokuapp.com/api/contact-submissions");
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(
        {
            "data":
            {
                "Name": name,
                "Email": email,
                "Subject": subject,
                "Message": message
            }
        }));
    }

    return (
        <Layout>
            <div id="contact">
                <div className={ `text-section` }>
                    <h3 style={{ marginTop: 0, textAlign: `center`, color: `var(--platinum)`, marginBottom: 0 }}>WANT TO WORK WITH ME?</h3>

                    <hr style={{ background: `var(--gold)`, height: `2px`, width: `40px`, border: `none`, margin: `15px auto 20px auto` }}></hr>

                    <p style={{ marginBottom: `34px`, textAlign: `center` }}>
                        If you have a project and you're interested in working with me, please fill out the form below to let me know and I will get back with you as soon as I can. Thank you!
                    </p>
            
                    {/* <div class="services">
                        <div>
                            <i class="fas fa-globe"></i>
                            <p style="font-family: 'Geo', sans-serif;">
                                Websites
                            </p>
                        </div>
                        
                        <div>
                            <i class="fas fa-dragon"></i>
                            <p style="font-family: 'Jolly Lodger', sans-serif;">
                                Video Games
                            </p>
                        </div>
                        
                        <div>
                            <i class="fas fa-code"></i>
                            <p style="font-family: 'VT323', sans-serif;">
                                Coding
                            </p>
                        </div>
                        
                        <div>
                            <i class="fas fa-paint-brush"></i>
                            <p style="font-family: 'Vujahday Script', sans-serif; font-weight: bold;">
                                Design
                            </p>
                        </div>
                    </div> */}
                
                    <form id="contact-form">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="text" name="email" placeholder="Email"/>
                        <input type="text" name="subject" placeholder="Subject"/>
                        <textarea name="message" placeholder="Message"></textarea>
                        <button onClick={(e) => { submitForm(e) }} type="button">Submit</button>
                    </form>
            
                    <div id="form-message">
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage