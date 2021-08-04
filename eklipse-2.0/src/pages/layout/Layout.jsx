import React from 'react'

//styles
import './layout.css';

function Layout({children}) {
    return (
        <div className="layout">
            {children}
        </div>
    )
}

export default Layout;
