import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
