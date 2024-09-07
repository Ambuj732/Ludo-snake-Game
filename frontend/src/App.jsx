import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
