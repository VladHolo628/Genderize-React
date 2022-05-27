import "./OutputBox.css"

const OutputBox = (props) => {

    return (
        <div className="output-box">
            <p className="output-box__text">{props.text}</p>
        </div>
    )
}

export default OutputBox