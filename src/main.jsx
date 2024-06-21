import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

function MyApp() {
  return (
    <>
      <h1>MyApp</h1>
    </>
  );
}

const anotherUser = "chai aur react";
const ReactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "click me to visit google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <App />
  // <MyApp />
  ReactElement
);
