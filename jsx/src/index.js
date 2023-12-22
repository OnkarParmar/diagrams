import React from 'react';
import ReactDOM from 'react-dom/client';

const home = ReactDOM.createRoot(document.getElementById('home'));

home.render(<App />);

function App() {
  let message = {text : "Bye there!"};
  if (Math.random() > 0.5) {
    message.text = "Hi There!";
  }
  
  //return React.createElement("h3", null, message);      // using js
  return <div>
      <h3> {message.text} </h3>                       
      <h3> {new Date().toLocaleTimeString()} </h3>     
    </div>   
}