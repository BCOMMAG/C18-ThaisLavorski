import type { Metadata } from "next";
import { Inter, Krub } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const krub = Krub({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thaislavorski.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Thais Iavorski Advocacia | Direito de Família e Sucessões - Curitiba PR",
    template: "%s | Thais Iavorski Advocacia",
  },
  description:
    "Defesa humanizada, ágil e estratégica em Direito de Família, Sucessões, Divórcio, Inventário e Planejamento Patrimonial. Sede física em Curitiba/PR e atendimento online em todo o Brasil.",
  keywords: [
    "advogada direito de familia curitiba",
    "advogada especialista inventario curitiba",
    "divórcio consensual e litigioso curitiba",
    "partilha de bens e união estável",
    "planejamento sucessorio familiar curitiba",
    "pensao alimenticia e revisional",
    "guarda compartilhada e convivencia",
    "thais iavorski advocacia",
    "thais lavorski advogada",
  ],
  authors: [{ name: "Thais Iavorski" }],
  creator: "Thais Iavorski",
  publisher: "Thais Iavorski Advocacia",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Thais Iavorski Advocacia | Direito de Família e Sucessões - Curitiba PR",
    description:
      "Defesa humanizada, ágil e estratégica em Direito de Família, Sucessões, Divórcio, Inventário e Planejamento Patrimonial. Sede física em Curitiba/PR e atendimento online em todo o Brasil.",
    siteName: "Thais Iavorski Advocacia",
    images: [
      {
        url: "/og-image_optimized_300.jpg",
        width: 1200,
        height: 630,
        alt: "Thais Iavorski Advocacia - Especialista em Direito de Família e Sucessões",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thais Iavorski Advocacia | Direito de Família e Sucessões - Curitiba PR",
    description:
      "Soluções jurídicas humanizadas e estratégicas em Direito de Família e Sucessões. Atendimento presencial na sede em Curitiba/PR e online para todo o Brasil.",
    images: ["/og-image_optimized_300.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-apple-touch-icon180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon-.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${krub.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[var(--accent)] selection:text-white">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}