export function AtmosphereQuote() {
  return (
    <section
      className="bg-[#935353] py-28 lg:py-40"
      data-reveal
      aria-label="Brand atmosphere quote"
    >
      <div className="max-w-[960px] mx-auto px-8 lg:px-16 text-center">
        <div
          className="flex items-center justify-center gap-6 mb-14"
          aria-hidden="true"
        >
          <div className="w-20 h-px bg-[#d6b1b1]/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#d6b1b1]" />
          <div className="w-20 h-px bg-[#d6b1b1]/30" />
        </div>

        <blockquote cite="https://atolyenorte.com">
          <p
            className="font-serif font-light italic text-[#f8f4ee] leading-[1.38] text-balance"
            style={{ fontSize: "clamp(1.8rem, 4.25vw, 3.5rem)" }}
          >
            "Where elegant desserts, warm coffee,
            <br className="hidden md:block" /> and{" "}
            <span className="text-[#d6b1b1] not-italic font-normal">
              meaningful moments
            </span>{" "}
            meet."
          </p>
        </blockquote>

        <div
          className="flex items-center justify-center gap-6 mt-14 mb-10"
          aria-hidden="true"
        >
          <div className="w-20 h-px bg-[#d6b1b1]/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#d6b1b1]" />
          <div className="w-20 h-px bg-[#d6b1b1]/30" />
        </div>

        <p className="font-sans text-[9.5px] tracking-[0.38em] text-[#d6b1b1]/75 uppercase">
          Atolye Norte
        </p>
      </div>
    </section>
  );
}
