import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Login({ onSwitchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = () => {
    console.log('Login:', { email, password });
    // Add your login logic here
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back</h2>

      <div className="space-y-5">
        {/* Email input */}
        <div className="transform transition-all duration-300 hover:translate-x-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors duration-300"
            placeholder="you@example.com"
          />
        </div>

        {/* Password input */}
        <div className="transform transition-all duration-300 hover:translate-x-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors duration-300 pr-12"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black transition-colors duration-300"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Remember me & Forgot password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-gray-600 cursor-pointer hover:text-black transition-colors duration-300">
            <input type="checkbox" className="mr-2 w-4 h-4" />
            Remember me
          </label>
          <button className="text-gray-600 hover:text-black transition-colors duration-300 font-medium">
            Forgot password?
          </button>
        </div>

        {/* Login button */}
        <button
          onClick={handleLoginSubmit}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-lg"
        >
          Sign In
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Social login divider */}
      <div className="mt-6 mb-6 flex items-center">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-sm text-gray-500">or continue with</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      {/* Social login buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button className="py-3 px-4 border-2 border-gray-200 rounded-lg hover:border-black transition-all duration-300 transform hover:scale-105 font-medium">
          Google
        </button>
        <button className="py-3 px-4 border-2 border-gray-200 rounded-lg hover:border-black transition-all duration-300 transform hover:scale-105 font-medium">
          GitHub
        </button>
      </div>

      {/* Switch to signup */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={onSwitchToSignup}
            className="text-black font-semibold hover:underline transition-all duration-300"
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
}