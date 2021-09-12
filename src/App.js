// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

import TextForm from './components/TextForm';
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const updateAlert =(message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      updateAlert('Switched to light mode', 'success');
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      updateAlert('Switched to dark mode', 'success');

    }   
  }
  return (
    <>
      <Navbar title="Textter" about="about us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading = "enter text to analyze" mode={mode} updateAlert={updateAlert}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
