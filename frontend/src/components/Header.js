// src/components/Header.js
import React from 'react';
import { Bell, Search, Sun, Moon } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-lg border-b border-saffron-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-saffron rounded-xl">
            <span className="text-white font-bold text-xl">Z</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-saffron-500 to-pheran-500 bg-clip-text text-transparent">
              Zendo
            </h1>
            <p className="text-xs text-shikara-600">
              Your saffron-scented productivity
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-saffron-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Ask Zabar or search tasks..."
              className="w-full pl-12 pr-4 py-3 bg-saffron-50 border border-saffron-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron-300 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 hover:bg-saffron-50 rounded-xl transition-colors">
            <Bell className="w-6 h-6 text-saffron-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-pheran-500 rounded-full"></span>
          </button>
          
          <button className="p-2 hover:bg-saffron-50 rounded-xl transition-colors">
            <Sun className="w-6 h-6 text-saffron-600" />
          </button>
          
          {/* User Avatar */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-mountain rounded-full flex items-center justify-center text-white font-bold">
              U
            </div>
            <div>
              <p className="font-semibold text-shikara-900">Welcome!</p>
              <p className="text-xs text-shikara-600">Ready to organize</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
