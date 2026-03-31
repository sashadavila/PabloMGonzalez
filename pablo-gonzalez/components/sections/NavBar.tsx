"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  /** Links del menú desktop + mobile */
  links?: NavLink[];
  /** Texto del botón CTA */
  ctaLabel?: string;
  /** Href del botón CTA */
  ctaHref?: string;
  /**
   * Color de acento:
   *  - "green"  → #3b8c5e  (Personas / Deportistas)
   *  - "gold"   → #c5a059  (Empresas)
   */
  accent?: "green" | "gold";
};

// ─── Paleta de acento ─────────────────────────────────────────────────────────

const accentTokens = {
  green: {
    iconColor: "text-[#3b8c5e]",
    hoverText: "hover:text-[#3b8c5e]",
    ctaBorder:
      "border-[#3b8c5e] text-[#3b8c5e] hover:bg-[#3b8c5e] hover:text-white",
  },
  gold: {
    iconColor: "text-[#c5a059]",
    hoverText: "hover:text-[#c5a059]",
    ctaBorder:
      "border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0d0d0d]",
  },
} as const;

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Metodología", href: "#metodologia" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Navbar({
  links = DEFAULT_LINKS,
  ctaLabel = "Contacto",
  ctaHref = "#contacto",
  accent = "green",
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const tk = accentTokens[accent];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* ── Logo ── */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            <span className={`material-symbols-outlined text-3xl ${tk.iconColor}`}>
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>

          <Link href="/" className="flex items-center">
            <div className="relative h-32 w-40">
              <Image
                src="/ICONO PNG (4).png"
                alt="Pablo M. González"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-bold tracking-[0.2em] text-white/60 ${tk.hoverText} transition-colors uppercase`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* ── CTA — bordes rectos, sin rounded ── */}
        <Link
          href={ctaHref}
          className={`text-xs font-bold tracking-[0.2em] border px-5 py-2 uppercase transition-all ${tk.ctaBorder}`}
        >
          {ctaLabel}
        </Link>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`text-xs font-bold tracking-[0.2em] text-white/60 ${tk.hoverText} transition-colors uppercase py-1`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

