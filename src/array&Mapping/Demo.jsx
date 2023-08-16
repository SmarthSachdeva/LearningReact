import React from "react";

const cardStyle = {
    width: "30%" , 
    display: "flex" ,
    flexDirection: "column" ,
    border: "1px red solid" ,
    margin : "30px"

}
const headerStyle = {
    height: "30%" ,
    background: "red" ,
    color: "white" , 
    textAlign: "center"
}

const containerStyle = {   
    padding: "2px 16px"

}
const Demo = (props) =>{
    return(
        <div className = "card" style={cardStyle}>
        <div className = "header" style={headerStyle}>
            <p>{props.name}</p>
        </div>
            <div className = "container" style={containerStyle}>
            <p>Age : {props.age}</p>
            <p>Degree : {props.degree}</p>
            <p>City : {props.city}</p>
            <p>Random Quote : {props.quote}</p>
        </div>
    </div>
    );
}

export default Demo;