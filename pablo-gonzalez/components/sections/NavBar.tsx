"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl shadow-2xl shadow-black/20">
      <nav className="flex justify-between items-center px-5 md:px-10 py-4 md:py-5 w-full max-w-[1400px] mx-auto">
        {/* Logo + menú */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Botón mobile */}
          <button
            className="md:hidden text-neutral-300"
            onClick={() => setOpen(!open)}
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center h-10 md:h-12">
            <Image
              src="/ICONO.3.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            href="#"
            className="text-[#e6c35c] font-bold border-b border-[#e6c35c] text-xs tracking-widest uppercase"
          >
            Inicio
          </Link>

          <Link
            href="#"
            className="text-[#c4c7c7] tracking-widest uppercase text-xs hover:text-white transition-colors duration-300"
          >
            Sobre Mí
          </Link>

          <Link
            href="#"
            className="text-[#c4c7c7] tracking-widest uppercase text-xs hover:text-white transition-colors duration-300"
          >
            Servicios
          </Link>

          <Link
            href="#"
            className="text-[#c4c7c7] tracking-widest uppercase text-xs hover:text-white transition-colors duration-300"
          >
            División Gastronómica
          </Link>
        </div>

        {/* CTA */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-2 justify-center">
          <Link
            href="#contacto"
            className="bg-primary text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(59,140,94,0.4)] transition-all rounded-lg"
          >
            Contactar
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#131313] border-t border-white/10 px-6 py-6 space-y-6">
          <Link href="#" className="block text-[#e6c35c] uppercase text-sm">
            Inicio
          </Link>

          <Link href="#" className="block text-white/70 uppercase text-sm">
            Sobre Mí
          </Link>

          <Link href="#" className="block text-white/70 uppercase text-sm">
            Servicios
          </Link>

          <Link href="#" className="block text-white/70 uppercase text-sm">
            División Gastronómica
          </Link>

          <button className="w-full mt-4 text-sm tracking-widest uppercase border border-white/20 py-2 hover:bg-white hover:text-black transition-all duration-300">
            CONTACTO
          </button>
        </div>
      )}
    </header>
  );
}
