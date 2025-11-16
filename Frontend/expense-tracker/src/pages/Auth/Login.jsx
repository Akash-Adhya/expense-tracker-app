import React, { useEffect } from "react";
import { SignIn, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-3">Sign in to Kharcha Tracker</h3>
        This is login page
      </div>
    </div>
  );
}
