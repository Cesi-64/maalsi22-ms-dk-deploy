import React from 'react';

import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <header className="pheader">            
            <nav>
                <ul>
                    <li><Link to="home">Accueil</Link></li>
                    <li><Link to="cocktails">Cocktails</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                    <li><Link to="admin">Admin</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;