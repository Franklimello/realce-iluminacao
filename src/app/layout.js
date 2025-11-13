import Script from "next/script";
import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const siteUrl = "https://realceiluminacaocenica.com.br";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Realce Iluminação Cênica | Iluminação para Eventos",
    template: "%s | Realce Iluminação Cênica",
  },
  description:
    "Iluminação cênica profissional, pistas de dança e efeitos luminosos exclusivos para casamentos, festas e eventos corporativos.",
  keywords: [
    "iluminação cênica",
    "locação de iluminação",
    "pista de led",
    "lustre paris",
    "eventos corporativos",
    "casamento iluminado",
    "ambientação com luz",
    "iluminação decorativa",
    "realce iluminação",
  ],
  applicationName: "Realce Iluminação Cênica",
  authors: [{ name: "Realce Iluminação Cênica" }],
  creator: "Realce Iluminação Cênica",
  publisher: "Realce Iluminação Cênica",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Realce Iluminação Cênica",
    title: "Realce Iluminação Cênica | Iluminação para Eventos",
    description:
      "Iluminação cênica premium, pistas de led e efeitos especiais para transformar o seu evento em uma experiência inesquecível.",
    images: [
      {
        url: `${siteUrl}/logo.jpeg`,
        width: 800,
        height: 800,
        alt: "Logo da Realce Iluminação Cênica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Realce Iluminação Cênica | Iluminação para Eventos",
    description:
      "Especialistas em iluminação cênica, pistas iluminadas e efeitos de luz para casamentos, festas de 15 anos e eventos corporativos.",
    images: [`${siteUrl}/logo.jpeg`],
  },
  icons: {
    icon: [
      { url: "/logo.jpeg", type: "image/jpeg" },
      { url: "/logo.jpeg", type: "image/jpeg", sizes: "192x192" },
    ],
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Realce Iluminação Cênica",
    url: siteUrl,
    description:
      "Empresa especializada em iluminação cênica, pistas iluminadas e efeitos de luz para casamentos, aniversários e eventos corporativos.",
    logo: `${siteUrl}/logo.jpeg`,
    sameAs: [
      "https://www.instagram.com/realceiluminacaocenica/",
      "https://wa.me/5533999443382",
    ],
    areaServed: {
      "@type": "State",
      name: "Minas Gerais",
    },
    serviceType: [
      "Iluminação Cênica",
      "Locação de Pista de Dança Iluminada",
      "Efeitos Luminosos Decorativos",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Portuguese"],
      telephone: "+55 33 99944-3382",
    },
  };

  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
