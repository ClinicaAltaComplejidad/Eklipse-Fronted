import React, {useEffect, useState} from 'react';
import useInvoiceData from '../../hooks/useInvoice';
import ReactExportData from 'react-data-export';
import './table.css';

const ExcelFile = ReactExportData.ExcelFile;
const ExcelSheet = ReactExportData.ExcelFile.ExcelSheet;


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

    const exportExcel = () => {
        const DataSet = [
                {
                    columns : [
                        { title: "Numero de factura" },
                        { title: "Numero de salida" },
                        { title: "Plan de beneficio"},
                        { title: "Valor"},
                        { title: "Fecha de factura"},
                        { title: "Identificacion"},
                        { title: "Nombre de paciente"},
                    ],
                    data: invoices.data.map(row => [
                        {value: row.numberInvoice},
                        {value: row.numberOutput},
                        {value: row.benefitPlan},
                        {value: row.value},
                        {value: row.invoiceDate},
                        {value: row.identificationPacient},
                        {value: row.namePacient}
                    ])
                }
        ];
        return DataSet;
    }

    const openModalForDownloadExcel = () => openModal === false ? setOpenModal(true) : setOpenModal(false);

    return (
        <div className="content_table">
            <h2 className="table_title">
                <span className="cuantity_item_invoices">
                    Cantidad: {invoices.data.length}
                </span>
                <span className="invoice_title">
                    Faturas 📇
                </span>
                <span className="export_invoice--excel" onClick={openModalForDownloadExcel}>
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
                            <p className="item_invoice">{Number(invoice.value)}</p>
                            <p className="item_invoice">{invoice.invoiceDate}</p>
                            <p className="item_invoice">{Number(invoice.identificationPacient)}</p>
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
                    <ExcelFile
                        filename={Date.now() + 'factura'}
                        element={
                            <button className="btn_download_csv">
                                Descargar Excel 
                            </button>
                        }
                    >
                        <ExcelSheet dataSet={exportExcel()} name="Reporte De Facturas"/>
                    </ExcelFile>
                </section>
            </section>
        </div>
    )
}

export default TableData;
