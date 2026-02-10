import React, { useState } from 'react'


export default function TextArea(props) {
    const [text, setText] = useState("");

    const UPPER_CASE = () => {
        setText(text.toUpperCase());

    }
    const lower_case = () => {
        setText(text.toLowerCase());
    }
    const Capitalized_Case = () => {
        setText(text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()));
    }
    const clear =()=>{
        setText("");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);

    }

    return (

        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" value={text} onChange={handleOnChange} placeholder='Enter Your Text.....'></textarea>

            </div>
            <div className='text-center'>
                <button type="button" className="btn btn-primary btn-lg my-3 mx-2" onClick={UPPER_CASE}>UPPER CASE</button>
                <button type="button" className="btn btn-primary btn-lg my-3 mx-2" onClick={lower_case}>lower case</button>
                <button type="button" className="btn btn-primary btn-lg my-3 mx-2" onClick={Capitalized_Case }>Capitalized Case</button>
                <button type="button" className="btn btn-primary btn-lg my-3 mx-2" onClick={clear}>Clear</button>
            </div>

        </div>
    )
}
