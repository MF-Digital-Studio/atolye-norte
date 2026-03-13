"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type PillarCardMediaProps = {
  posterSrc: string
  videoSrc: string
  alt: string
  isMobileActive: boolean
  mobilePlayVersion: number
}

export function PillarCardMedia({
  posterSrc,
  videoSrc,
  alt,
  isMobileActive,
  mobilePlayVersion,
}: PillarCardMediaProps) {
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

  const resetToPoster = () => {
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.currentTime = 0
  }

  useEffect(() => {
    if (canHover || prefersReducedMotion) return
    if (!isMobileActive) {
      setPendingPlay(false)
      resetToPoster()
      return
    }

    setShouldLoadVideo(true)
    setPendingPlay(true)
  }, [isMobileActive, canHover, prefersReducedMotion, mobilePlayVersion])

  useEffect(() => {
    const isInteractiveActive = canHover ? isHovered : isMobileActive
    if (!isInteractiveActive || !pendingPlay || !shouldLoadVideo || prefersReducedMotion) return

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

    const handleCanPlay = () => begin()
    video.addEventListener("canplay", handleCanPlay, { once: true })
    video.load()

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
    }
  }, [canHover, isHovered, isMobileActive, pendingPlay, prefersReducedMotion, shouldLoadVideo, videoSrc])

  const handleMouseEnter = () => {
    if (!canHover || prefersReducedMotion) return
    setIsHovered(true)
    if (!shouldLoadVideo) setShouldLoadVideo(true)
    setPendingPlay(true)
  }

  const handleMouseLeave = () => {
    if (!canHover) return
    setIsHovered(false)
    setPendingPlay(false)
    resetToPoster()
  }

  const isActive = (canHover ? isHovered : isMobileActive) && !prefersReducedMotion
  const showVideo = isActive && isVideoReady
  const shouldRenderVideo = shouldLoadVideo && !prefersReducedMotion

  return (
    <div ref={cardRef} className="absolute inset-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Image
        src={posterSrc}
        alt={alt}
        fill
        className={`object-cover contrast-[1.06] saturate-[1.05] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {shouldRenderVideo ? (
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
