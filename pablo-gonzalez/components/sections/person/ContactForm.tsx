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
      className="py-24 md:py-32 bg-[#0d0d0d] border-t border-white/5"
    >
      <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="bg-[#161616] border border-white/5 flex flex-col lg:flex-row rounded-2xl overflow-hidden">
          {/* ASIDE */}
          <aside className="lg:w-[35%] p-6 sm:p-8 md:p-10 lg:p-12 bg-[#3b8c5e]/5 border-b lg:border-b-0 lg:border-r border-white/5 space-y-5 md:space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-60" />
              <span className="text-[10px] tracking-[0.25em] text-[#3b8c5e] uppercase">
                Contacto
              </span>
            </div>

            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-tight"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Iniciá una <span className="text-[#C9A84C]">conversación</span>
            </h2>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Contame tu situación actual. Analizo personalmente cada caso para
              ver si este proceso es el adecuado para vos.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="material-symbols-outlined text-[#3b8c5e]">
                  mail
                </span>
                <span className="hover:text-[#3b8c5e] transition">
                  pablo@pablomgonzalez.com
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="material-symbols-outlined text-[#3b8c5e]">
                  location_on
                </span>
                <span>Argentina · Remoto Global</span>
              </div>
            </div>
          </aside>

          {/* FORM */}
          <div className="lg:w-[65%] p-6 sm:p-8 md:p-10 lg:p-12">
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);

                const data = {
                  type: "Persona",
                  name: formData.get("name"),
                  email: formData.get("email"),
                  extra: formData.get("position"),
                  message: formData.get("message"),
                };

                await fetch("/api/contact", {
                  method: "POST",
                  body: JSON.stringify(data),
                });

                alert("Mensaje enviado");
                e.currentTarget.reset();
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              {/* Nombre */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre..."
                  className="w-full bg-transparent border-b border-white/10
                  focus:border-[#3b8c5e] focus:outline-none
                  text-white py-2.5 sm:py-3 text-sm sm:text-base
                  transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  className="w-full bg-transparent border-b border-white/10
                  focus:border-[#3b8c5e] focus:outline-none
                  text-white py-2.5 sm:py-3 text-sm sm:text-base
                  transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Select */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Intereses de Asesoría
                </label>
                <select
                  className="w-full bg-transparent border-b border-white/10
                  focus:border-[#3b8c5e] focus:outline-none
                  text-white py-2.5 sm:py-3 text-sm sm:text-base
                  transition-colors appearance-none cursor-pointer"
                >
                  {advisoryOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#161616]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensaje */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Contame tu situación..."
                  className="w-full bg-transparent border-b border-white/10
                  focus:border-[#3b8c5e] focus:outline-none
                  text-white py-2.5 sm:py-3 text-sm sm:text-base
                  transition-colors resize-none placeholder:text-slate-600"
                />
              </div>

              {/* CTA */}
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#3b8c5e] text-white 
                  px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5
                  text-xs sm:text-sm font-bold uppercase tracking-widest
                  hover:bg-[#3b8c5e]/90 transition-all 
                  flex items-center justify-center gap-2 sm:gap-3"
                >
                  Enviar Solicitud
                  <span className="material-symbols-outlined text-sm">
                    north_east
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
