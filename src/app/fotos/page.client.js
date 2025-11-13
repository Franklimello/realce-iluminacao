"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import Logo from "../../../public/logo.jpeg";
import Img1 from "../../../public/galeria/img1.jpeg";
import Img2 from "../../../public/galeria/img2.jpeg";
import Img3 from "../../../public/galeria/img3.jpeg";
import Img4 from "../../../public/galeria/img4.jpeg";
import Img5 from "../../../public/galeria/img5.jpeg";
import Img6 from "../../../public/galeria/img6.jpeg";
import Img7 from "../../../public/galeria/img7.jpeg";
import Img8 from "../../../public/galeria/img8.jpeg";
import Img9 from "../../../public/galeria/img9.jpeg";
import Img10 from "../../../public/galeria/img10.jpeg";
import Img11 from "../../../public/galeria/img11.jpeg";
import Img12 from "../../../public/galeria/img12.jpeg";
import Img13 from "../../../public/galeria/img13.jpeg";
import Img14 from "../../../public/galeria/img14.jpeg";
import Img15 from "../../../public/galeria/img15.jpeg";
import Img16 from "../../../public/galeria/img16.jpeg";
import Img17 from "../../../public/galeria/img17.jpeg";
import Img18 from "../../../public/galeria/img18.jpeg";
import Img19 from "../../../public/galeria/img19.jpeg";
import Img20 from "../../../public/galeria/img20.jpeg";
import Img21 from "../../../public/galeria/img21.jpeg";

const fotos = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
  Img21,
];

export default function FotosPageClient() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = useCallback((index) => setSelectedIndex(index), []);
  const closeModal = useCallback(() => setSelectedIndex(null), []);

  const selectedPhoto = useMemo(
    () => (selectedIndex !== null ? fotos[selectedIndex] : null),
    [selectedIndex]
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black">
      {/* Header Premium */}
      <header className="relative border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="absolute inset-0 bg-linear-to-r from-amber-500/5 via-transparent to-rose-500/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-amber-400 via-amber-500 to-rose-500 opacity-75 blur-lg" />
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="Logo da Realce Iluminação Cênica"
                    width={90}
                    height={90}
                    className="relative rounded-2xl shadow-2xl ring-2 ring-white/10"
                  />
                </Link>
              </div>
              <div>
                <h1 className="bg-linear-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                  REALCE ILUMINAÇÃO
                </h1>
                <p className="mt-1 text-sm font-light tracking-wider text-slate-400">
                  Iluminando experiências inesquecíveis
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://www.instagram.com/realceiluminacaocenica/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full bg-linear-to-r from-rose-600 to-rose-700 px-8 py-3 font-medium text-white shadow-lg shadow-rose-900/50 transition-all hover:shadow-xl hover:shadow-rose-900/60"
              >
                <span className="relative z-10 text-sm tracking-wide">
                  Instagram
                </span>
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-rose-500 to-rose-600 transition-transform group-hover:translate-x-0" />
              </a>
              <a
                href="https://wa.me/5533999443382"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full bg-linear-to-r from-amber-400 to-amber-500 px-8 py-3 font-medium text-slate-900 shadow-lg shadow-amber-900/50 transition-all hover:shadow-xl hover:shadow-amber-900/60"
              >
                <span className="relative z-10 text-sm tracking-wide">
                  WhatsApp
                </span>
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-amber-300 to-amber-400 transition-transform group-hover:translate-x-0" />
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Iluminação Cênica",
              "Pista Paris",
              "Túnel de LED",
              "Lustre Paris",
              "Eventos Premium",
            ].map((service) => (
              <span
                key={service}
                className="rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-md font-medium tracking-wide text-amber-200 backdrop-blur-sm"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Mobile destaque locação */}
          <div className="mt-8 flex flex-col items-start gap-4 rounded-3xl border border-amber-500/20 bg-linear-to-br from-amber-500/10 via-transparent to-rose-500/10 px-6 py-8 text-left shadow-lg shadow-black/30 md:hidden">
            <h2 className="text-2xl font-semibold uppercase tracking-[0.25em] text-amber-200">
              Locação
            </h2>
            <p className="text-base leading-relaxed text-slate-200/90">
              Leve o brilho da Realce para o seu evento com estruturas, pistas,
              túneis e luzes exclusivas. Transforme qualquer ambiente em uma
              experiência memorável.
            </p>
            <Link
              href="/locacao"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-linear-to-r from-amber-400 to-rose-500 px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-black shadow-lg shadow-rose-900/40 transition-all hover:shadow-xl hover:shadow-rose-900/50"
            >
              <span className="relative z-10">Quero locar iluminação</span>
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-amber-300 to-amber-100 transition-transform duration-300 group-hover:translate-x-0" />
            </Link>
          </div>
        </div>
      </header>

      {/* Gallery */}
      <section className="mx-auto w-full max-w-7xl px-0 pb-20 pt-6">
        <div className="mb-8 px-6">
          <h2 className="bg-linear-to-r from-amber-200 to-amber-400 bg-clip-text text-2xl font-bold tracking-wider text-transparent">
            GALERIA
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-rose-500" />
        </div>

        {/* Grid sem espaços - estilo Instagram */}
        <div className="grid grid-cols-3 gap-0 sm:grid-cols-4 lg:grid-cols-5">
          {fotos.map((foto, index) => (
            <button
              key={foto.src ?? index}
              type="button"
              className="group relative aspect-square overflow-hidden focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-amber-400"
              onClick={() => openModal(index)}
            >
              <Image
                src={foto}
                alt={`Foto ${index + 1} - Realce Iluminação Cênica`}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 25vw, 33vw"
                className="object-cover transition-all duration-500 group-hover:scale-110"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </section>

      {/* Modal Premium */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm px-4 py-6"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute -top-14 right-0 rounded-full bg-white/10 px-6 py-2 text-sm font-medium tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white/20"
              aria-label="Fechar visualização"
            >
              FECHAR
            </button>

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-3xl bg-black/50 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 via-transparent to-rose-500/10" />
              <div className="relative h-[80vh] w-full">
                <Image
                  src={selectedPhoto}
                  alt="Foto selecionada - Realce Iluminação Cênica"
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
            </div>

            {/* Navigation */}
            {selectedIndex > 0 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(selectedIndex - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                aria-label="Foto anterior"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            {selectedIndex < fotos.length - 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(selectedIndex + 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                aria-label="Próxima foto"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Mobile Actions */}
      <div className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 gap-3 md:hidden">
        <a
          href="https://www.instagram.com/realceiluminacaocenica/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-linear-to-r from-rose-600 to-rose-700 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-rose-900/50"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/5533999443382"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-linear-to-r from-amber-400 to-amber-500 px-6 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-amber-900/50"
        >
          WhatsApp
        </a>
        <Link
          href="/locacao"
          className="rounded-full bg-linear-to-r from-slate-50 to-amber-100 px-6 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-slate-900/30"
        >
          Locação
        </Link>
      </div>
    </div>
  );
}

