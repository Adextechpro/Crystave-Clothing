"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  MdOutlineAccountCircle, 
  MdMenu, 
  MdClose, 
  MdExpandMore 
} from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const productSubmenu = [
    // These strings (bespoke, bridal, etc.) will be passed as the [id]
    { name: "Bespoke", href: "/products/bespoke" },
    { name: "Bridal", href: "/products/bridal" },
    { name: "Kids Wear", href: "/products/kids" },
    { name: "Ready to Wear", href: "/products/ready-to-wear" },
  ];

  if (!mounted) return null;

  return (
    <nav className="fixed w-full z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#EADDCA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-24 items-center">
          
          {/* 1. LEFT: Brand Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex flex-col items-center justify-center">
              <h1 className="text-2xl md:text-3xl font-serif tracking-[0.2em] text-[#4A4238] uppercase leading-none text-center">
                Crystave
              </h1>
              <p className="text-[9px] tracking-[0.55em] text-[#918170] uppercase mt-1.5 text-center group-hover:text-[#D2B48C] transition-colors w-full">
                Clothing
              </p>
            </Link>
          </div>

          {/* 2. MIDDLE: Navigation Links */}
          <div className="hidden lg:flex items-center space-x-10 h-full">
            <Link href="/" className="nav-link">Home</Link>
            
            {/* Products Dropdown - Now Clickable */}
<div 
  className="relative h-full flex items-center" 
  onMouseEnter={() => setIsDropdownOpen(true)}
  onMouseLeave={() => setIsDropdownOpen(false)}
>
  {/* Change <button> to <Link> to make the main title clickable */}
  <Link 
    href="/products" 
    className="flex items-center nav-link outline-none h-full py-0 cursor-pointer"
  >
    Products 
    <MdExpandMore 
      className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
      size={16} 
    />
  </Link>
  
  {/* Dropdown Menu */}
  {isDropdownOpen && (
    <div className="absolute top-full left-0 w-52 bg-[#FAF9F6] border border-[#EADDCA] shadow-xl py-4 animate-in fade-in zoom-in-95 duration-200 z-[100]">
      {productSubmenu.map((item) => (
        <Link 
          key={item.name} 
          href={item.href} 
          className="block px-6 py-3 text-[11px] tracking-[0.2em] text-[#4A4238] hover:bg-[#F5F5DC] transition-colors uppercase font-light"
          onClick={() => setIsDropdownOpen(false)} // Close dropdown after clicking
        >
          {item.name}
        </Link>
      ))}
    </div>
  )}
</div>

            
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/faqs" className="nav-link">FAQs</Link>
          </div>

          {/* 3. RIGHT: Icons & Profile */}
          <div className="flex items-center space-x-5">
            <Link href="/profile" className="hidden md:flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase text-[#4A4238] hover:text-[#D2B48C] transition-all">
              <HiOutlineUser size={18} />
              <span>Profile</span>
            </Link>

            <div className="hidden md:block h-4 w-[1px] bg-[#EADDCA]"></div>

            <Link href="/login" className="text-[#4A4238] hover:text-[#D2B48C] transition-colors">
              <MdOutlineAccountCircle size={26} />
            </Link>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#4A4238]">
              {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-[#FAF9F6] h-screen fixed inset-0 z-[60] p-10 flex flex-col animate-in slide-in-from-right duration-500">
           <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-[#4A4238]">
             <MdClose size={32}/>
           </button>
           <nav className="flex flex-col space-y-8 pt-16">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-3xl font-serif text-[#4A4238]">Home</Link>
              <div className="space-y-4">
                <p className="text-[10px] tracking-[0.4em] text-[#918170] uppercase">Collections</p>
                {productSubmenu.map(item => (
                  <Link key={item.name} href={item.href} className="block text-xl font-light pl-4 text-[#4A4238]" onClick={() => setIsOpen(false)}>{item.name}</Link>
                ))}
              </div>
              <Link href="/profile" onClick={() => setIsOpen(false)} className="text-3xl font-serif text-[#4A4238]">My Profile</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-3xl font-serif text-[#4A4238]">Contact</Link>
              <Link href="/faqs" onClick={() => setIsOpen(false)} className="text-3xl font-serif text-[#4A4238]">FAQs</Link>
           </nav>
        </div>
      )}

      <style jsx global>{`
        .nav-link {
          font-size: 13px; 
          letter-spacing: 0.15em; 
          text-transform: uppercase;
          color: #4A4238;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }
        
        .nav-link:hover {
          color: #D2B48C;
          transform: translateY(-1px);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;