"use client";

import { useState, useEffect } from "react";
import { promos } from "@/data/promos";

export default function PromoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + promos.length) % promos.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % promos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentPromo = promos[currentSlide];

  return (
    <section className="px-4 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <div className={`bg-gradient-to-r ${currentPromo.bgColor} text-white p-8 sm:p-12 min-h-64 flex items-center justify-between`}>
            {/* Left Side - Icon & Text */}
            <div className="flex-1 z-10">
              <div className="text-6xl sm:text-7xl mb-4">{currentPromo.icon}</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">{currentPromo.title}</h2>
              <p className="text-white/90 text-lg mb-4">{currentPromo.description}</p>
              {currentPromo.code && (
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                  <p className="text-sm text-white/80">Kode Promo:</p>
                  <p className="text-xl font-bold">{currentPromo.code}</p>
                </div>
              )}
            </div>

            {/* Right Side - Discount Badge */}
            <div className="hidden sm:flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-bold text-yellow-300 drop-shadow-lg">{currentPromo.discount}</div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button onClick={goToPrevious} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white dark:bg-zinc-900/80 dark:hover:bg-zinc-900 rounded-full p-2 transition-colors">
            <svg className="w-6 h-6 text-zinc-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button onClick={goToNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white dark:bg-zinc-900/80 dark:hover:bg-zinc-900 rounded-full p-2 transition-colors">
            <svg className="w-6 h-6 text-zinc-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {promos.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? "bg-accent-600 w-8" : "bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
