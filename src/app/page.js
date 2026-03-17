"use client"
import React from "react";
import Navbar from "./component/Navbar";
import Link from "next/link";

export default function Home() {
  // 8 luxury categories for a high-end feel
  const products = [
    { name: "Bespoke", image: "Testing.png", href: "/products/bespoke" },
    { name: "Bridal", image: "bridal.jpg", href: "/products/bridal" },
    { name: "Kids Wear", image: "child.jpg", href: "/products/kids" },
    { name: "Ready to Wear", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000", href: "/products/ready-to-wear" },
    { name: "Custom Made", image: "Readytowear2.png", href: "/products/ready-to-wear" },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000", href: "/products/ready-to-wear" },
    { name: "Footwear", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000", href: "/products/ready-to-wear" },
    { name: "Tailoring", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000", href: "/products/bespoke" },
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5DC]/50 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <span className="text-[11px] tracking-[0.6em] text-[#918170] uppercase mb-8 block animate-fade-in">
            Established 2026
          </span>
          <h2 className="text-6xl md:text-9xl font-serif text-[#4A4238] leading-tight mb-10">
            Effortless <br /> 
            <span className="italic font-light text-[#D2B48C]">Refinement</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#6B5E4F] mb-12 text-lg font-light tracking-wide leading-relaxed">
            Discover a curated collection of bespoke tailoring and bridal couture designed for the modern silhouette.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <Link href="/products" className="w-full sm:w-auto px-12 py-5 bg-[#4A4238] text-[#FAF9F6] text-xs tracking-[0.3em] uppercase hover:bg-[#D2B48C] transition-all duration-500 rounded-sm text-center">
              Explore Collection
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-12 py-5 border border-[#4A4238] text-[#4A4238] text-xs tracking-[0.3em] uppercase hover:bg-[#4A4238] hover:text-[#FAF9F6] transition-all duration-500 rounded-sm text-center">
              Book Fitting
            </Link>
          </div>
        </div>
      </section>

      {/* 8-Item Category Section */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="mb-16 text-center">
          <h3 className="text-3xl font-serif text-[#4A4238] tracking-[0.2em] uppercase">Our Collections</h3>
          <div className="h-[1px] w-20 bg-[#D2B48C] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((item) => (
            <Link href={item.href} key={item.name} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#EADDCA] rounded-sm relative overflow-hidden transition-transform duration-700">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-[#4A4238]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-[#FAF9F6]/95 px-6 py-3 text-[10px] tracking-[0.4em] text-[#4A4238] uppercase shadow-xl">
                    Explore
                  </span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h4 className="text-[14px] font-serif tracking-[0.2em] text-[#4A4238] uppercase group-hover:text-[#D2B48C] transition-colors">
                  {item.name}
                </h4>
                <div className="w-0 group-hover:w-12 h-[1px] bg-[#D2B48C] mx-auto mt-2 transition-all duration-500"></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-24 text-center border-t border-[#EADDCA] pt-12">
           <p className="text-xs tracking-[0.3em] text-[#918170] uppercase">
            New to the Atelier? 
            <Link href="/signup" className="text-[#4A4238] border-b border-[#4A4238] ml-3 pb-1 hover:text-[#D2B48C] hover:border-[#D2B48C] transition-all">
              Create Account
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}