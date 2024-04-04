import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addToInvoices } from "../slice/slice";
import {useNavigate} from 'react-router-dom'

export const AddInvoice = () => {
    const [invN, setinvN] = useState('')
    const [name, setName] = useState('')
    const [add, setadd] = useState('')
    const [badd, setbadd] = useState('')
    const [gst, setgst] = useState('')
    const [items, setitems] = useState('')
    const [billS, setBillS] = useState('')
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch()
    const date = new Date()
    const invoice = {
        Id: Math.random(),
        Date: date,
        InvoiceNumber: invN,
        CustomerName: name,
        BillingAddress: add,
        ShippingAddress: badd,
        GSTIN: gst,
        Items: items,
        BillSundrys: billS,
        TotalAmount: total

    }
    const history = useNavigate()
    const handleClick = () => {
        dispatch(addToInvoices(invoice))
        history('/invList')
    }
    const onValueChange1 = (e) => {
        setinvN(e.target.value)
    }
    const onValueChange2 = (e) => {
        setName(e.target.value)
    }
    const onValueChange3 = (e) => {
        setadd(e.target.value)
    }
    const onValueChange4 = (e) => {
        setbadd(e.target.value)
    }
    const onValueChange5 = (e) => {
        setgst(e.target.value)
    }
    const onValueChange6 = (e) => {
        setitems(e.target.value)
    }
    const onValueChange7 = (e) => {
        setBillS(e.target.value)
    }
    const onValueChange8 = (e) => {
        setTotal(e.target.value)
    }
    return (
        <div>
            <input type="text" value = {invN} onChange={(e) => (onValueChange1(e))} placeholder="Enter Invoice Number"></input>
            <input type="text" placeholder="Enter customer Name" onChange={(e) => (onValueChange2(e))}></input>
            <input type="text" placeholder="Billing Address" onChange={(e) => (onValueChange3(e))}></input>
            <input type="text" placeholder="Shipping Address" onChange={(e) => (onValueChange4(e))}></input>
            <input type="text" placeholder="GSTIN" onChange={(e) => (onValueChange5(e))}></input>
            <input type="text" placeholder="ITEMS" onChange={(e) => (onValueChange6(e))}></input>
            <input type="text" placeholder="Bill Sundry" onChange={(e) => (onValueChange7(e))}></input>
            <input type="number" placeholder="Total" onChange={(e) => (onValueChange8(e))}></input>
            <button onClick={() => {handleClick()}}>Submit</button>
        </div>
    )
}