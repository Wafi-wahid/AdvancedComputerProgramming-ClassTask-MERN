import React, { useState } from "react";
import Counter from "../Components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Counter App</h1>
      <h2>Count: {count}</h2>
      <Counter onCountChange={setCount} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
