import { existsSync } from "node:fs"
import path from "node:path"
import { SignaturePillarsGrid } from "@/components/signature-pillars-grid"

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
      "Each cake is conceived as a singular work - a balance of artistry, flavour, and structure that honours the occasion it is made for.",
    href: "#celebration",
    image: resolvePublicAsset(pillarAssetMap[0].posterBase, IMAGE_EXTENSIONS),
    video: resolvePublicAsset(pillarAssetMap[0].videoBase, VIDEO_EXTENSIONS),
    alt: "Elegant signature petit fours and celebration cakes by Atolye Norte arranged on dark marble",
  },
  {
    id: "desserts",
    label: "Refined Desserts",
    index: "02",
    headline: "Texture, depth, intention.",
    description:
      "From silken tarts to delicate entremets, our desserts are designed to be tasted slowly - layer by considered layer.",
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
      "Our coffee programme is shaped around stillness and warmth - the kind that invites you to sit, breathe, and stay a little longer.",
    href: "#spaces",
    image: resolvePublicAsset(pillarAssetMap[2].posterBase, IMAGE_EXTENSIONS),
    video: resolvePublicAsset(pillarAssetMap[2].videoBase, VIDEO_EXTENSIONS),
    alt: "A perfectly prepared cortado in an elegant ceramic cup at Atolye Norte cafe",
  },
]

export function SignatureExperience() {
  return (
    <section
      id="signature"
      className="bg-[#935353] py-28 lg:py-44"
      data-reveal
      aria-label="Signature experiences at Atolye Norte"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-7">
              <div className="w-8 h-px bg-[#d6b1b1]" />
              <p className="font-sans text-[10px] tracking-[0.38em] text-[#d6b1b1] uppercase">The Experience</p>
            </div>
            <h2
              className="font-serif font-light text-[#f8f4ee] leading-[1.04] text-balance"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)" }}
            >
              Three pillars of
              <br />
              <em className="italic text-[#d6b1b1]">the Atolye Norte world.</em>
            </h2>
          </div>
          <p className="font-sans text-[13px] text-[#f8f4ee]/40 max-w-[290px] leading-[1.75] lg:pb-1 lg:self-end">
            Each element of our offering is carefully considered - never rushed, never ordinary.
          </p>
        </div>

        {/* Cards */}
        <SignaturePillarsGrid experiences={experiences} />
      </div>
    </section>
  )
}
