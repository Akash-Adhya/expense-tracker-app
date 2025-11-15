import React, { useEffect } from "react";
import { SignIn, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/dashboard", { replace: true });
    }
  }, [isSignedIn, isLoaded, navigate]);

  if (isLoaded && isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-3">Sign in to ExpenseTrack</h3>
        <SignIn
          routing="path"
          path="/login"
          signUpUrl="/signup"
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  );
}
