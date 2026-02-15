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

    const morseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.',
        'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..',
        'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---',
        'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-',
        'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---',
        '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..',
        '9': '----.',
        ' ': '/'
    };

    const morseCodeFunction = () => {

        setText(text.toUpperCase().split('').map(char => morseCode[char] || ' ').join(' '));

    }

    const morseCodetoText = () => {
        const reverseMorseCode = Object.fromEntries(
            Object.entries(morseCode).map(([key, value]) => [value, key])
        );
        setText(text.split(' ').map(code => reverseMorseCode[code] || ' ').join('').replace(/\//g, ' '))
    }
    const clear = () => {
        setText("");
    }
    const copyFunction=()=>{
        var text= document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const pasteFunction =async()=>{
        const clipBoardText = await navigator.clipboard.readText();
        setText(clipBoardText);
        }

    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    const removeExtraSpaces =()=>{
        let txt=text.split(/[ ]+/);
        setText(txt.join(" "));
    }

    return (
        
        <div className={`text-${props.mode==='light'?"dark":"light"} bg-${props.mode==='light'?"light":"dark"}`}>
            <br />
            <h1 className='mx-10'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'dark'}`} id="exampleFormControlTextarea1" rows="9" value={text} onChange={handleOnChange} placeholder={` Enter your text-${props.mode==='light'?'dark':'light'}`} ></textarea>

            </div>
            <div className='text-center'>
                <button type="button" className="btn btn-warning btn-lg my-3 mx-2" onClick={UPPER_CASE}>UPPER CASE</button>
                <button type="button" className="btn btn-warning btn-lg my-3 mx-2" onClick={lower_case}>lower case</button>
                <button type="button" className="btn btn-warning btn-lg my-3 mx-2" onClick={Capitalized_Case}>Capitalized Case</button>
                <button type="button" className="btn btn-warning btn-lg my-3 mx-2" onClick={morseCodeFunction}>Morse Code</button>
                <button type="button" className="btn btn-warning btn-lg my-3 mx-2" onClick={morseCodetoText}>Morse To Text</button>
                <button type="button" className="btn btn-warning btn-lg my-3 mx-2" onClick={removeExtraSpaces}>Remove Space</button>   
                <button type="button" className="btn btn-warning btn-lg my-3 mx-2" onClick={copyFunction}>Copy</button>
                <button type="button" className="btn btn-warning btn-lg my-3 mx-2" onClick={pasteFunction}>Paste</button>
                <button type="button" className="btn btn-warning btn-lg my-3 mx-2" onClick={clear}>Clear</button>
            </div>
            <div className="container " >
               
                <h3>
                    Your Text Summary
                </h3>
            <div className="row text-center mt-4">
                <div className="col-md-4 mb-3">
                <div className="card shadow-sm rounded-3 p-3">
                    <h6 className="text-muted">Characters</h6>
                    <h4 className="fw-bold">{text.length}</h4>
                </div>
                </div>

                <div className="col-md-4 mb-3">
                <div className="card shadow-sm rounded-3 p-3">
                    <h6 className="text-muted">Without Spaces</h6>
                    <h4 className="fw-bold">
                    {text.replace(/\s+/g, "").length}
                    </h4>
                </div>
                </div>

                <div className="col-md-4 mb-3">
                <div className="card shadow-sm rounded-3 p-3">
                    <h6 className="text-muted">Words</h6>
                    <h4 className="fw-bold">
                    {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
                    </h4>
                </div>
                </div>
            </div>

            <div className="container my-3">
                <h3>
                    Summary
                </h3>
                <p>
                    {text}
                </p>
                <br />
            </div>

        </div>
        </div>
    )
}

