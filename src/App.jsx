import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);
  const username = "chai aur react";
  // let counter = 5;

  const addValue = () => {
    if (counter >= 10) {
      alert("Counter cannot be greater than 10");
      return;
    }
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter <= 0) {
      alert("counter cannot not be less than 0");
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Hello {username}</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
