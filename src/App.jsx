import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);
  const username = "chai aur react";
  // let counter = 5;

  const addValue = () => {
    counter += 1;
    setCounter(counter);
    console.log(counter);
    console.log("clicked", Math.random());
  };

  const removeValue = () => {
    if (counter <= 0) {
      alert("counter cannot not be less than 0");
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
