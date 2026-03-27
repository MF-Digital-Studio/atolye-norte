"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export function OurSpaces() {
  return (
    <section
      id="spaces"
      className="bg-[#ede4da] py-28 lg:py-44 overflow-hidden"
      data-reveal
      aria-label="Our spaces and location"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-28 items-center">
          <div className="relative">
            <div
              className="absolute -top-6 -left-6 w-36 h-36 border border-[#d6b1b1]/15 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/spaces.jpg"
                alt="The interior of Atolye Norte with warm light, velvet seating, and marble tables"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-10 -right-4 lg:-right-12 bg-[#935353] px-8 py-7 shadow-xl">
              <p className="font-sans text-[9px] tracking-[0.28em] text-[#d6b1b1] uppercase mb-4">
                Opening Hours
              </p>
              <p className="font-sans text-[12.5px] text-[#f8f4ee]/88 leading-[2]">
                Mon - Fri - 08:00 - 20:00
              </p>
              <p className="font-sans text-[12.5px] text-[#f8f4ee]/88 leading-[2]">
                Sat - Sun - 09:00 - 21:00
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-9">
              <div className="w-8 h-px bg-[#d6b1b1]" />
              <p className="font-sans text-[10px] tracking-[0.38em] text-[#9a8b82] uppercase">
                Our Spaces
              </p>
            </div>

            <h2
              className="font-serif font-light text-[#935353] leading-[1.04] mb-10 text-balance"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.75rem)" }}
            >
              A destination
              <br />
              <em className="italic text-[#d6b1b1]">worth seeking.</em>
            </h2>

            <p className="font-sans text-[15px] text-[#935353]/72 leading-[1.78] max-w-[490px] mb-12">
              Atolye Norte is conceived as much as a space as it is a menu. The
              interior is designed to carry warmth and calm - a place where the
              architecture of light, material, and comfort are in deliberate
              harmony. A room you will want to return to.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div
                className="group relative border border-[#d6b1b1]/30 p-5 hover:border-[#935353]/50 hover:bg-[#f8f4ee]/40 transition-all duration-300 cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/dir//At%C3%B6lye+Norte,+Ya%C5%9Famkent,+3149.+Sk.+no+a+D:1,+06810+%C3%87ankaya%2FAnkara/@41.0101129,29.0648911,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d33f9d6e5428bd:0x2f7b4b03d0e4f4df!2m2!1d32.653416!2d39.8643077",
                    "_blank",
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    window.open(
                      "https://www.google.com/maps/dir//At%C3%B6lye+Norte,+Ya%C5%9Famkent,+3149.+Sk.+no+a+D:1,+06810+%C3%87ankaya%2FAnkara/@41.0101129,29.0648911,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d33f9d6e5428bd:0x2f7b4b03d0e4f4df!2m2!1d32.653416!2d39.8643077",
                      "_blank",
                    );
                  }
                }}
              >
                <div className="absolute top-5 right-5 text-[#9a8b82] group-hover:text-[#935353] transition-colors duration-300">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <p className="font-sans text-[9px] tracking-[0.3em] text-[#9a8b82] uppercase mb-3 group-hover:text-[#935353] transition-colors">
                  Çankaya
                </p>
                <address className="not-italic font-sans text-[13.5px] text-[#935353] leading-[1.75] mb-3">
                  Çankaya
                  <br />
                  Ankara, Türkiye
                </address>
                <p className="font-sans text-[12px] text-[#9a8b82] leading-[1.6]">
                  Ana mekanımız. Sıcak atmosfer, konfor ve rafine bir deneyim.
                </p>
              </div>

              <div
                className="group relative border border-[#d6b1b1]/30 p-5 hover:border-[#935353]/50 hover:bg-[#f8f4ee]/40 transition-all duration-300 cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/dir//AT%C3%96LYE+NORTE+BEYTEPE,+M%C4%B0RA+RES%C4%B0DANS+D%C3%9CKKANLAR,+Beytepe,+Kanuni+Sultan+S%C3%BCleyman+Blv+NO+:67,+06800+%C3%87ankaya%2FAnkara/@41.0101129,29.0648911,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d33900173bdfc1:0x6d95477e99f86887!2m2!1d32.7125807!2d39.8625436",
                    "_blank",
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    window.open(
                      "https://www.google.com/maps/dir//AT%C3%96LYE+NORTE+BEYTEPE,+M%C4%B0RA+RES%C4%B0DANS+D%C3%9CKKANLAR,+Beytepe,+Kanuni+Sultan+S%C3%BCleyman+Blv+NO+:67,+06800+%C3%87ankaya%2FAnkara/@41.0101129,29.0648911,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d33900173bdfc1:0x6d95477e99f86887!2m2!1d32.7125807!2d39.8625436",
                      "_blank",
                    );
                  }
                }}
              >
                <div className="absolute top-5 right-5 text-[#9a8b82] group-hover:text-[#935353] transition-colors duration-300">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <p className="font-sans text-[9px] tracking-[0.3em] text-[#9a8b82] uppercase mb-3 group-hover:text-[#935353] transition-colors">
                  Beytepe
                </p>
                <address className="not-italic font-sans text-[13.5px] text-[#935353] leading-[1.75] mb-3">
                  Beytepe
                  <br />
                  Ankara, Türkiye
                </address>
                <p className="font-sans text-[12px] text-[#9a8b82] leading-[1.6]">
                  Şubemiz. Aynı kalite, aynı özen ve zengin menü.
                </p>
              </div>
            </div>

            <div
              className="w-16 h-px bg-[#d6b1b1]/50 mb-11"
              aria-hidden="true"
            />

            <Link
              href="#contact"
              className="inline-block font-sans text-[10.5px] tracking-[0.22em] uppercase bg-[#935353] text-[#f8f4ee] px-10 py-[14px] hover:bg-[#d6b1b1] transition-colors duration-500"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
