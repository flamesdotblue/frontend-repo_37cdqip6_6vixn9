import React from 'react';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import FeaturedStudios from './components/FeaturedStudios';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top bar */}
      <header className="fixed inset-x-0 top-0 z-20 border-b border-white/20 bg-white/60 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <a href="#" className="text-base font-semibold tracking-tight">StudioLux</a>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
            <a href="#featured" className="hover:text-gray-900">Featured</a>
            <a href="#search" className="hover:text-gray-900">Search</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-800 transition hover:bg-gray-50 sm:inline-block">Sign in</button>
            <button className="rounded-full bg-gray-900 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-black">List your studio</button>
          </div>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <SearchBar />
        <FeaturedStudios />
        <div id="how">
          <HowItWorks />
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-600 sm:flex-row">
          <p>© {new Date().getFullYear()} StudioLux. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
