import React from 'react';
import Logo from '../../assets/img/logo.png';

import './styles.css';

export default function Menu() {
    return (
        <div>
            <nav className="Menu">
                <a href="/">
                    <img className= "Logo" src={Logo} alt="Leoflix logo"/>
                </a>
            </nav>
            
        </div>
    )
}
