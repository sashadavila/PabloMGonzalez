"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Popup() {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const timer = setTimeout(() => {
      setVisible(true);

      setTimeout(() => {
        setAnimate(true);
      }, 50);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!visible) return;
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div
        className={`
          relative
          transition-all duration-500 ease-out
          ${animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}
        `}
      >
        {/* botón cerrar */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 text-white text-2xl z-10"
        >
          ✕
        </button>

        {/* CONTENEDOR RESPONSIVO */}
        <div className="w-full h-full object-contain scale-110">
          <Image
            src="/Banner.event.jpeg"
            alt="Banner del evento"
            width={1900}
            height={1700}
            className="
              w-full h-full
              object-contain
              md:max-w-[700px] md:h-auto
              rounded-lg
            "
            priority
          />
        </div>
      </div>
    </div>
  );
}
