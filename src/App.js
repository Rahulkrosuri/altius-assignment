import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SideBar } from './component/sidebar';
import { InvoiceList } from './component/invoiceList';
import './App.css';
import { AddInvoice } from './component/addInvoice';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Router>
        <Routes>
        <Route path="/" element={<SideBar />} />
          <Route path="/invList" element={<InvoiceList />} />
          <Route path="/addInv" element={<AddInvoice />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;