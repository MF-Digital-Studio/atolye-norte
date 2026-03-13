"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import type { InstagramPost } from "@/lib/instagram"

type InstagramCoverflowProps = {
  posts: InstagramPost[]
}

export function InstagramCoverflow({ posts }: InstagramCoverflowProps) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-coverflow-card]"))
    if (cards.length === 0) return

    const viewportCenter = track.scrollLeft + track.clientWidth / 2
    let nextIndex = 0
    let bestDistance = Number.POSITIVE_INFINITY

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(cardCenter - viewportCenter)
      if (distance < bestDistance) {
        bestDistance = distance
        nextIndex = index
      }
    })

    setActiveIndex(nextIndex)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let rafId = 0
    const onScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      rafId = requestAnimationFrame(updateActiveIndex)
    }

    updateActiveIndex()
    track.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", updateActiveIndex)

    return () => {
      track.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", updateActiveIndex)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [updateActiveIndex])

  const scrollToIndex = (index: number) => {
    const track = trackRef.current
    if (!track) return

    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-coverflow-card]"))
    const target = cards[index]
    if (!target) return

    const left = target.offsetLeft - (track.clientWidth - target.clientWidth) / 2
    track.scrollTo({ left, behavior: "smooth" })
  }

  const handlePrev = () => scrollToIndex(Math.max(0, activeIndex - 1))
  const handleNext = () => scrollToIndex(Math.min(posts.length - 1, activeIndex + 1))

  return (
    <div>
      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory px-[8vw] lg:px-[12vw] pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Instagram coverflow carousel"
        >
          {posts.map((post, index) => {
            const distance = Math.abs(index - activeIndex)
            const clampedDistance = Math.min(distance, 2)
            const scale = 1 - clampedDistance * 0.08
            const translateY = clampedDistance * 10
            const opacity = 1 - clampedDistance * 0.22

            return (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                data-coverflow-card
                aria-label={`Open Instagram post ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className="group relative shrink-0 snap-center w-[78vw] sm:w-[64vw] lg:w-[44vw] xl:w-[38vw] overflow-hidden bg-[#e0d6cc]/30 transition-all duration-500"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity,
                }}
              >
                <div className="relative h-[420px] sm:h-[470px] lg:h-[520px]">
                  <Image
                    src={post.mediaUrl}
                    alt={post.caption || "Atolye Norte Instagram post"}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 78vw, (max-width: 1200px) 64vw, 44vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#935353]/40 via-[#935353]/12 to-transparent" />
                  <div className="absolute left-6 right-6 bottom-6">
                    {post.caption ? (
                      <p className="font-sans text-[11px] text-[#f8f4ee]/92 leading-[1.6] line-clamp-3">
                        {post.caption}
                      </p>
                    ) : (
                      <p className="font-sans text-[10px] tracking-[0.2em] text-[#f8f4ee]/85 uppercase">
                        Atolye Norte
                      </p>
                    )}
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <div className="mt-7 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="inline-flex items-center justify-center h-10 w-10 border border-[#935353]/25 text-[#935353] disabled:opacity-35 disabled:cursor-not-allowed hover:bg-[#935353] hover:text-[#f8f4ee] transition-colors duration-300"
            aria-label="Previous Instagram post"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === posts.length - 1}
            className="inline-flex items-center justify-center h-10 w-10 border border-[#935353]/25 text-[#935353] disabled:opacity-35 disabled:cursor-not-allowed hover:bg-[#935353] hover:text-[#f8f4ee] transition-colors duration-300"
            aria-label="Next Instagram post"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}
