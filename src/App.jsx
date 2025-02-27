import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router";
import './App.css'
import { ToastContainer } from 'react-toastify';

import Nav from './pages/misc/Nav';
import LabReport from './pages/labReport/Index';
import Home from './pages/home/Index';
import TestArea from './pages/labReport/TestArea';
import IndexPage from './pages/labReport/IndexPage';

function App() {
  
  return (
    <>
    
   
    <ToastContainer  theme="light"/>
    
    
    {/*  */}
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/labreport" element={<LabReport assignment={false}/>} />
      <Route path="/assignment" element={<LabReport  assignment={true}/>} />
      <Route path="/indexPage" element={<IndexPage  assignment={true}/>} />
      <Route path="/test" element={<TestArea  assignment={false}/>} />
      <Route path="*" element={<>sorry</>} />
    </Routes>

     
    </>
  )
}

export default App
