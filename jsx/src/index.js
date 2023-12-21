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
  return <h3> {message.text} </h3>                        // using jsx
}