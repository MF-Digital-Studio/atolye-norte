const menuCategories = [
  {
    category: "Signature Cakes",
    roman: "I",
    items: [
      {
        name: "Rose & Cardamom Layer",
        description:
          "Rosewater cream, crushed cardamom sponge, edible gold leaf",
      },
      {
        name: "Atolye Noir",
        description:
          "Dark Valrhona ganache, hazelnut dacquoise, smoked caramel",
      },
      {
        name: "Pistachio & Violet Entremet",
        description:
          "Iranian pistachio mousse, violet jelly, mirror glaze, sugar tuile",
      },
    ],
  },
  {
    category: "Fine Desserts",
    roman: "II",
    items: [
      {
        name: "Saffron Creme Brulee",
        description:
          "Silken saffron custard, caramelized crust, dried violet garnish",
      },
      {
        name: "Pear & Brown Butter Tart",
        description:
          "Frangipane, poached Anjou pear, vanilla bean creme legere",
      },
      {
        name: "Opera Revisited",
        description:
          "Coffee-soaked joconde, dark chocolate ganache, espresso buttercream",
      },
    ],
  },
  {
    category: "Coffee Selection",
    roman: "III",
    items: [
      {
        name: "Atolye Cortado",
        description:
          "Single origin espresso, micro-foamed oat, hand-thrown ceramic",
      },
      {
        name: "Cold Brew Reserve",
        description: "12-hour cold infusion, stone fruit, dark cocoa finish",
      },
      {
        name: "Spiced Masala Latte",
        description:
          "House spice blend, steamed milk, a whisper of black pepper",
      },
    ],
  },
];

export function MenuHighlights() {
  return (
    <section
      id="menu"
      className="bg-[#935353] py-28 lg:py-44"
      data-reveal
      aria-label="Curated menu highlights"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-7">
              <div className="w-8 h-px bg-[#d6b1b1]" />
              <p className="font-sans text-[10px] tracking-[0.38em] text-[#d6b1b1] uppercase">
                Selected Menu
              </p>
            </div>
            <h2
              className="font-serif font-light text-[#f8f4ee] leading-[1.04] text-balance"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)" }}
            >
              A curated selection,
              <br />
              <em className="italic text-[#d6b1b1]">
                prepared with intention.
              </em>
            </h2>
          </div>
          <p className="font-sans text-[13px] text-[#f8f4ee]/44 max-w-[270px] leading-[1.75] lg:pb-1 lg:self-end">
            Her sunulan özelliği mevsimseldir, elle yapılmıştır ve ilham verici
            değişikliklere a⌟ıktır.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 xl:gap-24">
          {menuCategories.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-4 mb-10">
                <p className="font-serif italic text-[#d6b1b1]/65 text-sm shrink-0">
                  {cat.roman}
                </p>
                <div
                  className="flex-1 h-px bg-[#f8f4ee]/10"
                  aria-hidden="true"
                />
                <p className="font-sans text-[9px] tracking-[0.3em] text-[#d6b1b1] uppercase shrink-0">
                  {cat.category}
                </p>
              </div>

              <div className="space-y-0">
                {cat.items.map((item, i) => (
                  <div
                    key={item.name}
                    className={`py-7 ${i < cat.items.length - 1 ? "border-b border-[#f8f4ee]/10" : ""}`}
                  >
                    <h3 className="font-serif text-[1.2rem] text-[#f8f4ee] font-light mb-2.5 leading-snug">
                      {item.name}
                    </h3>
                    <p className="font-sans text-[12px] text-[#f8f4ee]/58 leading-[1.72] tracking-wide">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-7 mt-20 lg:mt-24">
          <div
            className="h-px bg-[#f8f4ee]/10 flex-1 max-w-20"
            aria-hidden="true"
          />
          <p className="font-serif italic text-[#f8f4ee]/45 text-sm text-center">
            Our menu changes with the seasons. Please inquire for current
            offerings.
          </p>
          <div
            className="h-px bg-[#f8f4ee]/10 flex-1 max-w-20"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
