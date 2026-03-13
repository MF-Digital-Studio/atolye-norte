"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type PillarCardMediaProps = {
  posterSrc: string
  videoSrc: string
  alt: string
}

export function PillarCardMedia({ posterSrc, videoSrc, alt }: PillarCardMediaProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [isHovered, setIsHovered] = useState(false)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [pendingPlay, setPendingPlay] = useState(false)
  const [canHover, setCanHover] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const hoverMedia = window.matchMedia("(hover: hover) and (pointer: fine)")
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)")

    const updateHover = () => setCanHover(hoverMedia.matches)
    const updateMotion = () => setPrefersReducedMotion(motionMedia.matches)

    updateHover()
    updateMotion()

    hoverMedia.addEventListener("change", updateHover)
    motionMedia.addEventListener("change", updateMotion)

    return () => {
      hoverMedia.removeEventListener("change", updateHover)
      motionMedia.removeEventListener("change", updateMotion)
    }
  }, [])

  useEffect(() => {
    if (!cardRef.current || !canHover || prefersReducedMotion) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadVideo(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px 0px" },
    )

    observer.observe(cardRef.current)

    return () => observer.disconnect()
  }, [canHover, prefersReducedMotion])

  const playFromStart = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.currentTime = 0
    void video.play().catch(() => undefined)
  }

  useEffect(() => {
    if (!isHovered || !pendingPlay || !shouldLoadVideo || !canHover || prefersReducedMotion) return
    const video = videoRef.current
    if (!video) return

    const begin = () => {
      setIsVideoReady(true)
      playFromStart()
      setPendingPlay(false)
    }

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      begin()
      return
    }

    const handleCanPlay = () => {
      begin()
    }

    video.addEventListener("canplay", handleCanPlay, { once: true })
    video.load()

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
    }
  }, [isHovered, pendingPlay, shouldLoadVideo, canHover, prefersReducedMotion, videoSrc])

  const play = () => {
    if (!canHover || prefersReducedMotion) return
    setIsHovered(true)
    if (!shouldLoadVideo) setShouldLoadVideo(true)
    setPendingPlay(true)
    playFromStart()
  }

  const stop = () => {
    setIsHovered(false)
    setPendingPlay(false)
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.currentTime = 0
  }

  const showVideo = isHovered && isVideoReady && canHover && !prefersReducedMotion

  return (
    <div
      ref={cardRef}
      className="absolute inset-0"
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
    >
      <Image
        src={posterSrc}
        alt={alt}
        fill
        className={`object-cover contrast-[1.06] saturate-[1.05] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {shouldLoadVideo && canHover && !prefersReducedMotion ? (
        <video
          ref={videoRef}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover contrast-[1.06] saturate-[1.05] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] ${
            showVideo ? "opacity-100" : "opacity-0"
          }`}
          muted
          playsInline
          preload="metadata"
          poster={posterSrc}
          onCanPlay={() => setIsVideoReady(true)}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src={videoSrc}
            type={videoSrc.endsWith(".webm") ? "video/webm" : videoSrc.endsWith(".mov") ? "video/quicktime" : "video/mp4"}
          />
        </video>
      ) : null}
    </div>
  )
}
