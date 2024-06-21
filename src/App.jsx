import { useState } from "react";
import "./index.css";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);

  const incValue = () => {
    if (counter >= 10) {
      alert("counter value should be less than or equal to 10");
      return;
    }
    // setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
  };
  const decValue = () => {
    if (counter <= 0) {
      alert("counter value should be greater than or equal to 0");
      return;
    }
    // setCounter(counter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <>
      <h1 className="text-xl bg-cyan-300 p-4 text-center m-4 rounded-lg shadow-lg border border-cyan-800">
        Hello
      </h1>

      <div>Counter: {counter}</div>
      <Button name={"Add"} onClick={incValue} />
      <Button name={"Remove"} onClick={decValue} />
    </>
  );
}

export default App;
