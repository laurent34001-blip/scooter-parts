"use client";

import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-600 z-50">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        {/* Animated scooter */}
        <div className="relative w-64 h-48">
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full"
          >
            {/* Wheels with rotation animation */}
            <g className="animate-spin" style={{ transformOrigin: '80px 220px', animation: 'spin 2s linear infinite' }}>
              <circle cx="80" cy="220" r="35" fill="none" stroke="white" strokeWidth="3" />
              <circle cx="80" cy="220" r="28" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
              <line x1="80" y1="190" x2="80" y2="250" stroke="white" strokeWidth="1" opacity="0.3" />
              <line x1="50" y1="220" x2="110" y2="220" stroke="white" strokeWidth="1" opacity="0.3" />
            </g>

            <g className="animate-spin" style={{ transformOrigin: '220px 220px', animation: 'spin 2s linear infinite' }}>
              <circle cx="220" cy="220" r="35" fill="none" stroke="white" strokeWidth="3" />
              <circle cx="220" cy="220" r="28" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
              <line x1="220" y1="190" x2="220" y2="250" stroke="white" strokeWidth="1" opacity="0.3" />
              <line x1="190" y1="220" x2="250" y2="220" stroke="white" strokeWidth="1" opacity="0.3" />
            </g>

            {/* Platform */}
            <rect x="70" y="190" width="160" height="20" rx="5" fill="white" opacity="0.9" />
            
            {/* Steering column */}
            <rect x="145" y="80" width="10" height="115" rx="5" fill="white" opacity="0.8" />
            
            {/* Handlebar */}
            <rect x="100" y="70" width="100" height="8" rx="4" fill="white" opacity="0.8" />
            <circle cx="110" cy="74" r="6" fill="white" opacity="0.7" />
            <circle cx="190" cy="74" r="6" fill="white" opacity="0.7" />

            {/* Battery indicator */}
            <rect x="110" y="140" width="80" height="30" rx="5" fill="none" stroke="white" strokeWidth="2" opacity="0.7" />
            <rect x="115" y="145" width="70" height="20" rx="3" fill="white" opacity="0.5" />
          </svg>

          {/* Floating tools */}
          <div className="absolute top-5 -right-12 animate-float" style={{ animationDuration: '2s' }}>
            <span className="text-4xl">🔧</span>
          </div>
          <div className="absolute bottom-5 -left-12 animate-float" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
            <span className="text-4xl">⚙️</span>
          </div>
          <div className="absolute top-24 -right-16 animate-float" style={{ animationDuration: '3s', animationDelay: '1s' }}>
            <span className="text-3xl">🛠️</span>
          </div>
        </div>

        {/* Loading text with animation */}
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-3xl font-bold text-white">Chargement...</h2>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-pulse" style={{ animation: 'loadingBar 2s ease-in-out infinite' }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes loadingBar {
          0% {
            width: 0%;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
