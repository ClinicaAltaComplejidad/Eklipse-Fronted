import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DataContext } from '../../context/LoginContext';
import {Link} from 'react-router-dom';

import './sidebar.css';

function Sidebar({items}) {

    const history = useHistory();

    const {setLogin} = useContext(DataContext);

    useEffect(() => {
        let btn = document.getElementById("btn");
        let sidebar = document.getElementById("sidebar");
     
        btn.addEventListener('click', function() {
          sidebar.classList.toggle("active");
          if(btn.classList.contains("bx-menu")){
            btn.classList.replace("bx-menu" , "bx-menu-alt-right");
          }else{
            btn.classList.replace("bx-menu-alt-right", "bx-menu");
          }
        });

    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setLogin(false);
        history.push('/');
    }


    return (
        <div className="sidebar" id="sidebar">
            <div className="logo_content">
                <div className="logo">
                    <div className="logo_name">EKLIPSE 🚀</div>
                </div>
                <i className='bx bx-menu btn' id="btn"></i>
            </div>
            <ul className="nav_list">
                {
                    items.map( item => (
                        <li key={item.name} >
                            <Link to={`/home/${item.path}`}>
                                {item.icon}
                                <span className="links_name">{item.name}</span>
                            </Link>
                            <span className="tooltip">{item.name}</span>
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

