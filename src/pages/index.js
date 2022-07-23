import React, { useEffect } from 'react';
import Layout from '../components/layout';
import electricityJS from '../components/electricity';
import image from '../images/portrait-final.webp';
import Seo from '../components/seo';

const IndexPage = () => {
  useEffect(() => { electricityJS() }, [])

  return (
    <>
      <Seo/>
      <Layout>
        <div id="home">
          <div id="site-title">
            <h1 style={{ fontFamily: `'VT323', monotype`, letterSpacing: 0, fontSize: `1.875vh`, lineHeight: 1.1, color: `#CC9832`, margin: `0 0 0px 4px` }}>Hi, my name is</h1>
            <h2 style={{ fontSize: `6.25vh`, lineHeight: 1.1, margin: 0, fontWeight: `bold`, letterSpacing: `2px` }}>Shannon Bivins</h2>
            <h3 style={{ fontSize: `6.25vh`, lineHeight: 1.1, color: `var(--light-blue)`, margin: 0, fontWeight: `bold`, letterSpacing: `2px` }}>Programmer. Designer. Developer.</h3>
          </div>

          <div id="home-bottom">
            <div className={ `electricity` } style={{ gridArea: `a` }}>
              <canvas id="canvas" className={ `canvas-elec` }></canvas>
            </div>

            <div id="portrait" style={{ gridArea: `b`, backgroundColor: `#12213F`, backgroundImage: `url(${image})`, backgroundSize: `contain`, backgroundRepeat: `no-repeat`, backgroundPosition: `bottom center`, backgroundBlendMode: `multiply`, height: `100%` }}>
            </div>

            <div className={ `electricity` } style={{ gridArea: `c` }}>
              <canvas id="canvas2" className={ `canvas-elec` }></canvas>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage