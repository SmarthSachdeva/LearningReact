import React , {useState} from "react";

function FormChallenge(){
    var [firstName , setFN] = useState("");
    function inputFN(event){
        setFN(event.target.value);
    }
    var [lastName , setLN] = useState("");
    function inputLN(event){
        setLN(event.target.value);
    }
    var [email , setEM] = useState("");
    function inputEM(event){
        setEM(event.target.value);
    }
    var [phone , setPhone] = useState("");
    function inputPN(event){
        setPhone(event.target.value);
    }

    const [FN ,SETFN] = useState("");
    const [LN ,SETLN] = useState("");

    const submitDeets =()=>{
        SETFN(firstName);
        SETLN(lastName)
    }
    
    return(
        <div className="center">
            <h1>Hey! {FN} {LN} </h1>
            <h3>{email}</h3>
            <h3>{phone}</h3>

            <input placeholder="Enter First Name" defaultValue="" onChange={inputFN}/>
            <input placeholder="Enter Last Name" defaultValue="" onChange={inputLN}/>
            <input placeholder="Enter Email ID" defaultValue="" onChange={inputEM}/>
            <input placeholder="Enter Phone Number" defaultValue="" onChange={inputPN}/>

            <button onClick={submitDeets}>Submit</button>
        </div>
    )
}
export default FormChallenge;