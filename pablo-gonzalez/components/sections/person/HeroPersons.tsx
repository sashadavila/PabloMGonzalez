import Link from "next/link";

export default function HeroPersons() {
  return (
    <header className="relative min-h-[707px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(0,0,0,0.7),transparent_60%)]" />
        <div
          className="w-full h-full bg-center bg-cover"
          role="img"
          aria-label="Portrait of a professional man looking focused in a dark office setting"
          style={{
            backgroundImage: "url('/spartano.jpeg')",
          }}
        />
      </div>

      <div className="relative z-20 w-full flex items-start justify-start px-6 md:px-16 pt-[12vh]">
        <div className="max-w-3xl">
          <span className="text-[#c5a059] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
            Asesoría Individual de Alto Nivel
          </span>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 italic">
            Forja tu propio{" "}
            <span className="text-[#3b8c5e] not-italic font-bold">camino</span>.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-12">
            Transforma tu potencial en resultados extraordinarios a través de
            una evolución individual diseñada para el líder que busca propósito
            y claridad estratégica.
          </p>
        </div>
      </div>
    </header>
  );
}
