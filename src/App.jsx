import { useState } from "react";
import "./index.css";

import Button from "./components/Button";
function App() {
  const [currentBg, setCurrentBg] = useState("black");
  const bgButtonArray = [
    "#FF5733",
    "#82E0AA",
    "#3498DB",
    "#9B59B6",
    "#F39C12",
    "#1ABC9C",
    "#E74C3C",
    "#2ECC71",
    "#F1C40F",
  ];

  const changeBackground = (color) => {
    setCurrentBg(color);
  };

  return (
    <>
      <div
        className="w-screen h-screen flex justify-center items-end"
        style={{ backgroundColor: currentBg }}
      >
        <div className="mb-10 text-white">
          {bgButtonArray.map((bg, index) => (
            <Button key={index} color={bg} onClick={changeBackground} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
