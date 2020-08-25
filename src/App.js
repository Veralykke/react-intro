import React from 'react';
import './App.css';
import Heading from "./components/Heading";

function App() {
  return (
    <div className="container">
   <Heading />
   <h2>Sub heading</h2>
    <p>Lorem</p>
    <div className="textbox">
    <h3 className="title">Title</h3>
    <p className= "lorem-two">Lorem</p>
    </div>
    <footer className="footer">
    <span className="footer-text one">Left footer</span>
    <span className="footer-text two">Right footer</span>
  </footer>
    </div>
  );
}

export default App;


