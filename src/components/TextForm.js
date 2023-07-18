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
    const handleAltCase = ()=>{
        const convertText = convertToAltCase(text);
        setText(convertText);
        props.showAlert('Converted to Alternative Case!','success')
    }
    const convertToAltCase = (text)=>{
        let convertText = "";
        for(let i=0; i<text.length; i++){
            if(i%2===0){
                convertText += text[i].toLowerCase();
            } else {
                convertText += text[i].toUpperCase();
            }
        }
        return convertText;
    }
    const handleSpeak = ()=>{
        const speech = new window.webkitSpeechRecognition();
        speech.lang = 'en-US';
        speech.start();
        speech.onresult = (e)=>{
            const transcript = e.results[0][0].transcript;
            setText(transcript)
        }
        speech.onerror = (e)=>{
            console.error('Speech recognition error:', e.error)
        }
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
        
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleAltCase} >Alternative Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear} >Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemove} >Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleSpeak} >Talk to type</button>
        
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes reading</p>
        <h2>Preview</h2>
        <p className='preview'>{text.length>0?text:'Nothing to Preview'}</p>
    </div>
    </>
  )
}
