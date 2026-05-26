import "@/public/css/kg.css";

import Capabilities from "@/components/kg/Capabilities";
import Hero from "@/components/kg/Hero";
import MarqueeSlider from "@/components/kg/MarqueeSlider";
import BrandsMarquee from "@/components/kg/BrandsMarquee";
import ImageSequenceScroll from "@/components/kg/ImageSequenceScroll";
import Instagram from "@/components/kg/Instagram";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Kristal Graphics",
  description:
    "Kristal Graphics",
};
export default function HomeSoftwareDevelopmentCompanyPage() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <MarqueeSlider img="logo" className="" items={["Fast timelines", "Union-made quality", "Zero compromises", "Fast timelines", "Union-made quality", "Zero compromises", "Fast timelines", "Union-made quality", "Zero compromises"]} />
        <Capabilities />
        <ImageSequenceScroll />
        <Instagram />
        <section className="mt-52">
          <MarqueeSlider img="round-logo" className="text-[#D9D9D9]" items={["Fast timelines", "Union-made quality", "Zero compromises", "Fast timelines", "Union-made quality", "Zero compromises", "Fast timelines", "Union-made quality", "Zero compromises"]} />
        </section>
        <BrandsMarquee direction="rtl" items={["brand-1.png", "brand-2.png", "brand-3.png", "brand-4.png", "brand-5.png", "brand-6.png", "brand-7.png", "brand-8.png", "brand-9.png", "brand-11.png"]} />
        <BrandsMarquee direction="ltr" items={[  "brand-11.png","brand-9.png","brand-8.png","brand-7.png","brand-6.png","brand-5.png","brand-4.png","brand-3.png","brand-2.png","brand-1.png",]} />
        <div className="max-w-[1200px] w-full mx-auto text-[40px] text-center leading-none font-light font-heading pt-52">
          Trusted by unions, local businesses, national brands, <br /> event planners, and companies that care about quality.
        </div>
        <div className="max-w-[1200px] w-full mx-auto text-[80px] text-center leading-none font-light font-heading">
          that <span className="text-[#FFD700] text-9xl">care about quality.</span>
        </div>
      </main>
    </>
  );
}

{/* <TechStacks />
<Projects />
<MarqueeSlider2 />
<Facts />
<ParallaxDivider />
<Blogs />
<Cta /> */}