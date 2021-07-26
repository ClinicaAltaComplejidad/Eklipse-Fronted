import React from 'react';

import './table.css';

const dataFixed = [
    {
        codeBed: 'CMOBSM04',
        namePatient: 'Maria camila',
        type: 'HIPOSODICA',
        consistency: 'NORMAL',
        evolutionaryDoctor: 'PEPE' 
    },
    {
        codeBed: 'CMOBSM05',
        namePatient: 'Maria Vannesa',
        type: 'CORRIENTE',
        consistency: 'NORMAL',
        evolutionaryDoctor: 'PEPE' 
    },
    {
        codeBed: 'CMOBSN04',
        namePatient: 'Maria Mercedes',
        type: 'HIPOSODICA',
        consistency: 'NORMAL',
        evolutionaryDoctor: 'PEPE' 
    },
    {
        codeBed: 'CMOBSM07',
        namePatient: 'Maria Lopez',
        type: 'HIPOSODICA',
        consistency: 'NORMAL',
        evolutionaryDoctor: 'PEPE' 
    }
]



function Table() {
    return (
        <section className="table">
            <div className="table_action">
                Table Actions
            </div>
            <div className="header_table">
                <h2 className="header_title_table">Cama</h2>
                <h2 className="header_title_table">Paciente</h2>
                <h2 className="header_title_table">Tipo</h2>
                <h2 className="header_title_table">Consistencia</h2>
                <h2 className="header_title_table">Médico</h2>
            </div>
            <div className="body_table">
                {
                    dataFixed.map(data => (
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
            <footer className="footer_table">
                <p>
                    Hola
                </p>
            </footer>
        </section>
    )
}

export default Table;
