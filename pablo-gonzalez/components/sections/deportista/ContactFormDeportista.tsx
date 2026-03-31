export function ContactFormDeportistas() {
  return (
    <section id="contacto" className="py-32 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#161616] border border-white/5 flex flex-col lg:flex-row">

          {/* ── Info lateral ── */}
          <aside className="lg:w-1/3 p-12 bg-[#3b8c5e]/5 border-b lg:border-b-0 lg:border-r border-white/5">
            <h2 className="font-serif text-4xl text-white mb-6">
              Hablemos de <br /> tu próximo nivel.
            </h2>
            <p className="text-slate-400 mb-12 leading-relaxed">
              Diseñado para deportistas de élite, entrenadores y managers. Tu
              privacidad y confidencialidad son la base del proceso.
            </p>

            <address className="not-italic space-y-8">
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-[#3b8c5e]"
                  aria-hidden="true"
                >
                  mail
                </span>
                <a
                  href="mailto:contacto@pablomgonzalez.com"
                  className="text-sm font-bold tracking-wider hover:text-[#3b8c5e] transition-colors"
                >
                  CONTACTO@PABLOMGONZALEZ.COM
                </a>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-[#3b8c5e]"
                  aria-hidden="true"
                >
                  location_on
                </span>
                <span className="text-sm font-bold tracking-wider">
                  MADRID · REMOTO GLOBAL
                </span>
              </div>
            </address>
          </aside>

          {/* ── Formulario ── */}
          <div className="lg:w-2/3 p-12">
            {/*
              ⚠️  Reemplazá action="#" con tu Server Action o handler cliente.
            */}
            <form action="#" method="POST" className="grid md:grid-cols-2 gap-8">

              {/* Nombre */}
              <div className="space-y-2">
                <label
                  htmlFor="nombre"
                  className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase"
                >
                  Nombre Completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Juan Pérez"
                  autoComplete="name"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-3 transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Deporte */}
              <div className="space-y-2">
                <label
                  htmlFor="deporte"
                  className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase"
                >
                  Deporte / Disciplina
                </label>
                <input
                  id="deporte"
                  name="deporte"
                  type="text"
                  placeholder="Tenis, Fútbol, Natación..."
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-3 transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Email */}
              <div className="md:col-span-2 space-y-2">
                <label
                  htmlFor="email"
                  className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase"
                >
                  Email Profesional{" "}
                  <span className="text-[#3b8c5e]" aria-label="obligatorio">
                    *
                  </span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="juan@elite-sports.com"
                  required
                  autoComplete="email"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-3 transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Mensaje */}
              <div className="md:col-span-2 space-y-2">
                <label
                  htmlFor="mensaje"
                  className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase"
                >
                  Mensaje / Objetivo
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="¿Cuál es tu principal desafío actual?"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-3 transition-colors resize-none placeholder:text-slate-600"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#3b8c5e] text-white px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-[#3b8c5e]/90 transition-all flex items-center gap-3"
                >
                  Solicitar Sesión de Evaluación
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
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
