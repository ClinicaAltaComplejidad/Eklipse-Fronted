import React from 'react'

import './tableBody.css';

function TableBody({ bodyItems }) {
    return (
        <div className="body_table">
            {
                bodyItems.map(data => (
                    <div key={data.codeBed} className="item">
                        <p className="item_data">
                            <span className="code_bed">
                                {data.codeBed}
                            </span>
                        </p>
                        <p className="item_data">
                            {data.namePatient}
                        </p>
                        <p className="item_data">
                            {data.type}
                        </p>
                        <p className="item_data">
                            {data.consistency}
                        </p>
                        <p className="item_data">
                            {data.evolutionaryDoctor}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default TableBody;
