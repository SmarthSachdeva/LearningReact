// This code defines a React component named OnOff. 
// The component's purpose is to create a simple toggle switch-like interface 
// with buttons that change the background color and text when toggled between "ON" and "OFF" states.

import React , {useState} from "react";
import './index.css';

const OnOff = () =>{
    const defaultStyle = {
        background : "white"
    }

    const day = {
        background : "yellow"
    }
    const night = {
        background : "black"
    }

    const [text , setText] = useState(" ");
    const [style , setStyle] = useState(defaultStyle);
    const setOn =()=>{
        setText("ON");
        setStyle(day)
    }
    const setOff = () =>{
        setText("OFF");
        setStyle(night);
    }
    return(
        <div className="center">
            <h1>{text}</h1>
            <button onClick={setOn} style={style}>ON</button>
            <button onClick={setOff} style={style}>OFF</button>
        </div>
    )
}

export default OnOff;