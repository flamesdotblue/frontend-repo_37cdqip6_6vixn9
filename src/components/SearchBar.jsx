import React from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

const InputWrapper = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm">
    <Icon className="h-4 w-4 text-gray-500" />
    {children}
  </div>
);

const SearchBar = () => {
  return (
    <div id="search" className="-mt-10 w-full px-6">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white/80 p-4 shadow-xl backdrop-blur">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <InputWrapper icon={MapPin}>
            <input
              type="text"
              placeholder="City, area or landmark"
              className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
            />
          </InputWrapper>
          <InputWrapper icon={Calendar}>
            <input
              type="date"
              className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
            />
          </InputWrapper>
          <InputWrapper icon={Calendar}>
            <input
              type="time"
              className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
            />
          </InputWrapper>
          <InputWrapper icon={Users}>
            <input
              type="number"
              min="1"
              placeholder="Guests"
              className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
            />
          </InputWrapper>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-black">
            <Search className="h-4 w-4" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
