import React, { useState, useEffect } from "react";
import Footer from "./Footer";

export default function NotFoundPage() {
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Generate random floating elements
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Floating decorative elements */}
      {floatingElements.map((el) => (
        <div
          key={el.id}
          className="absolute opacity-20"
          style={{
            left: `${el.left}%`,
            animation: `float ${el.duration}s ease-in-out ${el.delay}s infinite`,
            top: `${20 + el.id * 10}%`,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="15" stroke="#667eea" strokeWidth="2" />
            <circle cx="20" cy="20" r="8" fill="#764ba2" />
          </svg>
        </div>
      ))}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        {/* 404 Illustration */}
        <div className="relative mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            {/* Animated 404 */}
            <div className="relative">
              <h1 className="text-[150px] md:text-[200px] font-black text-gray-900 leading-none select-none animate-fadeIn">
                404
              </h1>

              {/* Decorative elements around 404 */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-8 animate-bounce-slow">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <rect x="10" y="35" width="8" height="12" fill="#e5e7eb" />
                  <polygon points="14,35 10,25 18,25" fill="#d1d5db" />
                </svg>
              </div>

              <div className="absolute top-1/4 right-0 transform translate-x-12 animate-bounce-delayed">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <rect x="15" y="30" width="10" height="20" fill="#e5e7eb" />
                  <rect x="10" y="20" width="20" height="10" fill="#d1d5db" />
                  <rect x="20" y="15" width="10" height="5" fill="#c4c8cc" />
                </svg>
              </div>

              {/* Rolling objects */}
              <div className="absolute bottom-0 left-1/4 animate-roll">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <circle
                    cx="15"
                    cy="15"
                    r="12"
                    fill="#f3f4f6"
                    stroke="#d1d5db"
                    strokeWidth="2"
                  />
                  <path d="M15 8 L18 12 L15 16 L12 12 Z" fill="#9ca3af" />
                </svg>
              </div>

              <div className="absolute bottom-0 right-1/4 animate-roll-reverse">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <polygon
                    points="12.5,2 23,20 2,20"
                    fill="#e5e7eb"
                    stroke="#d1d5db"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Monster/Character peeking from behind 0 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-peek">
            <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
              <ellipse
                cx="40"
                cy="45"
                rx="35"
                ry="8"
                fill="#9ca3af"
                opacity="0.3"
              />
              <path
                d="M25 30 Q25 10 40 10 Q55 10 55 30 L55 45 Q55 55 40 55 Q25 55 25 45 Z"
                fill="#6b7280"
              />
              <circle cx="32" cy="28" r="5" fill="white" />
              <circle cx="48" cy="28" r="5" fill="white" />
              <circle
                cx="33"
                cy="28"
                r="3"
                fill="#1f2937"
                className="animate-blink"
              />
              <circle
                cx="49"
                cy="28"
                r="3"
                fill="#1f2937"
                className="animate-blink"
              />
              <path
                d="M35 38 Q40 42 45 38"
                stroke="#4b5563"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Page not found
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            We're sorry, the page you're looking for doesn't exist. It might
            have been moved or deleted.
          </p>
          <p className="text-base text-gray-500">
            Don't worry though, there's plenty to explore on our homepage!
          </p>
        </div>

        {/* CTA Button */}
        <div
          className="mt-12 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-xl"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Go to Home
          </a>
        </div>

        {/* Additional decorative dots */}
        <div className="flex justify-center gap-3 mt-16 opacity-50">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
