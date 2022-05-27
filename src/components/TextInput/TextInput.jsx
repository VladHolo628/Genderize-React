 import "./TextInput.css"
 
 function TextInput(props) {
        
    return (
            <input type="text" className="text-input" onChange={props.handler}/>
  
    )
}

export default TextInput