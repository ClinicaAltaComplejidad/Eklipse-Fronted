import React, {useEffect, useState} from 'react';
import useInvoiceData from '../../hooks/useInvoice';
import './table.css';

function TableData(props) {

    const [inputData, setinputData] = useState('');
    const [invoice, setInvoice] = useState({
        data: []
    });
    const listInvoices = useInvoiceData();

    const handleInputData = (e) => {
        setinputData(e.target.value);
        localStorage.setItem('lista', inputData); 
    }
    
    useEffect(() => {
        setInvoice( {
            data: listInvoices
        });
    }, [inputData])

    return (
        <div className="content_table">
            <h2 className="table_title">Faturas</h2>
            <textarea className="content_table_data" onChange={handleInputData}></textarea>
            <section className="list_invoices">
                {
                    invoice.data.map(i => (
                        <h1>
                            {
                                i.numberInvoice
                            }
                        </h1>
                    ))
                }
            </section>
        </div>
    )
}

export default TableData;
