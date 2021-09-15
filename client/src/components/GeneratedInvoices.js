import React, { useState} from 'react'
import { useSelector } from 'react-redux'

function GeneratedInvoices() {

  const [invoices, setInvoices] = useState([]);

  const fetchedInvoices = useSelector((state) => state.invoices)

  console.log(fetchedInvoices)


  return (
    <div>
      
    </div>
  )
}

export default GeneratedInvoices
