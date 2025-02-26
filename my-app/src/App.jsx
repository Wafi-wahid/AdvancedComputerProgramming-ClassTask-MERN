import React from "react";
import Main from "../Components/Main";
function App() {
  function handleClick() {
    var data = 0;
    data + 1;
    console.log("data: " + data);
  }
  return (
    <div>
      <>
        <Main></Main>
        <h1>Count Me{handleClick}</h1>
        <button onClick={handleClick}>Click Me!</button>
      </>
    </div>
  );
}

export default App;
