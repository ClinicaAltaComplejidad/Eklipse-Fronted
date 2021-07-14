import React, {useEffect, useState} from 'react';
import useInvoiceData from '../../hooks/useInvoice';
import { CSVLink } from 'react-csv';
import './table.css';

function TableData(props) {

    const [inputData, setinputData] = useState('');
    const [openModal, setOpenModal] = useState(false);
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
    }, [inputData]);

    const exportCsv = () => {
        const headers = [
            { label: "Numero de factura", key: "numberInvoce" },
            { label: "Numero de salida", key: "numberOutput" },
            { label: "Plan de beneficio", key: "benefitPlan" },
            { label: "Valor", key: "value" },
            { label: "Fecha de factura", key: "invoiceDate" },
            { label: "Identificacion", key: "identificationPacient" },
            { label: "Nombre de paciente", key: "namePacient" },
        ];

        const csvReport = {
            data: invoices.data,
            headers: headers,
            filename: Date.now() + 'factrura' + '.csv'
        };

        return csvReport;
    }

    const openModalForDownloadCSV = () => openModal === false ? setOpenModal(true) : setOpenModal(false);

    return (
        <div className="content_table">
            <h2 className="table_title">
                <span className="cuantity_item_invoices">
                    Cantidad: {invoices.data.length}
                </span>
                <span className="invoice_title">
                    Faturas 📇
                </span>
                <span className="export_invoice--excel" onClick={openModalForDownloadCSV}>
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
                            <p className="item_invoice">{invoice.invoiceDate}</p>
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
            <section className={`download_csv_confirm_modal ${ openModal ? 'open_modal' : 'close_modal '}`}>
                <h2 className="modal_title">
                    CONFIRMAR DESCARGA 😀
                </h2>
                <section className="content_btn">
                    <CSVLink  {...exportCsv() } className="btn_download_csv" >Descargar csv</CSVLink>
                </section>
            </section>
        </div>
    )
}

export default TableData;
