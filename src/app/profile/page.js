"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiOutlineUser, HiOutlineShoppingBag, HiOutlineScissors, HiOutlineLogout } from "react-icons/hi";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("orders");

  const router = useRouter();

  const handleSignOut = () => {
  // Clear any user data/tokens here in the future
  router.push("/login");
};

  // Mock Data for the Atelier Experience
  const user = {
    name: "Alexander Sterling",
    email: "a.sterling@crystave.com",
    memberSince: "March 2026",
    measurements: {
      chest: '102cm',
      waist: '86cm',
      sleeve: '64cm',
      shoulder: '48cm'
    }
  };

  const orders = [
    { id: "CRV-8829", item: "Midnight Wool Tuxedo", status: "In Tailoring", date: "Feb 12" },
    { id: "CRV-7712", item: "Silk Satin Pocket Square", status: "Delivered", date: "Jan 05" }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-full lg:w-1/4 space-y-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-serif text-[#4A4238]">{user.name}</h1>
            <p className="text-[10px] tracking-[0.3em] text-[#918170] uppercase font-light">
              Member Since {user.memberSince}
            </p>
          </div>

          <nav className="flex flex-col space-y-6">
            <button 
              onClick={() => setActiveTab("orders")}
              className={`flex items-center space-x-4 text-[10px] tracking-[0.4em] uppercase transition-all ${activeTab === "orders" ? "text-[#4A4238] font-bold" : "text-[#918170] hover:text-[#4A4238]"}`}
            >
              <HiOutlineShoppingBag size={18} /> <span>Orders</span>
            </button>
            <button 
              onClick={() => setActiveTab("measurements")}
              className={`flex items-center space-x-4 text-[10px] tracking-[0.4em] uppercase transition-all ${activeTab === "measurements" ? "text-[#4A4238] font-bold" : "text-[#918170] hover:text-[#4A4238]"}`}
            >
              <HiOutlineScissors size={18} /> <span>Atelier Measurements</span>
            </button>
            <button 
              onClick={() => setActiveTab("settings")}
              className={`flex items-center space-x-4 text-[10px] tracking-[0.4em] uppercase transition-all ${activeTab === "settings" ? "text-[#4A4238] font-bold" : "text-[#918170] hover:text-[#4A4238]"}`}
            >
              <HiOutlineUser size={18} /> <span>Account Settings</span>
            </button>
            
            <div className="pt-12 border-t border-[#EADDCA]">
              <button className="flex items-center space-x-4 text-[10px] tracking-[0.4em] uppercase text-[#918170] hover:text-red-800 transition-all">
                <HiOutlineLogout size={18} /> <span>Sign Out</span>
              </button>
              <button 
                onClick={handleSignOut}
                className="flex items-center space-x-4 text-[10px] tracking-[0.4em] uppercase text-[#918170] hover:text-red-800 transition-all"
>
                <HiOutlineLogout size={18} /> <span>Sign Out</span>
                </button>
            </div>
          </nav>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="w-full lg:w-3/4 bg-white/40 border border-[#EADDCA] p-8 md:p-12 animate-in fade-in slide-in-from-right-4 duration-700">
          
          {/* TAB: ORDERS */}
          {activeTab === "orders" && (
            <div className="space-y-8">
              <h2 className="text-xl font-serif text-[#4A4238] italic">Order History</h2>
              <div className="divide-y divide-[#EADDCA]">
                {orders.map((order) => (
                  <div key={order.id} className="py-6 flex justify-between items-center group">
                    <div className="space-y-1">
                      <p className="text-[10px] tracking-widest text-[#918170] uppercase">{order.id}</p>
                      <p className="text-sm text-[#4A4238] font-light">{order.item}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full ${order.status === 'In Tailoring' ? 'bg-[#EADDCA] text-[#4A4238]' : 'bg-[#F2F2F2] text-[#918170]'}`}>
                        {order.status}
                      </p>
                      <p className="text-[10px] text-[#918170] mt-1 font-light">{order.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: MEASUREMENTS */}
          {activeTab === "measurements" && (
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <h2 className="text-xl font-serif text-[#4A4238] italic">Bespoke Profile</h2>
                <button className="text-[10px] tracking-widest uppercase border-b border-[#4A4238] pb-1">Update</button>
              </div>
              <p className="text-sm text-[#918170] font-light leading-relaxed">
                These measurements are used by our master tailors to ensure every Crystave piece fits your unique silhouette perfectly.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-6">
                {Object.entries(user.measurements).map(([key, val]) => (
                  <div key={key} className="p-4 border border-[#EADDCA] text-center space-y-1">
                    <p className="text-[9px] tracking-widest text-[#918170] uppercase">{key}</p>
                    <p className="text-lg font-serif text-[#4A4238]">{val}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-8">
              <h2 className="text-xl font-serif text-[#4A4238] italic">Privacy & Security</h2>
              <form className="space-y-6 max-w-md">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest text-[#918170] uppercase">Email Address</label>
                  <input type="email" defaultValue={user.email} className="w-full bg-transparent border-b border-[#EADDCA] py-2 outline-none focus:border-[#4A4238] transition-colors text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest text-[#918170] uppercase">Change Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-transparent border-b border-[#EADDCA] py-2 outline-none focus:border-[#4A4238] transition-colors text-sm" />
                </div>
                <button className="bg-[#4A4238] text-white px-10 py-3 text-[10px] tracking-[0.3em] uppercase hover:bg-[#D2B48C] transition-all">
                  Save Changes
                </button>
              </form>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}