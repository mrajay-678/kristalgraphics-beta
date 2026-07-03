import "@/public/css/kg.css";

import Capabilities from "@/components/kg/Capabilities";
import Hero from "@/components/kg/Hero";
import MarqueeSlider from "@/components/kg/MarqueeSlider";
import BrandsMarquee from "@/components/kg/BrandsMarquee";
import ImageSequenceScroll from "@/components/kg/ImageSequenceScroll";
import Instagram from "@/components/kg/Instagram";
import Image from "next/image";
import HomeFooter from "@/public/img/kg/homefooter.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kristal Graphics",
  description: "Kristal Graphics",
};
const brandImage = Array(18)
  .fill(null)
  .map((_, index) => {
    return `brand-${index}.svg`;
  });
export default function HomeSoftwareDevelopmentCompanyPage() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <MarqueeSlider
          img="logo"
          className="text-5xl"
          items={[
            "Fast timelines",
            "Union-made quality",
            "Built for scale",
            "Zero compromises",
            "Fast timelines",
            "Union-made quality",
            "Built for scale",
            "Zero compromises",
            "Fast timelines",
            "Union-made quality",
            "Built for scale",
            "Zero compromises",
          ]}
        />
        <Capabilities />
        <ImageSequenceScroll />
        <Instagram />
        <section className="mt-52">
          <div className="max-w-[1200px] w-full mx-auto mb-40 text-7xl xl:text-9xl text-black text-center leading-none font-light font-heading opacity-20">
            Businesses that trust us
          </div>
        </section>
        <BrandsMarquee direction="rtl" items={brandImage} />
        <BrandsMarquee direction="ltr" items={brandImage.reverse()} />
        <div className="max-w-[1200px] w-full mx-auto text-[40px] text-center leading-none font-light font-heading home-page-footer">
          <div>
            Trusted by unions, local businesses, national brands, event planners
            and companies that care about quality.
          </div>
        </div>
      </main>
    </>
  );
}
