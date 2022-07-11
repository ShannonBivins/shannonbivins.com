// BEGIN STRAPI API CALLS
let articles = {};
let categories = {};
let postCount = 0;
let initPosts = 8;
let loadCount = 4;
let blogSection = document.getElementsByClassName('post-section');
let topicSection = document.getElementsByClassName('topic-section');
let currentCategory = "All";

function getArticles(data)
{
    articles = data['data'];
    let articlesHTML = ``;

    for(x = 0; x < initPosts; x++)
    {
        articlesHTML += `<div class="post" topic="${articles[x]['attributes']['Categories']['data'][0]['attributes']['Name']}">
    
            <a style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;" href=""></a>
                
            <img class="post-img" src="${articles[x]['attributes']['Image']['data']['attributes']['url']}" alt="" />
                
            <div class="post-info">
                <p class="category">${articles[x]['attributes']['Categories']['data'][0]['attributes']['Name']}</p>
        
                <div>
                    <h3 class="post-title">${articles[x]['attributes']['Title']}</h3>
                    <div class="info">
                        <p class="post-excerpt">${articles[x]['attributes']['Excerpt']}</p>
                    </div>
                </div>
            </div>
        </div>`;
        
        postCount++;
    }
    blogSection[0].innerHTML += articlesHTML;
}
fetch('https://shan-strapi.herokuapp.com/api/articles?populate=*')
.then(response => response.json())
.then(data => getArticles(data));

function loadMore(button)
{
    let articlesHTML = ``;
    let newTotal = postCount + loadCount;

    if(newTotal > articles.length)
    {
        return;
    }
    
    for(x = postCount; x < newTotal; x++)
    {
        articlesHTML += `<div class="post" topic="${articles[x]['attributes']['Categories']['data'][0]['attributes']['Name']}">
    
            <a style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;" href=""></a>
                
            <img class="post-img" src="${articles[x]['attributes']['Image']['data']['attributes']['url']}" alt="" />
                
            <div class="post-info">
                    <p class="category">${articles[x]['attributes']['Categories']['data'][0]['attributes']['Name']}</p>
        
                <div>
                    <h3 class="post-title">${articles[x]['attributes']['Title']}</h3>
                    <div class="info">
                        <p class="post-excerpt">${articles[x]['attributes']['Excerpt']}</p>
                    </div>
                </div>
            </div>
        </div>`;
        
        postCount++;
    }
    blogSection[0].innerHTML += articlesHTML;

    if(postCount = articles.length)
    {
        button.classList.add('greyed-out');
    }
}

function addCategories(data)
{
    categories = data['data'];
    let categoriesHTML = ``;
    
    for(x = 0; x < categories.length; x++)
    {
        categoriesHTML += `
        <a topic-id="${categories[x]['attributes']['Name']}" class="topics" href="#" onclick="filterPosts(this, this.getAttribute('topic-id'))">${categories[x]['attributes']['Name']}</a>`;
        
        if(x < categories.length - 1)
        {
            categoriesHTML += `<i class="fa-solid fa-diamond"></i>`;
        }
    }
    topicSection[0].innerHTML += categoriesHTML;
}
fetch('https://shan-strapi.herokuapp.com/api/categories')
.then(response => response.json())
.then(data => addCategories(data));

function filterPosts(category)
{
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    category.classList.add('selected');

    currentCategory = category.innerHTML;
    let posts = document.getElementsByClassName('post');
    
    if(currentCategory == 'All')
    {
        for(x = 0; x < postCount; x++)
        {
            posts[x].style.display = 'flex';
        }
        return;
    }
    
    for(x = 0; x < postCount; x++)
    {
        if(posts[x].getAttribute('topic') == currentCategory)
        {
            posts[x].style.display = 'flex';
        }
        else
        {
            posts[x].style.display = 'none';
        }
    }
}

// CONTACT FORM FUNCTIONALITY
function submitForm()
{
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var subject = document.querySelector('input[name="subject"]').value;
    var message = document.querySelector('textarea[name="message"]').value;
    
    const xhttp = new XMLHttpRequest();
    
    xhttp.onload = function()
    {
        if(this.responseText == 1)
        {
            document.querySelector('#form-message').innerHTML =
            `<i class="fas fa-check"></i>
            <p>Thank you, ${name}!</br>your message has been sent</p>`;
            
            document.querySelector('input[name="name"]').value = "";
            document.querySelector('input[name="email"]').value = "";
            document.querySelector('input[name="subject"]').value = "";
            document.querySelector('textarea[name="message"]').value = "";
        }
        else if(this.responseText == 0)
        {
            document.querySelector('#form-message').innerHTML =
            `<i class="fas fa-times"></i>
            <p>I'm sorry, your message could not be sent</br>Please try again later</p>`;
        }
        else
        {
            document.querySelector('#form-message').innerHTML =
            `<i class="fas fa-times"></i>
            <p>${this.responseText}</p>`;
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
// END STRAPI API CALLS

function setSize()
{
    if(screen.availHeight < screen.availWidth)
    {
        document.getElementById('home-bottom').style.minWidth = screen.width + "px";
    }
}
setSize();

let activeSection = document.getElementById('home');
  
function switchScreen(id)
{
    activeSection.style.display = 'none';
    activeSection = document.getElementById(id);
    activeSection.style.display = 'flex';
    toggleMenu(document.getElementById('menu-btn-inner'));
}

function toggleMenu(btn)
{
    if(document.getElementById('menu').classList.contains('active'))
    {
        document.getElementById('menu').classList.remove('active');
        btn.classList.remove('fa-x');
        btn.classList.add('fa-bars');
    }
    else
    {
        document.getElementById('menu').classList.add('active');
        btn.classList.remove('fa-bars');
        btn.classList.add('fa-x');
    }
}

//ELECTRICITY CANVAS 1
var size = 500;
var c = document.getElementById("canvas");
c.width = size;
c.height = size;
var ctx = c.getContext("2d");
var center = {x: 0, y: size / 2};
var minSegmentHeight = 5;
var groundHeight = size;
var color = "hsl(0, 0%, 0%)";
var roughness = 2;
var maxDifference = size / 5;
ctx.globalCompositeOperation = "lighter";
ctx.lineWidth = 2;
ctx.strokeStyle = color;
ctx.shadowColor = color;
ctx.fillStyle = "hsla(216, 55%, 16%, 0.2)";
ctx.fillRect(0, 0, size, size);

function render()
{
    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillRect(0, 0, size, size);
    ctx.shadowBlur = 15;
    var lightning = createLightning();
    ctx.beginPath();

    for (var i = 0; i < lightning.length; i++)
    {
        ctx.lineTo(lightning[i].x, lightning[i].y);
    }
    ctx.stroke();
    requestAnimationFrame(render);
}

function createLightning()
{
    var segmentHeight = groundHeight - center.x;
    var lightning = [];
    lightning.push({x: center.x, y: center.y + ((Math.random() * 2 - 1) * 20)});
    lightning.push({x: (groundHeight - 10) + (Math.random() - 0.9) * 100, y:  Math.random() * (size - 200) + 100});
    var currDiff = maxDifference;
    
    while (segmentHeight > minSegmentHeight)
    {
        var newSegments = [];
        
        for (var i = 0; i < lightning.length - 1; i++)
        {
            var start = lightning[i];
            var end = lightning[i + 1];
            var midY = (start.y + end.y) / 2;
            var newY = midY + (Math.random() * 2 - 1) * currDiff;
            newSegments.push(start, {x: (start.x + end.x) / 2, y: newY});
        }
        newSegments.push(lightning.pop());
        lightning = newSegments;    
        currDiff /= roughness;
        segmentHeight /= 2;
    }
    return lightning;
}
render();

//ELECTRICITY CANVAS 2
var size2 = 500;
var c2 = document.getElementById("canvas2");
c2.width = size2;
c2.height = size2;
var ctx2 = c2.getContext("2d");
var center2 = {x: 0, y: size2 / 2};
var minSegmentHeight2 = 5;
var groundHeight2 = size2;
var color2 = "hsl(0, 0%, 0%)";
var roughness2 = 2;
var maxDifference2 = size2 / 5;
ctx2.globalCompositeOperation = "lighter";
ctx2.lineWidth = 2;
ctx2.strokeStyle = color2;
ctx2.shadowColor = color2;
ctx2.fillStyle = "hsla(216, 55%, 16%, 0.2)";
ctx2.fillRect(0, 0, size2, size2);

function render2()
{
    ctx2.shadowBlur = 0;
    ctx2.globalCompositeOperation = "source-over";
    ctx2.fillRect(0, 0, size2, size2);
    ctx2.shadowBlur = 15;
    var lightning2 = createLightning2();
    ctx2.beginPath();
    for (var i = 0; i < lightning2.length; i++)
    {
        ctx2.lineTo(lightning2[i].x, lightning2[i].y);
    }
    ctx2.stroke();
    requestAnimationFrame(render2);
}

function createLightning2()
{
    var segmentHeight2 = groundHeight2 - center2.x;
    var lightning2 = [];
    lightning2.push({x: center2.x, y: center2.y + ((Math.random() * 2 - 1) * 20)});
    lightning2.push({x: (groundHeight2 - 10) + (Math.random() - 0.9) * 100, y:  Math.random() * (size2 - 200) + 100});
    var currDiff2 = maxDifference2;
    
    while (segmentHeight2 > minSegmentHeight2)
    {
        var newSegments2 = [];
        
        for (var i = 0; i < lightning2.length - 1; i++)
        {
            var start2 = lightning2[i];
            var end2 = lightning2[i + 1];
            var midY2 = (start2.y + end2.y) / 2;
            var newY2 = midY2 + (Math.random() * 2 - 1) * currDiff2;
            newSegments2.push(start2, {x: (start2.x + end2.x) / 2, y: newY2});
        }
        newSegments2.push(lightning2.pop());
        lightning2 = newSegments2;    
        currDiff2 /= roughness2;
        segmentHeight2 /= 2;
    }
    return lightning2;
}
render2();