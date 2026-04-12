const advisoryOptions = [
  "Liderazgo y Carrera",
  "Propósito y Visión de Vida",
  "Gestión del Rendimiento",
  "Superación de Adicciones",
  "Otros intereses",
];

export default function ContactForm() {
  return (
    <section
      id="contacto"
      className="py-24 bg-[#0d0d0d] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-start">
          {/* ── INFO ── */}
          <div className="space-y-6 max-w-md">
            <div className="flex items-center gap-4">
              <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-60" />
              <span className="text-[10px] tracking-[0.25em] text-[#3b8c5e] uppercase">
                Contacto
              </span>
            </div>

            <h2
              className="text-xl md:text-2xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Iniciá una <span className="text-[#C9A84C]">conversación</span>
            </h2>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Contame tu situación actual. Analizo personalmente cada caso para
              ver si este proceso es el adecuado para vos.
            </p>

            {/* CONTACTO */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="material-symbols-outlined text-[#3b8c5e]">
                  mail
                </span>
                <span className="hover:text-[#3b8c5e] transition">
                  Pablo@pablomgonzalez.com
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="material-symbols-outlined text-[#3b8c5e]">
                  location_on
                </span>
                <span>Argentina · Remoto Global</span>
              </div>
            </div>
          </div>

          {/* ── FORM ── */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* INPUT BASE STYLE */}
            {[
              {
                id: "nombre",
                label: "Nombre Completo",
                type: "text",
                placeholder: "Tu nombre...",
              },
              {
                id: "email",
                label: "Email *",
                type: "email",
                placeholder: "tu@email.com",
              },
            ].map((field) => (
              <div key={field.id} className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                  {field.label}
                </label>

                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full p-4 rounded-xl bg-[#1a1a1a] border border-white/5
                  text-white placeholder:text-slate-600
                  focus:border-[#3b8c5e] focus:outline-none
                  transition-all duration-300"
                />
              </div>
            ))}

            {/* SELECT */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                Intereses de Asesoría
              </label>

              <select
                className="w-full p-4 rounded-xl bg-[#1a1a1a] border border-white/5
                text-white focus:border-[#3b8c5e] focus:outline-none
                transition-all appearance-none"
              >
                {advisoryOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* TEXTAREA */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                Mensaje
              </label>

              <textarea
                rows={4}
                placeholder="Contame tu situación..."
                className="w-full p-4 rounded-xl bg-[#1a1a1a] border border-white/5
                text-white placeholder:text-slate-600
                focus:border-[#3b8c5e] focus:outline-none
                transition-all resize-none"
              />
            </div>

            {/* CTA */}
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 
    bg-primary text-white px-8 md:px-12 py-4 md:py-5 
    text-sm font-bold uppercase rounded-lg"
              >
                Enviar Solicitud
                <span className="material-symbols-outlined text-base">
                  east
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
