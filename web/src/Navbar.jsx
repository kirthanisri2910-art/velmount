import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 shadow-lg" : "bg-white/20"
    } backdrop-blur-md`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-widest">⚜️VELMOUNT🦚</h1>

        <div className="hidden md:flex gap-8 text-sm">
          <Link to="/" className="hover:text-[#C6A75E] transition-all duration-300 hover:scale-110">Home</Link>
          <Link to="/about" className="hover:text-[#C6A75E] transition-all duration-300 hover:scale-110">About</Link>
          <Link to="/events" className="hover:text-[#C6A75E] transition-all duration-300 hover:scale-110">Events</Link>
          <Link to="/gallery" className="hover:text-[#C6A75E] transition-all duration-300 hover:scale-110">Gallery</Link>
          <Link to="/contact" className="hover:text-[#C6A75E] transition-all duration-300 hover:scale-110">Contact</Link>
        </div>

        <div
          className="md:hidden text-2xl cursor-pointer hover:text-[#C6A75E] transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </div>

      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="md:hidden fixed top-16 left-0 w-full bg-white/95 backdrop-blur-md px-6 py-4 space-y-2 shadow-xl animate-slideDown">
            <Link to="/" className="block text-[#3A2D28] hover:text-[#C6A75E] transition py-2" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block text-[#3A2D28] hover:text-[#C6A75E] transition py-2" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/events" className="block text-[#3A2D28] hover:text-[#C6A75E] transition py-2" onClick={() => setMenuOpen(false)}>Events</Link>
            <Link to="/gallery" className="block text-[#3A2D28] hover:text-[#C6A75E] transition py-2" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link to="/contact" className="block text-[#3A2D28] hover:text-[#C6A75E] transition py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </>
      )}
    </nav>
  );
}
