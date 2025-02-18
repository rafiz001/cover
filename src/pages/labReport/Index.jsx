import React, { useEffect, useState } from 'react';
import ReactPDF, { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import MyDocument from '../pdf/Document';
import InputField from '../misc/InputField';
import {  useSearchParams } from 'react-router';
import { toast } from 'react-toastify';

function Index(props) {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shareLink, setShareLink] = useState(" ");
  const [searchParams] = useSearchParams();
  

  const [data, setData] = useState({
    color:true,
    report: null,
    ccode: null,
    ctitle: null,
    issue: null,
    submit: null,
    sname: null,
    sid: null,
    year: null,
    semester: null,
    section: null,
    batch: null,
    tname1: null,
    tdes1: null,
    tname2: null,
    tdes2: null,
    
  })
  const generatePdfBlob = async () => {
    const blob = await pdf(<MyDocument data={data} />).toBlob();
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);
    setIsLoading(false)

  }
  function generate() {
  setIsLoading(true)
   generatePdfBlob()
  }

  function shareBtn(){

    document.getElementById('shareModal').showModal();
    const searchParams = new URLSearchParams(data).toString();
    setShareLink("http://"+window.location.host +"/"+ window.location.hash +"?"+ searchParams)
  }
  useEffect(() => {
    
    setData(Object.fromEntries([...searchParams]))
      
  }, [])

  return (
    <>
      <div className='flex flex-col items-center gap-2'>
        <div>
          <label htmlFor='color'>Colored logo: </label>
          <label className="toggle text-base-content">
            <input id='color' checked={!data.color} type="checkbox" value={"color"} onChange={()=>{setData(({...data,color: !(data.color)}));}}/>

            <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="4" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"></path></g></svg>
            <svg aria-label="disabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </label>
        </div>



        
        <InputField label={"Report No.:"} ph={"1"} name='report' data={data} setData={setData}/> 
        <InputField label={"Course Code:"} ph={"CSE 334"} name='ccode' data={data} setData={setData}/> 
        <InputField label={"Course Title:"} ph={"Microprocessor and Assembly Language Lab"}  name='ctitle' data={data}  setData={setData}/> 
        <InputField label={"Issue:"} ph={"14 February, 2025"}  name='issue' data={data}  setData={setData}/> 
        <InputField label={"Submission:"} ph={"21 February, 2025"}  name='submit' data={data}  setData={setData}/> 
        <InputField label={"Student Name:"} ph={"Md. Rafiz Uddin"}  name='sname' data={data}  setData={setData}/> 
        <InputField label={"Student ID:"} ph={"222311079"}  name='sid' data={data}  setData={setData}/> 
        <InputField label={"Year:"} ph={"3rd"}  name='year' data={data}  setData={setData}/> 
        <InputField label={"Semester:"} ph={"7th"}  name='semester' data={data}  setData={setData}/> 
        <InputField label={"Section:"} ph={"B"}  name='section' data={data}  setData={setData}/> 
        <InputField label={"Batch:"} ph={"30th"}  name='batch' data={data}  setData={setData}/> 
        <InputField label={"Teacher Name:"} ph={"Mohammad Faisal Al-Naser"}  name='tname1' data={data}  setData={setData}/> 
        <InputField label={"Designation:"} ph={"Lecturer"}  name='tdes1' data={data}  setData={setData}/> 
        <InputField label={"Teacher Name:"} ph={"Md. Adnan Sami"}  name='tname2' data={data}  setData={setData}/> 
        <InputField label={"Designation:"} ph={"Lecturer"}  name='tdes2' data={data}  setData={setData}/> 
        <div className='flex justify-between gap-2'>

        <button className="btn btn-outline btn-success" onClick={()=>shareBtn()}>Share</button>
        <button onClick={()=>generate()} className="btn btn-outline btn-success">Generate</button>
        <a href={pdfUrl?pdfUrl:""} download={"report-"+(new Date()).getTime()} className={`btn ${pdfUrl?"btn-outline":"btn-disabled"} btn-success `}>
        {isLoading && <span className="loading loading-spinner"></span>}
          Download</a>
        </div>
      </div>

{/* 

    <button onClick={()=>console.log(data)}>Generate PDF</button>
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
    )} */}

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

export default Index;

//http://localhost:5173/#/labreport?id=sfaas&afkjldhf=547842658742&ashfaskdjhf=kfhty4yiuew?color=true&report=1&ccode=cse+123&ctitle=a%3Blfdsj&issue=akjfhkj&submit=hkhdsfk&sname=hisadfh&sid=hiuwrhywe&year=cbvsb&semester=uiwrywiue&section=725y7823&batch=73&tname1=kajfh&tdes1=fjksahb&tname2=bbb&tdes2=jjj&ashfaskdjhf=kfhty4yiuew