import React from "react";
import ArrayData from './ArrayData';
import Demo from './Demo'

function dispData(val){
    return(
        <Demo
            name = {val.name}
            age = {val.age}
            degree = {val.degree}
            city = {val.city}
            quote = {val.quote}
        />
    )
}
const Mapping2 =()=>{
    return(
        <div>
            {ArrayData.map(dispData)};
        </div>
    )
}
export default Mapping2;