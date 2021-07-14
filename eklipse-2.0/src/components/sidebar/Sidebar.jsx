import React, { useEffect } from 'react'

import './sidebar.css';

function Sidebar() {

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


    return (
        <div className="sidebar" id="sidebar">
            <div className="logo_content">
                <div className="logo">
                    <div className="logo_name">EKLIPSE 🚀</div>
                </div>
                <i className='bx bx-menu btn' id="btn"></i>
            </div>
            <ul className="nav_list">
                <li>
                    <a href="#">
                        <i className='bx bx-user' ></i>
                        <span className="links_name">User</span>
                    </a>
                    <span className="tooltip">User</span>
                </li>
            </ul>
            <div className="profile_content">
                <div className="profile">
                    <i className='bx bx-log-out log_out' id="log_out" ></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

