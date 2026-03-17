"use client";
import React from "react";
import Link from "next/link";

export default function ProductMainPage() {
  const collections = [
    {
      id: "bespoke",
      name: "Bespoke",
      description: "Hand-crafted excellence tailored to your silhouette.",
      image: "https://images.unsplash.com/photo-1594932224828-b4b057b7d6ee?q=80&w=1000",
    },
    {
      id: "ready-to-wear",
      name: "Ready to Wear",
      description: "Artisanal quality for the modern lifestyle.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000",
    },
    {
      id: "bridal",
      name: "Bridal",
      description: "Ethereal gowns for your most memorable moments.",
      image: "https://images.unsplash.com/photo-1594462285124-5f3c02852124?q=80&w=1000",
    },
    {
      id: "kids",
      name: "Kids Wear",
      description: "Sophistication for the next generation.",
      image: "https://images.unsplash.com/photo-1621454523226-eb4f525c8ffd?q=80&w=1000",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif text-[#4A4238] uppercase tracking-tighter">
            Our Collections
          </h1>
          <p className="text-[#918170] text-[12px] tracking-[0.5em] uppercase">
            Crystave Atelier
          </p>
          <div className="w-16 h-[1px] bg-[#D2B48C] mx-auto mt-8"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {collections.map((col) => (
            <Link key={col.id} href={`/product/${col.id}`} className="group relative overflow-hidden block">
              <div className="aspect-[16/9] overflow-hidden bg-[#EADDCA]">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay Content */}
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-serif text-[#4A4238] uppercase tracking-wide">
                    {col.name}
                  </h3>
                  <p className="text-[11px] text-[#918170] uppercase tracking-widest mt-2">
                    {col.description}
                  </p>
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase border-b border-[#4A4238] pb-1 group-hover:text-[#D2B48C] group-hover:border-[#D2B48C] transition-all">
                  View Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}