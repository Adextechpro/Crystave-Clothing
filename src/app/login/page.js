"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Added for redirection
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export default function LoginPage() {
  const router = useRouter();
  
  // States to manage views
  const [view, setView] = useState("login");
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // --- ADDED: Input States ---
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- ADDED: Functional Login Handler ---
  const handleLoginSubmission = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    // Simulate "Atelier" verification delay
    setTimeout(() => {
      // Logic: Check against mock credentials
      if (formData.email === "admin@crystave.com" && formData.password === "luxury123") {
        router.push("/products"); // Redirect on success
      } else {
        setIsLoading(false);
        setErrorMessage("Invalid credentials. Please verify your details.");
      }
    }, 2000);
  };

  // Handler for Forgot Password
  const handleForgotSubmission = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-[#FAF9F6]">
      {/* LEFT SIDE: Brand Visual */}
      <section className="hidden md:flex md:w-1/2 bg-[#EADDCA] items-center justify-center p-12 relative overflow-hidden">
        <div className="z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-serif tracking-[0.3em] text-[#4A4238] uppercase mb-4">
            Crystave
          </h1>
          <div className="h-[1px] w-24 bg-[#4A4238] mx-auto mb-6"></div>
          <p className="text-[10px] tracking-[0.5em] text-[#4A4238] uppercase">
            The Art of Refinement
          </p>
        </div>
      </section>

      {/* RIGHT SIDE: Interactive Section */}
      <section className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-[#FAF9F6]">
        <div className="w-full max-w-md">
          
          {/* --- VIEW 1: LOGIN --- */}
          {view === "login" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="mb-12">
                <h2 className="text-3xl font-serif text-[#4A4238] mb-2">Welcome Back</h2>
                <p className="text-sm text-[#918170] font-light">Please enter your details to access your wardrobe.</p>
              </div>

              <form onSubmit={handleLoginSubmission} className="space-y-8">
                {errorMessage && (
                    <p className="text-[10px] tracking-widest text-red-500 uppercase bg-red-50 py-2 text-center">
                        {errorMessage}
                    </p>
                )}

                <input 
                  type="email" 
                  name="email" // Added name
                  value={formData.email} // Controlled input
                  onChange={handleInputChange} 
                  placeholder="EMAIL ADDRESS" 
                  required 
                  className="w-full bg-transparent border-b border-[#EADDCA] py-3 text-sm outline-none focus:border-[#4A4238] transition-colors text-[#4A4238]" 
                />
                
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="password" // Added name
                    value={formData.password} // Controlled input
                    onChange={handleInputChange}
                    placeholder="PASSWORD" 
                    required 
                    className="w-full bg-transparent border-b border-[#EADDCA] py-3 text-sm outline-none focus:border-[#4A4238] transition-colors text-[#4A4238]" 
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 bottom-3 text-[#918170]">
                    {showPassword ? <HiOutlineEyeOff size={18} /> : <HiOutlineEye size={18} />}
                  </button>
                </div>

                <div className="flex justify-between items-center text-[10px] tracking-widest uppercase text-[#918170]">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="mr-2 accent-[#4A4238]" /> Remember Me
                  </label>
                  <button type="button" onClick={() => {setView("forgot"); setErrorMessage("");}} className="hover:text-[#4A4238] transition-colors">
                    Forgot Password?
                  </button>
                </div>

                <button disabled={isLoading} className="w-full bg-[#4A4238] text-white py-4 text-xs tracking-[0.3em] uppercase hover:bg-[#D2B48C] transition-all flex justify-center items-center">
                  {isLoading ? <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Sign In"}
                </button>
              </form>
            </div>
          )}

          {/* --- VIEW 2: FORGOT PASSWORD --- */}
          {view === "forgot" && !emailSent && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="mb-12">
                <h2 className="text-3xl font-serif text-[#4A4238] mb-2">Reset Password</h2>
                <p className="text-sm text-[#918170] font-light">Enter your email to receive a recovery link.</p>
              </div>

              <form onSubmit={handleForgotSubmission} className="space-y-8">
                <input type="email" placeholder="REGISTERED EMAIL" required className="w-full bg-transparent border-b border-[#EADDCA] py-3 text-sm outline-none focus:border-[#4A4238] transition-colors text-[#4A4238]" />
                <button disabled={isLoading} className="w-full bg-[#4A4238] text-white py-4 text-xs tracking-[0.3em] uppercase hover:bg-[#D2B48C] transition-all flex justify-center items-center">
                  {isLoading ? <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Send Recovery Link"}
                </button>
                <button type="button" onClick={() => setView("login")} className="w-full text-[10px] tracking-widest text-[#918170] uppercase hover:text-[#4A4238]">
                  Back to Login
                </button>
              </form>
            </div>
          )}

          {/* --- VIEW 3: SUCCESS --- */}
          {view === "forgot" && emailSent && (
            <div className="text-center py-10 animate-in zoom-in duration-500">
              <div className="mb-6 flex justify-center">
                <div className="h-12 w-12 rounded-full border border-[#D2B48C] flex items-center justify-center text-[#D2B48C]">✓</div>
              </div>
              <h2 className="text-2xl font-serif text-[#4A4238] mb-4 italic">Check Your Inbox</h2>
              <p className="text-sm text-[#918170] font-light mb-8">Instructions have been sent to your email.</p>
              <button onClick={() => { setView("login"); setEmailSent(false); }} className="text-[10px] tracking-[0.4em] text-[#4A4238] uppercase border-b border-[#4A4238] pb-1">
                Return to Login
              </button>
            </div>
          )}

          {!isLoading && !emailSent && (
            <p className="mt-12 text-center text-xs tracking-widest text-[#918170] uppercase">
              New to Crystave? <Link href="/signup" className="text-[#4A4238] border-b border-[#4A4238] ml-2 pb-1">Create Account</Link>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}