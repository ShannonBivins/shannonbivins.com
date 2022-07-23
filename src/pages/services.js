import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../images/diamonds-separator.svg';
import image2 from '../images/binary.svg';
import Seo from "../components/seo"

const ServicePage = () => (
    <>
        <Seo title={ `SB / Services` }/>
        <Layout>
            <div id="services">
                <div className={ `service` } style={{display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center`, padding: `0 var(--social-padding) 60px 0` }}>
                    <div style={{ display: `flex`, justifyContent: `space-evenly`, padding: `0 0 0 20px`, columnGap: `2%`, flexWrap: `wrap` }}>
                        <div style={{ width: `clamp(350px, 20%, 500px)`, margin: `10px` }}>
                            <h2 style={{ textAlign: `center`, marginBottom: 0 }}><FontAwesomeIcon icon={'fa-globe'} style={{ marginRight: `5px` }}/><i className={ `fa-solid fa-globe` }></i> Web Development</h2>
                            <hr style={{ background: `var(--gold)`, height: `2px`, width: `40px`, border: `none` }}></hr>
                            <p>
                                I work with many languages, frameworks, and platforms to build stylish, optimized websites. I am a front and back-end developer capable of building interactive, data-driven sites or apps. I can work with most modern site-building tools.
                            </p>
                        </div>
                        
                        <div style={{ width: `clamp(350px, 20%, 500px)`, margin: `10px` }}>
                            <h2 style={{ textAlign: `center`, marginBottom: 0 }}><FontAwesomeIcon icon={'fa-rocket'} style={{ marginRight: `5px` }}/><i className={ `fa-solid fa-rocket` }></i> Speed Optimization</h2>
                            <hr style={{ background: `var(--gold)`, height: `2px`, width: `40px`, border: `none` }}></hr>
                            <p>
                                I use tools to test your site for bloated assets, poorly organized code, and other things that can slow it down. I can then make modifications to the site that make it quick and efficient. This is great for user experience and search engine rankings.
                            </p>
                        </div>
                        
                        <div style={{ width: `clamp(350px, 20%, 500px)`, margin: `10px` }}>
                            <h2 style={{ textAlign: `center`, marginBottom: 0 }}><FontAwesomeIcon icon={['fab', 'fa-searchengin']} style={{ marginRight: `5px` }}/><i className={ `fa-brands fa-searchengin` }></i> SEO & Analytics</h2>
                            <hr style={{ background: `var(--gold)`, height: `2px`, width: `40px`, border: `none` }}></hr>
                            <p>
                                I can analyze your site and figure out how it could be modified to better suit search engine preferences. I can then implement the modifications to improve your search engine rankings. This can extend your site's reach, increasing traffic and business.
                            </p>
                        </div>
                        
                        <div style={{ width: `clamp(350px, 20%, 500px)`, margin: `10px` }}>
                            <h2 style={{ textAlign: `center`, marginBottom: 0 }}><FontAwesomeIcon icon={'fa-compass-drafting'} style={{ marginRight: `5px` }}/><i className={ `fa-solid fa-compass-drafting` }></i> Design</h2>
                            <hr style={{ background: `var(--gold)`, height: `2px`, width: `40px`, border: `none` }}></hr>
                            <p>
                                If you need me to design your product before building it, that's no problem. I've designed this site and many others, both for style and accessibility. I can do creative design and UI-driven design. I specialize in unique, custom websites.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: `var(--platinum)`, backgroundImage: `url(${image})`, height: `110px`, backgroundRepeat: `repeat-x`, width: `100%`, transform: `rotateX(180deg)`, backgroundSize: `800px 110px` }}></div>

                <div className= { `service` } style={{ background: `var(--platinum)`, width: `100%`, display: `flex`, alignItems: `center`, justifyContent: `center`, flexDirection: `column`, padding: `30px var(--social-padding) 30px 0`, boxSizing: `border-box` }}>
                    <div style={{ display: `flex`, width: `min(1000px, 90%)`, flexWrap: `wrap`, justifyContent: `center` }}>
                        <div style={{ width: `min(450px, 90%)`, display: `flex`, flexDirection: `column`, alignItems: `center` }}>
                            <div style={{ display: `flex`, alignItems: `center` }}>
                                <StaticImage src="../images/unity-logo.png" alt="" loading="eager" placeholder="none"/>
                                <h3 style={{ color: `var(--black)`, fontSize: `48px`, margin: `0 0 0 20px` }}>Unity</h3>
                            </div>
                            
                            <div style={{ width: `100%`, padding: `30px 0` }}>
                                <p style={{ textAlign: `center`, color: `var(--black)`, padding: `0 20px`, marginTop: `20px` }}>
                                    I am a C# expert with 4+ years of experience in Unity. I have built many different projects including 2D and 3D games and simulations, particulary relating to procedural generation. I can help you with your project via consulting or development.
                                </p>
                            </div>
                        </div>
                        
                        <div id="game-sep" style={{ backgroundColor: `var(--black)`, width: `2px` }}></div>
                        
                        <div style={{ width: `min(450px, 90%)`, display: `flex`, flexDirection: `column`, alignItems: `center` }}>
                            <div style={{ display: `flex`, alignItems: `center` }}>
                                <StaticImage src="../images/unreal-engine.png" alt="" loading="eager" placeholder="none"/>
                                <h3 style={{ color: `var(--black)`, fontSize: `48px`, margin: `0 0 0 20px` }}>Unreal</h3>
                            </div>
                            
                            <div style={{ width: `100%`, padding: `30px 0` }}>
                                <p style={{ textAlign: `center`, color: `var(--black)`, padding: `0 20px`, marginTop: `20px` }}>
                                    I have 2+ years of experience working with Unreal blueprints. I have built dialogue systems, combat systems, inventory systems, interaction systems, and more. I can program blueprints for your game or debug existing ones.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: `var(--platinum)`, backgroundImage: `url(${image})`, height: `110px`, backgroundRepeat: `repeat-x`, width: `100%`, backgroundSize: `800px 110px` }}></div>

                <div className={ `service` } style={{ boxSizing: `border-box`, width: `100%`, padding: `30px var(--social-padding) 30px 0`, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                    <div style={{ width: `min(1000px, 90%)`, display: `flex`, alignItems: `center`, justifyContent: `center`, flexWrap: `wrap` }}>
                        <div style={{ width: `min(500px, 90%)`, padding: `30px 3%` }}>
                            <h2 style={{ marginBottom: 0 }}>Full-Stack Development</h2>
                            <hr style={{ background: `var(--gold)`, height: `2px`, width: `40px`, border: `none`, display: `inline-block` }}></hr>
                            <p>
                                With full-stack experience, I have the skills needed to see your project through from design, to development, to optimization. I know enough languages to build most anything and can pick new ones up quickly.
                            </p>
                            <br/>
                            <p>
                                <span style={{ color: `var(--gold)` }}>Includes:</span><span style={{ color: `var(--platinum)` }}> HTML, CSS, Javascript, PHP, C#, Liquid, SQL +</span>
                            </p>
                        </div>
                        
                        <div style={{ display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`, backgroundImage: `url('${image2}')`, width: `min(400px, 90%)`, height: `300px`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`, backgroundPosition: `center`, margin: `30px auto` }}>
                            <FontAwesomeIcon icon={'fa-code'} style={{ fontSize: `80px`, color: `var(--gold)` }}/>
                            <h2 style={{ fontFamily: `'VT323', sans-serif`, color: `var(--platinum)`, fontSize: `80px`, margin: `20px 0 0 0` }}>CODING</h2>
                        </div>
                    </div>
                </div>

                <div id="data-service" className={ `service` } style={{ padding: 0, width: `100%`, display: `flex`, alignItems: `center`, justifyContent: `center`, flexDirection: `column`, filter: `drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5)` }}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ fill: `#CC9832`, padding: 0, marginBottom: `0px`, display: `block` }}><path d="M0 0 L0 100 L100 100 Z"></path></svg>
                    
                    <div id="sql-section" style={{ background: `var(--gold)`, width: `100%`, display: `flex`, alignItems: `center`, justifyContent: `center`, padding: `40px var(--social-padding) 40px 10px`, boxSizing: `border-box` }}>
                        <p style={{ maxWidth: `300px`, color: `var(--black)`, textAlign: `center` }}>
                            An app with no data can only do so much. I work with database management systems to create dynamic applications capable of delivering different experiences to different users.
                        </p>
                        
                        <div style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, margin: `20px` }}>
                            <FontAwesomeIcon icon={'fa-angles-left'}/>
                            <h2 style={{ display: `flex`, alignItems: `center`, fontFamily: `'Staatliches', sans-serif`, color: `var(--black)`, margin: `0 20px`, fontSize: `30px` }}><FontAwesomeIcon icon={'fa-database'} style={{ marginRight: `10px` }}/> SQL</h2>
                            <FontAwesomeIcon icon={'fa-angles-right'}/>
                        </div>
                        
                        <p style={{ maxWidth: `300px`, color: `var(--black)`, textAlign: `center` }}>
                            A content management system can help make the process of modeling and managing data less technical. I use popular CMSs like WordPress and Strapi to empower end-users to manage their own data.
                        </p>
                    </div>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ padding: 0, fill: `#CC9832` }}><path d="M100 0 L100 100 L0 0 Z"></path></svg>
                </div>

                <div className={ `service` } style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, width: `min(1000px, 90%)`, padding: `60px var(--social-padding) 0 0`, flexWrap: `wrap`, margin: `0 auto` }}>
                    <div style={{ width: `min(500px, 90%)`, display: `flex`, justifyContent: `center` }}>
                        <StaticImage  style={{ width: `min(350px, 90%)`}} src="../images/3cx-advanced-certified-badge.png" alt="" placeholder="none"/>
                    </div>
                    
                    <div style={{ width: `min(500px, 90%)`, display: `flex`, flexDirection: `column`, justifyContent: `center` }}>
                        <div style={{ width: `100%` }}>
                            <h2 style={{ marginBottom: 0 }}>3CX Phone Systems</h2>
                            <hr style={{ background: `var(--gold)`, height: `2px`, width: `40px`, border: `none`, display: `inline-block` }}></hr>
                            <p>
                                I am an advanced certified 3CX expert. I can build you and your company a custom phone system with all the extensions, groups, queues, and routing it needs to direct your customers right where they need to go.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>
)

export default ServicePage