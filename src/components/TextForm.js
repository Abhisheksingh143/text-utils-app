import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [initialText, typingText] = useState("");

  const convertUpperCase = () => {
    const result = initialText.toUpperCase();
    typingText(result);
    props.alert("Successfully Converted To Upper Case", "success");
  };

  const settingText = (event) => {
    typingText(event.target.value);
  };

  const convertLowerrCase = () => {
    const result = initialText.toLowerCase();
    typingText(result);
    console.log(props.alert);
    props.alert("Successfully Converted To Lower Case", "success");
  };

  const convertTitle = () => {
    const filterText = initialText.split(" ").filter((word) => word !== "");

    const capitalizedArray = filterText.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    typingText(capitalizedArray.toString().replace(/,/g, " "));
    props.alert("Successfully Converted To Title Case", "success");
  };

  const sentenceCase = () => {
    const text = initialText.replace(
      /(^\s*\w|[\.\!\?]\s*\w)/g,
      function (match) {
        return match.toUpperCase();
      }
    );
    typingText(text);
    props.alert("Successfully Converted To Sentence Case", "success");
  };

  const copyClip = () => {
    let text = document.getElementById("box");
    text.select();
    window.navigator.clipboard.writeText(text.value);
    props.alert("Copied Successfully", "success");
  };

  const clearText = () => {
    let text = document.getElementById("box");
    text.value = "";
  };

  const arr = initialText.split(" ");
  const wordCount = arr.filter((word) => word !== "").length;
  return (
    <div className="container pt-5">
      <h1>{props.heading}</h1>
      <div className="input-group mt-5">
        <textarea
          id="box"
          className="form-control"
          aria-label="With textarea"
          value={initialText}
          rows="8"
          style={{
            backgroundColor: props.mode === "light" ? "#e2e2e2" : "#fff",
          }}
          onChange={settingText}
        ></textarea>
      </div>
      <div className="d-flex justify-content-around pt-5 pb-5 bg-dark">
        <button className="btn btn-primary" onClick={convertUpperCase}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary" onClick={convertLowerrCase}>
          Convert To LowerrCase
        </button>
        <button className="btn btn-primary" onClick={convertTitle}>
          Title Case
        </button>
        <button className="btn btn-primary" onClick={sentenceCase}>
          Sentence Case
        </button>
        <button className="btn btn-primary" onClick={copyClip}>
          Copy To Clipboard
        </button>
        <button className="btn btn-primary" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <h2 className="mt-4">Your Text Summary</h2>
      <p>
        <b>{wordCount}</b> words and <b>{initialText.length}</b> character
      </p>
      <p>{0.008 * (initialText.split(" ").length - 1)} minutes to read</p>
      <h3>Preview</h3>
      <p>{initialText}</p>
    </div>
  );
}
