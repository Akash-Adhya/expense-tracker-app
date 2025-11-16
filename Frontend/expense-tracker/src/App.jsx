import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/SignUp";
import NotFound from "./pages/NotFound";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import AuthWrapper from "./pages/Auth/AuthWrapper";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthWrapper />} />
        <Route path="/signup" element={<AuthWrapper />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;



const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
