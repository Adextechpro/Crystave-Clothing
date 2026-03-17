"use client"
import { usePathname } from "next/navigation";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import './globals.css'


export default function RootLayout({ children }) {
  const pathname = usePathname ();
  const isAuthPage = pathname === "/login" || pathname === "/signup" || pathname === "/forgot-password";
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-[#FAF9F6]">
        {/* Only render Navbar if NOT on an auth page */}
        {!isAuthPage && <Navbar />}
        <main>{children}</main>
        {/* Only render Footer if NOT on an auth page */}
        {!isAuthPage && <Footer />}
      </body>
    </html>
  );
}
