import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Biografia", path: "/biografia" },
    { name: "Discografia", path: "/discografia" },
    { name: "Canzoni", path: "/canzoni" },
    { name: "Video", path: "/video" },
    { name: "Tour", path: "/tour" },
    { name: "News", path: "/news" },
    { name: "Fan Club", path: "/fan-club" },
    { name: "Contatti", path: "/contatti" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#050505]/80 border-b border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group">
          <span className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-white group-hover:text-gray-200 transition-colors">
            Nek
          </span>
          <div className="flex flex-col pt-1">
            <span className="text-[#e60000] text-[10px] md:text-xs font-bold leading-none tracking-widest uppercase">Fan Club</span>
            <span className="text-white text-xs md:text-sm font-semibold leading-none tracking-widest uppercase">Italia</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#e60000]",
                link.name === "Home" ? "text-white border-b-2 border-[#e60000] pb-1" : "text-gray-300"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions & Socials */}
        <div className="hidden xl:flex items-center gap-5">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-4 text-gray-300">
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            {/* Custom SVG for Spotify since lucide doesn't have it by default or it's not standard */}
            <a href="#" className="hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music">
                 <path d="M9 18V5l12-2v13"></path>
                 <circle cx="6" cy="18" r="3"></circle>
                 <circle cx="18" cy="16" r="3"></circle>
              </svg>
            </a>
          </div>

          <button className="ml-2 flex items-center gap-2 bg-[#e60000]/10 border border-[#e60000] text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#e60000]/20 hover:shadow-[0_0_15px_rgba(230,0,0,0.5)] transition-all duration-300">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Iscriviti
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-[#050505] border-b border-white/5 p-4 flex flex-col gap-4 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-200 py-2 border-b border-white/5 hover:text-[#e60000] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-4 text-gray-300">
              <a href="#"><Facebook className="w-6 h-6" /></a>
              <a href="#"><Instagram className="w-6 h-6" /></a>
              <a href="#"><Youtube className="w-6 h-6" /></a>
            </div>
            <button className="flex items-center gap-2 bg-[#e60000]/10 border border-[#e60000] text-white px-6 py-2 rounded-full font-semibold text-sm">
              Iscriviti
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
