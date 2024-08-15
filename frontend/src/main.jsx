import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ComingSoonPage from "./components/HomePage/ComingSoonPage.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import Friends from "./components/HomePage/Friends.jsx";
import Earning from "./components/HomePage/Earning.jsx";
import Avatar from "./components/HomePage/Avatar.jsx";
import Signup from "./components/HomePage/Signup.jsx";
import LoginForm from "./components/HomePage/Login.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/home-page" element={<HomePage />}></Route>
      <Route path="/comming-soon-page" element={<ComingSoonPage />}></Route>
      <Route path="/friends" element={<Friends />}></Route>
      <Route path="/earning" element={<Earning />}></Route>
      <Route path="/avatar" element={<Avatar />}></Route>
      <Route path="/sign-up" element={<Signup />}></Route>
      <Route path="/" element={<LoginForm />}></Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
