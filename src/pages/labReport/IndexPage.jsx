import React, { useEffect, useState } from 'react';
import IndexPageTemplate from '../pdf/IndexPage';
import { pdf } from '@react-pdf/renderer';
import InputField from '../misc/InputField';
import { useSearchParams } from 'react-router';
import { toast } from 'react-toastify';
import CheckBox from '../misc/CheckBox';
import courses from '../misc/courses.json'
function IndexPage(props) {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shareLink, setShareLink] = useState(" ");
  const [searchParams] = useSearchParams();


  const [data, setData] = useState({
    identity: "1",
    name: "",
    id: "",
    ccode: "",
    ctitle: "",
    page: "1",
    issue: "1",
    submit: "1",
    remark: "1",
    row: "7"

  })
  const generatePdfBlob = async () => {
    let blob = await pdf(<IndexPageTemplate data={data} />).toBlob();
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
  function shareBtn() {

    document.getElementById('shareModal').showModal();
    const searchParams = new URLSearchParams(data).toString();
    setShareLink("http://" + window.location.host + "/cover/"
      + beforeWhat(window.location.hash) + "?" + searchParams)

  }
  useEffect(() => {
    let gotData = Object.fromEntries([...searchParams]);

    if (gotData.ccode != undefined)
      setData({ ...data, ...gotData })

    // loading data from localStorage
    let userInfo = localStorage.getItem("userInfo")
    if (userInfo) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"))
      setData({ ...data, name: userInfo.sname, id: userInfo.sid })
    }

  }, [])
  useEffect(() => {
    //filling course title from course code
    if (data.ccode)
      courses[data.ccode.toUpperCase()] && setData({ ...data, ctitle: courses[data.ccode.toUpperCase()] })
  }, [data.ccode])
  return (
    <>
      <div className='flex flex-col items-center gap-2'>

        <CheckBox setData={setData} data={data} name={"identity"} label={"Identity Information: "} />
        {data.identity == "1" && <>
          <InputField label={"Student Name:"} ph={"Md. Rafiz Uddin"} name='name' data={data} setData={setData} />
          <InputField type={"number"} label={"Student ID:"} ph={"222311079"} name='id' data={data} setData={setData} />

          <InputField label={"Course Code:"} ph={"CSE 334"} name='ccode' data={data} setData={setData} />
          <InputField label={"Course Title:"} ph={"Microprocessor and Assembly Language Lab"} name='ctitle' data={data} setData={setData} />
        </>
        }

        <InputField type={"number"} label={"Row:"} ph={"7"} name='row' data={data} setData={setData} />

        <CheckBox setData={setData} data={data} name={"page"} label={"Page Number: "} />
        <CheckBox setData={setData} data={data} name={"issue"} label={"Issue Date: "} />
        <CheckBox setData={setData} data={data} name={"submit"} label={"Submission Date: "} />
        <CheckBox setData={setData} data={data} name={"remark"} label={"Remark: "} />

        <div className='flex justify-between gap-2'>

          <button className="btn btn-outline btn-success" onClick={() => shareBtn()}>Share</button>
          <button onClick={() => generate()} className="btn btn-outline btn-success">Generate</button>
          <a href={pdfUrl ? pdfUrl : ""} download={"report-" + (new Date()).getTime()} className={`btn ${pdfUrl ? "btn-outline" : "btn-disabled"} btn-success `}>
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
            <button onClick={() => navigator.clipboard.writeText(shareLink).then(() => toast('Copied to clipboard!'))} className="btn">Clipboard</button>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>



      <div role="alert" className="alert alert-dark mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>
          If downloading pdf not working, Please use modern browser like Chrome, Firefox, Brave, MS Edge browser.</span>
      </div>
    </>
  );
}

export default IndexPage;