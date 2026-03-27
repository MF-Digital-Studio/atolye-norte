import Image from "next/image";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="bg-[#f8f4ee] py-28 lg:py-44 overflow-hidden"
      data-reveal
      aria-label="Brand manifesto — our philosophy"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-32 items-center">
          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative offset frames */}
            <div
              className="absolute -top-6 -left-6 w-36 h-36 border border-[#d6b1b1]/20 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 -right-6 w-20 h-20 border border-[#d6b1b1]/15 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/manifesto-interior.jpg"
                alt="Warm, elegant interior of Atölye Norte — marble countertops, dark wood shelving, soft golden light"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating established badge */}
            <div className="absolute bottom-10 -right-4 lg:-right-12 bg-[#935353] px-7 py-6 shadow-xl">
              <p className="font-serif italic text-[#f8f4ee]/70 text-base leading-none mb-1">
                Est.
              </p>
              <p className="font-sans text-[#d6b1b1] text-[1.75rem] font-light tracking-[0.05em] leading-none">
                2019
              </p>
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-9">
              <div className="w-8 h-px bg-[#d6b1b1]" />
              <p className="font-sans text-[10px] tracking-[0.38em] text-[#9a8b82] uppercase">
                Our Philosophy
              </p>
            </div>

            <h2
              className="font-serif font-light text-[#935353] leading-[1.04] mb-11 text-balance"
              style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)" }}
            >
              A house of atmosphere,
              <br />
              <em className="italic text-[#d6b1b1]">elegance, and detail.</em>
            </h2>

            <div className="space-y-6 font-sans text-[15px] text-[#935353]/75 leading-[1.78] max-w-[490px] mb-8">
              <p>
                Atölye Norte is not simply a place to enjoy desserts and coffee
                — it is an experience defined by craftsmanship, visual
                refinement, and thoughtful curation.
              </p>
              <p>
                Every cake, every dessert, every cup is prepared with care,
                presented with beauty, and served in an atmosphere that invites
                you to pause and celebrate the small luxuries of life.
              </p>
            </div>

            <p className="font-serif italic text-[#9a8b82] text-[1.2rem] mb-11 leading-snug">
              Here, elegance lives in the everyday.
            </p>

            <div className="w-16 h-px bg-[#e0d6cc] mb-11" />

            {/* Stats */}
            <div className="flex gap-12">
              {[
                { value: "6+", label: "Years of craft" },
                { value: "4,000+", label: "Cakes created" },
                { value: "Daily", label: "Fresh preparations" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-[2rem] text-[#935353] font-light leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="font-sans text-[9.5px] tracking-[0.18em] text-[#9a8b82] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
