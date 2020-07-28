import React from 'react';
import Logo from '../../assets/img/logo.png';

import Button from '../Button';

import './Menu.css';
// import ButtonLink from './components/ButtonLink';

export default function Menu() {
    return (
        <div>
            <nav className="Menu">
                <a href="/">
                    <img className= "Logo" src={Logo} alt="Leoflix logo"/>
                </a>
                <Button as="a" className="ButtonLink" href="/"> Novo Video </Button>
            </nav>
            
        </div>
    )
}
