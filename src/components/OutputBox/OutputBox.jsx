import "./OutputBox.css"

const OutputBox = (props) => {
    const isValid = props.isValid;
    if(isValid) {
        return (
            <div className="output-box">
                <p className="output-box__text">{props.text}</p>
            </div>
        )
    } else {
        return (
            <div className="output-box">
                <p className="output-box__text">Invalid input</p>
            </div>
        )
    }


}

export default OutputBox