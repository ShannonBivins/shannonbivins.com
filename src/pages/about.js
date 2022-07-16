import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => (
    <Layout>
        <div id="about">
            <div
                style={{
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `space-between`,
                    margin: `0 auto`
                }}>
                <div style={{ width: `100%` }}>

                    <h2 style={{ marginBottom: 0 }}>ABOUT ME</h2>
                    <hr style={{ background: `var(--gold)`, height: `2px`, width: `40px`, border: `none`, display: `inline-block` }}></hr>

                    <p>
                        Hi, my name is Shannon and I'm a programmer and designer. I work with a variety of languages and tools to create websites, applications, video games and more.
                    </p>
                    <br />
                    <p>
                        My first time programming was in 2012 when I decided to build my own website. It was an overly ambitious project intended to be like Wikipedia but different. I never finished that one, but I've since built dozens of websites for clients all over the U.S.
                    </p>
                    <br />
                    <p>
                        I work with my partner Chris at <a href="https://netex.consulting" style={{ textDecoration: `none`, color: `#CC9832` }}>Netex Consulting</a> and have been for 5 years. My work mainly consists of web development, databasing, and configuring 3CX phone systems.
                    </p>
                    <br />
                    <p style={{ color: `var(--platinum)` }}><strong>My Skills include:</strong></p>
                    <ul>
                        <li>HTML, CSS, Javascript</li>
                        <li>PHP, Node.JS</li>
                        <li>Databasing, SQL</li>
                        <li>WordPress, CMS Customization</li>
                        <li>Email Marketing, Mautic</li>
                        <li>Electron.JS, Visual Studio</li>
                        <li>Unity, Unreal Engine</li>
                        <li>Illustrator, Inkscape</li>
                        <li>Photoshop, Gimp</li>
                        <li>Wix, Squarespace, Webflow</li>
                        <li>3CX Phone Systems</li>
                    </ul>
                </div>
                <div id="about-img">
                    <StaticImage src="../images/portrait-drawing.png" alt="" />
                </div>
            </div>
            <div style={{ margin: `40px auto 0 auto` }}>
                <div>
                    <h2 style={{ marginBottom: 0 }}>CERTIFICATES</h2>

                    <hr style={{ background: `var(--gold)`, height: `2px`, width: `40px`, border: `none`, display: `inline-block` }}></hr>

                    <div style={{ display: `flex`, flexWrap: `wrap`, justifyContent: `center` }}>
                        <StaticImage className={ `certificate` } src="../images/3cx-basic-certified-badge.png" alt="" />
                        <StaticImage className={ `certificate` } src="../images/3cx-intermediate-certified-badge.png" alt="" />
                        <StaticImage className={ `certificate` } src="../images/3cx-advanced-certified-badge.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage