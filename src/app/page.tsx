import {
  Header,
  HeroSection,
  TVSection,
  PromotionsSection,
  AboutSection,
  CTASection,
  AfriqueSection,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 xl:pt-40">
        <HeroSection />
        <TVSection />
        <PromotionsSection />
        <AboutSection />
        <CTASection />
        <AfriqueSection />
      </main>
      <Footer />
    </>
  );
}
