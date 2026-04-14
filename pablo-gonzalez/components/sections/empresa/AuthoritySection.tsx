"use client";

import Image from "next/image";

export function AuthoritySection() {
  return (
    <section id="equipo" className="py-20 md:py-28 bg-background-dark">
      <div className="w-full px-6 md:px-16 space-y-28">
        {/* ───────────────────────────── */}
        {/* PABLO */}
        {/* ───────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* IMAGE */}
          <div className="group relative w-full h-[320px] md:h-auto md:min-h-[520px] rounded-2xl overflow-hidden">
            <Image
              src="/Foto.jpg"
              alt="Pablo Martín González"
              fill
              className="object-cover transition duration-[1200ms] ease-out group-hover:scale-105"
            />

            {/* overlay base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* sombra superior */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent pointer-events-none" />

            {/* glow hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 
              bg-[radial-gradient(circle_at_50%_20%,rgba(201,168,76,0.18),transparent_60%)]"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-6 flex flex-col justify-center">
            <h2
              className="text-3xl md:text-5xl text-white font-black uppercase leading-tight"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Pablo Martín González <br />
              <span className="text-[#C9A84C]">
                Consultoría Estratégica & Liderazgo Ético
              </span>
            </h2>

            <p className="text-white/80 leading-relaxed font-light">
              Entiendo la gestión empresarial como un equilibrio preciso entre
              la disciplina operativa y la integridad humana.
            </p>

            <p className="text-white/70 leading-relaxed font-light">
              Mi propósito es ayudar a líderes y organizaciones a alcanzar su
              máximo potencial a través de una arquitectura organizacional
              eficiente. Me especializo en el asesoramiento estratégico externo,
              diseñando procesos que no solo optimizan la rentabilidad, sino que
              fortalecen el clima humano y la transparencia en la toma de
              decisiones.
            </p>

            {/* LISTA */}
            <div className="space-y-4 pt-4">
              {[
                "Liderazgo con Propósito: Utilizo la inteligencia interpersonal como una herramienta estratégica para gestionar equipos de alto rendimiento y desarrollar culturas organizacionales resilientes.",
                "Consultoría Estratégica Externa: Colaboro con empresas de servicios y real estate —como mi actual trabajo con Buena Vida State— en la reingeniería de sus procesos, monitoreo de gestión y optimización estructural.",
                "Desarrollo de Negocios: Como socio capitalista en proyectos de alto impacto como Excelsum, aporto visión estratégica y respaldo para el crecimiento de marcas que buscan un estándar de excelencia superior.",
                "Disciplina y Alto Rendimiento: Mi vida está marcada por el deporte de alta competencia. Traslado diariamente la resiliencia, el enfoque y la disciplina del básquetbol al mundo de los negocios.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-[#3b8c5e]" />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-white/60 leading-relaxed font-light pt-4">
              Creo firmemente que la excelencia no es un acto aislado, sino un
              hábito. Mi enfoque se basa en la confidencialidad, el networking
              de valor y un compromiso total con la calidad. Mi objetivo es
              elevar el estándar de gestión de mis clientes, asegurando que su
              estructura sea tan sólida como su visión.
            </p>
          </div>
        </div>

        {/* ───────────────────────────── */}
        {/* CAROLINA */}
        {/* ───────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* TEXT */}
          <div className="space-y-6 flex flex-col justify-center md:order-1 order-2">
            <h2
              className="text-3xl md:text-5xl text-white font-black uppercase leading-tight"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Carolina Garibaldi <br />
              <span className="text-[#C9A84C]">
                Operaciones Estratégicas & Business Partner
              </span>
            </h2>

            <p className="text-white/80 leading-relaxed font-light">
              En nuestro equipo, la excelencia operativa tiene un nombre propio:
              Carolina Garibaldi.
            </p>

            <p className="text-white/70 leading-relaxed font-light">
              Con una trayectoria de más de dos décadas en la élite del sector
              corporativo, es la estratega responsable de transformar la visión
              ejecutiva en una realidad operativa impecable.
            </p>

            <p className="text-white/70 leading-relaxed font-light">
              Experta en la gestión de la complejidad, posee una capacidad única
              para gestionar y coordinar operaciones y procesos de alto nivel.
            </p>

            {/* LISTA */}
            <div className="space-y-4 pt-4">
              {[
                "Articulación de Alto Nivel: Especialista en el soporte estratégico para entornos C-Level y la coordinación de equipos multidisciplinarios.",
                "Visión Global y Bilingüe: Dominio absoluto de la dinámica corporativa internacional y negociación multicultural.",
                "Precisión Operativa: Expertiz en optimizar procesos, gestionar stakeholders internacionales y garantizar que cada detalle organizacional esté alineado con los objetivos de máxima jerarquía.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-[#3b8c5e]" />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-white/60 leading-relaxed font-light pt-4">
              Carolina representa el estándar de profesionalismo y eficiencia
              que define nuestra propuesta de valor, asegurando que la
              estructura de cada proyecto sea ejecutada con precisión absoluta.
            </p>
          </div>

          {/* IMAGE */}
          <div className="group relative w-full h-[320px] md:h-auto md:min-h-[520px] rounded-2xl overflow-hidden md:order-2 order-1">
            <Image
              src="/Carolina.jpeg"
              alt="Carolina Garibaldi"
              fill
              className="object-cover transition duration-[1200ms] ease-out group-hover:scale-105"
            />

            {/* overlay base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* sombra superior */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent pointer-events-none" />

            {/* glow hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 
              bg-[radial-gradient(circle_at_50%_20%,rgba(201,168,76,0.18),transparent_60%)]"
            />
          </div>
        </div>

        {/* FRASE */}
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xl md:text-3xl text-slate-300 italic font-light leading-relaxed"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
          >
            “La integridad no es un valor corporativo. Es una ventaja
            competitiva.”
          </p>

          <div className="w-12 h-px bg-[#C9A84C] mx-auto mt-6 opacity-60" />
        </div>

        {/* SEO oculto */}
        <div className="hidden">
          consultor de liderazgo ético, experto en cultura organizacional,
          transformación corporativa, estratega empresarial, resiliencia en el
          liderazgo
        </div>
      </div>
    </section>
  );
}
