"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaInstagram, 
  FaPinterestP, 
  FaFacebookF, 
  FaTwitter 
} from "react-icons/fa";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  // This ensures the component only renders on the client to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer suppressHydrationWarning className="bg-[#F5F5DC] border-t border-[#EADDCA] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-xl font-serif tracking-[0.3em] text-[#4A4238] uppercase">
                Crystave
              </h2>
            </Link>
            <p className="text-[#6B5E4F] text-sm leading-relaxed font-light max-w-xs">
              Defining modern elegance through bespoke tailoring and timeless silhouettes. Crafted for the discerning individual.
            </p>
            <div className="flex space-x-5 text-[#4A4238]">
              <Link href="#" className="hover:text-[#D2B48C] transition-colors"><FaInstagram size={18} /></Link>
              <Link href="#" className="hover:text-[#D2B48C] transition-colors"><FaPinterestP size={18} /></Link>
              <Link href="#" className="hover:text-[#D2B48C] transition-colors"><FaFacebookF size={18} /></Link>
            </div>
          </div>

          {/* Navigation Column */}
          {/* Navigation Column */}
<div>
  <h4 className="text-[11px] tracking-[0.4em] text-[#918170] uppercase mb-8">Navigation</h4>
  <ul className="space-y-4">
    <li><Link href="/" className="footer-link">Home</Link></li>
    <li><Link href="/about" className="footer-link">About Us</Link></li>
    <li><Link href="/contact" className="footer-link">Contact</Link></li>
    <li><Link href="/faqs" className="footer-link">Sustainability</Link></li>
  </ul>
</div>

          {/* Collections Column */}
         <div>
  <h4 className="text-[11px] tracking-[0.4em] text-[#918170] uppercase mb-8">Collections</h4>
  <ul className="space-y-4">
    <li><Link href="/products/bespoke" className="footer-link">Bespoke</Link></li>
    <li><Link href="/products/bridal" className="footer-link">Bridal Couture</Link></li>
    <li><Link href="/products/kids" className="footer-link">Kids Wear</Link></li>
    <li><Link href="/products/ready-to-wear" className="footer-link">Ready to Wear</Link></li>
  </ul>
</div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-[11px] tracking-[0.4em] text-[#918170] uppercase mb-8">Journal</h4>
            <p className="text-sm text-[#6B5E4F] mb-6 font-light">
              Subscribe to receive updates on new collections and private sales.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-[#4A4238] py-2 text-sm outline-none placeholder:text-[#918170] text-[#4A4238]"
              />
              <button type="button" className="absolute right-0 bottom-2 text-[10px] tracking-widest uppercase text-[#4A4238] hover:text-[#D2B48C] transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-[#EADDCA] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] tracking-[0.2em] text-[#918170] uppercase">
          <p>© {currentYear} Crystave Clothing. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-[#4A4238]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#4A4238]">Terms of Service</Link>
            
          </div>
        </div>
      </div>

    </footer> // <-- Fixed this closing tag
  );
};

export default Footer;