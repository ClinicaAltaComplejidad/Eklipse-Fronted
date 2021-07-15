import React from 'react'

import './header.css';
import Logo from '../../assets/img/marca_de_agua.png';

function Header() {
    return (
        <header className="header_layout header">
            <section className="content_image_header">
                <img src={Logo} alt=""  width="200" loading="lazy" /> 
            </section>
            <section className="content_title"> 
                <h1 className="header_title">
                   EKLIPSE 📂
                </h1>
            </section>
        </header>
    )
}

export default Header;
