import Link from "next/link";

const adiccionesFeatures = [
  {
    icon: "psychiatry",
    title: "Enfoque Clínico",
    description:
      "Herramientas basadas en evidencia para el manejo de la impulsividad y la dependencia. Sin dogmas, sin fórmulas genéricas.",
  },
  {
    icon: "lock",
    title: "Confidencialidad Total",
    description:
      "Tu proceso es tuyo. Nada de lo que ocurra en este espacio trasciende. La discreción no es una opción: es la base del trabajo.",
  },
  {
    icon: "auto_fix_high",
    title: "Transformación Real",
    description:
      "No se trata de dejar algo. Se trata de construir una identidad que no lo necesite. Recuperación sostenible desde adentro.",
  },
];

const contactoAdicciones = [
  {
    icon: "mail",
    label: "Correo Electrónico",
    value: "Pablo@pablomgonzalez.com",
    href: "mailto:Pablo@pablomgonzalez.com",
  },
  {
    icon: "location_on",
    label: "Modalidad",
    value: "Presencial en Argentina · Remoto global",
    href: undefined,
  },
];

// Señales de identificación — el cliente se reconoce antes de contactar
const señales = [
  "Seguís funcionando por fuera, pero algo adentro no cierra.",
  "Tu rendimiento sostiene la fachada. Tu privacidad, no.",
  "Ya lo intentaste antes. Esta vez querés hacerlo bien.",
  "No buscás un programa. Buscás a alguien que entienda tu nivel.",
];

export function AdictionsSection() {
  return (
    <section
      id="adicciones"
      className="py-24 bg-[#0d0d0d] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* ── HEADER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
          <div className="space-y-6 max-w-xl">
            <div className="flex items-center gap-4">
              <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-60" />
              <span className="text-[10px] md:text-xs tracking-[0.25em] text-[#3b8c5e] uppercase">
                02 — Superación de Adicciones
              </span>
            </div>

            <h2
              className="text-xl md:text-2xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Hay hábitos que el éxito{" "}
              <span className="text-[#C9A84C]">no logra apagar</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
            Este no es un programa de rehabilitación masivo. Es un trabajo
            individual, confidencial y sin juicios — diseñado para quienes ya
            tienen todo construido y aun así algo sigue fallando.
          </p>
        </div>

        {/* ── IDENTIFICACIÓN + CONTACTO ── */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* SEÑALES */}
          <div className="space-y-6">
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">
              ¿Te reconocés en esto?
            </span>

            <ul className="space-y-4">
              {señales.map((señal) => (
                <li key={señal} className="flex items-start gap-4">
                  <span className="mt-2 w-1.5 h-1.5 bg-[#3b8c5e]" />
                  <p className="text-slate-300 text-base leading-relaxed">
                    {señal}
                  </p>
                </li>
              ))}
            </ul>

            <p className="text-slate-500 text-sm max-w-md">
              Si algo de esto resuena, no es casualidad que estés leyendo esto.
            </p>
          </div>

          {/* CONTACTO */}
          <div className="space-y-4">
            <p className="text-slate-500 text-xs tracking-widest uppercase">
              Contacto directo
            </p>

            {contactoAdicciones.map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="group relative overflow-hidden p-5 rounded-xl
                bg-[#1a1a1a] border border-white/5
                hover:border-[#3b8c5e]/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#3b8c5e]">
                    {icon}
                  </span>

                  <div>
                    <p className="text-white text-sm font-bold mb-1">{label}</p>

                    {href ? (
                      <a
                        href={href}
                        className="text-slate-400 text-sm hover:text-[#3b8c5e]"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-400 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* BADGE */}
            <div className="p-5 rounded-xl border border-[#3b8c5e]/20 bg-[#3b8c5e]/5 flex gap-3">
              <span className="material-symbols-outlined text-[#3b8c5e]">
                verified_user
              </span>
              <p className="text-slate-400 text-sm">
                <span className="text-white font-bold">
                  Proceso 100% confidencial.
                </span>{" "}
                Tu historia no trasciende este espacio.
              </p>
            </div>
          </div>
        </div>

        {/* ── FEATURES ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {adiccionesFeatures.map(({ icon, title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden p-5 md:p-6 
              rounded-2xl 
              bg-[#1a1a1a] 
              border border-white/5
              shadow-[0_4px_20px_rgba(0,0,0,0.4)]
              hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)]
              transition-all duration-500
              hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_100%,rgba(201,168,76,0.15),transparent_60%)]" />

              <span className="material-symbols-outlined text-[#3b8c5e] mb-4 block group-hover:text-[#C9A84C] transition">
                {icon}
              </span>

              <h3 className="text-base font-bold text-[#3b8c5e] group-hover:text-[#E0BD6A] mb-2 transition">
                {title}
              </h3>

              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="p-8 md:p-12 rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/5 text-center">
          <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-4">
            Acceso limitado · Proceso individual
          </p>

          <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
            ¿Listo para dar el primer paso?
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Una sola sesión de evaluación confidencial. Sin compromiso.
          </p>

          <Link
            href="#contacto"
            className="bg-primary text-white px-8 md:px-12 py-4 md:py-5 text-sm font-bold uppercase rounded-lg"
          >
            Agendar Reunion
            <span className="material-symbols-outlined">north_east</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
