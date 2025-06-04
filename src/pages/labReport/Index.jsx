import React, { useEffect, useState } from 'react';
import ReactPDF, { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import MyDocument from '../pdf/Document';
import InputField from '../misc/InputField';
import { useSearchParams } from 'react-router';
import { toast } from 'react-toastify';
import Design2 from '../pdf/Design2';
import Design3 from '../pdf/Design3';
import courses from '../misc/courses.json'
function Index(props) {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shareLink, setShareLink] = useState(" ");
  const [searchParams] = useSearchParams();
  const [historyCources, setHistoryCources] = useState({});

  const [data, setData] = useState({
    color: true,
    report: null,
    ccode: null,
    ctitle: null,
    willIssue: true,
    issue: null,
    submit: null,
    sname: null,
    sid: null,
    year: null,
    semester: null,
    section: null,
    batch: null,
    tname1: null,
    tdes1: "Lecturer",
    tname2: null,
    tdes2: "Lecturer",
    tdept: "CSE",
    style: "classic",

  })
  window.addEventListener('message', (event) => {
    if (event.data.type === 'EXTENSION_READY') {
      // Request data when extension is ready
      window.postMessage({
        type: 'REQUEST_COURSE_DATA'
      }, '*');
    }

    if (event.data.type === 'FROM_EXTENSION_COURSE_DATA') {
      let theObj = {};
      let array = event.data.payload.map((v, k) => v.matchedCourse);
      array.forEach((v, k) => {
        theObj = { ...theObj, [v.code]: v.title }
      })
      console.log('Received course matches:', theObj);
      setHistoryCources(theObj)

    }
  });


  const generatePdfBlob = async () => {
    let blob;
    switch (data.style) {
      case 'classic':
        blob = await pdf(<MyDocument data={data} assignment={props.assignment} />).toBlob();
        break;
      case 'layout2':
        blob = await pdf(<Design2 data={data} assignment={props.assignment} />).toBlob();
        break;
      case 'layout3':
        blob = await pdf(<Design3 data={data} assignment={props.assignment} />).toBlob();
        break;

      default:
        blob = await pdf(<MyDocument data={data} assignment={props.assignment} />).toBlob();
        break;
    }


    const url = URL.createObjectURL(blob);
    setPdfUrl(url);
    setIsLoading(false)

  }
  function generate() {
    setIsLoading(true)
    saveIdentity()
    generatePdfBlob()
  }
  function beforeWhat(str) {
    return str.split("?")[0];
  }
  function shareBtn() {
    if (data.ccode != null && data.ccode != "") {
      document.getElementById('shareModal').showModal();
      const searchParams = new URLSearchParams(data).toString();
      setShareLink("http://" + window.location.host + "/cover/"
        + beforeWhat(window.location.hash) + "?" + searchParams)
    }
    else toast.error("Cource code is mandatory to share.")
  }
  useEffect(() => {
    // loading data from  URL
    let gotData = Object.fromEntries([...searchParams]);

      Object.keys(gotData).forEach((v) => { if (gotData[v] == "null") gotData = { ...gotData, [v]: null }; })
      if (gotData.color != undefined) gotData.color = (gotData.color === "true") ? true : false;
      if (gotData.willIssue != undefined) gotData.willIssue = (gotData.willIssue === "true") ? true : false;
      console.log(gotData);
      if (gotData.ccode != undefined)
        setData({ ...data, ...gotData })

   

      // loading data from localStorage
      let userInfo = localStorage.getItem("userInfo")
      if (userInfo) {
        setData({ ...data, ...gotData, ...JSON.parse(localStorage.getItem("userInfo")) })
      }
      
     
 




  }, [])

  useEffect(() => {

  }, [])

  useEffect(() => {
    //filling course title from course code
    if (data.ccode)
      courses[data.ccode.toUpperCase()] && setData({ ...data, ctitle: courses[data.ccode.toUpperCase()] })
  }, [data.ccode])

  const saveIdentity = () => {
    if (data.sname) {
      const dataToBeSaved = {
        sname: data.sname,
        sid: data.sid,
        year: data.year,
        semester: data.semester,
        section: data.section,
        batch: data.batch

      }
      localStorage.setItem("userInfo", JSON.stringify(dataToBeSaved));
      //toast.info(`${data.sname}'s data saved at browser.`)
    }
  }
  return (
    <>
      <div className='flex flex-col items-center gap-2'>
        <div>
          <label htmlFor='color'>Colored logo: </label>
          <label className="toggle text-base-content">
            <input id='color' checked={data.color} type="checkbox" value={"color"} onChange={() => { setData(({ ...data, color: !(data.color) })); }} />

            <svg aria-label="disabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="4" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"></path></g></svg>
          </label>
        </div>

        <div>
          <label htmlFor='willIssue'>Issue Date: </label>
          <label className="toggle text-base-content">
            <input id='willIssue' checked={data.willIssue} type="checkbox" onChange={() => { setData(({ ...data, willIssue: !(data.willIssue) })); }} />

            <svg aria-label="disabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="4" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"></path></g></svg>
          </label>
        </div>


        <InputField label={props.assignment ? "Assignment no.:" : "Lab Report no.:"} ph={"1"}
          name='report' data={data} setData={setData} />
        <InputField label={"Course Code:"} ph={"CSE 334"} name='ccode' data={data} setData={setData} />
        <datalist id='course_codes'>
          {Object.keys({ ...historyCources, ...courses }).map((v, k) =>
            <option value={v} key={k}>{courses[v]}</option>)}
        </datalist>
        <InputField label={"Course Title:"} ph={"Microprocessor and Assembly Language Lab"} name='ctitle' data={data} setData={setData} />
        {data.willIssue && <InputField label={"Issue:"} ph={"17 February, 2025"} name='issue' data={data} setData={setData} />}
        <InputField label={"Submission:"} ph={"24 February, 2025"} name='submit' data={data} setData={setData} />
        <InputField label={"Student Name:"} ph={"Md. Abc Xyz"} name='sname' data={data} setData={setData} />
        <InputField label={"Student ID:"} ph={"222311079"} name='sid' data={data} setData={setData} />
        <InputField label={"Year:"} ph={"3rd"} name='year' data={data} setData={setData} />
        <InputField label={"Semester:"} ph={"7th"} name='semester' data={data} setData={setData} />
        <InputField label={"Section:"} ph={"B"} name='section' data={data} setData={setData} />
        <InputField label={"Batch:"} ph={"30th"} name='batch' data={data} setData={setData} />
        <InputField label={"Teacher Name:"} ph={"Mohammad Faisal Al-Naser"} name='tname1' data={data} setData={setData} />
        <InputField label={"Designation:"} ph={"Lecturer"} name='tdes1' data={data} setData={setData} />
        <InputField label={"Teacher Name:"} ph={"Md. Adnan Sami"} name='tname2' data={data} setData={setData} />
        <InputField label={"Designation:"} ph={"Lecturer"} name='tdes2' data={data} setData={setData} />
        <InputField label={"Teacher dept.:"} ph={"CSE"} name='tdept' data={data} setData={setData} />

        <select onChange={(e) => { setData(({ ...data, style: e.target.value })); }} defaultValue="Pick a Layout" className="select">
          <option selected={data.style == "classic"} value={"classic"}>Classic Layout</option>
          <option selected={data.style == "layout2"} value={"layout2"}>Layout 2</option>
          <option selected={data.style == "layout3"} value={"layout3"}>Layout 3</option>



        </select>
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
          <p className="py-4"><input type="text" placeholder="Loading..."
            readOnly={true} className="input w-full" value={shareLink} /></p>
          <div className="modal-action">
            <button onClick={() => navigator.clipboard.writeText(shareLink).then(() =>
              toast('Copied to clipboard!'))} className="btn">Clipboard</button>
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

export default Index;

//http://localhost:5173/#/labreport?id=sfaas&afkjldhf=547842658742&ashfaskdjhf=kfhty4yiuew?color=true&report=1&ccode=cse+123&ctitle=a%3Blfdsj&issue=akjfhkj&submit=hkhdsfk&sname=hisadfh&sid=hiuwrhywe&year=cbvsb&semester=uiwrywiue&section=725y7823&batch=73&tname1=kajfh&tdes1=fjksahb&tname2=bbb&tdes2=jjj&ashfaskdjhf=kfhty4yiuew