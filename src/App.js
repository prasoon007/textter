import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

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

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      updateAlert("Switched to light mode", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      updateAlert("Switched to dark mode", "success");

      // setInterval(() => {
      //   document.body.style.background = 'blue';
      // }, 1500);

      // setInterval(() => {
      //   document.body.style.background = 'red';
      // }, 2000);
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Textter"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
            <TextForm mode={mode} updateAlert={updateAlert}/>
          {/* </Route>
        </Switch> */}
        </div>
       {/* </Router> */}
    </>
  );
}

export default App;
