import React from 'react';

function InputField(props) {
    const handleChange = (e) => {
        props.setData({ ...props.data, [props.name]: e.target.value })
    }
    return (
        <label
            className={`input focus-within:border-0 transition-all duration-300 ease-in-out ${props.hidden!=undefined && props.hidden==false ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 '}`}
        >
            {props.label}
            <input list={(props.name == "ccode") ? "course_codes" : ""} type={(props.type != undefined && props.type == "number") ? "number" : "text"} className=" " placeholder={props.ph} value={props.data[props.name] ? props.data[props.name] : ""} onChange={handleChange} />

        </label>
    );
}

export default InputField;