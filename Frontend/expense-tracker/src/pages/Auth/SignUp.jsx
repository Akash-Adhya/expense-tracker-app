import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Signup({ onSwitchToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignupSubmit = () => {
    console.log('Signup:', { fullName, email, password, confirmPassword });
    // Add your signup logic here
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-105">
      <div className="flex items-center mb-6">
        <button
          onClick={onSwitchToLogin}
          className="mr-3 p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
      </div>

      <div className="space-y-4">
        {/* Full Name input */}
        <div className="transform transition-all duration-300 hover:translate-x-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors duration-300"
            placeholder="John Doe"
          />
        </div>

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

        {/* Confirm Password input */}
        <div className="transform transition-all duration-300 hover:translate-x-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors duration-300 pr-12"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black transition-colors duration-300"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Terms checkbox */}
        <div className="flex items-start">
          <input type="checkbox" className="mt-1 mr-2 w-4 h-4" />
          <label className="text-sm text-gray-600">
            I agree to the{' '}
            <button className="text-black font-medium hover:underline">
              Terms of Service
            </button>{' '}
            and{' '}
            <button className="text-black font-medium hover:underline">
              Privacy Policy
            </button>
          </label>
        </div>

        {/* Signup button */}
        <button
          onClick={handleSignupSubmit}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-lg"
        >
          Create Account
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Social signup divider */}
      <div className="mt-6 mb-6 flex items-center">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-sm text-gray-500">or sign up with</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      {/* Social signup buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button className="py-3 px-4 border-2 border-gray-200 rounded-lg hover:border-black transition-all duration-300 transform hover:scale-105 font-medium">
          Google
        </button>
        <button className="py-3 px-4 border-2 border-gray-200 rounded-lg hover:border-black transition-all duration-300 transform hover:scale-105 font-medium">
          GitHub
        </button>
      </div>

      {/* Switch to login */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-black font-semibold hover:underline transition-all duration-300"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}