import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleLowClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase!","success")
    }
    const handleClear = ()=>{
        setText("");
        props.showAlert("Text Cleared!","success")
    }
    const handleRemove = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra space removed!","success")
    }
    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard!","success")
    }

    const handleOnChange = (e)=>{
        setText(e.target.value)
    }
    
  return (
    <>
    <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'#151a21', color: props.mode === 'light'?'black':'white'}}></textarea>
        </div>
        
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClear} >Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleRemove} >Remove Extra Spaces</button>
        
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes reading</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
    </div>
    </>
  )
}
