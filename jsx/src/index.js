import React from 'react';
import ReactDOM from 'react-dom/client';

const home = ReactDOM.createRoot(document.getElementById('home'));

home.render(<App />);

function App() {
  let message = "Bye there!";
  if (Math.random() > 0.5) {
    message = "Hi There!";
  }
  
  //return React.createElement("h3", null, message);      // using js
  return <h3> {message} </h3>                             // using jsx
}