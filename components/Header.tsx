"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full">
      {/* Main Header - Blue Background */}
      <div className="shadow-lg" style={{ backgroundColor: '#007BFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <img
                src="https://trottipieces.fr/wp-content/uploads/2023/11/TP-Logo-Carree.png"
                alt="TrottiPieces Logo"
                className="h-16 w-16 rounded-lg"
              />
            </Link>

            {/* Search Bar - Centered and larger */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ex : Controleur, Urban glide, 54,6V, ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-3 pr-14 rounded-full border-0 bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all text-gray-700 placeholder-gray-500"
                  style={{ outlineColor: '#007BFF' }}
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white rounded-full p-2.5 transition-colors" style={{ backgroundColor: '#2c3e50' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Actions - Icons with labels */}
            <div className="flex items-center space-x-6">
              <Link href="/request-parts" className="flex flex-col items-center text-white hover:text-emerald-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-semibold">Contact</span>
              </Link>

              <Link href="/account" className="flex flex-col items-center text-white hover:text-emerald-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <span className="text-xs font-semibold">Mon compte</span>
              </Link>

              <Link href="/cart" className="relative flex flex-col items-center text-white hover:text-emerald-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
                <span className="text-xs font-semibold">Mon panier</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Green Navigation Bar */}
      <nav className="hidden md:block shadow-md" style={{ backgroundColor: '#00B089' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 overflow-x-auto">
            <Link href="/products?category=pieces" className="px-4 py-3 text-white font-medium hover:opacity-80 transition-colors whitespace-nowrap">
              Pièces détachées
            </Link>
            <Link href="/products?category=outillage" className="px-4 py-3 text-white font-medium hover:opacity-80 transition-colors whitespace-nowrap">
              Outillage
            </Link>
            <Link href="/blog" className="px-4 py-3 text-white font-medium hover:opacity-80 transition-colors whitespace-nowrap">
              Blog & Astuces
            </Link>
            <Link href="/request-parts" className="px-4 py-3 text-white font-medium hover:opacity-80 transition-colors whitespace-nowrap ml-auto">
              📋 Demande de pièce
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
