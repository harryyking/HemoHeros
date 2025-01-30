import CTA from "@/components/cta"
import FAQ from "@/components/faq"
import { Footer } from "@/components/footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/how-it-works"
import Problem from "@/components/Problem"
import Services from "@/components/Services"
import TrustSection from "@/components/Trust-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Your other components */}
      <Header/>
      <main className="flex-grow">
        {/* Main content */}
      <Hero/>
      <Problem/>
      <Services/>
      <TrustSection/>
      <HowItWorks/>
      <FAQ/>
      <CTA/>
        </main>
      <Footer />
    </div>
  )
}

