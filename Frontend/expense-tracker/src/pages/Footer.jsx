import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Kharcha Tracker. All rights reserved. 
    </footer>
  );
};

export default Footer;
