import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';

import Button from '../Button';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';

export default function Menu() {
    return (
        <>
            <nav className="Menu">
                <Link to="/">
                    <img className= "Logo" src={Logo} alt="Leoflix logo"/>
                </Link>
                <Button as={Link} className="ButtonLink" to="/cadastro/video"> Novo Video </Button>
            </nav>
            
        </>
    )
}
