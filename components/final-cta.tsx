import Image from "next/image"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden flex items-center"
      style={{ minHeight: "72vh" }}
      data-reveal
      aria-label="Invitation to visit Atolye Norte"
    >
      <Image
        src="/images/spaces.jpg"
        alt="The beautiful interior of Atolye Norte - an invitation to visit"
        fill
        className="object-cover object-center contrast-[1.08] saturate-[1.06]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#935353]/36" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#935353]/18 via-transparent to-transparent" />

      <div className="absolute top-0 left-0 right-0 h-px bg-[#d6b1b1]/20" aria-hidden="true" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 w-full py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="font-sans text-[10px] tracking-[0.38em] text-[#d6b1b1] uppercase mb-7">
            An Invitation
          </p>

          <h2
            className="font-serif font-light text-[#f8f4ee] leading-[1.0] mb-8 text-balance"
            style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)" }}
          >
            Come and experience
            <br />
            <em className="italic text-[#d6b1b1]">Atolye Norte.</em>
          </h2>

          <p className="font-sans text-[15px] text-[#f8f4ee]/70 leading-[1.75] mb-12 max-w-[460px]">
            We look forward to welcoming you - whether for a quiet morning coffee, a celebrated
            occasion, or simply a moment of unhurried beauty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="#spaces"
              className="inline-block font-sans text-[10.5px] tracking-[0.22em] uppercase bg-[#f8f4ee] text-[#935353] px-10 py-3.5 hover:bg-[#d6b1b1] hover:text-[#f8f4ee] transition-all duration-500 text-center"
            >
              Visit Atolye Norte
            </Link>
            <a
              href="mailto:hello@atolyenorte.com"
              className="inline-block font-sans text-[10.5px] tracking-[0.22em] uppercase border border-[#f8f4ee]/45 text-[#f8f4ee] px-10 py-3.5 hover:border-[#d6b1b1] hover:text-[#d6b1b1] transition-all duration-500 text-center"
            >
              hello@atolyenorte.com
            </a>
          </div>

          <address className="not-italic font-sans text-[11px] tracking-[0.18em] text-white /40 uppercase">
            Çankaya, Ankara ● Türkiye
          </address>
        </div>
      </div>
    </section>
  )
}
