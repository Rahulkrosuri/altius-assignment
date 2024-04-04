import React from "react";
import { useSelector } from 'react-redux';
import { addToInvoices } from "../slice/slice";
import { SideBar } from "./sidebar";
import { Link } from "react-router-dom";
import "../App.css"
export const InvoiceList = () => {
    const state = useSelector(addToInvoices)
    console.log(state.payload.invoices.value)
    state.payload.invoices.value.forEach(inv => {
        console.log(inv)
    })
    return (
        <div>
            <SideBar />
            <Link to={'/addInv'}>Add + </Link>
            <table>
                <tbody>
                    {state.payload.invoices.value.map(inv => (
                        <tr key={inv.id}>
                            <td className="table">{inv.CustomerName}</td>
                            <td className="table">{inv.Items}</td>
                            <td className="table">{inv.TotalAmount}</td>
                            {/* Add more table cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}