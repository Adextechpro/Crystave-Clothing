"use client";
import React, { useState } from "react";

export default function ContactPage() {
  // State to manage the success popup visibility
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the data to an API here
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-20 px-6 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-[#4A4238] mb-4">Get in Touch</h1>
          <p className="text-[10px] tracking-[0.4em] text-[#918170] uppercase">Bespoke Consultations & Inquiries</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Contact Details Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-[11px] tracking-[0.3em] text-[#4A4238] uppercase mb-4 border-b border-[#EADDCA] pb-2">Our Atelier</h3>
              <p className="text-[#6B5E4F] font-light leading-relaxed">
                123 Elegance Boulevard,<br />
                Victoria Island, Lagos,<br />
                Nigeria
              </p>
            </div>

            <div>
              <h3 className="text-[11px] tracking-[0.3em] text-[#4A4238] uppercase mb-4 border-b border-[#EADDCA] pb-2">Appointments</h3>
              <p className="text-[#6B5E4F] font-light italic">studio@crystave.com</p>
              <p className="text-[#6B5E4F] font-light">+234 (0) 800 CRYSTAVE</p>
            </div>

            <div>
              <h3 className="text-[11px] tracking-[0.3em] text-[#4A4238] uppercase mb-4 border-b border-[#EADDCA] pb-2">Social</h3>
              <div className="flex space-x-6 text-[#4A4238] text-sm uppercase tracking-widest text-[9px]">
                <a href="#" className="hover:text-[#D2B48C] transition-colors">Instagram</a>
                <a href="#" className="hover:text-[#D2B48C] transition-colors">Pinterest</a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2 bg-white/50 p-8 md:p-12 border border-[#EADDCA] shadow-sm">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest text-[#918170] uppercase">Full Name</label>
                <input required type="text" className="w-full bg-transparent border-b border-[#EADDCA] py-2 outline-none focus:border-[#4A4238] transition-colors text-sm font-light" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest text-[#918170] uppercase">Email Address</label>
                <input required type="email" className="w-full bg-transparent border-b border-[#EADDCA] py-2 outline-none focus:border-[#4A4238] transition-colors text-sm font-light" />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] tracking-widest text-[#918170] uppercase">Inquiry Type</label>
                <select className="w-full bg-transparent border-b border-[#EADDCA] py-2 outline-none focus:border-[#4A4238] transition-colors text-sm font-light appearance-none cursor-pointer">
                  <option>Bespoke Consultation</option>
                  <option>Bridal Inquiry</option>
                  <option>Ready-to-Wear Support</option>
                  <option>Press Inquiry</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] tracking-widest text-[#918170] uppercase">Your Message</label>
                <textarea required rows="4" className="w-full bg-transparent border-b border-[#EADDCA] py-2 outline-none focus:border-[#4A4238] transition-colors text-sm font-light resize-none"></textarea>
              </div>

              <div className="md:col-span-2 pt-4">
                <button type="submit" className="bg-[#4A4238] text-white w-full md:w-auto px-12 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-[#D2B48C] transition-all duration-500">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP OVERLAY */}
      {isSubmitted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 transition-all duration-500">
          {/* Blurred Backdrop */}
          <div 
            className="absolute inset-0 bg-[#4A4238]/30 backdrop-blur-sm"
            onClick={() => setIsSubmitted(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-[#FAF9F6] p-10 md:p-16 max-w-lg w-full text-center border border-[#EADDCA] shadow-2xl scale-in-center">
            <div className="mb-8 flex justify-center">
              <div className="h-16 w-16 rounded-full border border-[#D2B48C] flex items-center justify-center">
                <span className="text-[#D2B48C] text-2xl font-light">✓</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-serif text-[#4A4238] mb-4 italic">Message Received</h3>
            
            <p className="text-sm text-[#918170] font-light leading-relaxed mb-10 max-w-xs mx-auto">
              Thank you for reaching out to the Crystave Atelier. An advisor will contact you shortly to discuss your bespoke journey.
            </p>
            
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-[10px] tracking-[0.5em] text-[#4A4238] uppercase border-b border-[#4A4238] pb-1 hover:text-[#D2B48C] hover:border-[#D2B48C] transition-all"
            >
              Return to Studio
            </button>
          </div>
        </div>
      )}
    </div>
  );
}