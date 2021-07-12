import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption
} from '@chakra-ui/react';

import './table.css';

const datafixed = [
    {
        numberFacture: 1,
        numberOutput: 2,
        benefitPlan: 3
    },
    {
        numberFacture: 1,
        numberOutput: 2,
        benefitPlan: 3
    },
    {
        numberFacture: 1,
        numberOutput: 2,
        benefitPlan: 3
    },
    {
        numberFacture: 1,
        numberOutput: 2,
        benefitPlan: 3
    },
    {
        numberFacture: 1,
        numberOutput: 2,
        benefitPlan: 3
    },
    {
        numberFacture: 1,
        numberOutput: 2,
        benefitPlan: 3
    },
    {
        numberFacture: 1,
        numberOutput: 2,
        benefitPlan: 3
    }
]

function TableData({ data }) {
    return (
        <div className="content_table">
            <h2 className="table_title">Facturas</h2>
            <Table variant="simple" className="table">
                <Thead className="table_header">
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Thead>
                <Tbody className="table_body">
                    {
                        datafixed.map(c => (
                            <Tr key={c.numberFacture}>
                                <Td >{c.numberFacture}</Td>
                                <Td >{c.numberOutput}</Td>
                                <Td isNumeric>{c.benefitPlan}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </div>
    )
}

export default TableData;
