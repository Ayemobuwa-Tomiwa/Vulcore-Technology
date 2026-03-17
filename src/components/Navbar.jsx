import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-white text-xl md:text-2xl font-semibold tracking-widest">
          T DEVELOPMENT
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm tracking-wide text-gray-300">
          <a href="#home" className="hover:text-white transition">HOME</a>
          <a href="#services" className="hover:text-white transition">SERVICES</a>
          <a href="#projects" className="hover:text-white transition">PROJECTS</a>
          <a href="#contact" className="hover:text-white transition">CONTACT</a>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/90 text-white flex flex-col items-center gap-6 py-6">
          <a href="#home" onClick={() => setOpen(false)}>HOME</a>
          <a href="#services" onClick={() => setOpen(false)}>SERVICES</a>
          <a href="#projects" onClick={() => setOpen(false)}>PROJECTS</a>
          <a href="#contact" onClick={() => setOpen(false)}>CONTACT</a>
        </div>
      )}
    </nav>
  );
}