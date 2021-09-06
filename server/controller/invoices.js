import  { data }  from "../model/invoiceData.js"

export const getInvoices = (req, res) => {
    res.send(data)
}

export const createInvoices = (req, res) => {

    const invoice = req.body
    
    console.log(invoice)
}