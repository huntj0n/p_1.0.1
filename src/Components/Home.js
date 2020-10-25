import React, { useRef, useEffect } from 'react';
import './Home.css';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { TimelineLite, Power2 } from 'gsap';

//Icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Home() {

    let homeContainer = useRef(null);
    let image = useRef(null);
    let imageReveal = CSSRulePlugin.getRule('.home__imageContainer:after');

    const tl = new TimelineLite()

    useEffect(() => {
        tl.to(homeContainer, 0, {css: { visibility: 'visible' }})
        .to(imageReveal, 1.4, { width: '0%', ease: Power2.easeInOut })
        .from(image, 1.4, { scale: '1.4', ease: Power2.easeInOut, delay: -1.6})
    })

    return (
        <div className="home" id="scrollHome">
            <div className="home__container" ref={el => homeContainer = el}>
                <> 
                    <div className="home__imageContainer">
                        <img src={require('../img/roi-dimor-SidputyP-eE-unsplash.jpg')} alt="home__image" ref={el => image = el}/>
                    </div>
                </>
            </div>
        </div>
    ) 
}

export default Home


 {/* <div className="title">
                <h1>I'm Jon Hunt</h1>
                <p>I'm a Salt Lake City based developer.</p>
                <p>I create engaging experiences.</p>
            </div>
            <div className="social">
                <a href="https://www.linkedin.com/in/jon-hunt-89a1b61b4/"><LinkedInIcon/></a>
                <a href="https://github.com/huntj0n"><GitHubIcon/></a>
            </div>
            <div className="action">
                <button>See my work</button>
            </div> */}
