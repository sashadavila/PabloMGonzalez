import Link from "next/link";

const liderazgoFeatures = [
  {
    icon: "center_focus_strong",
    title: "Claridad de Propósito",
    description:
      "Definí con precisión qué querés lograr y por qué. Sin ruido, sin distracciones.",
  },
  {
    icon: "psychology",
    title: "Mentalidad de Liderazgo",
    description:
      "Trabajamos los patrones mentales que te frenan y los reemplazamos con una arquitectura de pensamiento ganadora.",
  },
  {
    icon: "trending_up",
    title: "Sistemas de Alto Rendimiento",
    description:
      "Hábitos, rutinas y estructuras que sostienen el crecimiento a largo plazo sin quemarte.",
  },
];

export default function LiderazgoSection() {
  return (
    <section
      id="liderazgo"
      className="py-32 bg-[#161616]/30 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <span className="text-[#c5a059] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
              01 — Liderazgo Personal
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Liderarte a vos{" "}
              <span className="text-[#c5a059] italic">mismo</span>{" "}
              es el primer paso.
            </h2>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed">
            Antes de liderar equipos, organizaciones o causas, hay que dominar
            el territorio más complejo: uno mismo. Este proceso está diseñado
            para quienes sienten que tienen más dentro de lo que están
            expresando.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {liderazgoFeatures.map(({ icon, title, description }) => (
            <div
              key={title}
              className="p-8 bg-[#0d0d0d] border border-white/5 hover:border-[#c5a059]/30 transition-colors group"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-[#c5a059]/40 text-[#c5a059] mb-6 group-hover:bg-[#c5a059] group-hover:text-[#0d0d0d] transition-all">
                <span className="material-symbols-outlined" aria-hidden="true">
                  {icon}
                </span>
              </div>
              <h3 className="font-bold text-white text-xl mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 p-10 border border-[#c5a059]/20 bg-[#c5a059]/5">
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">
              ¿Listo para tomar las riendas?
            </h3>
            <p className="text-slate-400">
              Comenzamos con una sesión de diagnóstico sin compromiso.
            </p>
          </div>
          <Link
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-3 bg-[#c5a059] text-[#0d0d0d] px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-[#c5a059]/90 transition-all"
          >
            Comenzar Proceso
            <span className="material-symbols-outlined" aria-hidden="true">
              north_east
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}