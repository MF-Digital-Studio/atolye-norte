"use client"

import { useEffect } from "react"

export function ScrollExperience() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      return
    }

    document.documentElement.classList.add("js-scroll-experience")

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed")
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    )

    revealTargets.forEach((target) => observer.observe(target))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove("js-scroll-experience")
    }
  }, [])

  return null
}
