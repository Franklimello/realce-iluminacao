import FotosPageClient from "./page.client";

export const metadata = {
  title: "Galeria de Iluminação Cênica | Realce Iluminação",
  description:
    "Confira projetos reais de iluminação cênica, pistas de dança e efeitos especiais realizados pela Realce Iluminação Cênica.",
  keywords: [
    "galeria iluminação cênica",
    "referências iluminação de eventos",
    "iluminação para casamento",
    "realce iluminação fotos",
  ],
  alternates: {
    canonical: "/fotos",
  },
  openGraph: {
    title: "Portfolio de Iluminação Cênica | Realce",
    description:
      "Inspire-se com fotos e vídeos de casamentos, festas e eventos iluminados pela Realce Iluminação Cênica.",
    url: "https://realceiluminacaocenica.com.br/fotos",
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

export default function FotosPage() {
  return <FotosPageClient />;
}

