"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden text-white py-24 md:py-32" style={{ background: 'linear-gradient(135deg, #007BFF 0%, #00B089 100%)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transition-all duration-1000 ${isLoaded ? 'animate-pulse' : ''}`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transition-all duration-1000 delay-1000 ${isLoaded ? 'animate-pulse' : ''}`}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bienvenue sur <span className="bg-gradient-to-r from-orange-300 to-yellow-200 bg-clip-text text-transparent">TrottiPieces</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100 font-light">
              Votre spécialiste en pièces détachées pour trottinettes électriques
            </p>
            <p className="text-lg text-blue-100 mb-8 max-w-lg">
              Trouvez toutes les pièces et accessoires dont vous avez besoin pour entretenir et réparer votre trottinette
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/products" variant="primary">
                🛴 Explorer les produits
              </Button>
              <Button href="/blog" variant="secondary">
                📚 Voir le blog
              </Button>
            </div>
          </div>

          {/* Right Content - Animated illustration */}
          <div className={`hidden md:flex justify-center items-center transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-full h-96">
              {/* Main scooter shape using CSS */}
              <svg
                viewBox="0 0 300 300"
                className="w-full h-full animate-bounce"
                style={{ animationDuration: '3s' }}
              >
                {/* Wheels */}
                <circle cx="80" cy="220" r="35" fill="none" stroke="white" strokeWidth="3" />
                <circle cx="80" cy="220" r="28" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
                
                <circle cx="220" cy="220" r="35" fill="none" stroke="white" strokeWidth="3" />
                <circle cx="220" cy="220" r="28" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />

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

              {/* Floating elements */}
              <div className="absolute top-10 right-10 animate-float">
                <span className="text-6xl">⚙️</span>
              </div>
              <div className="absolute bottom-20 left-5 animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-5xl">🔧</span>
              </div>
              <div className="absolute top-32 left-10 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-5xl">🛠️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 pt-20 border-t border-white/20">
          <div className="text-center">
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="font-bold text-lg mb-2">Pièces de qualité</h3>
            <p className="text-blue-100">Sélection des meilleures pièces du marché</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-bold text-lg mb-2">Livraison rapide</h3>
            <p className="text-blue-100">Expédition en 24-48h</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold text-lg mb-2">Support expert</h3>
            <p className="text-blue-100">Conseils et assistance personnalisés</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
