import Link from "next/link"

const footerNav = [
  { label: "Home", href: "#" },
  { label: "Our Story", href: "#manifesto" },
  { label: "Signature Selection", href: "#signature" },
  { label: "Menu", href: "#menu" },
  { label: "Our Spaces", href: "#spaces" },
  { label: "Celebration Cakes", href: "#celebration" },
]

export function Footer() {
  return (
    <footer className="bg-[#935353] text-[#f8f4ee]/55" aria-label="Site footer">

      {/* Top border */}
      <div className="border-t border-[#f8f4ee]/7" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 pt-16 pb-12 lg:pt-20 lg:pb-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-0">

          {/* Brand column */}
          <div className="lg:col-span-5 lg:pr-16">
            <Link href="#" aria-label="Atölye Norte — Home">
              <p className="font-serif text-[22px] tracking-[0.16em] text-[#f8f4ee] mb-5">
                ATÖLYE NORTE
              </p>
            </Link>
            <p className="font-sans text-[12.5px] leading-[1.8] text-[#f8f4ee]/48 max-w-[300px] mb-8">
              A boutique cafe and patisserie — a house of atmosphere, craftsmanship, celebration,
              and modern elegance. Nişantaşı, Istanbul.
            </p>
            {/* Social links */}
            <nav aria-label="Social and contact links">
              <div className="flex items-center gap-5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[9.5px] tracking-[0.25em] uppercase text-[#d6b1b1] hover:text-[#f8f4ee] transition-colors"
                  aria-label="Atölye Norte on Instagram"
                >
                  Instagram
                </a>
                <span className="w-px h-3 bg-[#f8f4ee]/18" aria-hidden="true" />
                <a
                  href="https://wa.me/905001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[9.5px] tracking-[0.25em] uppercase text-[#d6b1b1] hover:text-[#f8f4ee] transition-colors"
                  aria-label="Contact Atölye Norte on WhatsApp"
                >
                  WhatsApp
                </a>
                <span className="w-px h-3 bg-[#f8f4ee]/18" aria-hidden="true" />
                <a
                  href="mailto:hello@atolyenorte.com"
                  className="font-sans text-[9.5px] tracking-[0.25em] uppercase text-[#d6b1b1] hover:text-[#f8f4ee] transition-colors"
                  aria-label="Email Atölye Norte"
                >
                  Email
                </a>
              </div>
            </nav>
          </div>

          {/* Navigation column */}
          <div className="lg:col-span-3 lg:px-8">
            <p className="font-sans text-[9px] tracking-[0.32em] text-[#f8f4ee]/28 uppercase mb-6">
              Navigate
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3.5">
                {footerNav.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-sans text-[12.5px] text-[#f8f4ee]/52 hover:text-[#d6b1b1] transition-colors tracking-wide"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Location & Hours column */}
          <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-[#f8f4ee]/6">
            <p className="font-sans text-[9px] tracking-[0.32em] text-[#f8f4ee]/28 uppercase mb-6">
              Find Us
            </p>
            <address className="not-italic">
              <p className="font-sans text-[12.5px] text-[#f8f4ee]/52 leading-[1.85]">
                Çankaya, Ankara
                <br />
                Türkiye
              </p>
            </address>
            <div className="mt-8">
              <p className="font-sans text-[9px] tracking-[0.32em] text-[#f8f4ee]/28 uppercase mb-4">
                Hours
              </p>
              <p className="font-sans text-[12.5px] text-[#f8f4ee]/52 leading-[1.85]">
                Mon – Fri &nbsp;·&nbsp; 08:00 – 20:00
                <br />
                Sat – Sun &nbsp;·&nbsp; 09:00 – 21:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#f8f4ee]/6">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-[10px] text-[#f8f4ee]/22 tracking-wide">
            &copy; {new Date().getFullYear()} Atölye Norte. All rights reserved.
          </p>
          <p className="font-serif italic text-[10px] text-[#f8f4ee]/18">
            Crafted with care, in Istanbul.
          </p>
        </div>
      </div>
    </footer>
  )
}



