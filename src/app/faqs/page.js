"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      category: "Bespoke & Tailoring",
      questions: [
        {
          q: "How does the bespoke process work?",
          a: "Our bespoke journey begins with a private consultation at our Lagos atelier or virtually. We take over 30 precise measurements and discuss your style preferences before creating a unique pattern for your garment."
        },
        {
          q: "How long does a custom suit take?",
          a: "Typically, a bespoke piece requires 3 to 5 weeks to complete, including two intermediate fittings to ensure the silhouette is perfected."
        }
      ]
    },
    {
      category: "Orders & Shipping",
      questions: [
        {
          q: "Do you ship internationally?",
          a: "Yes, Crystave offers global shipping via our premium courier partners. Delivery times vary by region but typically range from 5-10 business days for ready-to-wear items."
        },
        {
          q: "Can I track my order?",
          a: "Once your garment has been dispatched from our atelier, you will receive a confirmation email containing your tracking details and estimated delivery date."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          q: "What is your return policy?",
          a: "Due to the personalized nature of bespoke and made-to-order items, we do not accept returns. However, we offer complimentary alterations to ensure your garment fits perfectly. Ready-to-wear items can be exchanged within 7 days."
        }
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-20 px-6 lg:px-20">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="text-4xl font-serif text-[#4A4238] mb-4">Client Services</h1>
          <p className="text-[10px] tracking-[0.4em] text-[#918170] uppercase">Frequently Asked Questions</p>
        </header>

        {/* FAQ Sections */}
        <div className="space-y-16">
          {faqData.map((section, sIndex) => (
            <div key={sIndex} className="space-y-6">
              <h2 className="text-[11px] tracking-[0.3em] text-[#D2B48C] uppercase font-semibold border-b border-[#EADDCA] pb-2">
                {section.category}
              </h2>
              
              <div className="divide-y divide-[#EADDCA]">
                {section.questions.map((item, qIndex) => {
                  const globalIndex = `${sIndex}-${qIndex}`;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div key={qIndex} className="py-6">
                      <button 
                        onClick={() => toggleAccordion(globalIndex)}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <span className="text-lg font-serif text-[#4A4238] group-hover:text-[#D2B48C] transition-colors">
                          {item.q}
                        </span>
                        <span className="text-[#918170] text-xs">
                          {isOpen ? <FaMinus /> : <FaPlus />}
                        </span>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                        <p className="text-sm text-[#6B5E4F] font-light leading-relaxed pr-8">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Need Help? */}
        <div className="mt-24 p-12 bg-[#EADDCA]/30 border border-[#EADDCA] text-center">
          <h3 className="text-xl font-serif text-[#4A4238] mb-4">Still have questions?</h3>
          <p className="text-sm text-[#918170] font-light mb-8">Our advisors are available to assist you with any inquiries.</p>
          <a 
            href="/contact" 
            className="inline-block bg-[#4A4238] text-white px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-[#D2B48C] transition-all"
          >
            Contact Atelier
          </a>
        </div>

      </div>
    </div>
  );
}