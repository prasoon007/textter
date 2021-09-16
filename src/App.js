import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const updateAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removeClass = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }
  const toggleMode = (cls) => {
    removeClass();
    document.body.classList.add('bg-'+cls);
    if(!cls){
      removeClass();
      if (mode === "dark") {
        setMode("light");
        document.body.style.backgroundColor = "white";
        updateAlert("Switched to light mode", "success");
      } else {
        setMode("dark");
        document.body.style.backgroundColor = "grey";
        updateAlert("Switched to dark mode", "success");
      }
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Textter"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
            <TextForm mode={mode} updateAlert={updateAlert}/>
          </Route>
        </Switch>
        </div>
       </Router>
    </>
  );
}

export default App;
