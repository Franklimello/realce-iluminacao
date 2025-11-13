import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contato | Realce Iluminação Cênica",
  description:
    "Fale com a Realce Iluminação Cênica para solicitar orçamentos de iluminação, pistas de dança e efeitos luminosos para eventos.",
  keywords: [
    "contato realce iluminação",
    "orçamento iluminação cênica",
    "fale conosco realce",
    "iluminação para eventos contato",
  ],
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Fale com a Realce Iluminação Cênica",
    description:
      "Entre em contato via Instagram ou WhatsApp e descubra como transformar seu evento com iluminação cênica profissional.",
    url: "https://realceiluminacaocenica.com.br/contato",
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

export default function ContatoPage() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[#0f172a] px-4 py-10 font-sans text-slate-200"
      style={{
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <main className="grid w-full max-w-md justify-items-center gap-6 rounded-3xl border border-slate-400/20 bg-slate-900/90 px-8 py-10 text-center shadow-[0_24px_50px_rgba(14,23,42,0.5)] backdrop-blur-md">
        <Image
          className="rounded-xl shadow-[0_16px_32px_rgba(2,6,23,0.4)]"
          src="/logo.jpeg"
          alt="Logo Realce Iluminação Cênica"
          width={180}
          height={180}
          priority
        />
        <h1
          className="text-3xl uppercase tracking-[0.16em] text-[#facc15]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Contato
        </h1>
        <p className="text-base leading-relaxed text-slate-200/90">
          Vamos iluminar seu evento! Fale com a Realce e descubra como
          transformar ambientes em experiências inesquecíveis.
        </p>
        <div className="grid w-full gap-4 text-sm font-semibold uppercase tracking-[0.08em] text-slate-200/90">
          <div className="space-y-1">
            <span className="block text-xs font-medium text-slate-300/80">
              Instagram
            </span>
            <Link
              className="text-sm tracking-wide text-yellow-300 transition-colors hover:text-yellow-200"
              href="https://www.instagram.com/realceiluminacaocenica/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @realceiluminacaocenica
            </Link>
          </div>
          <div className="space-y-1">
            <span className="block text-xs font-medium text-slate-300/80">
              WhatsApp
            </span>
            <Link
              className="text-sm tracking-wide text-yellow-300 transition-colors hover:text-yellow-200"
              href="https://wa.me/5533999443382"
              target="_blank"
              rel="noopener noreferrer"
            >
              (33) 99944-3382
            </Link>
          </div>
        </div>
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-100/35 px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition-all duration-300 hover:bg-slate-100/10 hover:text-yellow-300"
          href="/"
        >
          Voltar
        </Link>
      </main>
    </div>
  );
}
