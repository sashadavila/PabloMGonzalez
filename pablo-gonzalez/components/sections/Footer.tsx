import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full pt-16 pb-10 bg-[#0d0d0d] border-t border-white/10">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col gap-8">
        {/* Top */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo + descripción */}
          <div className="flex flex-col max-w-[220px]">
            <Link href="/" className="flex justify-center h-10 md:h-12">
              <Image
                src="/ICONO.3.png"
                alt="Logo"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </Link>

            <p className="mt-3 text-center font-semibold tracking-wide">
              PABLO GONZALEZ
            </p>

            <p className="mt-2 text-center text-[#c4c7c7] text-[10px] tracking-[0.15em] uppercase leading-snug">
              Consultoría de alto impacto para líderes que buscan la excelencia
              estructural.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {/* Ubicación */}
            <div className="space-y-2">
              <span className="text-white text-[10px] tracking-widest uppercase block mb-2">
                Ubicación
              </span>
              <a
                href="#"
                className="text-[#c4c7c7] text-[10px] tracking-[0.15em] uppercase block hover:text-[#e6c35c] transition-colors duration-300"
              >
                Buenos Aires / Remote
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex justify-center">
          <p className="text-[#c6c6c7] text-[10px] tracking-[0.15em] uppercase opacity-50">
            © 2024 Pablo González Todos los Derechos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
