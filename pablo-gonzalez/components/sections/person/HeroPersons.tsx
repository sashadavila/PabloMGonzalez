import Link from "next/link";

export default function HeroPersons() {
  return (
    <header className="relative min-h-[707px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-10" />
        <div
          className="w-full h-full bg-center bg-cover"
          role="img"
          aria-label="Portrait of a professional man looking focused in a dark office setting"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlQZLTFCRhQISMojNcRe3kW7noYk_0y0qH06GkJh4eG-XrpgEDmBf-Wwop3RsLab6u60BP2onU9MadfE8S48HEOPWBPjlQPG0GL4qF-xv6Nx2XdC0nKwUZ5-R8joOkdkS-905uMIdZoBa09KRAmhXD8b6GC1PRu2gBYLYHtk9jukCJQ2-D8LRmlGAeLKtj99XMH_tusXSJkazYpoWNAc5d9WLOpa2zKKryex27bWcMeUSet_3chM41TB59oHL4NYlURMGxIkKzBHw')",
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-24">
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

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#liderazgo"
              className="inline-flex items-center justify-center gap-3 bg-[#3b8c5e] text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-[#3b8c5e]/90 transition-all"
            >
              Liderarme a mí mismo
              <span className="material-symbols-outlined" aria-hidden="true">
                north_east
              </span>
            </Link>
            <Link
              href="#adicciones"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:border-[#3b8c5e] hover:text-[#3b8c5e] transition-all"
            >
              Superar una adicción
              <span className="material-symbols-outlined" aria-hidden="true">
                north_east
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}