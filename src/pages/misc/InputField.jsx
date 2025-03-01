import React from 'react';

function InputField(props) {
    const handleChange = (e) => {
        props.setData({...props.data,[props.name]:e.target.value})
    }
    return (
        <label className="input  focus-within:border-0">
        {props.label}
        <input type={(props.type!=undefined && props.type=="number")?"number":"text"} className=" " placeholder={props.ph} value={props.data[props.name]?props.data[props.name]:""} onChange={handleChange}/>

      </label>
    );
}

export default InputField;