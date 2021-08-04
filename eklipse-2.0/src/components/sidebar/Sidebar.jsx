import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DataContext } from '../../context/LoginContext';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/marca_de_agua.png';

import './sidebar.css';

const items = [
    {name: 'Facturas',  path: 'invoices', icon: <i className='bx bx-cabinet'></i>},
]

function Sidebar() {

    const history = useHistory();

    const {setLogin} = useContext(DataContext);

    const logout = () => {
        localStorage.removeItem('id');
        setLogin(false);
        history.push('/');
    }

    return (
        <div className="sidebar" id="sidebar">
            <section className="logo_content">
                <img src={Logo}  alt="" width="200" />
            </section>
            <ul className="nav_list">
                {
                    items.map( item => (
                        <li key={item.name}
                            className="link_page"
                        >
                            <Link to={`/home/${item.path}`}>
                                {item.icon}
                                <span className="links_name">{item.name}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className="btn_logout_content">
                <i className='bx bx-log-out log_out' id="log_out" onClick={logout} ></i>
            </div>
        </div>
    )
}

export default Sidebar;

