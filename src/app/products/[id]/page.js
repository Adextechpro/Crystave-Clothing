"use client";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function CategoryPage({ params }) {
  const id = React.use(params).id;

  // Function to generate 16 items per category easily for this example
  const generateItems = (categoryName, basePrice, imgBase) => {
    
    return Array.from({ length: 16 }, (_, i) => ({
      id: i + 1,
      name: `${categoryName} Piece №${100 + i}`,
      price: `$${basePrice + (i * 50)}`,
      img: `${imgBase}?sig=${i + (id === 'bespoke' ? 10 : 20)}` // Added sig to ensure unique images
    }));
  };

  const categoryData = {
    bespoke: {
      title: "Bespoke Atelier",
      description: "A legacy of craftsmanship. Each of these 16 signature pieces represents our commitment to the art of tailoring.",
      items: generateItems("Bespoke", 2000, "https://images.unsplash.com/photo-1594932224828-b4b057b7d6ee")
    },
    bridal: {
      title: "The Bridal Suite",
      description: "Sixteen hand-curated gowns designed for the most unforgettable moments of a lifetime.",
      items: generateItems("Bridal", 3500, "https://images.unsplash.com/photo-1594462285124-5f3c02852124")
    },
    "ready-to-wear": {
      title: "Ready to Wear",
      description: "The modern wardrobe. A collection of 16 versatile essentials for the contemporary lifestyle.",
      items: generateItems("RTW", 250, "https://images.unsplash.com/photo-1490481651871-ab68de25d43d")
    },
    kids: {
      title: "Crystave Petit",
      description: "Generational elegance. Explore our 16 charming silhouettes for children.",
      items: generateItems("Petit", 120, "https://images.unsplash.com/photo-1621454523226-eb4f525c8ffd")
    }
  };

  const page = categoryData[id] || categoryData["ready-to-wear"];

  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This creates the elegant sliding effect
  });
};

  

  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-32 pb-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* HEADER SECTION */}
        <header className="mb-20 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-serif text-[#4A4238] uppercase tracking-tighter mb-6">
            {page.title}
          </h1>
          <p className="text-[#918170] max-w-2xl text-[12px] tracking-[0.4em] uppercase leading-relaxed">
            {page.description}
          </p>
          <div className="w-16 h-[1px] bg-[#D2B48C] mt-10"></div>
        </header>

        {/* 16 ITEM GRID: 4 columns on large screens, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8">
          {page.items.map((product) => (
            <div key={product.id} className="group flex flex-col">
              {/* Product Image */}
              <div className="relative aspect-[3/4] bg-[#F1EFE9] overflow-hidden mb-6">
                <img 
                  src={`${product.img}&auto=format&fit=crop&w=800&q=80`} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-end">
                  <h3 className="text-[12px] tracking-[0.15em] uppercase text-[#4A4238] font-medium leading-tight max-w-[80%]">
                    {product.name}
                  </h3>
                  <HiOutlineArrowNarrowRight className="text-[#4A4238] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[11px] text-[#918170] tracking-widest italic font-serif">
                    {product.price}
                  </span>
                  <span className="h-[1px] w-4 bg-[#EADDCA]"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OPTIONAL: PAGINATION OR CONTACT FOOTER */}
        <footer className="mt-24 pt-16 border-t border-[#EADDCA] text-center">
          <p className="text-[10px] tracking-[0.5em] text-[#918170] uppercase mb-8">End of {page.title} Collection</p>
          <button 
  onClick={scrollToTop}
  className="text-[11px] tracking-[0.3em] uppercase text-[#4A4238] border-b border-[#4A4238] pb-1 hover:text-[#D2B48C] hover:border-[#D2B48C] transition-all cursor-pointer"
>
  Back to top
</button>
        </footer>

      </div>
    </main>
  );
}