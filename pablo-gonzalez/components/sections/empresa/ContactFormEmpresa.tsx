const selectOptions = [
  "Transformación Cultural",
  "Formación de Directivos",
  "Mejora de Clima Laboral",
  "Ética y Compliance",
  "Otros",
];

export default function ContactFormEmpresa() {
  return (
    <section
      id="contacto"
      className="py-24 md:py-32 bg-[#0d0d0d] border-t border-white/5"
    >
      <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="bg-[#161616] border border-white/5 flex flex-col lg:flex-row rounded-2xl overflow-hidden">
          {/* ASIDE */}
          <aside className="lg:w-[35%] p-6 sm:p-8 md:p-10 lg:p-12 bg-[#c5a059]/5 border-b lg:border-b-0 lg:border-r border-white/5 space-y-5 md:space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-60" />
              <span className="text-[10px] tracking-[0.25em] text-[#3b8c5e] uppercase">
                Empresas
              </span>
            </div>

            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-tight"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Hablemos de su{" "}
              <span className="text-[#C9A84C]">próximo paso</span>
            </h2>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Personalizamos cada intervención según los retos de su
              organización.
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
                <span>Servicio global </span>
              </div>
            </div>
          </aside>

          {/* FORM */}
          <div className="lg:w-[65%] p-6 sm:p-8 md:p-10 lg:p-12">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              {/* Empresa */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Nombre de la Empresa
                </label>
                <input
                  type="text"
                  placeholder="Ej: Global Tech Solutions"
                  className="w-full bg-transparent border-b border-white/10
                  focus:border-[#3b8c5e] focus:outline-none
                  text-white py-2.5 sm:py-3 text-sm sm:text-base
                  transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Email Corporativo *
                </label>
                <input
                  type="email"
                  placeholder="email@empresa.com"
                  className="w-full bg-transparent border-b border-white/10
                  focus:border-[#3b8c5e] focus:outline-none
                  text-white py-2.5 sm:py-3 text-sm sm:text-base
                  transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Cargo */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Su Cargo
                </label>
                <input
                  type="text"
                  placeholder="Ej: CEO / Director"
                  className="w-full bg-transparent border-b border-white/10
                  focus:border-[#3b8c5e] focus:outline-none
                  text-white py-2.5 sm:py-3 text-sm sm:text-base
                  transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Select */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Objetivos
                </label>
                <select
                  className="w-full bg-transparent border-b border-white/10
                  focus:border-[#3b8c5e] focus:outline-none
                  text-white py-2.5 sm:py-3 text-sm sm:text-base
                  transition-colors appearance-none cursor-pointer"
                >
                  {selectOptions.map((opt) => (
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
                  rows={4}
                  placeholder="Describa el desafío de su organización..."
                  className="w-full bg-transparent border-b border-white/10
                  focus:border-[#3b8c5e] focus:outline-none
                  text-white py-2.5 sm:py-3 text-sm sm:text-base
                  transition-colors resize-none placeholder:text-slate-600"
                />
              </div>

              {/* CTA */}
              <div className="md:col-span-2 pt-4">
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
