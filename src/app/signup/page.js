"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated registration delay
    setTimeout(() => {
      console.log("Account Created:", formData);
      setIsLoading(false);
      // Redirect to a welcome page or products
      router.push("/products");
    }, 2000);
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-[#FAF9F6]">
      {/* LEFT SIDE: Brand Visual */}
      <section className="hidden md:flex md:w-1/2 bg-[#4A4238] items-center justify-center p-12 relative overflow-hidden">
        <div className="z-10 text-center text-[#FAF9F6]">
          <h1 className="text-5xl lg:text-7xl font-serif tracking-[0.3em] uppercase mb-4">
            Crystave
          </h1>
          <div className="h-[1px] w-24 bg-[#D2B48C] mx-auto mb-6"></div>
          <p className="text-[10px] tracking-[0.5em] uppercase opacity-80">
            A New Era of Elegance
          </p>
        </div>
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
      </section>

      {/* RIGHT SIDE: Signup Form */}
      <section className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-[#FAF9F6]">
        <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-[#4A4238] mb-2">Create Account</h2>
            <p className="text-sm text-[#918170] font-light italic">Join our community of refined individuals.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                name="firstName"
                placeholder="FIRST NAME" 
                required 
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#EADDCA] py-3 text-sm outline-none focus:border-[#4A4238] transition-colors text-[#4A4238]" 
              />
              <input 
                type="text" 
                name="lastName"
                placeholder="LAST NAME" 
                required 
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#EADDCA] py-3 text-sm outline-none focus:border-[#4A4238] transition-colors text-[#4A4238]" 
              />
            </div>

            <input 
              type="email" 
              name="email"
              placeholder="EMAIL ADDRESS" 
              required 
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#EADDCA] py-3 text-sm outline-none focus:border-[#4A4238] transition-colors text-[#4A4238]" 
            />
            
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                placeholder="CREATE PASSWORD" 
                required 
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#EADDCA] py-3 text-sm outline-none focus:border-[#4A4238] transition-colors text-[#4A4238]" 
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 bottom-3 text-[#918170]">
                {showPassword ? <HiOutlineEyeOff size={18} /> : <HiOutlineEye size={18} />}
              </button>
            </div>

            <div className="flex items-start space-x-3 text-[10px] tracking-widest uppercase text-[#918170] pt-4">
              <input 
                type="checkbox" 
                name="agreeTerms"
                required 
                onChange={handleChange}
                className="mt-1 accent-[#4A4238]" 
              />
              <label className="cursor-pointer leading-relaxed">
                I agree to the <span className="text-[#4A4238] border-b border-[#4A4238]">Terms of Service</span> and <span className="text-[#4A4238] border-b border-[#4A4238]">Privacy Policy</span>
              </label>
            </div>

            <button disabled={isLoading} className="w-full bg-[#4A4238] text-white py-4 text-xs tracking-[0.3em] uppercase hover:bg-[#D2B48C] transition-all flex justify-center items-center mt-8">
              {isLoading ? <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Register Account"}
            </button>
          </form>

          <p className="mt-12 text-center text-xs tracking-widest text-[#918170] uppercase">
            Already have an account? <Link href="/login" className="text-[#4A4238] border-b border-[#4A4238] ml-2 pb-1">Sign In</Link>
          </p>
        </div>
      </section>
    </main>
  );
}