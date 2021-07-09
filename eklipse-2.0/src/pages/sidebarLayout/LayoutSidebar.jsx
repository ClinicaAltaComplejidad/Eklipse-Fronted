import React from 'react'

//styles
import './layout.css';

function LayoutSidebar({children}) {
    return (
        <div className="layout">
            {children}
        </div>
    )
}

export default LayoutSidebar;
