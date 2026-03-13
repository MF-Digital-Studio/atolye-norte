"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = imageRef.current
    if (!el) return
    const handleScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.22}px)`
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="relative w-full h-screen min-h-[680px] overflow-hidden flex items-end"
      data-reveal
      aria-label="Hero - Atolye Norte"
    >
      <div ref={imageRef} className="absolute inset-0 scale-[1.12] will-change-transform">
        <Image
          src="/images/hero-cake.jpg"
          alt="A luxury celebration cake by Atolye Norte - artisan detail, warm light, ivory and rose tones"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#935353]/76 via-[#935353]/34 to-[#935353]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#935353]/20 via-transparent to-transparent" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-[#d6b1b1]/25" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 w-full pb-24 lg:pb-32">
        <p className="font-sans text-[10px] tracking-[0.38em] text-[#d6b1b1] uppercase mb-7 opacity-0 animate-fade-in-up animation-delay-200">
          Boutique Cafe &amp; Patisserie - Ankara
        </p>
        <h1
          className="font-serif font-light text-[#f8f4ee] leading-[0.92] tracking-[-0.015em] mb-8 opacity-0 animate-fade-in-up animation-delay-400"
          style={{ fontSize: "clamp(4.5rem, 11vw, 10.5rem)" }}
        >
          Atolye
          <br />
          <em className="italic text-[#d6b1b1]">Norte.</em>

        </h1>

        <p
          className="font-serif italic font-light text-[#f8f4ee]/75 leading-relaxed mb-12 max-w-lg opacity-0 animate-fade-in-up animation-delay-600"
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)" }}
        >
          A refined destination for coffee, desserts,
          <br className="hidden md:block" />
          and beautifully curated moments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-800">
          <Link
            href="#manifesto"
            className="inline-block font-sans text-[10.5px] tracking-[0.22em] uppercase bg-[#f8f4ee] text-[#935353] px-10 py-[14px] hover:bg-[#d6b1b1] hover:text-[#f8f4ee] transition-all duration-500 text-center"
          >
            Explore Our World
          </Link>
          <Link
            href="#celebration"
            className="inline-block font-sans text-[10.5px] tracking-[0.22em] uppercase border border-[#f8f4ee]/45 text-[#f8f4ee] px-10 py-[14px] hover:border-[#d6b1b1] hover:text-[#d6b1b1] transition-all duration-500 text-center"
          >
            Order a Cake
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 right-16 hidden lg:flex flex-col items-center gap-3 opacity-0 animate-fade-in animation-delay-800">
        <span
          className="font-sans text-[8.5px] tracking-[0.35em] text-[#f8f4ee]/40 uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div className="w-px h-14 bg-[#f8f4ee]/25" />
      </div>
    </section>
  )
}
