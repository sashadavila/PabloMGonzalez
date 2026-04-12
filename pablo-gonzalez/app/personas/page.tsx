import { Footer, Navbar } from "@/components/sections";
import { AdictionsSection } from "@/components/sections/person/AdictionSection";
import ContactForm from "@/components/sections/person/ContactForm";
import HeroPersons from "@/components/sections/person/HeroPersons";
import LiderazgoSection from "@/components/sections/person/LiderazgoSection";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crecimiento Individual | Pablo M. González",
  description:
    "Asesoría individual de alto nivel. Transforma tu potencial en resultados extraordinarios a través de una evolución diseñada para el líder que busca propósito y claridad estratégica.",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

const checkItems = [
  {
    title: "Estrategia de Vida",
    description:
      "Diseño de una hoja de ruta clara para tus ambiciones personales y profesionales.",
  },
  {
    title: "Inteligencia Emocional",
    description:
      "Gestión avanzada de estados internos para la toma de decisiones críticas.",
  },
];

function ValueProp() {
  return (
    <section className="py-32 bg-[#0d0d0d] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
              El arte del crecimiento <br />
              <span className="text-[#c5a059]">personalizado</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              No hay fórmulas genéricas para el éxito individual. Mi enfoque se
              centra en desgranar tus fortalezas intrínsecas, alinear tus
              valores con tus metas profesionales y construir una estructura de
              liderazgo que sea auténtica y sostenible.
            </p>

            <ul className="space-y-6">
              {checkItems.map(({ title, description }) => (
                <li key={title} className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-[#3b8c5e] shrink-0"
                    aria-hidden="true"
                  >
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-bold text-white mb-1">{title}</h4>
                    <p className="text-sm text-slate-500">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] bg-[#161616] border border-white/5 p-8 flex flex-col justify-end">
              <span
                className="material-symbols-outlined text-[#c5a059] text-4xl mb-4"
                aria-hidden="true"
              >
                psychology
              </span>
              <h3 className="font-bold text-xl text-white">Mentalidad</h3>
              <p className="text-xs text-slate-500 mt-2">
                Reconfiguración de paradigmas limitantes.
              </p>
            </div>

            <div className="aspect-[3/4] bg-[#3b8c5e]/10 border border-[#3b8c5e]/20 p-8 flex flex-col justify-end translate-y-8">
              <span
                className="material-symbols-outlined text-[#3b8c5e] text-4xl mb-4"
                aria-hidden="true"
              >
                trending_up
              </span>
              <h3 className="font-bold text-xl text-white">Impacto</h3>
              <p className="text-xs text-slate-500 mt-2">
                Escalamiento de resultados tangibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

type Pillar = {
  icon: string;
  title: string;
  description: string;
  accentColor: "gold" | "green";
};

const pillars: Pillar[] = [
  {
    icon: "center_focus_strong",
    title: "Visión Estratégica",
    description:
      "Claridad total sobre tus objetivos. Eliminamos el ruido para enfocar tu energía en lo que realmente mueve la aguja.",
    accentColor: "gold",
  },
  {
    icon: "favorite",
    title: "Gestión Emocional",
    description:
      "Dominio propio para liderar con impacto y serenidad, incluso en entornos de alta presión e incertidumbre.",
    accentColor: "green",
  },
  {
    icon: "bolt",
    title: "Alto Rendimiento",
    description:
      "Optimización de hábitos y sistemas personales para una productividad sostenible y de largo recorrido.",
    accentColor: "gold",
  },
];

function PillarCard({ icon, title, description, accentColor }: Pillar) {
  const isGold = accentColor === "gold";
  const borderColor = isGold
    ? "border-[#c5a059] text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-[#0d0d0d]"
    : "border-[#3b8c5e] text-[#3b8c5e] group-hover:bg-[#3b8c5e] group-hover:text-white";

  return (
    <div className="bg-[#0d0d0d] p-12 hover:bg-[#161616] transition-colors group">
      <div
        className={`w-12 h-12 flex items-center justify-center border mb-8 transition-all ${borderColor}`}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

function ServicePillars() {
  return (
    <section className="py-32 bg-[#161616]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[#3b8c5e] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
            Pilares de Trabajo
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white">
            Metodología para el Líder
          </h2>
        </div>

        <div className="grid md:grid-cols-3 border border-white/5 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ─── Sección: Elegí tu camino ─────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

function ChoosePath() {
  return (
    <section className="py-32 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#c5a059] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
            ¿Dónde está tu batalla?
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
            Elegí tu camino.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Cada proceso es único. Cada historia merece un acompañamiento a
            medida. Encontrá el espacio que fue diseñado para vos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-1 border border-white/5">
          {/* Liderazgo Personal */}
          <Link
            href="#liderazgo"
            className="group relative overflow-hidden bg-[#161616] p-12 flex flex-col justify-between min-h-[420px] hover:bg-[#1a1a1a] transition-all duration-300 border-r border-white/5"
          >
            <div>
              <span className="text-[#c5a059] font-black text-5xl mb-8 block opacity-30 group-hover:opacity-60 transition-opacity">
                01
              </span>
              <span className="text-[#c5a059] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
                Liderazgo Personal
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Personas
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Para quienes buscan sanar, crecer y liderar su propia vida con
                propósito y autenticidad.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[#3b8c5e] font-bold text-sm tracking-widest uppercase mt-10">
              Explorar Crecimiento
              <span
                className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#c5a059] group-hover:w-full transition-all duration-500" />
          </Link>

          {/* Superación de Adicciones */}
          <Link
            href="#adicciones"
            className="group relative overflow-hidden bg-[#0f1a14] p-12 flex flex-col justify-between min-h-[420px] hover:bg-[#131f18] transition-all duration-300"
          >
            <div>
              <span className="text-[#3b8c5e] font-black text-5xl mb-8 block opacity-30 group-hover:opacity-60 transition-opacity">
                02
              </span>
              <span className="text-[#3b8c5e] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
                Acompañamiento
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Recuperación
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Para quienes buscan una salida real y sostenible. Acompañamiento
                humano, clínico y sin juicios.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[#3b8c5e] font-bold text-sm tracking-widest uppercase mt-10">
              Ver Acompañamiento
              <span
                className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#3b8c5e] group-hover:w-full transition-all duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ─── Sección: Liderazgo Personal ─────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

export default function PersonasPage() {
  return (
    <main className="bg-[#0d0d0d] text-slate-100 selection:bg-[#3b8c5e]/30">
      <Navbar
        accent="green"
        links={[
          { label: "Inicio", href: "#top" },
          { label: "Liderazgo", href: "#liderazgo" },
          { label: "Acompañamiento", href: "#adicciones" },
        ]}
        ctaLabel="Contacto"
        ctaHref="#contacto"
      />
      <HeroPersons />
      <ValueProp />
      <ServicePillars />
      <ChoosePath />
      <LiderazgoSection />
      <AdictionsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
