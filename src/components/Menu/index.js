import React from 'react';
import Logo from '../../assets/img/logo.png';

import './styles.css';
import ButtonLink from './components/ButtonLink';

export default function Menu() {
    return (
        <div>
            <nav className="Menu">
                <a href="/">
                    <img className= "Logo" src={Logo} alt="Leoflix logo"/>
                </a>
                <ButtonLink className="ButtonLink" href="/"> Novo Video </ButtonLink>
            </nav>
            
        </div>
    )
}
