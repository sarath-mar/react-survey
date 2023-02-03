import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
function Welcome() {
  let navigate = useNavigate();
  return (
    <div className="welcome-main">
      <div className="welcome">
        <h1 style={{ color: "white" }}> Livantro Survey Questions</h1>
        <button
          onClick={() => {
            navigate("survey");
          }}
        >
          <h4>Get Start</h4>
        </button>
      </div>
    </div>
  );
}

export default Welcome;
