import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  let onClickUpHandle = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.updateAlert('Converted to upper case', 'success');
  };

  let onCLickLowHandle = () => {
    let newText = text.toLowerCase();
    setText(newText);
    newText && props.updateAlert('Converted to lower case', 'success');

  };

  let onChangeHandle = (event) => {
    setText(event.target.value);
  };

  let onClickClear = () => {
    setText("");
    props.updateAlert('Text cleared', 'success');
  };

  let onClickReverse = () => {
    let revStr = text.split(" ").reverse().join(" ");
    setText(revStr);
    revStr && props.updateAlert('Text reversed', 'success');
  };

  let onClickCamel = () => {
    let camelCase = text
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
    setText(camelCase);
    camelCase && props.updateAlert('Converted to camel case', 'success');
  };

  return (
    <>
      <div style={{color: props.mode === 'dark'?'white':'black'}}>
        <div>
          <h2>{props.heading}</h2>
          <div className="mb-3">
            <textarea
              value={text}
              placeholder="Enter Your text here"
              className="form-control"
              onChange={onChangeHandle}
              style={{ background: props.mode === "dark" ? "grey" : "white",
                       color: props.mode === "dark" ? "white" : "black"}}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button onClick={onClickUpHandle} className="btn btn-primary mx-1">
            Convert to upper case
          </button>
          <button onClick={onCLickLowHandle} className="btn-primary btn mx-1">
            Convert to lower case
          </button>
          <button onClick={onClickClear} className="btn-primary btn mx-1">
            Clear
          </button>
          <button onClick={onClickReverse} className="btn btn-primary btn mx-1">
            Reverse
          </button>
          <button onClick={onClickCamel} className="btn btn-primary btn mx-1">
            camelCase
          </button>
        </div>
        <div className="container">
          <h3>Text Analysis</h3>
          <p>{text.split(" ").length * 0.008} Minutes Read</p>
          <p>Above text contain {text.split(" ").length} Words</p>
          <p>Above text contain {text.length} letters</p>
          <h3>Text Preview</h3>
          <p>{text.length>0?text:'Enter Something to preview'}</p>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
