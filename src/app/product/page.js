"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/layout/Navbar";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  const images = [
    { label: "Опаковка", type: "package" },
    { label: "Лентите", type: "strips" },
    { label: "Детайли", type: "details" },
  ];

  function addToCart() {
    try {
      const cart = JSON.parse(localStorage.getItem("nose-cart") || "[]");
      const existing = cart.find((item) => item.id === "nose-strips");

      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.push({
          id: "nose-strips",
          name: "NOSE Nasal Strips",
          price: 10,
          quantity,
        });
      }

      localStorage.setItem("nose-cart", JSON.stringify(cart));
      setAdded(true);

      window.setTimeout(() => {
        setAdded(false);
      }, 2500);
    } catch (error) {
      console.error("Грешка при добавяне в количката:", error);
    }
  }

  return (
    <main className="min-h-screen bg-[#080a08] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-32 md:px-8">
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="transition hover:text-lime-400">
            Начало
          </Link>
          <span>/</span>
          <span className="text-lime-400">Продукт</span>
        </div>

        <section
          id="product"
          className="grid gap-12 lg:grid-cols-2 lg:items-start"
        >
          <div>
            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#10120f] p-8 md:min-h-[540px]">
              <div className="absolute left-6 top-6 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-lime-400">
                NOSE essentials
              </div>

              {selectedImage === 0 && (
                <div className="relative flex w-full max-w-xs -rotate-3 flex-col items-center justify-center rounded-2xl border border-white/15 bg-[#e7eadf] px-8 py-12 text-center shadow-2xl shadow-black/50">
                  <span className="text-5xl font-black tracking-tighter text-black">
                    NOSE<span className="text-lime-500">.</span>
                  </span>
                  <div className="my-6 h-1 w-16 rounded-full bg-lime-400" />
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-black">
                    Nasal Strips
                  </span>
                  <span className="mt-3 text-xs text-gray-600">
                    Breathe easier. Feel better.
                  </span>
                  <div className="mt-8 flex gap-2">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className="h-2 w-5 rounded-full bg-lime-400"
                      />
                    ))}
                  </div>
                </div>
              )}

              {selectedImage === 1 && (
                <div className="flex flex-col items-center gap-5">
                  {[0, 1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="flex h-10 w-48 items-center justify-center rounded-full border border-white/20 bg-[#e7eadf] shadow-lg"
                    >
                      <div className="h-5 w-24 rounded-full border border-gray-300 bg-white" />
                    </div>
                  ))}
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gray-400">
                    NOSE nasal strips
                  </p>
                </div>
              )}

              {selectedImage === 2 && (
                <div className="max-w-sm text-center">
                  <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-lime-400/30 bg-lime-400/10">
                    <span className="text-5xl text-lime-400">✳</span>
                  </div>
                  <h2 className="text-2xl font-bold">Малък детайл. Разлика.</h2>
                  <p className="mt-3 leading-7 text-gray-400">
                    Създадени за лесно използване и комфорт в ежедневието.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {images.map((image, index) => (
                <button
                  key={image.type}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-xl border px-3 py-4 text-sm transition ${
                    selectedImage === index
                      ? "border-lime-400 bg-lime-400/10 text-lime-400"
                      : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {image.label}
                </button>
              ))}
            </div>

            <p className="mt-3 text-xs leading-5 text-gray-500">
              Илюстративна визуализация на продукта.
            </p>
          </div>

          <div className="lg:sticky lg:top-32">
            <span className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-lime-400">
              NOSE · Ежедневна грижа
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
              Дишай по-лесно.
              <span className="mt-2 block text-lime-400">Усещай разликата.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
              NOSE Nasal Strips — ленти за нос, създадени да подпомагат
              отварянето на носните проходи чрез механично повдигане на
              външната част на носа.
            </p>

            <div className="mt-8 flex items-end gap-3">
              <span className="text-4xl font-bold">10,00 €</span>
              <span className="pb-1 text-sm text-gray-500">за опаковка</span>
            </div>

            <div className="my-8 h-px bg-white/10" />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400/10 text-lime-400">
                  ✓
                </span>
                <span className="text-gray-300">
                  Лесни за поставяне и премахване
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400/10 text-lime-400">
                  ✓
                </span>
                <span className="text-gray-300">
                  Не съдържат лекарствено вещество
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400/10 text-lime-400">
                  ✓
                </span>
                <span className="text-gray-300">
                  Подходящи за включване в ежедневната рутина
                </span>
              </div>
            </div>

            <div className="mt-9">
              <label className="mb-3 block text-sm font-medium text-gray-300">
                Количество
              </label>

              <div className="flex flex-wrap gap-4">
                <div className="flex h-14 items-center rounded-full border border-white/10 bg-white/[0.03]">
                  <button
                    type="button"
                    aria-label="Намали количеството"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    className="h-14 w-12 text-xl text-gray-300 transition hover:text-lime-400 disabled:opacity-30"
                  >
                    −
                  </button>

                  <span className="min-w-8 text-center font-semibold">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    aria-label="Увеличи количеството"
                    onClick={() => setQuantity((value) => value + 1)}
                    className="h-14 w-12 text-xl text-gray-300 transition hover:text-lime-400"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={addToCart}
                  className="min-h-14 flex-1 rounded-full bg-lime-400 px-7 py-4 font-bold text-black transition hover:bg-lime-300 active:scale-[0.98]"
                >
                  {added ? "Добавено в количката ✓" : "Добави в количката ↗"}
                </button>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Общо:{" "}
                <span className="font-semibold text-white">
                  {(10 * quantity).toFixed(2).replace(".", ",")} €
                </span>
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm leading-6 text-gray-400">
                Продуктът подпомага механичното отваряне на носните проходи,
                но не лекува причините за запушен нос и не замества медицинска
                консултация.
              </p>
            </div>
          </div>
        </section>

        <section id="benefits" className="mt-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
              Защо NOSE?
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              По-малко усложнения. Повече комфорт.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Лесна употреба",
                description:
                  "Поставянето е лесно. Следвай инструкциите за правилно използване.",
              },
              {
                number: "02",
                title: "Без лекарствено вещество",
                description:
                  "Механично действие без лекарствено активно вещество.",
              },
              {
                number: "03",
                title: "За ежедневието",
                description:
                  "Практичен продукт, който можеш да включиш в личната си рутина.",
              },
            ].map((benefit) => (
              <article
                key={benefit.number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-lime-400/30"
              >
                <span className="text-sm font-bold text-lime-400">
                  {benefit.number}
                </span>
                <h3 className="mt-6 text-xl font-bold">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-gray-400">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-3xl border border-white/10 bg-[#10120f] p-8 text-center md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
            NOSE essentials
          </p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Готов ли си да опиташ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
            Избери количеството и добави NOSE Nasal Strips в количката си.
          </p>
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-8 rounded-full bg-lime-400 px-8 py-4 font-bold text-black transition hover:bg-lime-300"
          >
            Към продукта ↑
          </button>
        </section>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <Link href="/" className="text-xl font-black text-white">
            NOSE<span className="text-lime-400">.</span>
          </Link>
         <p>© 2026 NOSE. Всички права запазени.</p>
          <Link href="/" className="transition hover:text-lime-400">
            Начало
          </Link>
        </footer>
      </div>
    </main>
  );
}