// src/Game.js

import React, { useState } from "react";
import steps from "./steps";
import "./App.css";

function Game() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleAnswer = (index) => {
    if (index === steps[currentStep].answer) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        setCurrentStep((prev) => prev + 1);
      }, 2500);
    } else {
      alert("Try again, kotik 💛");
    }
  };

  const step = steps[currentStep];

  // Final ekranı
  if (!step.question) {
    return (
      <div className="card">
        <h2>🎉 Congratulations! 🎉</h2>
        <p>{step.message}</p>
        <a
          href={step.finalVideo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Watch the Surprise 🎥
        </a>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Step {currentStep + 1}</h2>
      <p>{step.question}</p>

      {Array.isArray(step.image) ? (
        <div className="img-group">
          {step.image.map((img, i) => (
            <img key={i} src={img} alt={`step-${i}`} />
          ))}
        </div>
      ) : (
        <img src={step.image} alt="step" />
      )}

      <div className="options">
        {step.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(index)}>
            {option}
          </button>
        ))}
      </div>

      {showMessage && <p className="message">{step.message}</p>}
    </div>
  );
}

export default Game;

