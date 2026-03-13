import Image from "next/image"

const galleryItems = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Tiered ivory celebration cake with hand-painted botanical details and gold leaf",
    className: "col-span-12 md:col-span-7",
    heightClass: "h-[360px] md:h-[640px]",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Marble tabletop with espresso, opera cake, and editorial lifestyle props",
    className: "col-span-12 md:col-span-5",
    heightClass: "h-[260px] md:h-[312px]",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Artisan hands dusting powdered sugar over freshly baked madeleines",
    className: "col-span-12 md:col-span-5",
    heightClass: "h-[260px] md:h-[320px]",
  },
]

export function EditorialGallery() {
  return (
    <section
      className="bg-[#ede4da] py-20 lg:py-28 overflow-hidden"
      data-reveal
      aria-label="Editorial gallery - Atolye Norte visual world"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#d6b1b1]" />
            <p className="font-sans text-[10px] tracking-[0.38em] text-[#9a8b82] uppercase">
              Visual World
            </p>
          </div>
          <p className="font-serif italic text-[#935353]/45 text-xl leading-none">
            Light, texture, and intention.
          </p>
          <div className="hidden sm:block w-40 h-px bg-[#d6b1b1]/30" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-12 gap-2 lg:gap-2.5">
          {galleryItems.map((item) => (
            <div key={item.src} className={`${item.className} relative overflow-hidden group`}>
              <div className={`relative w-full ${item.heightClass}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 lg:mt-2.5 relative overflow-hidden group" style={{ aspectRatio: "21 / 6" }}>
          <Image
            src="/images/gallery-4.jpg"
            alt="Luxury French macaron tower in muted rose tones"
            fill
            className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#935353]/50 via-[#935353]/18 to-transparent flex items-center">
            <div className="px-10 lg:px-16">
              <p
                className="font-serif italic font-light text-[#f8f4ee]/88 leading-tight max-w-xl text-balance"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 3.25rem)" }}
              >
                Every detail is a deliberate choice.
              </p>
              <div className="w-10 h-px bg-[#d6b1b1]/55 mt-5" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
