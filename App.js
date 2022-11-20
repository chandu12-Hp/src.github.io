import "./App.css";
import Navbar from "./react.js/chap.5/Navbar";
import TextForm from "./react.js/chap.6/TextForm";
import About from "./react.js/chap.7/About";
import Alert from "./chap.13/Alert";
// import { Link } from "react-router-dom";

// import {
//   BrowserRouter,
//   Routes,
//   Route,
  
  
// } from "react-router-dom";


import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showAlert(null);
    }, 4000);
  };
  const enable = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("dark mode enable", "success");
      document.title = "akasham-kala hai";
      setInterval(() => {
        document.title = "akasham-kala pd rha hai";
      }, 2000);
      setInterval(() => {
        document.title = "akasham ko safed kare hai";
      }, 3000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enable", "success");
      document.title = "akasham-nila hai";
    }
  };
  return (
    <>
     
    
    
    <Navbar title="popkon" mode={mode} enableMode={enable} />
    <Alert alert={alert}/>      
    <About/>
    <TextForm heading="Enter the text to analyse: " mode={mode}/>
    

  </>
  );
}

export default App;
