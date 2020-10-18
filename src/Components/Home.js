import React from 'react';
import './Home.css';

//Icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Home() {
    return (
        <div className="home" id="scrollHome">
            <div className="title">
                <h1>I'm Jon Hunt</h1>
                <p>I'm a Salt Lake City based developer.</p>
                <p>Full Stack Developer by Day. I am like a big fan of stuff.</p>
            </div>
            <div className="social">
                <LinkedInIcon/>
                <GitHubIcon/>
            </div>
        </div>
    )
}

export default Home
