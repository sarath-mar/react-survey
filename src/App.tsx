import React from "react";
import "./App.css";
import Welcome from "./Components/Welcome/Welcome";
import { Route, Routes } from "react-router-dom";
import Survey from "./Components/Survey/Survey";
import NoMatch from "./Components/NoMatch/NoMatch";

function App() {
  return (
    // <div className="App">
    //   <Welcome />
    // </div>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
