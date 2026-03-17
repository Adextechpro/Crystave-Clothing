"use client"
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import LoginPage from "./login/page";
import SignupPage from "./signup/page";
import Link from "next/link";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import FAQPage from "./faqs/page";
import ProfilePage from "./profile/page";
import ProductDetails from "./products/[id]/page";
import ProductMainPage from "./products/page";


export default function Home() {
  const products = [
    { name: "Bespoke", imageColor: "bg-[#EADDCA]", href: "/products/bespoke" },
    { name: "Bridal", imageColor: "bg-[#D2B48C]", href: "/products/bridal" },
    { name: "Kids Wear", imageColor: "bg-[#C4A484]", href: "/products/kids" },
    { name: "Ready to Wear", imageColor: "bg-[#E5D3B3]", href: "/products/ready-to-wear" },
  ];
  return (
   
   <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 z-0">
          {/* Using a subtle gradient instead of a flat color */}
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
            <button className="w-full sm:w-auto px-12 py-5 bg-[#4A4238] text-[#FAF9F6] text-xs tracking-[0.3em] uppercase hover:bg-[#D2B48C] transition-all duration-500 rounded-sm">
              Explore Collection
            </button>
            <button className="w-full sm:w-auto px-12 py-5 border border-[#4A4238] text-[#4A4238] text-xs tracking-[0.3em] uppercase hover:bg-[#4A4238] hover:text-[#FAF9F6] transition-all duration-500 rounded-sm">
              Book Fitting
            </button>
          </div>
        </div>
      </section>

     
      {/* 4-Column Category Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-serif text-[#4A4238] tracking-widest uppercase">Our Collections</h3>
          <div className="h-[1px] w-20 bg-[#D2B48C] mx-auto mt-4"></div>
        </div>

        {/* The Grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.name} className="group cursor-pointer">
              {/* Card Image Container */}
              <div className={`aspect-[3/4] ${item.imageColor} rounded-sm relative overflow-hidden transition-transform duration-500 group-hover:shadow-xl`}>
                {/* Subtle overlay that lightens on hover */}
                <div className="absolute inset-0 bg-[#4A4238]/5 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Visual "Explore" text that appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-[#FAF9F6]/90 px-4 py-2 text-[10px] tracking-[0.3em] text-[#4A4238] uppercase">
                    View Collection
                  </span>
                </div>
              </div>

              {/* Card Label */}
              <div className="mt-4 text-center">
                <h4 className="text-[13px] font-medium tracking-[0.2em] text-[#4A4238] uppercase group-hover:text-[#D2B48C] transition-colors">
                  {item.name}
                </h4>
              </div>
              
              <p className="mt-12 text-center text-xs tracking-widest text-[#918170] uppercase">
              New to Crystave? 
              <Link href="/signup" className="text-[#4A4238] border-b border-[#4A4238] ml-2 pb-1">
               Create Account
              </Link>
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}