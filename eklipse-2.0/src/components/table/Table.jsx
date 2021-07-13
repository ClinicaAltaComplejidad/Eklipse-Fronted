import React, {useEffect, useState} from 'react';
import useInvoiceData from '../../hooks/useInvoice';
import './table.css';

function TableData(props) {

    const [inputData, setinputData] = useState('');
    const [invoices, setInvoice] = useState({
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
            <h2 className="table_title">
                <span className="cuantity_item_invoices">
                    Cantidad: {invoices.data.length}
                </span>
                <span className="invoice_title">
                    Faturas 📇
                </span>
                <span className="export_invoice--excel">
                    <p>Exportar</p>
                    <i className='bx bx-export'></i>
                </span>
            </h2>
            <textarea
                autoFocus
                placeholder="POR FAVOR DEJA QUE ESCRIBA LA MAQUINA 😋"
                className="content_table_data"
                onChange={handleInputData}
            ></textarea>
            <section className="list_invoices">
                {
                    invoices.data.map( invoice => (
                        <div key={invoice.numberInvoice} className="invoice">
                            <p className="item_invoice number--invoice">{invoice.numberInvoice}</p>
                            <p className="item_invoice">{invoice.numberOutput}</p>
                            <p className="item_invoice">{invoice.benefitPlan}</p>
                            <p className="item_invoice">{invoice.value}</p>
                            <p className="item_invoice">{invoice.factureDate}</p>
                            <p className="item_invoice">{invoice.identificationPacient}</p>
                            <p className="item_invoice">{invoice.namePacient}</p>
                            <p className="item_invoice">
                                <span className="invoice--btn_delete">
                                    Eliminar 💀
                                </span>
                            </p>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default TableData;
