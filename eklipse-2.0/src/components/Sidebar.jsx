import React from 'react';

function Sidebar({children}) {

    return (
       <aside className="sidebar">
           {children}
       </aside>
    )
}

export default Sidebar;
