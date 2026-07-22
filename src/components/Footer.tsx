import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030303] border-t border-white/5 py-12 px-4 md:px-8 mt-24">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group">
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-white opacity-80 group-hover:opacity-100 transition-opacity">
            Nek
          </span>
          <div className="flex flex-col pt-1 opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="text-[#e60000] text-[8px] md:text-[10px] font-bold leading-none tracking-widest uppercase">Fan Club</span>
            <span className="text-white text-[10px] md:text-xs font-semibold leading-none tracking-widest uppercase">Italia</span>
          </div>
        </Link>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-gray-500 text-center">
          © 2026 Nek Fan Club Italia – Tutti i diritti riservati
        </p>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs md:text-sm text-gray-400">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          <Link to="/credits" className="hover:text-white transition-colors">Credits</Link>
        </div>

      </div>

      <div className="max-w-[1600px] mx-auto mt-8 text-center border-t border-white/5 pt-8">
        <p className="text-xs text-gray-600 max-w-3xl mx-auto">
          Nek Fan Club Italia è un progetto non ufficiale realizzato dai fan. Tutti i nomi, i marchi, le immagini e i contenuti appartengono ai rispettivi proprietari. Il sito non è affiliato direttamente a Nek, al suo staff o alla sua casa discografica.
        </p>
      </div>
    </footer>
  );
}
