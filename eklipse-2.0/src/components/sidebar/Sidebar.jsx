import React, { useEffect, useState } from 'react';

import Logo from '../../assets/img/marca_de_agua.png';
import Arrow from '../../assets/img/right_arrow.svg';
import Exit from '../../assets/img/exit.svg';

//styles
import './sidebar.css';

function Sidebar({ children }) {

    const [isOpen, setIsOpen] = useState(true);

    function openSidebar() {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true)
        }
    }


    return (
        <>
            <div className="sidebar">
                <div className="btn_open">
                    <input type="checkbox" id="open_btn" />
                    <label onClick={openSidebar} htmlFor="open_btn">
                        <img src={Arrow} alt="" width="32" loading="lazy" />
                    </label>
                </div>
                <aside className={`sidebar ${isOpen ? '' : 'sidebar--close'}`} id="sidebar">
                    <section className="sidebar_image">
                        <img src={Logo} alt="" width="200" loading="lazy" />
                    </section>
                    <section className="sidebar_body">
                        {children}
                    </section>
                    <footer className="sidebar_footer">
                        <section className="footer_image">
                            <img src={Exit} alt="" width="55" loading="lazy" />
                        </section>
                        <button> Salir </button>
                    </footer>
                </aside>
            </div>
        </>
    )
}

export default Sidebar;
