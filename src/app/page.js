import HomePageClient from "./_components/HomePageClient";

export const metadata = {
  title: "Iluminação Cênica em Minas Gerais | Realce Iluminação",
  description:
    "Crie experiências inesquecíveis com iluminação cênica, pistas iluminadas e efeitos especiais da Realce Iluminação Cênica.",
  keywords: [
    "iluminação para eventos",
    "ambientação com luz",
    "pista iluminada",
    "iluminação casamento",
    "realce iluminação",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Iluminação Cênica que transforma eventos em experiências",
    description:
      "Conheça a Realce Iluminação Cênica: soluções premium de iluminação para casamentos, festas e eventos corporativos.",
    url: "https://realceiluminacaocenica.com.br/",
    images: [
      {
        url: "https://realceiluminacaocenica.com.br/logo.jpeg",
        width: 800,
        height: 800,
        alt: "Logo da Realce Iluminação Cênica",
      },
    ],
  },
};

export default function Home() {
  return <HomePageClient />;
}
