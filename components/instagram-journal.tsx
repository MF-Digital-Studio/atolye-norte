import { getInstagramFeed } from "@/lib/instagram"
import { InstagramCoverflow } from "@/components/instagram-coverflow"

export async function InstagramJournal() {
  const feed = await getInstagramFeed()

  return (
    <section
      id="instagram"
      className="bg-[#f3ede4] py-24 lg:py-32 overflow-hidden"
      data-reveal
      aria-label="Atolye Norte Journal from Instagram"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-14 gap-7">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#d6b1b1]" />
              <p className="font-sans text-[10px] tracking-[0.38em] text-[#9a8b82] uppercase">
                From Instagram
              </p>
            </div>
            <h2
              className="font-serif font-light text-[#935353] leading-[1.04] text-balance"
              style={{ fontSize: "clamp(2.2rem, 4.8vw, 4rem)" }}
            >
              Atolye Norte Journal
            </h2>
          </div>
          <div className="max-w-[350px]">
            <p className="font-sans text-[13px] text-[#935353]/72 leading-[1.75]">
              Daily details from our kitchen, coffee ritual, and celebratory commissions.
            </p>
            {feed.source === "fallback" ? (
              <p className="font-sans text-[10px] tracking-[0.16em] uppercase text-[#9a8b82] mt-4">
                Live feed unavailable. Showing curated placeholders.
              </p>
            ) : null}
          </div>
        </div>

        <InstagramCoverflow posts={feed.posts.slice(0, 6)} />

        <div className="flex justify-center mt-10">
          <a
            href={feed.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-[10px] tracking-[0.22em] uppercase border border-[#935353]/35 text-[#935353] px-9 py-3 hover:bg-[#935353] hover:text-[#f8f4ee] transition-all duration-500"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
