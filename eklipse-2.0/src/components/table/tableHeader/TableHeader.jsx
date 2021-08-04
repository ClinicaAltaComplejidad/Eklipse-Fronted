import React from 'react'

import './tableHeader.css';

function TableHeader({ headers }) {
    return (
        <div className="header_table">
            {
                headers.map(header => (
                    <h2 className="header_title_table">
                        {header}
                    </h2>
                ))
            }
        </div>
    )
}

export default TableHeader;
