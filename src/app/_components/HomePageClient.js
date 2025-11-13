"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function HomePageClient() {
  const [lightsOn, setLightsOn] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    const storedValue = window.localStorage.getItem("realceLightsOn");
    return storedValue === "true";
  });

  const toggleLights = useCallback(() => {
    setLightsOn((previous) => {
      const nextValue = !previous;
      if (typeof window !== "undefined") {
        window.localStorage.setItem("realceLightsOn", String(nextValue));
      }
      return nextValue;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleLights();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleLights]);

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-fixed px-6 py-6 font-sans text-zinc-100"
      style={{
        backgroundImage: 'url("/principal.jpeg")',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <div
        className={`fixed inset-0 bg-[rgba(5,8,15,0.85)] transition-all duration-700 ${
          lightsOn ? "invisible opacity-0" : "visible opacity-100"
        }`}
        aria-hidden="true"
      />

      <button
        type="button"
        className="fixed top-8 right-8 z-10 flex items-center gap-3 rounded-full bg-transparent px-2 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:text-base"
        onClick={toggleLights}
        aria-pressed={lightsOn}
        aria-label="Alternar iluminação"
      >
        <span
          className={`relative h-8 w-16 rounded-full border border-white/30 transition-colors duration-500 ${
            lightsOn ? "border-yellow-400/90 bg-yellow-400/80" : "bg-white/20"
          }`}
        >
          <span className="sr-only">Interruptor</span>
          <span
            className={`absolute left-[4px] top-[4px] h-6 w-6 rounded-full bg-slate-50 shadow-[0_6px_16px_rgba(15,23,42,0.35)] transition-transform duration-500 ${
              lightsOn
                ? "translate-x-[28px] shadow-[0_6px_16px_rgba(250,204,21,0.5)]"
                : "translate-x-0"
            }`}
          />
        </span>
        <span className="hidden text-sm sm:inline">Interruptor</span>
      </button>

      <main className="relative z-0 flex w-full items-center justify-center">
        <section
          className={`max-w-xl rounded-3xl border border-white/10 bg-black/40 px-6 py-10 text-center shadow-[0_24px_40px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-transform duration-700 sm:px-10 ${
            lightsOn ? "scale-[1.02]" : "scale-100"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="Logo Realce Iluminação Cênica"
              width={90}
              height={90}
              className="rounded-md shadow-[0_10px_20px_rgba(2,6,23,0.35)]"
            />
            <h1
              className="text-center text-5xl uppercase tracking-[0.18em] text-zinc-100 sm:text-[3.6rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-[#7f1d1d]">Realce</span>{" "}
              <span className="text-[#facc15]">Iluminação Cênica</span>
            </h1>
          </div>
          <p className="mb-10 text-base leading-relaxed text-zinc-200 sm:text-lg">
            Transformamos ambientes com luz, criando experiências visuais únicas
            e memoráveis para cada evento.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-full border border-white/30 bg-linear-to-r from-[#7f1d1d] to-[#4c0519] px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(47,12,29,0.45)] sm:text-sm"
              href="/fotos"
            >
              Fotos
            </Link>
            <Link
              className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-full border border-white/30 bg-linear-to-r from-[#facc15] to-[#f59e0b] px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(250,204,21,0.35)] sm:text-sm"
              href="/locacao"
            >
              Locação
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
