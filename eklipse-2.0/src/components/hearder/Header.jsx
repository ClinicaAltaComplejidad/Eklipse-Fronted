import React, {useState, useEffect} from 'react'
import dayJs from 'dayjs';

import LogoAtomo from '../../assets/img/logo_clinica.png';
import './header.css';


function Header() {
    const [hour, setHour] = useState('');

    useEffect(() => {
        let id = setInterval(() =>{
            setHour(
                dayJs().format().replace('-', ' ').replace('05:00', '').replace('T', '-')
            )
        }, 0)
        return () => {
            clearInterval(id);
        }
    }, [hour])

    return (
        <header className="header_layout header">
            <section className="content_title"> 
                <h1 className="header_title">
                   {hour}🕔
                </h1>
            </section>
            <section className="header_body">
                Otra Cosa
            </section>
            <section className="content_image_header">
                <img src={LogoAtomo} alt=""  width="100" loading="lazy" /> 
            </section>
        </header>
    )
}

export default Header;
