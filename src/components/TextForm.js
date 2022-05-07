//shortcut to get this structure rfc
import React, {useState} from 'react'
// const [text, setText] = useState('Enter your text');
// console.log(useState('Enter enter'))

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Upper Case")
    }

  

  const handleloClick = () => {
    console.log("LowerCase was clicked" + text);
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert("Converted to Lower Case")

    }


  const handleClear = () => {
        console.log("Clear Text" + text);
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared")

     }

const revText = () => {
  let strarray = text.split("")
  strarray = strarray.reverse()
  let newText = strarray.join("")
  setText(newText)
  props.showAlert("Text Is Reversed")

}
  
const wideText = () => {
  let strarray = text.split("")
  let newText = strarray.join(" ")
  setText(newText)
  props.showAlert("Wide Text Enabled")

}

const whiteSpace = () => {
  let newText = text.replace(' ','')
  setText(newText)
  props.showAlert("Extra Space Removed")

}


  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
    props.showAlert("Text Copied to Clipboard")

}

  const [text, setText] = useState('');

  //text = "new text" //wrong way
 // setText("new text");//correct way to change text
  return (
  <>
  <div className='conatiner my-6' style={{color: props.mode==='light'?'black':'white'}}>
    <h1>{props.heading} </h1>
     <div className="mb-3">
    <textarea value={text} className="form-control" style={{backgroundColor: props.mode==='light'?'white':'#323e50',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="mybox" rows="3"></textarea>
    </div>
    <button className={"btn btn-primary mx-2"}  onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
    <button className="btn btn-primary mx-2"  onClick={revText}>Rev Text</button>
    <button className="btn btn-primary mx-2"  onClick={wideText}>Wide Text</button>
    <button className="btn btn-primary mx-2"  onClick={whiteSpace}>Remove white spaces</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>

  </div>

  <div className='container my-2'  style={{color: props.mode==='light'?'black':'white'}}>
    <h1>Your Text Summary</h1>
    <p> {text.length>0 ? text.trim().split(" ").length:0} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").length} Minutes Read</p>
    <h3> Preview</h3>
    <p>{text.length>0?text:'Please Enter your text to Preview here'}</p>
  </div>
  </>
  )
}

//handleOnChange = event