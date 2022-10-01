import React, {useState} from 'react';

export default function TextArea(props) {
    
    const [ text, setText ] = useState('');
    
    const handleOnChange = (event) => {
        // console.log(" Changes are happening!")
        setText(event.target.value)
    }

    const handleUpperCase = () => {
        // console.log("To upper case button clicked!")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert(": Converted to Uppercase Successfully!","success");
    }

    const handleLowerCase = () => {
        // console.log("To Lower case button clicked!")
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert(": Converted to Lowercase Successfully!","success");
    }
    const handleClearText = () => {
        // console.log("Clear Text Area button clicked!")
        let newText = "";
        setText(newText)
        props.showAlert(": Text Area Cleared Successfully!","success");
    }

    const handleCopyText = () => {
        // console.log("Copy to Clipboard button clicked!")
        let text = document.getElementById("myTextArea");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(": Copied to Clipboard Successfully!","success");
    }

    const handleExtraSpaces = () => {
        // console.log("Remove Extra space button clicked!")
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("","");
        props.showAlert(": Extra spaces removed Successfully!","success");
    }
    

    return (
        <>
            <div className='container' style={{ color: props.mode === 'light'? '#042743':'white' }} >
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light'? 'white':'grey', color: props.mode === 'light'? '#042743':'white' }} value = {text} onChange={handleOnChange} id="myTextArea" rows="8"></textarea>
                </div>
                <button className = "btn btn-primary mx-1 my-1" onClick = {handleUpperCase}> Convert to Uppercase</button>     
                <button className = "btn btn-primary mx-1 my-1" onClick = {handleLowerCase}> Convert to Lowercase</button>
                <button className = "btn btn-primary mx-1 my-1" onClick = {handleClearText}> Clear Text Area</button>
                <button className = "btn btn-primary mx-1 my-1" onClick = {handleCopyText}> Copy Text to Clipboard</button>
                <button className = "btn btn-primary mx-1 my-1" onClick = {handleExtraSpaces}> Remove Extra spaces</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'light'? '#042743':'white' }} >
                <h1> Text Summary: </h1>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{(0.008 * (text.split(" ").length))} Minutes required to read.</p>

                <h2>Preview:</h2>
                <p>{ text.length > 0 ? text : 'Enter something in the above Text Area to preview it...'}</p>
            </div>
        </>
        
    )
}
