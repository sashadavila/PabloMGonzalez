"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const subtitle =
  "Consultoría en liderazgo ético y alto rendimiento para personas, organizaciones, deportistas y talentos gastronómicos";

const subtitle2 =
  "Transformamos estructuras, decisiones y mentalidad para lograr resultados sostenibles";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ── MOBILE ── */}
      <div className="block md:hidden">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src="/Resiliencia.png"
            alt="Liderazgo"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            unoptimized
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark" />
        </div>

        <div className="bg-background-dark px-4 pb-12 pt-4 space-y-4 text-center">
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="w-5 h-px bg-[#3b8c5e] opacity-60" />
            <span className="text-[10px] font-medium tracking-[0.2em] text-[#3b8c5e] uppercase">
              No Creemos en la Suerte, Creemos en los Procesos
            </span>
            <span className="w-5 h-px bg-[#3b8c5e] opacity-60" />
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              {subtitle}
            </p>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              {subtitle2}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex relative h-screen items-center justify-start">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/30 z-10" />

          <Image
            src="/Resiliencia.png"
            alt="Liderazgo"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            unoptimized
            sizes="100vw"
          />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-30 w-full flex items-start justify-start px-10 md:px-16 pt-[8vh] md:pt-[12vh]">
          <div className="max-w-2xl space-y-6 text-center md:text-center">
            {/* TITULO */}
            <motion.h2
              className="text-xl md:text-3xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              No creemos en la suerte <br />
              <span className="text-[#2f6f4e] font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                creemos en los procesos
              </span>
            </motion.h2>

            {/* SUBTITULOS */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <p
                className="text-base md:text-lg lg:text-xl text-slate-300 font-light leading-relaxed italic"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                {subtitle}
              </p>

              <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">
                {subtitle2}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
