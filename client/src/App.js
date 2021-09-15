import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getInvoices } from './redux/actions'
import GeneratedInvoices from "./components/GeneratedInvoices";

function App() {

  const dispatch = useDispatch();

  useEffect(() =>{

    dispatch(getInvoices())

  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Love programming so much!!!</h1>
      </header>
      <GeneratedInvoices />
    </div>
  );
}

export default App;
