import Image from "next/image";

const features = [
  {
    icon: "corporate_fare",
    title: "Consultoría",
    description:
      "Guía estratégica para líderes de alto perfil navegando cambios globales complejos.",
  },
  {
    icon: "psychology",
    title: "Crecimiento Personal",
    description:
      "Desbloqueando el potencial individual mediante coaching riguroso basado en evidencia.",
  },
  {
    icon: "gavel",
    title: "Ética y Liderazgo",
    description:
      "Construyendo cimientos sobre la integridad y la credibilidad auténtica duradera.",
  },
  {
    icon: "auto_graph",
    title: "Resiliencia",
    description:
      "Forjando la fortaleza mental para prosperar bajo presión extrema y escrutinio.",
  },
];

const p1 =
  "Nuestra misión trasciende la simple asesoría. Nos dedicamos a la forja de legados, interviniendo en la estructura misma del pensamiento organizacional y personal";
const p2 =
  "Combinamos la precisión de la administración de empresas, la profundidad de la psicología organizacional y la disciplina de la ejecución para intervenir en contextos donde los resultados no pueden depender del azar";
const p3 =
  "En un mundo saturado de teorías, nosotros elegimos la ejecución disciplinada.  No trabajamos para cualquiera. Colaboramos con líderes, organizaciones y atletas que poseen la valentía de cuestionar su status quo y el hambre de trascender. Si busca soluciones rápidas y superficiales, no somos para usted. Si busca una transformación estructural, bienvenido";
const p4 =
  "Creemos que el éxito no es un evento fortuito, sino la consecuencia inevitable de sistemas bien diseñados y ejecutados con disciplina férrea. Donde otros ven problemas insolubles, nosotros identificamos fallos en el proceso que pueden ser optimizados";

export function BrandPositioning() {
  return (
    <section
      id="quienesSomos"
      className="relative py-16 md:py-24 px-5 md:px-6 bg-background-dark"
    >
      {/* ── FONDO ── */}
      <div className="absolute inset-0 -z-10">
        {/* Overlay con degradé superior e inferior */}
        <div
          className="absolute inset-0 
          bg-[linear-gradient(to_bottom,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.6)_30%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.95)_100%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 md:space-y-32">
        {/* ── BLOQUE 1 ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Imagen */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-transparent opacity-20 group-hover:opacity-40 group-active:opacity-40 transition-opacity rounded-xl" />
            <div className="absolute inset-0 z-10 rounded-xl overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0 z-10 opacity-0 
    group-hover:opacity-100 transition-opacity duration-700
    bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.18)_0%,transparent_70%)]"
              />
              <div
                className="absolute inset-0 z-10 pointer-events-none
    bg-[linear-gradient(105deg,transparent_40%,rgba(212,175,55,0.15)_50%,transparent_60%)]
    translate-x-[-120%] group-hover:translate-x-[120%]
    transition-transform duration-1000 ease-out"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-px z-20
    bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent
    scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
              />
            </div>
            <div className="relative group order-2 lg:order-1">
              <div className="relative w-full h-[260px] sm:h-[320px] md:h-[500px] lg:h-[600px]">
                <Image
                  src="/Foto.jpg"
                  alt="Pablo González"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale
      group-hover:grayscale-0 
      group-hover:scale-105 
      transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2 space-y-4 md:space-y-8">
            <div className="flex items-center gap-4">
              <span className="w-6 md:w-8 h-px bg-primary opacity-60" />
              <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] text-primary uppercase">
                ¿Quienes somos?
              </span>
            </div>
            <h2
              className="text-lg md:text-xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Equipo <span className="text-[#C9A84C]"> Alineado</span>
            </h2>
            <blockquote className="border-l-2 border-[#3b8c5e] pl-4 md:pl-6 my-4 md:my-8">
              <p
                className="text-base md:text-lg lg:text-xl text-slate-000 font-light leading-relaxed italic"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                {" "}
                Soy Pablo González, la cara visible de un ecosistema de
                especialistas que da vida a esta consultora. No somos un grupo
                improvisado: somos un equipo alineado a una convinccion
                innegociable:{" "}
                <span className="text-[#3b8c5e] font-semibold relative">
                  el alto rendimiento es una ciencia, no un accidente
                </span>
              </p>
            </blockquote>

            <p className="text-sm md:text-base text-slate-100 leading-relaxed font-light">
              {p1}
            </p>
            <p className="text-sm md:text-base text-slate-100 leading-relaxed font-light">
              {p2}
            </p>
          </div>
        </div>

        {/* ── BLOQUE 2 ── */}
        <div className="space-y-8 md:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
            <div className="space-y-4 md:space-y-6 max-w-xl">
              <div className="flex items-center gap-4">
                <span className="w-6 md:w-8 h-px bg-primary opacity-60" />
                <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] text-primary uppercase">
                  Metodología
                </span>
              </div>
              <h2
                className="text-lg md:text-xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                Nosotros no venimos a decirte que hacer{" "}
                <span className="text-[#C9A84C]">
                  {" "}
                  venimos a transformar cómo lo hacés
                </span>
              </h2>
              <p className="text-sm md:text-base text-slate-100 leading-relaxed font-light">
                {p3}
              </p>
              <p className="text-sm md:text-base text-slate-100 leading-relaxed font-light">
                {p4}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group relative overflow-hidden p-5 md:p-6 
                   rounded-2xl 
                    bg-[#1a1a1a] 
                    border border-white/5
                    shadow-[0_4px_20px_rgba(0,0,0,0.4)]
                    hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)]
                    transition-all duration-500 ease-out
                    hover:-translate-y-2 hover:scale-[1.02]"
                >
                  <div
                    className="absolute inset-0 pointer-events-none
                    bg-[radial-gradient(circle_at_50%_100%,rgba(201,168,76,0.15),transparent_60%)]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500"
                  />
                  <span
                    className="material-symbols-outlined text-[#3b8c5e] mb-3 md:mb-4 block 
  transition-all duration-300 group-hover:scale-110 group-hover:text-[#C9A84C]"
                    style={{ fontSize: "24px" }}
                  >
                    {f.icon}
                  </span>
                  <h3
                    className="text-sm md:text-base font-bold mb-2 text-[#3b8c5e] 
transition-colors duration-300 group-hover:text-[#E0BD6A]"
                  >
                    {f.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
