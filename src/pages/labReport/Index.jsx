import React, { useEffect, useState } from 'react';
import ReactPDF, { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import MyDocument from '../pdf/Document';

function Index(props) {
    const [pdfUrl, setPdfUrl] = useState(null);

  const generatePdfBlob = async () => {
    const blob = await pdf(<MyDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);

  }

  useEffect(()=>{
    generatePdfBlob();
  },[])

    return (
        <>
    <div className='flex flex-col items-center'>
        <div>
        <label className=" ">
        Lab Report 
        <input type="radio" name="radio-1" className="radio ml-3" defaultChecked />
        </label>
        <br/>
        <label className="">
        Assignment 
        <input type="radio" name="radio-1" className="radio ml-3" />
        
        </label>
        </div>
    <label className="input ">
  Path
  <input type="text" className="grow" placeholder="src/app/" />

</label>
    </div>
    


  <button onClick={generatePdfBlob}>Generate PDF</button>
  <a className='underline' href={pdfUrl?pdfUrl:''} download="page.pdf">
  {pdfUrl?'Download':'loading...'}
    </a>

      {pdfUrl && (
        <iframe
          src={pdfUrl}
          width="100%"
          height="600px"
          title="PDF Preview"
          style={{ border: "1px solid black", marginTop: "10px" }}
        />
      )}
        </>
    );
}

export default Index;