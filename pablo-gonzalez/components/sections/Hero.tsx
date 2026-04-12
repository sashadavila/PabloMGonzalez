"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const subtitle =
  "Consultoría en liderazgo ético y alto rendimiento para personas, organizaciones, deportistas y talentos gastronómicos";

const subtitle2 =
  "Transformamos estructuras, decisiones y mentalidad para lograr resultados sostenibles";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-20 md:pt-24">
      {/* ── MOBILE ── */}
      <div className="block md:hidden">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src="/Resiliencia.png"
            alt="Liderazgo"
            fill
            className="object-cover object-[center_top]"
            priority
            quality={100}
            unoptimized
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark" />
        </div>

        <div className="bg-background-dark px-4 pb-12 pt-4 space-y-4 text-center">
          <p className="text-sm text-slate-300 font-light leading-relaxed italic font-serif">
            {subtitle}
          </p>

          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="w-5 h-px bg-[#c5a059] opacity-60" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#c5a059] uppercase">
              No creemos en la suerte, creemos en los procesos
            </span>
            <span className="w-5 h-px bg-[#c5a059] opacity-60" />
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              {subtitle2}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex relative h-screen items-center justify-start">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/30 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(0,0,0,0.7),transparent_60%)]" />

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
          <div className="max-w-3xl space-y-6 text-left">
            {/* EYEBROW */}
            <span className="text-[#c5a059] font-bold tracking-[0.3em] text-xs uppercase block">
              Consultoría Estratégica
            </span>

            {/* TITULO */}
            <motion.h2
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              No creemos en la suerte{" "}
              <span className="text-[#3b8c5e] not-italic font-bold">
                creemos en los procesos
              </span>
            </motion.h2>

            {/* SUBTITULOS */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed italic font-serif">
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
