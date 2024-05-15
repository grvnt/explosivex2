import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-carbon-color bg-carbon-fiber bg-carbon-size bg-carbon-position">
        <Hero />
        <Problem />
        <FeaturesAccordion />
        <div className="flex justify-center items-center h-screen">
          <Gallery />
        </div>
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
