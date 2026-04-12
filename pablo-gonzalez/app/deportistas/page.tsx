// import { Footer, Navbar } from "@/components/sections";
// import { ContactFormDeportistas } from "@/components/sections/deportista/ContactFormDeportista";
// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Alto Rendimiento Deportivo",
//   description:
//     "Forjando la mentalidad de campeón bajo presión extrema. Herramientas psicológicas y estratégicas para deportistas que no aceptan menos que la excelencia.",
// };

// // ─── Types ────────────────────────────────────────────────────────────────────

// type Pillar = {
//   icon: string;
//   title: string;
//   description: string;
// };

// type MethodItem = {
//   title: string;
//   description: string;
// };

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const pillars: Pillar[] = [
//   {
//     icon: "trending_up",
//     title: "Resilience",
//     description:
//       "Capacidad de absorber el impacto del fracaso y transformarlo en combustible para la victoria. Superando adversidades con gracia y determinación.",
//   },
//   {
//     icon: "psychology",
//     title: "Mental Toughness",
//     description:
//       "Foco inquebrantable en medio del caos competitivo. Entrenamiento en control atencional y gestión emocional de alta intensidad.",
//   },
//   {
//     icon: "ads_click",
//     title: "Strategy",
//     description:
//       "Planificación mental táctica. Anticipación de escenarios y toma de decisiones críticas en milésimas de segundo.",
//   },
//   {
//     icon: "verified_user",
//     title: "Ethical Leadership",
//     description:
//       "Integridad al más alto nivel. Liderar con el ejemplo dentro y fuera del campo, construyendo un legado duradero.",
//   },
// ];

// const methodItems: MethodItem[] = [
//   {
//     title: "Diagnóstico Biopsicosocial",
//     description:
//       "Evaluación profunda de las capacidades actuales y barreras mentales limitantes.",
//   },
//   {
//     title: "Entrenamiento de Biofeedback",
//     description:
//       "Uso de tecnología avanzada para monitorear y optimizar la respuesta al estrés.",
//   },
//   {
//     title: "Simulación Competitiva",
//     description:
//       "Práctica deliberada en entornos controlados de máxima presión psicológica.",
//   },
// ];

// const mobileNavLinks = [
//   { icon: "home", label: "Inicio", href: "/" },
//   { icon: "fitness_center", label: "Rendimiento", href: "#metodologia" },
//   { icon: "school", label: "Academy", href: "#programas" },
//   { icon: "contact_page", label: "Contacto", href: "#contacto" },
// ];

// // ─────────────────────────────────────────────────────────────────────────────

// function Hero() {
//   return (
//     <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
//       {/* Background */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#3a8d61]/10 via-transparent to-[#151d19]" />
//         <Image
//           src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP2cmI4pHT4zaiTG0Zm0Iq6t6c-guqKTGCPjKT3LGSVGn5wdSLI8NdefBcwQOAI2e8lYqdZZDKrJxAKrKpvZkXppojk33Cl02JLhLCczhlrnr2uTFRbEgE1SJ63nlDvKtqifX1doq7Gl9D3ndQFzsYvl2UUt_ax5q0hzXR7AR52vuZmSMz7QVLu8DDvfEDTHh0hWI1ADEBASyRTszfg513dJaR1t37ZdKUuM9Kuav4vdaTT8cjmt0OypFB22-qhPtafi3zLtuSzkc"
//           alt="Atleta profesional concentrándose antes de una carrera"
//           fill
//           className="object-cover opacity-30 grayscale"
//           priority
//         />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl">
//           <div className="inline-flex items-center gap-2 rounded-full border border-[#3a8d61]/30 bg-[#3a8d61]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#3a8d61] mb-6">
//             Alto Rendimiento
//           </div>

//           <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-6">
//             Liderazgo en la{" "}
//             <span className="text-[#3a8d61]">Élite Deportiva</span>
//           </h1>

//           <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
//             Forjando la mentalidad de campeón bajo presión extrema. Herramientas
//             psicológicas y estratégicas para deportistas que no aceptan menos
//             que la excelencia.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <Link
//               href="#contacto"
//               className="bg-[#3a8d61] hover:bg-[#3a8d61]/90 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-[#3a8d61]/20 transition-all text-center"
//             >
//               Optimizar mi Rendimiento
//             </Link>
//             <Link
//               href="#programas"
//               className="border border-slate-700 hover:border-[#3a8d61] px-8 py-4 rounded-xl text-lg font-bold transition-all text-center"
//             >
//               Ver Programas
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────

// function PillarCard({ icon, title, description }: Pillar) {
//   return (
//     <div className="glass-panel p-8 rounded-xl flex flex-col items-start gap-4">
//       <div className="bg-[#3a8d61]/20 p-3 rounded-lg">
//         <span
//           className="material-symbols-outlined text-[#3a8d61] text-3xl"
//           aria-hidden="true"
//         >
//           {icon}
//         </span>
//       </div>
//       <h3 className="text-xl font-bold">{title}</h3>
//       <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
//     </div>
//   );
// }

// function CorePillars() {
//   return (
//     <section id="programas" className="py-20 bg-[#f6f7f7] dark:bg-[#1a231f]">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {pillars.map((pillar) => (
//             <PillarCard key={pillar.title} {...pillar} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────

// function Methodology() {
//   return (
//     <section id="metodologia" className="py-24">
//       <div className="mx-auto max-w-7xl px-4 flex flex-col lg:flex-row items-center gap-16">
//         {/* Image */}
//         <div className="lg:w-1/2">
//           <div className="relative">
//             <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#3a8d61]/20 rounded-full blur-2xl" />
//             <Image
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxeksjltTydt1EKSvOJF7MnnGDSAuhJem4mWC2sqBsUnkjfbthZqXcDxroaJpbPkS1akFznZ1SdwPyk6pnBWBZ5199ov6fag3GW_crlyBgVVYh6OaYVXNklgbgw99lHyb6WcomyHdPMx8bAV1Wwpm36cZm9vrbtxQekaBXnRe3nPG9cD4UgMnTVJ851IAw2YT8beavRHdPnPvFV_WqtAruRkP55qjrt4E5UXAXcwHohEYlvOt4tHb88y7RWMmWXNzaJOPrwxRqdQk"
//               alt="Sesión de entrenamiento profesional de alto rendimiento"
//               width={600}
//               height={450}
//               className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full"
//             />
//           </div>
//         </div>

//         {/* Text */}
//         <div className="lg:w-1/2 space-y-8">
//           <h2 className="text-3xl font-bold leading-tight">
//             Metodología de{" "}
//             <span className="text-[#3a8d61]">Impacto Inmediato</span>
//           </h2>

//           <ul className="space-y-6">
//             {methodItems.map(({ title, description }) => (
//               <li key={title} className="flex gap-4">
//                 <span
//                   className="material-symbols-outlined text-[#3a8d61] shrink-0"
//                   aria-hidden="true"
//                 >
//                   check_circle
//                 </span>
//                 <div>
//                   <h3 className="font-bold mb-1">{title}</h3>
//                   <p className="text-slate-400">{description}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// function MobileNav() {
//   return (
//     <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#151d19]/95 border-t border-[#3a8d61]/20 backdrop-blur-md px-4 py-2">
//       <nav
//         aria-label="Navegación móvil"
//         className="flex justify-between items-center max-w-md mx-auto"
//       >
//         {mobileNavLinks.map(({ icon, label, href }, i) => (
//           <Link
//             key={label}
//             href={href}
//             className={`flex flex-col items-center gap-1 ${
//               i === 0 ? "text-[#3a8d61]" : "text-slate-400"
//             }`}
//           >
//             <span className="material-symbols-outlined" aria-hidden="true">
//               {icon}
//             </span>
//             <span className="text-[10px] font-bold">{label}</span>
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// }

// // ─── Page ─────────────────────────────────────────────────────────────────────

// export default function DeportistasPage() {
//   return (
//     <>
//       <Navbar
//         accent="green"
//         links={[
//           { label: "Programas", href: "#programas" },
//           { label: "Metodología", href: "#metodologia" },
//           { label: "Blog", href: "#blog" },
//         ]}
//         ctaLabel="Optimizar mi Rendimiento"
//         ctaHref="#contacto"
//       />
//       <main className="pb-16 md:pb-0">
//         <Hero />
//         <CorePillars />
//         <Methodology />
//         <ContactFormDeportistas />
//       </main>
//       <Footer />
//       <MobileNav />
//     </>
//   );
// }
