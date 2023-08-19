import React , {useState} from "react";

const FormsInReact =()=>{
    var [name , setName] = useState("");
    var [text , setText] = useState("");

    function inputEvent(event){
        // console.log(event.target.value);
        setText(event.target.value)
    }
    
    function sendName(){
        setName(text);
    }
    return(
        <div className="center">
            <h1>Good Morning! {name}</h1>
            <input placeholder="Enter First Name" defaultValue="" onChange={inputEvent}></input>
            <br></br>
            <input placeholder="Enter Last Name"></input>
            <br></br>
            <button className="button2" onClick={sendName}>Submit</button>
        </div>
    );
}

export default FormsInReact;