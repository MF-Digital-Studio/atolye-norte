"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Ana Sayfa", type: "page", href: "/" },
  { name: "Manifesto", type: "section", sectionId: "manifesto" },
  { name: "İmza Seçkisi", type: "section", sectionId: "signature" },
  { name: "Mekanlarımız", type: "section", sectionId: "spaces" },
  { name: "Kutlama Pastaları", type: "section", sectionId: "celebration" },
  { name: "Menü", type: "page", href: "/menu" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const isMenuPage = pathname === "/menu";
  const showSolidHeader = scrolled || isMenuPage;

  const getResolvedHref = (link: (typeof navLinks)[number]) => {
    if (link.type === "page") {
      return link.href ?? "/";
    }

    return `/#${link.sectionId}`;
  };

  const isActiveLink = (link: (typeof navLinks)[number]) => {
    if (link.type === "page") {
      return pathname === (link.href ?? "/");
    }

    if (pathname !== "/") {
      return false;
    }

    return currentHash === link.sectionId;
  };

  const getContactHref = () => {
    return "/#contact";
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash.replace("#", ""));
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          menuOpen
            ? "bg-[#935353]"
            : showSolidHeader
              ? "bg-[#f8f4ee]/96 backdrop-blur-md border-b border-[#e0d6cc]/60"
              : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className={`font-serif text-[17px] tracking-[0.18em] transition-colors duration-500 ${
              showSolidHeader ? "text-[#2C1810]" : "text-[#FAF7F2]"
            }`}
            aria-label="Atölye Norte — Home"
          >
            ATÖLYE NORTE
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-9"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={getResolvedHref(link)}
                className={`font-sans text-[10.5px] tracking-[0.2em] uppercase transition-colors duration-500 hover:text-[#d6b1b1] ${
                  isActiveLink(link)
                    ? "text-[#935353] underline underline-offset-8"
                    : showSolidHeader
                      ? "text-[#935353]"
                      : "text-[#f8f4ee]/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href={getContactHref()}
              className={`font-sans text-[10px] tracking-[0.22em] uppercase border px-7 py-2.5 transition-all duration-500 ${
                showSolidHeader
                  ? "border-[#935353] text-[#935353] hover:bg-[#935353] hover:text-[#f8f4ee]"
                  : "border-[#f8f4ee]/55 text-[#f8f4ee] hover:border-[#f8f4ee] hover:bg-[#f8f4ee]/10"
              }`}
            >
              İletişim
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 transition-colors duration-300 ${
              menuOpen
                ? "text-[#f8f4ee]"
                : showSolidHeader
                  ? "text-[#935353]"
                  : "text-[#f8f4ee]"
            }`}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px bg-current transition-all duration-400 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-400 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#935353] flex flex-col justify-center items-center transition-opacity duration-500 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Decorative gold line top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-[#d6b1b1]/30" />

        <nav className="flex flex-col items-center gap-7">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[10px] tracking-[0.3em] text-[#d6b1b1] uppercase mb-2"
          >
            ATÖLYE NORTE
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={getResolvedHref(link)}
              onClick={() => setMenuOpen(false)}
              className={`font-serif text-[2rem] leading-tight tracking-[0.04em] transition-colors ${
                isActiveLink(link)
                  ? "text-[#d6b1b1]"
                  : "text-[#f8f4ee] hover:text-[#d6b1b1]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-12 h-px bg-[#d6b1b1]/40 my-2" />
          <Link
            href={getContactHref()}
            onClick={() => setMenuOpen(false)}
            className="font-sans text-[10px] tracking-[0.25em] uppercase border border-[#d6b1b1] text-[#d6b1b1] px-8 py-3 hover:bg-[#d6b1b1] hover:text-[#935353] transition-all duration-300"
          >
            İletişim
          </Link>
        </nav>
      </div>
    </>
  );
}
