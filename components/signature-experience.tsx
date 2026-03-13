import { existsSync } from "node:fs"
import path from "node:path"
import Link from "next/link"
import { PillarCardMedia } from "@/components/pillar-card-media"

const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp", "avif"]
const VIDEO_EXTENSIONS = ["mp4", "webm", "mov"]

function resolvePublicAsset(basePath: string, extensions: string[]) {
  const cleanBasePath = basePath.startsWith("/") ? basePath.slice(1) : basePath

  for (const extension of extensions) {
    const relativePath = `${cleanBasePath}.${extension}`
    const absolutePath = path.join(process.cwd(), "public", relativePath)
    if (existsSync(absolutePath)) {
      return `/${relativePath.replace(/\\/g, "/")}`
    }
  }

  throw new Error(`Missing asset for ${basePath} with extensions: ${extensions.join(", ")}`)
}

const pillarAssetMap = [
  { posterBase: "/images/1", videoBase: "/videos/1_video" },
  { posterBase: "/images/2", videoBase: "/videos/2_video" },
  { posterBase: "/images/3", videoBase: "/videos/3_video" },
] as const

const experiences = [
  {
    id: "cakes",
    label: "Signature Cakes",
    index: "01",
    headline: "Crafted for the unforgettable.",
    description:
      "Each cake is conceived as a singular work — a balance of artistry, flavour, and structure that honours the occasion it is made for.",
    href: "#celebration",
    image: resolvePublicAsset(pillarAssetMap[0].posterBase, IMAGE_EXTENSIONS),
    video: resolvePublicAsset(pillarAssetMap[0].videoBase, VIDEO_EXTENSIONS),
    alt: "Elegant signature petit fours and celebration cakes by Atölye Norte arranged on dark marble",
  },
  {
    id: "desserts",
    label: "Refined Desserts",
    index: "02",
    headline: "Texture, depth, intention.",
    description:
      "From silken tarts to delicate entremets, our desserts are designed to be tasted slowly — layer by considered layer.",
    href: "#menu",
    image: resolvePublicAsset(pillarAssetMap[1].posterBase, IMAGE_EXTENSIONS),
    video: resolvePublicAsset(pillarAssetMap[1].videoBase, VIDEO_EXTENSIONS),
    alt: "Elegantly plated luxury dessert with mirror glaze and rose petal on cream ceramic",
  },
  {
    id: "coffee",
    label: "Coffee & Atmosphere",
    index: "03",
    headline: "A ritual worth returning to.",
    description:
      "Our coffee programme is shaped around stillness and warmth — the kind that invites you to sit, breathe, and stay a little longer.",
    href: "#spaces",
    image: resolvePublicAsset(pillarAssetMap[2].posterBase, IMAGE_EXTENSIONS),
    video: resolvePublicAsset(pillarAssetMap[2].videoBase, VIDEO_EXTENSIONS),
    alt: "A perfectly prepared cortado in an elegant ceramic cup at Atölye Norte cafe",
  },
]

export function SignatureExperience() {
  return (
    <section
      id="signature"
      className="bg-[#935353] py-28 lg:py-44"
      data-reveal
      aria-label="Signature experiences at Atölye Norte"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-7">
              <div className="w-8 h-px bg-[#d6b1b1]" />
              <p className="font-sans text-[10px] tracking-[0.38em] text-[#d6b1b1] uppercase">
                The Experience
              </p>
            </div>
            <h2
              className="font-serif font-light text-[#f8f4ee] leading-[1.04] text-balance"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)" }}
            >
              Three pillars of
              <br />
              <em className="italic text-[#d6b1b1]">the Atölye Norte world.</em>
            </h2>
          </div>
          <p className="font-sans text-[13px] text-[#f8f4ee]/40 max-w-[290px] leading-[1.75] lg:pb-1 lg:self-end">
            Each element of our offering is carefully considered — never rushed, never ordinary.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-0.5">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={exp.href}
              className="group relative block overflow-hidden aspect-[3/4]"
              aria-label={`${exp.label} — ${exp.headline}`}
            >
              <PillarCardMedia posterSrc={exp.image} videoSrc={exp.video} alt={exp.alt} />
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
      </div>
    </section>
  )
}




