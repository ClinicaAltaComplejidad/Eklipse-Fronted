import React from 'react';

import './table.css';
import TableAction from './tableAction/TableAction';
import TableBody from './tableBody/TableBody';
import TableHeader from './tableHeader/TableHeader';

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
    },
    {
        codeBed: 'CMOBSM071',
        namePatient: 'Maria Lopez',
        type: 'HIPOSODICA',
        consistency: 'NORMAL',
        evolutionaryDoctor: 'PEPE' 
    },
    {
        codeBed: 'CMOBSM072',
        namePatient: 'Maria Lopez',
        type: 'HIPOSODICA',
        consistency: 'NORMAL',
        evolutionaryDoctor: 'PEPE' 
    },
    {
        codeBed: 'CMOBSM0171',
        namePatient: 'Maria Lopez',
        type: 'HIPOSODICA',
        consistency: 'NORMAL',
        evolutionaryDoctor: 'PEPE' 
    }
    
]

const headers = [
    'Cama',
    'Paciente',
    'Tipo',
    'Consistencia',
    'Médico'
]

function Table() {
    return (
        <section className="table">
            <TableAction 
                actionTitle="JORNADA DIETAS"
                actionBody={
                   <input  placeholder="filtrar"/>
                }
                actions={
                    <button>
                        Recargar
                    </button>
                }
            />
            <TableHeader 
                headers={headers}
            />
            <TableBody 
                bodyItems={dataFixed}
            />
            <footer className="footer_table">
                <p>
                    Hola
                </p>
            </footer>
        </section>
    )
}

export default Table;
