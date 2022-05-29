import "./OutputBox.css"
import { validationData } from "../../consts";


const OutputBox = (props) => {
    const isValidLength = props.isValidLength;
    const isValidInput = props.isValidInput;
    const errorMessage = isValidLength? validationData.invalidInputMessage:validationData.invalidLengthMessage;
    if(isValidInput && isValidLength) {
        return (
            <div className="output-box">
                <p className="output-box__text">{props.text}</p>
            </div>
        )
    } else {
        return (
            <div className="output-box">
                <p className="output-box__text">{errorMessage}</p>
            </div>
        )
    }


}

export default OutputBox