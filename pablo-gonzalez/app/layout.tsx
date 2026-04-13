import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pablo González | Consultoría de Liderazgo Ético",
  description:
    "Estrategias de alto impacto para líderes que buscan transformación.",

  openGraph: {
    title: "Pablo González | Consultoría de Liderazgo Ético",
    description:
      "Estrategias de alto impacto para líderes que buscan transformación.",
    url: "https://pablogonzalez.com",
    siteName: "Pablo González",
    images: [
      {
        url: "https://pablogonzalez.com/LOGOTIPO1.png",
        width: 1200,
        height: 630,
        alt: "Pablo González Consultoría",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pablo González | Consultoría de Liderazgo Ético",
    description:
      "Estrategias de alto impacto para líderes que buscan transformación.",
    images: ["/LOGOTIPO1.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`dark ${manrope.variable}`}>
      <head>
        {/* Material Symbols */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}
