import { useState } from "react";
import "../src/index.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="count">Number: {count}</h1>
      <div className="button-grid">
        <button className="button" onClick={() => setCount(count + 2)}>
          Increment with 2
        </button>
        <button className="button" onClick={() => setCount(count - 1)}>
          Decrement with 1
        </button>
        <button className="button" onClick={() => setCount(count + 5)}>
          Increment with 5
        </button>
        <button className="button" onClick={() => setCount(count - 2)}>
          Decrement with 2
        </button>
        <button className="button" onClick={() => setCount(count * 5)}>
          Multiply with 5
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
