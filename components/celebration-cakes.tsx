import Image from "next/image"
import Link from "next/link"

const features = [
  "Bespoke design consultations, every time",
  "Birthdays, anniversaries, and intimate gatherings",
  "Architectural and sculptural cake structures",
  "Seasonal, thoughtfully sourced ingredients",
]

export function CelebrationCakes() {
  return (
    <section
      id="celebration"
      className="bg-[#f8f4ee] py-28 lg:py-44 overflow-hidden"
      data-reveal
      aria-label="Bespoke celebration cakes"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-32 items-center">
          <div>
            <div className="flex items-center gap-4 mb-9">
              <div className="w-8 h-px bg-[#d6b1b1]" />
              <p className="font-sans text-[10px] tracking-[0.38em] text-[#9a8b82] uppercase">
                Celebration Cakes
              </p>
            </div>

            <h2
              className="font-serif font-light text-[#935353] leading-[1.03] mb-10 text-balance"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}
            >
              Designed for
              <br />
              <em className="italic text-[#d6b1b1]">unforgettable</em>
              <br />
              celebrations.
            </h2>

            <div className="space-y-5 font-sans text-[15px] text-[#935353]/74 leading-[1.78] max-w-[490px] mb-11">
              <p>
                A celebration cake from Atolye Norte is more than a confection - it is a
                commission, a collaboration, a keepsake. Each creation begins with listening:
                to the occasion, the person, and the feeling you wish to give.
              </p>
              <p>
                Conceived by hand and brought to life with exceptional ingredients, our cakes
                are built to be remembered long after the last slice is savored.
              </p>
            </div>

            <ul className="space-y-4 mb-14" aria-label="What we offer for celebration cakes">
              {features.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#d6b1b1] mt-[7px] shrink-0" aria-hidden="true" />
                  <span className="font-sans text-[13.5px] text-[#935353]/68 leading-relaxed tracking-wide">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-block font-sans text-[10.5px] tracking-[0.22em] uppercase bg-[#935353] text-[#f8f4ee] px-10 py-[14px] hover:bg-[#d6b1b1] transition-colors duration-500 text-center"
              >
                Begin Your Order
              </Link>
              <Link
                href="#menu"
                className="inline-block font-sans text-[10.5px] tracking-[0.22em] uppercase border border-[#935353]/35 text-[#935353] px-10 py-[14px] hover:border-[#935353] hover:bg-[#935353] hover:text-[#f8f4ee] transition-all duration-500 text-center"
              >
                View Full Menu
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 w-36 h-36 border border-[#d6b1b1]/15 pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 border border-[#a06d6d]/10 pointer-events-none" aria-hidden="true" />
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/celebration.jpg"
                alt="Bespoke celebration cake with watercolor botanicals in blush and gold on a marble pedestal"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute top-8 -left-4 lg:-left-12 bg-[#f8f4ee] border border-[#e0d6cc] px-6 py-5 max-w-[165px] shadow-sm">
              <p className="font-sans text-[9px] tracking-[0.22em] text-[#9a8b82] uppercase mb-1.5">Process</p>
              <p className="font-serif italic text-[#935353] text-[1.05rem] leading-snug">
                Consult. Design. Create.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
