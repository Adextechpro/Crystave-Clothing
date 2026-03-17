"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineEye, HiOutlineEyeOff, HiX } from "react-icons/hi";

export default function SignupPage() {
  const router = useRouter();

  // Form & UI States
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  // Modal State for Legal
  const [modalContent, setModalContent] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!agreedToTerms) return;
    setIsLoading(true);
    
    // Simulate the "Atelier" processing delay
    setTimeout(() => {
      setIsLoading(false);
      setShowWelcome(true); // Show the elegant welcome message
    }, 2000);
  };

  const legalText = {
    terms: {
      title: "Terms of Service",
      body: "By joining the Crystave Atelier, you agree to our bespoke service terms. All custom orders require a 50% deposit. Measurements taken in-studio are held for 12 months."
    },
    privacy: {
      title: "Privacy Policy",
      body: "Your sartorial data is sacred. Crystave collects your measurements and preferences solely to provide a personalized experience. We never sell your data."
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-[#FAF9F6] relative">
      
      {/* LEFT SESSION: Brand Visuals */}
      <section className="hidden md:flex md:w-1/2 bg-[#EADDCA] items-center justify-center p-12">
        <div className="text-center animate-in fade-in duration-1000">
          <h1 className="text-5xl font-serif tracking-[0.3em] text-[#4A4238] uppercase mb-4">Crystave</h1>
          <p className="text-[10px] tracking-[0.5em] text-[#4A4238] uppercase font-light">The Art of Refinement</p>
        </div>
      </section>

      {/* RIGHT SESSION: Signup Form */}
      <section className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-[#FAF9F6]">
        <div className="w-full max-w-md animate-in fade-in slide-in-from-right-6 duration-700">
          <header className="mb-12">
            <h2 className="text-3xl font-serif text-[#4A4238] mb-2">Create Account</h2>
            <p className="text-sm text-[#918170] font-light">Join our community and experience the art of refinement.</p>
          </header>

          <form onSubmit={handleSignup} className="space-y-8">
            <input type="text" placeholder="FULL NAME" required className="w-full bg-transparent border-b border-[#EADDCA] py-3 text-sm outline-none focus:border-[#4A4238] transition-colors text-[#4A4238] placeholder:text-[#918170]/60" />
            <input type="email" placeholder="EMAIL ADDRESS" required className="w-full bg-transparent border-b border-[#EADDCA] py-3 text-sm outline-none focus:border-[#4A4238] transition-colors text-[#4A4238] placeholder:text-[#918170]/60" />

            <div className="relative">
              <input type={showPassword ? "text" : "password"} placeholder="CREATE PASSWORD" required className="w-full bg-transparent border-b border-[#EADDCA] py-3 text-sm outline-none focus:border-[#4A4238] transition-colors text-[#4A4238] placeholder:text-[#918170]/60" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 bottom-3 text-[#918170] hover:text-[#4A4238]">
                {showPassword ? <HiOutlineEyeOff size={18} /> : <HiOutlineEye size={18} />}
              </button>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <input type="checkbox" id="terms" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} className="mt-1 w-4 h-4 accent-[#4A4238] cursor-pointer" />
                <label htmlFor="terms" className="text-[10px] text-[#918170] font-light tracking-widest uppercase cursor-pointer leading-relaxed">
                  I agree to the 
                  <button type="button" onClick={() => setModalContent('terms')} className="text-[#4A4238] underline ml-1">Terms</button> 
                  & <button type="button" onClick={() => setModalContent('privacy')} className="text-[#4A4238] underline ml-1">Privacy</button>
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <input type="checkbox" id="newsletter" checked={subscribeNewsletter} onChange={(e) => setSubscribeNewsletter(e.target.checked)} className="mt-1 w-4 h-4 accent-[#4A4238] cursor-pointer" />
                <label htmlFor="newsletter" className="text-[10px] text-[#918170] font-light tracking-widest uppercase cursor-pointer leading-relaxed">
                  Subscribe for exclusive seasonal releases.
                </label>
              </div>
            </div>
            
            <button disabled={isLoading || !agreedToTerms} className={`w-full py-4 text-[10px] tracking-[0.4em] uppercase transition-all duration-500 flex justify-center items-center ${!agreedToTerms ? "bg-[#EADDCA] text-[#918170]" : "bg-[#4A4238] text-white hover:bg-[#D2B48C]"}`}>
              {isLoading ? <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Register Account"}
            </button>
          </form>

          <p className="mt-12 text-center text-[10px] tracking-[0.2em] text-[#918170] uppercase">
            Already a member? <Link href="/login" className="text-[#4A4238] ml-2 border-b border-[#4A4238] pb-1 hover:text-[#D2B48C] transition-all">Login</Link>
          </p>
        </div>
      </section>

      {/* --- LEGAL MODAL --- */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#4A4238]/20 backdrop-blur-sm">
          <div className="bg-[#FAF9F6] w-full max-w-lg p-10 border border-[#EADDCA] shadow-2xl relative animate-in zoom-in duration-300">
            <button onClick={() => setModalContent(null)} className="absolute top-6 right-6 text-[#918170]"><HiX size={20} /></button>
            <h3 className="text-2xl font-serif text-[#4A4238] mb-6 italic">{legalText[modalContent].title}</h3>
            <div className="text-sm text-[#6B5E4F] font-light leading-relaxed mb-8">{legalText[modalContent].body}</div>
            <button onClick={() => setModalContent(null)} className="w-full bg-[#4A4238] text-white py-4 text-[10px] tracking-[0.3em] uppercase">Close</button>
          </div>
        </div>
      )}

      {/* --- WELCOME OVERLAY --- */}
      {showWelcome && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-[#FAF9F6] animate-in fade-in duration-700">
          <div className="max-w-md text-center space-y-8 animate-in slide-in-from-bottom-8 duration-1000">
            <div className="space-y-4">
              <h3 className="text-[10px] tracking-[0.6em] text-[#D2B48C] uppercase">Welcome to the Atelier</h3>
              <h2 className="text-4xl md:text-5xl font-serif text-[#4A4238]">Welcome, <br/> Discerning Individual</h2>
            </div>
            
            <p className="text-sm text-[#918170] font-light leading-relaxed max-w-xs mx-auto">
              Your account has been successfully curated. You now have access to our bespoke collections and private tailoring services.
            </p>

            <div className="pt-8">
              <button 
                onClick={() => router.push("/")}
                className="bg-[#4A4238] text-white px-12 py-4 text-[10px] tracking-[0.4em] uppercase hover:bg-[#D2B48C] transition-all"
              >
                Start Exploring
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}