import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

export default function App() {
  const [show, setShow] = useState(true);
 
  return (
    <div className="App">
      <div className="App-child">
        <button onClick={() => setShow(true)}>Login</button>
        <button onClick={() => setShow(false)}>Signup</button>
      </div>
      <br />
      <br />
      <div>{show ? <Login /> : <Signup />}</div>
    </div>
  );
}