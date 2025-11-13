import LocacaoPageClient from "./page.client";

export const metadata = {
  title: "Locação de Iluminação Cênica | Realce Iluminação",
  description:
    "Monte seu pacote de locação com iluminação cênica, pistas de dança iluminadas, lustres Paris, lâmpadas de filamento e mais soluções da Realce Iluminação.",
  keywords: [
    "locação iluminação cênica",
    "aluguel pista de led",
    "iluminação para festa 15 anos",
    "iluminação casamento minas gerais",
    "realce iluminação locação",
  ],
  alternates: {
    canonical: "/locacao",
  },
  openGraph: {
    title: "Monte seu Pacote de Iluminação para Eventos | Realce",
    description:
      "Selecione os efeitos luminosos ideais e envie sua lista de locação para a equipe da Realce Iluminação pelo WhatsApp.",
    url: "https://realceiluminacaocenica.com.br/locacao",
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

export default function LocacaoPage() {
  return <LocacaoPageClient />;
}
