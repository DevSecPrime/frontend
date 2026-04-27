import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Brands } from "@/components/brands"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Testimonial } from "@/components/testimonial"
import { Stats } from "@/components/stats"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Brands />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Stats />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
