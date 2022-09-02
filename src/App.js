import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [all, setAll] = useState(null);

  const decide = (message, type) => {
    setAll({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAll(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#091320";
      document.body.style.color = "#fff";
      decide("Dark Mode Enabled Successfully", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      decide("Light Mode Enabled Successfully", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        brand="TextUtils"
        aboutText="About Me"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Routes>
          <Route path="/about" element={<About />} /> */}
      <Alert alert={all} />
      <TextForm />
      {/* <Route path="/" element={} /> */}
      {/* </Routes> */}

      {/* </Router> */}
    </>
  );
}

export default App;
