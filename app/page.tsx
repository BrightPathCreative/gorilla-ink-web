import { Hero } from "@/components/Hero";
import { ProofBar } from "@/components/ProofBar";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TestimonialSection } from "@/components/TestimonialSection";
import { StorySection } from "@/components/StorySection";
import { Carousel3D } from "@/components/Carousel3D";
import { ArtistGrid } from "@/components/ArtistGrid";
import { GHLBooking } from "@/components/GHLBooking";
import { Footer } from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { FAQJsonLd } from "@/components/FAQJsonLd";
import { FAQSection } from "@/components/FAQSection";
import { AnimatedDiv, AnimatedSection } from "@/components/AnimatedSection";
import { SectionDripBar } from "@/components/SectionDripBar";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <FAQJsonLd />
      <main className="flex-1">
        <Hero />
        <ProofBar />
        <AnimatedDiv>
          <WhyChooseUs />
        </AnimatedDiv>
        <AnimatedDiv className="min-w-0 w-full">
          <TestimonialSection />
        </AnimatedDiv>
        <AnimatedDiv>
          <StorySection />
        </AnimatedDiv>
        <AnimatedSection
          id="gallery"
          className="scroll-mt-24 bg-black px-4 pb-3 pt-0 md:px-6 md:pb-5 md:pt-0"
        >
          <SectionDripBar gradientTo="to-black" />
          <div className="mx-auto max-w-6xl pt-10 md:pt-14">
            <h2 className="font-heading text-center text-4xl tracking-[0.04em] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.08)] md:text-5xl md:tracking-[0.06em]">
              Studio Showcase
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#E5E5E5]">
              A dynamic look at our recent masterpieces across all styles.
            </p>
          </div>
          <Carousel3D />
        </AnimatedSection>
        <AnimatedDiv>
          <ArtistGrid />
        </AnimatedDiv>
        <AnimatedDiv>
          <FAQSection />
        </AnimatedDiv>
        <AnimatedDiv>
          <GHLBooking />
        </AnimatedDiv>
        <AnimatedDiv>
          <Footer />
        </AnimatedDiv>
      </main>
    </>
  );
}
