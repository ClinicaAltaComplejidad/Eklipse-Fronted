function useInvoiceData() {
    
    let dataResponse = [];
    const invoices =  localStorage.getItem('lista') !== null ? localStorage.getItem('lista').split('\n'): [];
    
    if (invoices.length === 0) return invoices;
    
    for (let i = 0;  i < invoices.length; i++) {
        const element = invoices[i].split(';');

        const dataFacture = {
            numberInvoice: element[0],
            numberOutput: element[1],
            benefitPlan: element[2],
            value: element[3],
            factureDate: element[4],
            identificationPacient: element[5],
            namePacient: element[6]
        }
        dataResponse.push(dataFacture);       
    }


    return dataResponse;
}

export default useInvoiceData;