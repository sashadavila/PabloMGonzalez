import { Footer, Navbar } from "@/components/sections";
import ContactFormEmpresa from "@/components/sections/empresa/ContactFormEmpresa";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultoría Corporativa",
  description:
    "Transformamos organizaciones a través de la integridad y el propósito. Diseñamos culturas corporativas de alto rendimiento basadas en la confianza y la sostenibilidad humana.",
};

// ─── Types ────────────────────────────────────────────────────────────────────

type Stat = {
  value: string;
  label: string;
  accent?: boolean;
};

type Pillar = {
  icon: string;
  title: string;
  description: string;
  items: string[];
};

type FooterLink = {
  label: string;
  href: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats: Stat[] = [
  { value: "+50", label: "Empresas Transformadas" },
  { value: "1.2k", label: "Líderes Formados", accent: true },
  { value: "94%", label: "Índice de Confianza" },
  { value: "20+", label: "Años de Experiencia", accent: true },
];

const pillars: Pillar[] = [
  {
    icon: "verified_user",
    title: "Integridad como Estrategia",
    description:
      "Desarrollamos marcos de decisión ética que protegen la reputación y alinean los valores personales con los objetivos de negocio.",
    items: ["Códigos de conducta aplicados", "Gobernanza ética"],
  },
  {
    icon: "psychology",
    title: "Cultura de Confianza",
    description:
      "Fomentamos entornos de seguridad psicológica donde la innovación surge de la libertad y el respeto mutuo.",
    items: ["Comunicación asertiva", "Seguridad psicológica"],
  },
  {
    icon: "groups",
    title: "Liderazgo Consciente",
    description:
      "Formamos directivos capaces de inspirar, delegar con propósito y gestionar equipos híbridos y globales.",
    items: ["Soft skills ejecutivas", "Gestión del cambio"],
  },
];

function Hero() {
  return (
    <header className="relative overflow-hidden pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3a8d61]/10 border border-[#3a8d61]/20 text-[#3a8d61] text-xs font-bold tracking-widest uppercase">
            <span className="flex h-2 w-2 rounded-full bg-[#3a8d61] animate-pulse" />
            Soluciones para la Alta Dirección
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-100">
            Liderazgo Ético para la{" "}
            <span className="text-[#3a8d61]">Era Global.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
            Transformamos organizaciones a través de la integridad y el
            propósito. Diseñamos culturas corporativas de alto rendimiento
            basadas en la confianza y la sostenibilidad humana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contacto"
              className="flex items-center justify-center h-14 px-8 bg-[#3a8d61] text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(58,141,97,0.4)] transition-all"
            >
              Agendar Diagnóstico Inicial
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center h-14 px-8 border border-slate-700 text-slate-100 font-bold rounded-lg hover:bg-slate-800 transition-all"
            >
              Descargar Dossier
            </Link>
          </div>
        </div>

        {/* Image card */}
        <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-xl overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 to-transparent z-10" />
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4FBBlGmvd_lPMyd5xvFXzuxtupSa6QnR_Su9CBqI5NoQHKlNlnu5F9W4BTeVBBg_tbHRli7GFvjjEvP9DSTxbBDwvEE4CK98wYMdjp0FFki8BAh8pCMflWx9bKvK9PwCH_CHle3hglq8M4anE1_qaO-PQiNCfm6OJbWTRnrbRte1zX6ByQTDcUvrpwgWRW0PtqVWIXVljsomOp-mVvZZ2uYgBfRRIdt25WjRPsmY6v1Fecd-LByDsVuRL9G-FH0WEXR0vjetkdis"
            alt="Rascacielos corporativo moderno de cristal"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#161616]/90 backdrop-blur rounded border border-white/10 z-20">
            <p className="text-[#c5a059] font-bold text-sm mb-1 uppercase tracking-widest">
              Impacto Medible
            </p>
            <p className="text-slate-100 text-lg italic">
              &ldquo;La ética no es un freno al crecimiento, es el motor más
              potente para la retención de talento y la resiliencia
              organizacional.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Decorative blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3a8d61]/10 rounded-full blur-[120px] pointer-events-none" />
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function Stats() {
  return (
    <section className="py-12 bg-[#161616] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, accent }) => (
            <div key={label} className="text-center">
              <p
                className={`text-4xl font-black mb-1 ${
                  accent ? "text-[#3a8d61]" : "text-slate-100"
                }`}
              >
                {value}
              </p>
              <p className="text-sm text-slate-500 uppercase font-bold tracking-tighter">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function PillarCard({ icon, title, description, items }: Pillar) {
  return (
    <div
      id="metodologia"
      className="group p-8 bg-[#161616] border border-slate-800 rounded-xl hover:border-[#3a8d61]/50 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-lg bg-[#3a8d61]/10 flex items-center justify-center mb-6 group-hover:bg-[#3a8d61] transition-colors">
        <span
          className="material-symbols-outlined text-[#3a8d61] group-hover:text-white text-3xl"
          aria-hidden="true"
        >
          {icon}
        </span>
      </div>
      <h3 className="text-xl font-bold text-slate-100 mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-slate-300"
          >
            <span
              className="material-symbols-outlined text-[#3a8d61] text-base"
              aria-hidden="true"
            >
              check_circle
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CorePillars() {
  return (
    <section id="servicios" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-[#c5a059] text-sm font-black uppercase tracking-[0.2em] mb-4">
              Nuestra Metodología
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight leading-tight">
              Pilares de la Excelencia Corporativa.
            </h3>
          </div>
          <p className="text-slate-400 max-w-sm mb-2">
            Soluciones integrales diseñadas para evolucionar la cultura y los
            resultados de su compañía.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EmpresasPage() {
  return (
    <>
      <Navbar
        accent="green"
        links={[
          { label: "Filosofía", href: "#filosofia" },
          { label: "Pilares", href: "#servicios" },
          { label: "Metodología", href: "#metodologia" },
        ]}
        ctaLabel="Agendar Diagnóstico"
        ctaHref="#contacto"
      />
      <main>
        <Hero />
        <Stats />
        <CorePillars />
        <ContactFormEmpresa />
      </main>
      <Footer />
    </>
  );
}
