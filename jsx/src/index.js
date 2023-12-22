import React from 'react';
import ReactDOM from 'react-dom/client';

const home = ReactDOM.createRoot(document.getElementById('home'));

home.render(<App />);

function App() {
  const list = [1,2,3,4];
  const message = "Enter a number";
  const type = "number"
  const style = {color : 'red'}
  return (
    <input 
      type = {type}
      list = {list}
      style = {style}
      alt = {message}
    />
  );
}