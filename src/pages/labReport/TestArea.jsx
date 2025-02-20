import React, { useEffect, useState } from 'react';
import ReactPDF, { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import MyDocument from '../pdf/Document';
import InputField from '../misc/InputField';
import {  useSearchParams } from 'react-router';
import { toast } from 'react-toastify';
import Design2 from '../pdf/Design2';

function TestArea(props) {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shareLink, setShareLink] = useState(" ");
  const [searchParams] = useSearchParams();
  

  const [data, setData] = useState({
    color:true,
    report: "wert",
    ccode: "netull",
    ctitle: "nuewll",
    issue: "nulerwtl",
    submit: "null",
    sname: "null",
    sid: "null",
    year: "null",
    semester: "null",
    section: "null",
    batch: "null",
    tname1: "null",
    tdes1: "null",
    tname2: "null",
    tdes2: "null",
    style: "classic",
    
  })
  const generatePdfBlob = async () => {
    const blob = await pdf(<Design2 data={data} assignment={props.assignment}/>).toBlob();
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);
    setIsLoading(false)

  }
  function generate() {
  setIsLoading(true)
   generatePdfBlob()
  }
  function beforeWhat(str) {
    return str.split("?")[0];
  }
  function shareBtn(){
    if(data.ccode!=null) {
    document.getElementById('shareModal').showModal();
    const searchParams = new URLSearchParams(data).toString();
    setShareLink("http://"+window.location.host +"/cover/"+ beforeWhat(window.location.hash) +"?"+ searchParams)
    }
    else toast.error("Cource code is mandatory to share.")
  }
  useEffect(() => {
    let gotData = Object.fromEntries([...searchParams]);
    Object.keys(gotData).forEach((v)=>{if(gotData[v]=="null")gotData={...gotData, [v]:null};})
    if(gotData.color!=undefined)gotData.color=(gotData.color==="true")?true:false;
      console.log(gotData);
    if(gotData.ccode!=undefined)
    setData(gotData)
      
  }, [])

  return (
    <>
      



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

<dialog id="shareModal" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Share URL</h3>
    <p className="py-4"><input type="text" placeholder="Loading..." readOnly={true} className="input w-full" value={shareLink} /></p>
    <div className="modal-action">
        <button onClick={()=>navigator.clipboard.writeText(shareLink).then(()=>toast('Copied to clipboard!'))} className="btn">Clipboard</button>
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </>
  );
}

export default TestArea;

//http://localhost:5173/#/labreport?id=sfaas&afkjldhf=547842658742&ashfaskdjhf=kfhty4yiuew?color=true&report=1&ccode=cse+123&ctitle=a%3Blfdsj&issue=akjfhkj&submit=hkhdsfk&sname=hisadfh&sid=hiuwrhywe&year=cbvsb&semester=uiwrywiue&section=725y7823&batch=73&tname1=kajfh&tdes1=fjksahb&tname2=bbb&tdes2=jjj&ashfaskdjhf=kfhty4yiuew