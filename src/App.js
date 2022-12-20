import react from "react";
import { useState } from "react/cjs/react.production.min";
import "./styles.css";
import React from "react";
import Counter from "./Counter";

export default function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="App">
      <h1>I am parent component and my count is: {counter}</h1>
      <Counter currentCount={counter} setCounter={setCounter} />
    </div>
  );
}
