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
import ComingSoonPage from "./components/HomePage/ComingSoonPage1.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import Friends from "./components/HomePage/Friends.jsx";
import Earning from "./components/HomePage/Earning.jsx";
import Avatar from "./components/HomePage/Avatar.jsx";
import Signup from "./components/HomePage/Signup.jsx";
import LoginForm from "./components/HomePage/Login.jsx";
import LandingPage2 from "./components/HomePage/LandingPage2.jsx";
import ComingSoonPage2 from "./components/HomePage/ComingSoonPage2.jsx";
import ComingSoonPage3 from "./components/HomePage/ComingSoonPage3.jsx";
import ProfilePage from "./components/HomePage/ProfilePage.jsx";
import UserProfilePage from "./components/HomePage/UserProfilePage.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/home-page" element={<HomePage />}>
        <Route path="wallet" element={<ComingSoonPage />}></Route>
        <Route path="super-market" element={<ComingSoonPage2 />}></Route>
        <Route path="play-zone" element={<ComingSoonPage3 />}></Route>
        <Route path="friends" element={<Friends />}></Route>
        <Route path="earning" element={<Earning />}></Route>
      </Route>
      <Route path="/avatar" element={<Avatar />}></Route>
      <Route path="/edit-profile-page" element={<ProfilePage />}></Route>
      <Route path="/user-profile-page" element={<UserProfilePage />}></Route>
      <Route path="/sign-up" element={<Signup />}></Route>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/" element={<LandingPage2 />}></Route>
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
