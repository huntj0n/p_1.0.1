import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__copyright">Copyright © {new Date().getFullYear()}, Jon Hunt</div>

        </div>
    )
}

export default Footer
