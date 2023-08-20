import React from 'react';
import ReactDOM from 'react-dom';
import Mapping2 from './array&Mapping/Mapping2';
import FormChallenge from './formsReact/FormChallenge';
import './index.css';

// import BgChangeEvent from './events/BgChangeEvent';
// import FormsInReact from './formsReact/FormsInReact';
// import Demo from './array&Mapping/Demo';
// import ArrayData from './array&Mapping/ArrayData'
// import GreetingText from './GreetingText';
// import OnOff from './OnOff';
// import Counter from './Counter';
// import UseStateTime from '../src/useStatess/UseStateTime';

// function cData(val){
//   return(
//     <Demo 
//       name = {val.name} 
//       age = {val.age} 
//       degree = {val.degree}  
//       city ={val.city} 
//       quote = {val.quote} 
//     />
//   ) ;
// }

ReactDOM.render(
  // <GreetingText/> 
  // <Counter/>
  // <UseStateTime/>
  // <OnOff></OnOff>
  // <Demo
  //   name = {ArrayData[0].name} 
  //   age = {ArrayData[0].age} 
  //   degree = {ArrayData[0].degree}  
  //   city ={ArrayData[0].city} 
  //   quote = {ArrayData[0].quote} 
  // />

  // <Demo
  //   name = "Khyati sood"
  //   age = "23"
  //   degree = "B.Tech"
  //   city = "Pune"
  //   quote = "hat bkl"
  // />
  // {ArrayData.map(cData)};
  // <BgChangeEvent></BgChangeEvent>
  // <FormsInReact></FormsInReact>
  // <FormChallenge></FormChallenge>
  <>  
    <Mapping2></Mapping2>
  </> , 
  document.getElementById("root")
)
