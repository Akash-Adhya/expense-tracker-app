import React, { useState } from 'react';
import { IndianRupee, TrendingUp } from 'lucide-react';

import Login from './Login';
import Signup from './SignUp';


export default function AuthWrapper() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-bounce" style={{ animationDuration: '3s' }}>
          <IndianRupee className="w-16 h-16 text-white" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <TrendingUp className="w-20 h-20 text-white" />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
          <IndianRupee className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-20 right-40 animate-bounce" style={{ animationDuration: '4.5s' }}>
          <TrendingUp className="w-14 h-14 text-white" />
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo and header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-2xl animate-pulse">
            <IndianRupee className="w-12 h-12 text-black" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Kharcha Tracker</h1>
          <p className="text-gray-400">Take control of your finances</p>
        </div>

        {/* Render Login or Signup component */}
        {isLogin ? (
          <Login onSwitchToSignup={() => setIsLogin(false)} />
        ) : (
          <Signup onSwitchToLogin={() => setIsLogin(true)} />
        )}

        {/* Footer text */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          Secure • Private • Easy to use
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}