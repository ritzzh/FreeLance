import React, { useState } from "react";
import "../styles/Calculator.css";

function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");
  const [showResult, setShowResult] = useState(false);

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height / 100) ** 2).toFixed(1);
      setBMI(bmiValue);

      if (bmiValue < 18.5) setStatus("Underweight");
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setStatus("Normal weight");
      else if (bmiValue >= 25 && bmiValue < 29.9) setStatus("Overweight");
      else setStatus("Obese");

      setShowResult(true);
    }
  };

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight in kg"
        />
      </div>
      <div className="input-group">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height in cm"
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div className={`result ${showResult ? "show" : ""}`}>
          <h2>Your BMI is: {bmi}</h2>
          <p>Status: {status}</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
