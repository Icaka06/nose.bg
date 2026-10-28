"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [theme, setTheme] = useState("dark");
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("nose-theme");
    const initialTheme = savedTheme === "light" ? "light" : "dark";

    document.documentElement.dataset.theme = initialTheme;
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setHidden(false);
  }, [pathname]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen) {
        setHidden(false);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY < 20) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY + 5) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY - 5) {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("nose-theme", nextTheme);
    setTheme(nextTheme);
  }

  const sectionLink = (section) =>
    pathname === "/" ? `#${section}` : `/#${section}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-transform duration-300 ease-in-out md:px-8 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-2xl border border-white/10 bg-[#080a08]/90 px-4 py-3 shadow-xl backdrop-blur-xl md:gap-4 md:px-5">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 text-2xl font-black tracking-tight"
        >
          NOSE<span className="text-lime-400">.</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          <Link
            href={sectionLink("benefits")}
            className="rounded-full px-4 py-2 text-sm text-gray-300 transition hover:bg-white/[0.07] hover:text-lime-400"
          >
            Предимства
          </Link>

          <Link
            href="/product"
            className="rounded-full px-4 py-2 text-sm text-gray-300 transition hover:bg-white/[0.07] hover:text-lime-400"
          >
            Продукт
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Превключи на светла тема"
                : "Превключи на тъмна тема"
            }
            title={
              theme === "dark"
                ? "Светла тема"
                : "Тъмна тема"
            }
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xl transition hover:border-lime-400 hover:bg-white/[0.08]"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          <Link
            href="/product"
            className="hidden rounded-full bg-lime-400 px-4 py-3 text-sm font-bold text-black transition hover:bg-lime-300 sm:inline-flex"
          >
            Купи сега ↗
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Затвори менюто" : "Отвори менюто"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#10120f] p-3 shadow-xl md:hidden">
          <Link
            href={sectionLink("benefits")}
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-lime-400"
          >
            Предимства
          </Link>

          <Link
            href="/product"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-lime-400"
          >
            Продукт
          </Link>

          <Link
            href="/product"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-xl bg-lime-400 px-4 py-3 text-center text-sm font-bold text-black"
          >
            Купи сега ↗
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="mt-2 block w-full rounded-xl border border-white/10 px-4 py-3 text-left text-sm text-gray-300 hover:border-lime-400"
          >
            {theme === "dark"
              ? "☀ Превключи на светла тема"
              : "☾ Превключи на тъмна тема"}
          </button>
        </div>
      )}
    </header>
  );
}