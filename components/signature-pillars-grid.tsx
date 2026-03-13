"use client"

import Link from "next/link"
import { useEffect, useState, type MouseEvent } from "react"
import { PillarCardMedia } from "@/components/pillar-card-media"

type Experience = {
  id: string
  label: string
  index: string
  headline: string
  description: string
  href: string
  image: string
  video: string
  alt: string
}

type SignaturePillarsGridProps = {
  experiences: Experience[]
}

export function SignaturePillarsGrid({ experiences }: SignaturePillarsGridProps) {
  const [canHover, setCanHover] = useState(false)
  const [activeMobileId, setActiveMobileId] = useState<string | null>(null)
  const [mobilePlayVersion, setMobilePlayVersion] = useState(0)

  useEffect(() => {
    const hoverMedia = window.matchMedia("(hover: hover) and (pointer: fine)")
    const updateHover = () => setCanHover(hoverMedia.matches)
    updateHover()
    hoverMedia.addEventListener("change", updateHover)
    return () => hoverMedia.removeEventListener("change", updateHover)
  }, [])

  const handleCardClick = (id: string, event: MouseEvent<HTMLAnchorElement>) => {
    if (canHover) return
    event.preventDefault()
    setActiveMobileId(id)
    setMobilePlayVersion((value) => value + 1)
  }

  return (
    <div className="grid md:grid-cols-3 gap-0.5">
      {experiences.map((exp) => (
        <Link
          key={exp.id}
          href={exp.href}
          className="group relative block overflow-hidden aspect-[3/4]"
          aria-label={`${exp.label} — ${exp.headline}`}
          onClick={(event) => handleCardClick(exp.id, event)}
        >
          <PillarCardMedia
            posterSrc={exp.image}
            videoSrc={exp.video}
            alt={exp.alt}
            isMobileActive={!canHover && activeMobileId === exp.id}
            mobilePlayVersion={mobilePlayVersion}
          />
          {/* Overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#935353]/58 via-[#935353]/14 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[#935353]/2 group-hover:bg-transparent transition-colors duration-700" />

          {/* Index */}
          <div className="pointer-events-none absolute top-7 left-7">
            <p className="font-sans text-[9px] tracking-[0.32em] text-[#d6b1b1]/70 uppercase">
              {exp.index}
            </p>
          </div>

          {/* Bottom content */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-8 lg:p-10">
            <p className="font-sans text-[9px] tracking-[0.32em] text-[#d6b1b1] uppercase mb-3.5">
              {exp.label}
            </p>
            <h3
              className="font-serif font-light text-[#f8f4ee] mb-4 leading-[1.15]"
              style={{ fontSize: "clamp(1.35rem, 2vw, 1.7rem)" }}
            >
              {exp.headline}
            </h3>
            <p className="font-sans text-[12px] text-[#f8f4ee]/50 leading-[1.72] max-w-[260px] mb-7">
              {exp.description}
            </p>
            <span className="font-sans text-[9.5px] tracking-[0.25em] text-[#d6b1b1] uppercase flex items-center gap-3">
              Discover
              <span className="inline-block w-5 h-px bg-[#d6b1b1] transition-all duration-500 group-hover:w-12" aria-hidden="true" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
