import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router";
import './App.css'
import MyDocument from './pages/pdf/Document'

import Nav from './pages/misc/Nav';
import LabReport from './pages/labReport/Index';
import Home from './pages/home/Index';

function App() {
  
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/labreport" element={<LabReport />} />
      <Route path="*" element={<>sorry</>} />
    </Routes>

     
    </>
  )
}

export default App
