import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast (doesn't block interactions) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/50 via-black/20 to-white/0" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center text-white">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur">Luxury • Contemporary • Urban</span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Rent premium studios for every creative need
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            From daylight lofts to soundproof production suites — discover, compare, and book stunning spaces in minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#search"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow/30 shadow-black/10 transition hover:shadow-lg"
            >
              Start searching
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#featured"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/0 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              Explore featured
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
