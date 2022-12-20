import react from "react";
import "./styles.css";
import React from "react";

export default function Counter({ currentCount, setCounter }) {
  console.log("currentCount", currentCount);
  const handleIncrement = () => {
    setCounter(currentCount + 1);
  };
  return (
    <div className="counter">
      <h1>I am children counter and my present value is: {currentCount}</h1>
      <button onClick={handleIncrement}>Increase Count</button>
    </div>
  );
}
