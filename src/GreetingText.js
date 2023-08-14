//  THIS IS TILL VIDEO 13
// This code defines a React component named App.
// The component's purpose is to display a personalized greeting message 
// along with the current time based on the time of day. 
// The displayed message changes based on whether it's morning, afternoon, or evening.

import React from 'react';
import './index.css';

const App = () =>{
  let date = new Date();
  let currentTime = date.toLocaleTimeString();
  let hours = date.getHours();
  if(hours >= 0 && hours <= 12){
    var text = "Good Morning !";
  }else if(hours>12 && hours < 17){
    text = "Good Afternoon !"
  }else{
    text = "Good Evening !";
  }
  return(
    <div className='center'>
    <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> {currentTime}</h3>
      <h4 ><span class="animate-charcter">{text}</span> , Smarth Sachdeva</h4>
    </div>
  </div>
      
    </div>
  )
}
export default App;