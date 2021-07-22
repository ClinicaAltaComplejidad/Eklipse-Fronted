import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DataContext } from '../../context/LoginContext';
import {Link} from 'react-router-dom';

import './sidebar.css';

function Sidebar({items}) {

    const history = useHistory();

    const {setLogin} = useContext(DataContext);

    const logout = () => {
        localStorage.removeItem('id');
        setLogin(false);
        history.push('/');
    }


    return (
        <div className="sidebar" id="sidebar">
            <div className="logo_content">
                <div className="logo">
                    <div className="logo_name">EKLIPSE 🚀</div>
                </div>
            </div>
            <ul className="nav_list">
                {
                    items.map( item => (
                        <li key={item.name} >
                            <Link to={`/home/${item.path}`}>
                                {item.icon}
                                <span className="links_name">{item.name}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className="profile_content">
                <div className="profile">
                    <i className='bx bx-log-out log_out' id="log_out" onClick={logout} ></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

