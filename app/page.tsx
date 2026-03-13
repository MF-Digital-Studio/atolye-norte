import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Manifesto } from "@/components/manifesto"
import { SignatureExperience } from "@/components/signature-experience"
import { EditorialGallery } from "@/components/editorial-gallery"
import { CelebrationCakes } from "@/components/celebration-cakes"
import { MenuHighlights } from "@/components/menu-highlights"
import { OurSpaces } from "@/components/our-spaces"
import { AtmosphereQuote } from "@/components/atmosphere-quote"
import { InstagramJournal } from "@/components/instagram-journal"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Manifesto />
        <SignatureExperience />
        <EditorialGallery />
        <CelebrationCakes />
        <MenuHighlights />
        <OurSpaces />
        <AtmosphereQuote />
        <InstagramJournal />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
