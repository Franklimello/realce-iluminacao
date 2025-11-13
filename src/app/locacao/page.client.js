"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Logo from "../../../public/logo.jpeg";
import Cerimonia from "../../../public/iluminacao/cerimonia.jpeg";
import IluminacaoCenica from "../../../public/iluminacao/iluminacao cenica.jpeg";
import LampadasFilamento from "../../../public/iluminacao/lampadas de filamento.jpeg";
import LustreParis from "../../../public/iluminacao/lustre paris.jpeg";
import NuvemLed from "../../../public/iluminacao/nuvem de led.jpeg";
import PisoParis from "../../../public/iluminacao/piso paris.jpeg";
import TunelLed from "../../../public/iluminacao/tunel de led.jpeg";

const produtos = [
  {
    id: "cerimonia",
    nome: "Cenografia Cerimônia",
    descricao: "Estruturas de iluminação que destacam altar e passarela",
    imagem: Cerimonia,
  },
  {
    id: "iluminacao-cenica",
    nome: "Iluminação Cênica",
    descricao: "Banho de luz personalizado para valorizar todo o ambiente",
    imagem: IluminacaoCenica,
  },
  {
    id: "lampadas-filamento",
    nome: "Lâmpadas de Filamento",
    descricao: "Clima acolhedor com iluminação quente e charmosa",
    imagem: LampadasFilamento,
  },
  {
    id: "lustre-paris",
    nome: "Lustre Paris",
    descricao: "Lustre icônico para transformar o centro do salão",
    imagem: LustreParis,
  },
  {
    id: "nuvem-led",
    nome: "Nuvem de LED",
    descricao: "Efeito cenográfico que envolve a pista com luz e movimento",
    imagem: NuvemLed,
  },
  {
    id: "piso-paris",
    nome: "Piso Paris",
    descricao: "Pista de dança iluminada com leds dinâmicos",
    imagem: PisoParis,
  },
  {
    id: "tunel-led",
    nome: "Túnel de LED",
    descricao: "Efeito cenográfico que envolve a pista com luz e movimento",
    imagem: TunelLed,
  },
];

export default function LocacaoPageClient() {
  const [selecionados, setSelecionados] = useState([]);
  const [cidade, setCidade] = useState("");
  const [tipoEvento, setTipoEvento] = useState("");

  const alternarProduto = (id) => {
    setSelecionados((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const produtosSelecionados = useMemo(
    () => produtos.filter((produto) => selecionados.includes(produto.id)),
    [selecionados]
  );

  const mensagemWhatsapp = useMemo(() => {
    if (!produtosSelecionados.length) {
      return "Olá, gostaria de saber mais sobre as opções de locação.";
    }

    const lista = produtosSelecionados
      .map((produto, index) => `${index + 1}. ${produto.nome}`)
      .join("%0A");

    const cidadeTexto = cidade ? `%0ACidade do evento: ${cidade}` : "";
    const tipoEventoTexto = tipoEvento
      ? `%0ATipo de evento: ${tipoEvento}`
      : "";

    return `Olá, eu gostaria de locar:%0A${lista}${cidadeTexto}${tipoEventoTexto}`;
  }, [produtosSelecionados, cidade, tipoEvento]);

  const linkWhatsapp = `https://wa.me/5533999443382?text=${mensagemWhatsapp}`;

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
                    className="relative rounded-2xl shadow-2xl ring-2 ring-white/10 transition-transform hover:scale-105"
                    priority
                  />
                </Link>
              </div>
              <div>
                <h1 className="bg-linear-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                  REALCE LOCAÇÃO
                </h1>
                <p className="mt-1 text-sm font-light tracking-wider text-slate-400">
                  Iluminação para eventos memoráveis
                </p>
              </div>
            </div>

            <div className="hidden gap-3 md:flex">
              <a
                href="https://www.instagram.com/realceiluminacao/"
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

          {/* Hero Section */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-linear-to-br from-amber-500/10 to-rose-500/10 p-8 backdrop-blur-sm">
              <div className="absolute right-0 top-0 h-32 w-32 bg-linear-to-br from-amber-400/20 to-transparent blur-3xl" />
              <div className="relative">
                <h2 className="bg-linear-to-r from-amber-200 to-amber-400 bg-clip-text text-2xl font-bold tracking-wider text-transparent">
                  MONTE SEU PACOTE IDEAL
                </h2>
                <p className="mt-4 leading-relaxed text-slate-300">
                  Selecione os produtos que deseja locar, informe cidade e tipo
                  de evento e envie direto para nossa equipe no WhatsApp. Em
                  poucos minutos respondemos com orçamento e disponibilidade.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-linear-to-br from-amber-500/5 to-transparent p-6 backdrop-blur-sm">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-amber-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  DICA REALCE
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  Combine iluminação cênica com o Piso Paris para criar
                  ambientes completos, da cerimônia à pista de dança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Products Section */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <h3 className="bg-linear-to-r from-amber-200 to-amber-400 bg-clip-text text-xl font-bold tracking-wider text-transparent">
              ESCOLHA OS PRODUTOS
            </h3>
            <div className="h-1 flex-1 rounded-full bg-linear-to-r from-amber-400/30 to-transparent" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {produtos.map((produto) => {
              const ativo = selecionados.includes(produto.id);
              return (
                <button
                  key={produto.id}
                  type="button"
                  onClick={() => alternarProduto(produto.id)}
                  className={`group relative overflow-hidden rounded-3xl text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    ativo
                      ? "ring-2 ring-amber-500 shadow-2xl shadow-amber-500/30"
                      : "ring-1 ring-white/10 hover:ring-white/20"
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={produto.imagem}
                      alt={produto.nome}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    />
                    <div
                      className={`absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent transition-opacity ${
                        ativo
                          ? "opacity-60"
                          : "opacity-40 group-hover:opacity-50"
                      }`}
                    />

                    {/* Badge */}
                    {ativo && (
                      <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-linear-to-r from-amber-400 to-amber-500 px-4 py-2 text-xs font-bold tracking-wider text-slate-900 shadow-lg shadow-amber-500/50">
                        <span className="h-2 w-2 rounded-full bg-slate-900 animate-pulse" />
                        SELECIONADO
                      </div>
                    )}

                    {/* Checkmark */}
                    <div className="absolute bottom-4 right-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                          ativo
                            ? "bg-linear-to-br from-amber-400 to-amber-500 shadow-lg shadow-amber-500/50"
                            : "bg-white/10 backdrop-blur-sm group-hover:bg-white/20"
                        }`}
                      >
                        <svg
                          className={`h-6 w-6 transition-colors ${
                            ativo ? "text-slate-900" : "text-white"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-linear-to-b from-slate-900 to-black p-6">
                    <h4 className="mb-2 text-lg font-bold tracking-wide text-amber-200">
                      {produto.nome}
                    </h4>
                    <p className="mb-3 text-sm leading-relaxed text-slate-400">
                      {produto.descricao}
                    </p>
                    <p className="text-xs font-medium tracking-wider text-amber-500/80">
                      {ativo ? "CLIQUE PARA REMOVER" : "CLIQUE PARA SELECIONAR"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Form Section */}
        <section className="mt-16 grid gap-8 overflow-hidden rounded-3xl border border-white/5 bg-linear-to-br from-slate-900/50 to-black/50 p-8 backdrop-blur-xl lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-bold tracking-wider text-amber-400">
                CIDADE DO EVENTO
              </label>
              <input
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Ex: Teófilo Otoni - MG"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 placeholder-slate-500 backdrop-blur-sm outline-none transition focus:border-amber-500/50 focus:bg-white/10 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold tracking-wider text-amber-400">
                TIPO DE EVENTO
              </label>
              <input
                value={tipoEvento}
                onChange={(e) => setTipoEvento(e.target.value)}
                placeholder="Ex: Casamento, Festa de 15 anos, Corporativo"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 placeholder-slate-500 backdrop-blur-sm outline-none transition focus:border-rose-500/50 focus:bg-white/10 focus:ring-2 focus:ring-rose-500/20"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-base font-bold tracking-wider text-amber-200">
              PRODUTOS SELECIONADOS
            </h3>
            <div className="min-h-[160px] rounded-2xl border border-dashed border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              {produtosSelecionados.length ? (
                <ul className="space-y-3">
                  {produtosSelecionados.map((produto) => (
                    <li
                      key={produto.id}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                        ✓
                      </span>
                      <span>{produto.nome}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-500">
                  Nenhum item selecionado ainda. Clique em um card para montar
                  seu pacote de iluminação.
                </p>
              )}
            </div>

            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-linear-to-r from-amber-400 via-amber-500 to-rose-500 px-8 py-5 text-sm font-bold tracking-wider text-slate-900 shadow-2xl shadow-amber-500/30 transition-all hover:shadow-amber-500/50"
            >
              <span className="relative z-10 flex items-center gap-3">
                ENVIAR PARA WHATSAPP
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-amber-300 to-rose-400 transition-transform group-hover:translate-x-0" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
