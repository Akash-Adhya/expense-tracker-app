import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Kharcha Tracker</h1>
      <Link to="/login" className="text-lg font-medium hover:underline">
        Login
      </Link>
    </header>
  );
};

export default Header;

