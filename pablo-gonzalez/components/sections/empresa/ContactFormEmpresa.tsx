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
      className="py-32 bg-[#0d0d0d] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#161616] border border-white/5 flex flex-col lg:flex-row">

          {/* ── Info lateral ── */}
          <aside className="lg:w-1/3 p-12 bg-[#c5a059]/5 border-b lg:border-b-0 lg:border-r border-white/5">
            <h2 className="font-serif text-4xl text-white mb-6">
              Hablemos de su <br /> próximo paso.
            </h2>
            <p className="text-slate-400 mb-12 leading-relaxed">
              Personalizamos cada intervención según los retos específicos de su
              sector. Complete el formulario y nuestro equipo se pondrá en
              contacto en menos de 24 horas.
            </p>

            <address className="not-italic space-y-8">
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-[#c5a059]"
                  aria-hidden="true"
                >
                  mail
                </span>
                <a
                  href="mailto:empresas@pablomgonzalez.com"
                  className="text-sm font-bold tracking-wider hover:text-[#c5a059] transition-colors"
                >
                  EMPRESAS@PABLOMGONZALEZ.COM
                </a>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-[#c5a059]"
                  aria-hidden="true"
                >
                  location_on
                </span>
                <span className="text-sm font-bold tracking-wider">
                  SERVICIO GLOBAL · IN-COMPANY
                </span>
              </div>
            </address>
          </aside>

          {/* ── Formulario ── */}
          <div className="lg:w-2/3 p-12">
            {/*
              ⚠️  Reemplazá action="#" con tu Server Action o handler cliente.
            */}
            <form
              action="#"
              method="POST"
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Empresa */}
              <div className="space-y-2">
                <label
                  htmlFor="empresa"
                  className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase"
                >
                  Nombre de la Empresa
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Ej: Global Tech Solutions"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#c5a059] focus:outline-none text-white py-3 transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase"
                >
                  Email Corporativo{" "}
                  <span className="text-[#c5a059]" aria-label="obligatorio">
                    *
                  </span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@empresa.com"
                  required
                  autoComplete="email"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#c5a059] focus:outline-none text-white py-3 transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Cargo */}
              <div className="space-y-2">
                <label
                  htmlFor="cargo"
                  className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase"
                >
                  Su Cargo
                </label>
                <input
                  id="cargo"
                  name="cargo"
                  type="text"
                  placeholder="Ej: Director de RRHH / CEO"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#c5a059] focus:outline-none text-white py-3 transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Objetivo */}
              <div className="space-y-2">
                <label
                  htmlFor="objetivo"
                  className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase"
                >
                  Objetivos Principales
                </label>
                <select
                  id="objetivo"
                  name="objetivo"
                  className="w-full bg-[#161616] border-b border-white/10 focus:border-[#c5a059] focus:outline-none text-white py-3 transition-colors appearance-none cursor-pointer"
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
                <label
                  htmlFor="mensaje"
                  className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase"
                >
                  Mensaje / Contexto
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Describa brevemente el desafío que enfrenta su organización..."
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#c5a059] focus:outline-none text-white py-3 transition-colors resize-none placeholder:text-slate-600"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#c5a059] text-[#0d0d0d] px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-[#c5a059]/90 transition-all flex items-center gap-3"
                >
                  Enviar Solicitud de Consultoría
                  <span
                    className="material-symbols-outlined text-sm"
                    aria-hidden="true"
                  >
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


