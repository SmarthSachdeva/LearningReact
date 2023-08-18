import React  , {useState} from "react";
// import '../index.css'

const BgChangeEvent = ()=>{
    const [text , setText] = useState("Click Me!")
    // const [style , setStyle] = useState(default);
    function singleClick(){
        setText("Clicked!")
    }
    return(
        <>
            <div className="center">
                <button className="button" onClick={singleClick} >{text}</button>
            </div>
        </>
    )
}
export default BgChangeEvent;