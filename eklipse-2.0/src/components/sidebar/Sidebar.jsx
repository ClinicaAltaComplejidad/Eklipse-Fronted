import React from 'react';

import Logo from '../../assets/img/marca_de_agua.png';
import Arrow from '../../assets/img/right_arrow.svg';
import Exit from '../../assets/img/exit.svg';

//styles
import './sidebar.css';

function Sidebar( { children } ) {

    return (
       <aside className="sidebar">
           <section className="sidebar_image">
               <img src={Logo} alt="" width="200" loading="lazy" />
           </section>
            <div className="btn_open">
                <input type="checkbox" id="open_btn" />
                <label htmlFor="open_btn">
                    <img src={Arrow} alt=""  width="32" loading="lazy" />
                </label>
            </div>
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
    )
}

export default Sidebar;
