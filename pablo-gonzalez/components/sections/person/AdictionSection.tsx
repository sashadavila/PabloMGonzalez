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
    value: "hola@pablomgonzalez.com",
    href: "mailto:hola@pablomgonzalez.com",
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
      className="py-32 bg-[#0d0d0d] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Hero interno ── sin imagen externa, tipografía como protagonista */}
        <div className="relative overflow-hidden mb-20 min-h-[380px] flex items-end bg-[#0b1510] border border-[#3b8c5e]/10">
          {/* Textura de fondo: texto gigante desvanecido */}
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center text-[18vw] font-extrabold text-white/[0.02] tracking-tighter select-none pointer-events-none leading-none"
          >
            LIBRE
          </span>

          <div className="relative z-10 p-10 md:p-16">
            <span className="text-[#3b8c5e] font-bold tracking-[0.3em] text-xs uppercase mb-6 block">
              02 — Superación de Adicciones
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
              Hay hábitos que el éxito{" "}
              <br className="hidden md:block" />
              <span className="text-[#3b8c5e] italic">no logra apagar</span>.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Este no es un programa de rehabilitación masivo. Es un trabajo
              individual, confidencial y sin juicios — diseñado para quienes
              ya tienen todo construido y aun así algo sigue fallando.
            </p>
          </div>
        </div>

        {/* ── Bloque de identificación — el cliente se reconoce ── */}
        <div className="mb-20 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#c5a059] font-bold tracking-[0.3em] text-xs uppercase mb-6 block">
              ¿Te reconocés en esto?
            </span>
            <ul className="space-y-4">
              {señales.map((señal) => (
                <li key={señal} className="flex items-start gap-4">
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full bg-[#3b8c5e] shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {señal}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-slate-500 text-sm leading-relaxed max-w-md">
              Si algo de esto resuena, no es casualidad que estés leyendo esto.
              El primer paso no es el más difícil — es el más honesto.
            </p>
          </div>

          {/* Contacto */}
          <address className="not-italic space-y-4 lg:pt-8">
            <p className="text-slate-500 text-xs tracking-widest uppercase mb-6">
              Contacto directo
            </p>
            {contactoAdicciones.map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 border border-white/5 hover:border-[#3b8c5e]/30 transition-colors"
              >
                <span
                  className="material-symbols-outlined text-[#3b8c5e] shrink-0"
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <div>
                  <p className="font-bold text-white text-sm mb-1">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-slate-400 text-sm hover:text-[#3b8c5e] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-400 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Badge de confidencialidad */}
            <div className="flex items-center gap-3 p-5 border border-[#3b8c5e]/20 bg-[#3b8c5e]/5">
              <span
                className="material-symbols-outlined text-[#3b8c5e] text-xl shrink-0"
                aria-hidden="true"
              >
                verified_user
              </span>
              <p className="text-slate-400 text-sm leading-relaxed">
                <span className="text-white font-bold">
                  Proceso 100% confidencial.
                </span>{" "}
                Tu identidad y tu historia no trascienden este espacio bajo
                ninguna circunstancia.
              </p>
            </div>
          </address>
        </div>

        {/* ── Features ── */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {adiccionesFeatures.map(({ icon, title, description }) => (
            <div
              key={title}
              className="p-8 bg-[#3b8c5e]/5 border border-[#3b8c5e]/10 hover:border-[#3b8c5e]/30 transition-colors group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#3b8c5e]/10 mb-6 group-hover:bg-[#3b8c5e] transition-colors">
                <span
                  className="material-symbols-outlined text-[#3b8c5e] group-hover:text-white transition-colors"
                  aria-hidden="true"
                >
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

        {/* ── CTA ── sin rounded-full, copy más directo */}
        <div className="bg-[#3b8c5e] p-10 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-4">
              Acceso limitado · Proceso individual
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">
              ¿Listo para dar el primer paso?
            </h3>
            <p className="text-white/75 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              Una sola sesión de evaluación confidencial. Sin compromiso, sin
              formularios públicos. Solo una conversación honesta para ver si
              este es el espacio correcto para vos.
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-3 bg-[#0d0d0d] text-white px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-[#161616] transition-all"
            >
              Solicitar Evaluación Confidencial
              <span className="material-symbols-outlined" aria-hidden="true">
                north_east
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}