const advisoryOptions = [
  "Liderazgo y Carrera",
  "Propósito y Visión de Vida",
  "Gestión del Rendimiento",
  "Superación de Adicciones",
  "Otros intereses",
];

export default function ContactForm() {
  return (
    <section className="py-32 bg-[#0d0d0d] border-t border-white/5" id="contacto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#161616] border border-white/5 flex flex-col lg:flex-row">
          <aside className="lg:w-1/3 p-12 bg-[#3b8c5e]/5 border-b lg:border-b-0 lg:border-r border-white/5">
            <h2 className="font-serif text-4xl text-white mb-6">
              Inicia tu <br /> conversación
            </h2>
            <p className="text-slate-400 mb-12">
              Cuéntame sobre tus retos actuales. Analizaré tu situación para ver
              si mi enfoque es el adecuado para tu momento vital.
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
                  href="mailto:hola@pablomgonzalez.com"
                  className="text-sm font-bold tracking-wider hover:text-[#3b8c5e] transition-colors"
                >
                  HOLA@PABLOMGONZALEZ.COM
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
                  ARGENTINA / REMOTO GLOBAL
                </span>
              </div>
            </address>
          </aside>

          <div className="lg:w-2/3 p-12">
            <form
              action="#"
              method="POST"
              className="grid md:grid-cols-2 gap-8"
            >
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
                  placeholder="Tu nombre..."
                  autoComplete="name"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-3 transition-colors placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase"
                >
                  Email{" "}
                  <span className="text-[#3b8c5e]" aria-label="obligatorio">
                    *
                  </span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  autoComplete="email"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-3 transition-colors placeholder:text-slate-600"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label
                  htmlFor="interes"
                  className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase"
                >
                  Intereses de Asesoría
                </label>
                <select
                  id="interes"
                  name="interes"
                  className="w-full bg-[#161616] border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-3 transition-colors appearance-none cursor-pointer"
                >
                  {advisoryOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#161616]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label
                  htmlFor="mensaje"
                  className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Háblame de tus objetivos..."
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-3 transition-colors resize-none placeholder:text-slate-600"
                />
              </div>

              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#3b8c5e] text-white px-12 py-5 text-sm font-bold tracking-widest uppercase hover:scale-[1.02] transition-transform active:scale-100"
                >
                  Enviar Solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}