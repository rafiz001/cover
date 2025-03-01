import React from 'react';

function CheckBox(props) {
    return (
        <div>
          <label htmlFor={props.name}>{props.label}</label>
          <label className="toggle text-base-content">
            <input id={props.name} checked={props.data[props.name]=="1"?true:false} type="checkbox" value={"rafiz"} onChange={() => { props.setData(({ ...props.data, [props.name]: (props.data[props.name]=="1")?"0":"1" })); }} />

            <svg aria-label="disabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="4" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"></path></g></svg>
          </label>
        </div>
    );
}

export default CheckBox;