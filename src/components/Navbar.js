import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.about}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                About
              </a>
            </li>
          </ul>
          <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode}/>
            <label className="custom-control-label" htmlFor="customSwitch1">Switch Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProp = {
  title: "textter",
  about: "about",
};
