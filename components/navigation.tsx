"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navItems = [
  { label: "Our Story", href: "#manifesto" },
  { label: "Signature Selection", href: "#signature" },
  { label: "Menu", href: "#menu" },
  { label: "Our Spaces", href: "#spaces" },
  { label: "Celebration Cakes", href: "#celebration" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${menuOpen
          ? "bg-[#935353]"
          : scrolled
            ? "bg-[#f8f4ee]/96 backdrop-blur-md border-b border-[#e0d6cc]/60"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link
            href="#"
            className={`font-serif text-[17px] tracking-[0.18em] transition-colors duration-500 ${scrolled ? "text-[#2C1810]" : "text-[#FAF7F2]"
              }`}
            aria-label="Atölye Norte — Home"
          >
            ATÖLYE NORTE
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-sans text-[10.5px] tracking-[0.2em] uppercase transition-colors duration-500 hover:text-[#d6b1b1] ${scrolled ? "text-[#935353]" : "text-[#f8f4ee]/80"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#contact"
              className={`font-sans text-[10px] tracking-[0.22em] uppercase border px-7 py-2.5 transition-all duration-500 ${scrolled
                ? "border-[#935353] text-[#935353] hover:bg-[#935353] hover:text-[#f8f4ee]"
                : "border-[#f8f4ee]/55 text-[#f8f4ee] hover:border-[#f8f4ee] hover:bg-[#f8f4ee]/10"
                }`}
            >
              Get Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 transition-colors duration-300 ${menuOpen ? "text-[#f8f4ee]" : scrolled ? "text-[#935353]" : "text-[#f8f4ee]"
              }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px bg-current transition-all duration-400 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-400 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#935353] flex flex-col justify-center items-center transition-opacity duration-500 lg:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Decorative gold line top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-[#d6b1b1]/30" />

        <nav className="flex flex-col items-center gap-7">
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[10px] tracking-[0.3em] text-[#d6b1b1] uppercase mb-2"
          >
            ATÖLYE NORTE
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-[2rem] leading-tight text-[#f8f4ee] tracking-[0.04em] hover:text-[#d6b1b1] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="w-12 h-px bg-[#d6b1b1]/40 my-2" />
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-[10px] tracking-[0.25em] uppercase border border-[#d6b1b1] text-[#d6b1b1] px-8 py-3 hover:bg-[#d6b1b1] hover:text-[#935353] transition-all duration-300"
          >
            Get Contact
          </Link>
        </nav>
      </div>
    </>
  )
}



