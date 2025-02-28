import React, { useState } from "react";

const Counter = ({ onCountChange }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount); // Send updated count to App.js
  };

  return null; // No UI here, only logic
};

export default Counter;
