import Link from "next/link";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080a08] text-white">
      <Navbar />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-16 md:py-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-400/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            BREATHE DIFFERENT
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            ПОЕМИ
            <br />
            <span className="text-lime-400">ВЪЗДУХ.</span>
            <br />
            ПО-ДОБРЕ.
          </h1>

          <p className="mt-7 max-w-md text-base leading-7 text-gray-400 md:text-lg">
            Открий удобен начин да подпомогнеш отварянето на носните
            проходи с ленти за нос, създадени за ежедневна употреба.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/product"
              className="rounded-full bg-lime-400 px-7 py-4 font-bold text-black transition hover:scale-105 hover:bg-lime-300"
            >
              Открий продукта →
            </Link>

            <Link
              href="#benefits"
              className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-lime-400"
            >
              Научи повече
            </Link>
          </div>

          <p className="mt-8 text-xs tracking-wide text-gray-500">
            33 ЛЕНТИ · ЕДНА ОПАКОВКА
          </p>
        </div>

        <div
          id="product"
          className="relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#111510] p-8 md:min-h-[520px]"
        >
          <div className="absolute h-64 w-64 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="relative w-full max-w-sm rotate-[-5deg] rounded-2xl border border-white/15 bg-[#20251e] p-8 shadow-2xl transition duration-500 hover:rotate-0">
            <div className="flex items-start justify-between">
              <span className="text-2xl font-black">
                NOSE<span className="text-lime-400">.</span>
              </span>

              <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">
                33 PCS
              </span>
            </div>

            <div className="my-12 flex justify-center">
              <div className="flex h-32 w-56 items-center justify-center rounded-xl border border-white/10 bg-[#30372b]">
                <div className="h-10 w-36 rounded-full border-2 border-lime-400 bg-[#c8d4b7] shadow-[0_0_35px_rgba(163,230,53,0.15)]" />
              </div>
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
              BREATHE BETTER
            </p>

            <h2 className="mt-2 text-2xl font-black">
              NASAL STRIPS
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Everyday breathing support
            </p>
          </div>

          <span className="absolute bottom-5 right-6 text-xs text-gray-600">
            PRODUCT CONCEPT
          </span>
        </div>
      </section>

      <section
        id="benefits"
        className="border-t border-white/10 px-6 py-16 md:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-lime-400">
              01 / УДОБСТВО
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Лесни за поставяне
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Практичен формат за ежедневната ти рутина.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-lime-400">
              02 / ПРАКТИЧНОСТ
            </p>

            <h3 className="mt-3 text-xl font-bold">
              33 броя в опаковка
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Компактна опаковка, удобна за съхранение.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-lime-400">
              03 / ТВОЯТА РУТИНА
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Минималистичен подход
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Един малък продукт, лесен за включване в ежедневието.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 NOSE. Всички права запазени.
      </footer>
    </main>
  );
}