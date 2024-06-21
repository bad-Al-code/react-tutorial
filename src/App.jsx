import "./index.css";
import { SignInTwo } from "./components/SignIn";

function App() {
  let myObj = {
    username: "Al",
    age: 19,
  };

  let myArray = [1, 3, 5];
  return (
    <>
      <h1 className="text-xl bg-cyan-300 p-4 text-center m-4 rounded-lg shadow-lg border border-cyan-800">
        Hello
      </h1>
      <SignInTwo name="badAl" btnText="Al" />
      <SignInTwo name="Al" />
    </>
  );
}

export default App;
