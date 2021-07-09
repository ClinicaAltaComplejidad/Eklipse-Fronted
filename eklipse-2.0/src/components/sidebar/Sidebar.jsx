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
                <i className='bx bx-menu' id="btn" ></i>
            </div>
            <ul className="nav_list">
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt' ></i>
                        <span className="links_name">Dashboard</span>
                    </a>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-user' ></i>
                        <span className="links_name">User</span>
                    </a>
                    <span className="tooltip">User</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-chat' ></i>
                        <span className="links_name">Messages</span>
                    </a>
                    <span className="tooltip">Messages</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-pie-chart-alt-2' ></i>
                        <span className="links_name">Analytics</span>
                    </a>
                    <span className="tooltip">Analytics</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-folder' ></i>
                        <span className="links_name">File Manager</span>
                    </a>
                    <span className="tooltip">Files</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-cart-alt' ></i>
                        <span className="links_name">Order</span>
                    </a>
                    <span className="tooltip">Order</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-heart' ></i>
                        <span className="links_name">Saved</span>
                    </a>
                    <span className="tooltip">Saved</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-cog' ></i>
                        <span className="links_name">Setting</span>
                    </a>
                    <span className="tooltip">Setting</span>
                </li>
            </ul>
            <div className="profile_content">
                <div className="profile">
                    <i className='bx bx-log-out' id="log_out" ></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

