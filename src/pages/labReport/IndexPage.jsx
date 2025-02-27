import React, { useEffect, useState } from 'react';
import IndexPageTemplate from '../pdf/IndexPage';
import { pdf } from '@react-pdf/renderer';
function IndexPage(props) {
    const [pdfUrl, setPdfUrl] = useState(null);
      
    const generatePdfBlob = async () => {
        const blob = await pdf(<IndexPageTemplate data={{}} />).toBlob();
        const url = URL.createObjectURL(blob);//MyDocument Design2
        setPdfUrl(url);
        
    
      }
    return (
        <div>
            
                <button onClick={()=>generatePdfBlob()}>Generate PDF</button>
                <a className='underline' href={pdfUrl ? pdfUrl : ''} download="page.pdf">
                  {pdfUrl ? 'Download' : 'loading...'}
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
        </div>
    );
}

export default IndexPage;