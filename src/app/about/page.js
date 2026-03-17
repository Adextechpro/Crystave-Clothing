"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-24 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-[#4A4238] mb-6 tracking-tight">
            The Art of <br /> Conscious Elegance
          </h1>
          <div className="h-[1px] w-20 bg-[#D2B48C] mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-[#918170] font-light leading-relaxed">
            Founded in 2026, Crystave was born from a desire to return to the roots of 
            sartorial excellence where every stitch tells a story and every garment 
            is a masterpiece of individual expression.
          </p>
        </header>

        {/* Story Section - Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="bg-[#EADDCA] h-[500px] w-full relative overflow-hidden flex items-center justify-center">
             {/* Placeholder for a high-quality Atelier image */}
             <span className="text-[#4A4238]/30 font-serif italic text-2xl">The Atelier</span>
          </div>
          <div className="space-y-6 lg:pl-12">
            <h2 className="text-[10px] tracking-[0.4em] text-[#D2B48C] uppercase font-bold">Our Philosophy</h2>
            <h3 className="text-3xl font-serif text-[#4A4238]">Crafting Timelessness</h3>
            <p className="text-[#6B5E4F] font-light leading-relaxed">
              At Crystave, we reject the cycle of fast fashion. We believe that true luxury 
              lies in the time spent perfecting a silhouette. Our bespoke process ensures 
              that each piece is uniquely tailored to the wearer, combining traditional 
              Nigerian craftsmanship with modern global sensibilities.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#EADDCA] pt-20">
          <div>
            <h4 className="text-[11px] tracking-[0.2em] text-[#4A4238] uppercase mb-4">Quality</h4>
            <p className="text-sm text-[#918170] font-light">Only the finest ethically sourced fabrics enter our studio, from Italian silks to hand-woven textiles.</p>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.2em] text-[#4A4238] uppercase mb-4">Sustainability</h4>
            <p className="text-sm text-[#918170] font-light">We operate on a made-to-order basis to eliminate waste and ensure every garment has a purpose.</p>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.2em] text-[#4A4238] uppercase mb-4">Legacy</h4>
            <p className="text-sm text-[#918170] font-light">Our clothing is designed to be passed down through generations, maintaining its beauty and relevance.</p>
          </div>
        </div>

      </div>
    </div>
  );
}