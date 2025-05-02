import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router";
import './App.css'
import { ToastContainer } from 'react-toastify';

import Nav from './pages/misc/Nav';
import LabReport from './pages/labReport/Index';
import Home from './pages/home/Index';
import TestArea from './pages/labReport/TestArea';
import IndexPage from './pages/labReport/IndexPage';
import Banner from './pages/home/SaveGazza';

function App() {
  
  return (
    <>
    
   
    <ToastContainer  theme="light"/>
    
    
    {/*  */}
    <Banner/>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/labreport" element={<LabReport assignment={false}/>} />
      <Route path="/assignment" element={<LabReport  assignment={true}/>} />
      <Route path="/indexPage" element={<IndexPage  assignment={true}/>} />
      <Route path="/test" element={<TestArea  assignment={false}/>} />
      <Route path="*" element={<>sorry</>} />
    </Routes>

<a href="https://rafiz001.github.io/sheet-routine/">
    <div role="alert" className="alert alert-dark mt-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>
  Use Sheet Routine to get teacher names, course code automatic.</span>
</div>
</a>



   <div className='flex justify-end mt-7 mr-3'>
   <a target='_blank' href="https://github.com/rafiz001/cover" className='flex items-center gap-2 text-black'>
   

   

   <svg className='w-[2vw] h-auto'  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.385.6.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.547-1.387-1.335-1.756-1.335-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.469-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.98-.398 3-.403 1.02.005 2.043.137 3 .403 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.195.69.8.573C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
</svg> https://github.com/rafiz001/cover</a>
   </div>
  
  
    </>
  )
}

export default App
