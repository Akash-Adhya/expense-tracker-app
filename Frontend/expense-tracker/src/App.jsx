import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Login from "./pages/Login";
import { SignUp } from "@clerk/clerk-react";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
