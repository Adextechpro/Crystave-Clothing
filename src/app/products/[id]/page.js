"use client";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function CategoryPage({ params }) {
  const id = React.use(params).id;

  const categoryData = {
    bespoke: {
      title: "Bespoke Atelier",
      description: "The height of sartorial elegance, crafted specifically for your silhouette.",
      items: [
        { id: 1, name: "The Midnight Tuxedo", price: "$2,800", img: "/bespoke01.jpg" },
        { id: 2, name: "Double-Breasted Wool Coat", price: "$1,500", img: "/bespoke02.jpg" },
        { id: 3, name: "Silk-Lined Dinner Jacket", price: "$1,900", img: "/bespoke03.jpg" },
        { id: 4, name: "Italian Linen Suit", price: "$2,100", img: "/bespoke04.jpg" },
        { id: 5, name: "Charcoal Morning Coat", price: "$2,400", img: "/bespoke05.jpg" },
        { id: 6, name: "Navy Herringbone Suit", price: "$2,250", img: "/bespoke06.jpg" },
        { id: 7, name: "Velvet Smoking Jacket", price: "$1,750", img: "/bespoke07.jpg" },
        { id: 8, name: "Classic Peak Lapel Suit", price: "$2,300", img: "/bespoke08.jpg" },
      ]
    },
    bridal: {
      title: "The Bridal Suite",
      description: "Ethereal silhouettes and hand-stitched lace for your most memorable moment.",
      items: [
        { id: 1, name: "Lace Cathedral Gown", price: "$4,500", img: "/bridal.jpg" },
        { id: 2, name: "Silk Mermaid Silhouette", price: "$3,800", img: "/productbridal01.jpg" },
        { id: 3, name: "Embroidered Veil Gown", price: "$5,200", img: "/bridal.jpg" },
        { id: 4, name: "Off-Shoulder Satin Dress", price: "$3,200", img: "/productbridal01.jpg" },
        { id: 5, name: "Minimalist Column Gown", price: "$2,900", img: "/bridal.jpg" },
        { id: 6, name: "Boho Lace Wedding Dress", price: "$3,500", img: "/productbridal01.jpg" },
        { id: 7, name: "Royal Tulle Ballgown", price: "$6,000", img: "/bridal.jpg" },
        { id: 8, name: "Vintage Ivory Gown", price: "$4,100", img: "/productbridal01.jpg" },
      ]
    },
    "ready-to-wear": {
      title: "Ready to Wear",
      description: "Artisanal quality garments, prepared for the pace of the modern world.",
      items: [
        { id: 1, name: "Cashmere Turtleneck", price: "$450", img: "/bespoke04.jpg" },
        { id: 2, name: "Structured Blazer", price: "$890", img: "/productbridal01.jpg" },
        { id: 3, name: "Pleated Trousers", price: "$350", img: "/bespoke04.jpg" },
        { id: 4, name: "Merino Wool Cardigan", price: "$290", img: "/productbridal01.jpg" },
        { id: 5, name: "Poplin White Shirt", price: "$180", img: "/bespoke04.jpg" },
        { id: 6, name: "Camel Overcoat", price: "$1,100", img: "/productbridal01.jpg" },
        { id: 7, name: "Suede Chelsea Boots", price: "$420", img: "/bespoke04.jpg" },
        { id: 8, name: "Silk Pocket Square", price: "$85", img: "/productbridal01.jpg" },
      ]
    },
    kids: {
      title: "Crystave Petit",
      description: "Exceptional tailoring and sophistication for the next generation.",
      items: [
        { id: 1, name: "Mini Velvet Blazer", price: "$250", img: "/child.jpg" },
        { id: 2, name: "Heirloom Silk Dress", price: "$310", img: "/child01.jpg" },
        { id: 3, name: "Linen Christening Set", price: "$180", img: "/child02.jpg" },
        { id: 4, name: "Toddler Bowtie Suit", price: "$220", img: "/child03.jpg" },
        { id: 5, name: "Junior Wool Peacoat", price: "$275", img: "/child04.jpg" },
        { id: 6, name: "Floral Lace Flower-Girl", price: "$290", img: "/child05.jpg" },
        { id: 7, name: "Cotton Page-Boy Set", price: "$195", img: "/child06.jpg" },
        { id: 8, name: "Silk Satin Headband", price: "$45", img: "/child.jpg" },
      ]
    }
  };

  const page = categoryData[id] || categoryData["ready-to-wear"];

  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* CATEGORY HEADER */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#4A4238] uppercase tracking-tighter">
            {page.title}
          </h1>
          <p className="text-[#918170] mt-4 max-w-xl text-[11px] tracking-[0.3em] uppercase leading-relaxed">
            {page.description}
          </p>
          <div className="w-20 h-[1px] bg-[#D2B48C] mt-8"></div>
        </div>

        {/* 4-COLUMN PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
          {page.items.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-[#EADDCA] overflow-hidden mb-5">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  // Fallback if local image doesn't exist yet
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x800?text=Crystave+Collection"; }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
              </div>

              <div className="space-y-1 px-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-[11px] tracking-widest uppercase text-[#4A4238] font-medium">
                    {product.name}
                  </h3>
                  <HiOutlineArrowNarrowRight className="text-[#4A4238] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <p className="text-[10px] text-[#918170] tracking-wider italic font-serif">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}