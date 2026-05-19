import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import "@/public/css/kg.css";

import Capabilities from "@/components/homes/home-software-development-company/Capabilities";
import Hero from "@/components/homes/home-software-development-company/Hero";
import MarqueeSlider from "@/components/homes/home-software-development-company/MarqueeSlider";
import Experties from "@/components/homes/home-software-development-company/Experties";
import BrandsMarquee from "@/components/homes/home-software-development-company/BrandsMarquee";
import ImageSequenceScroll from "@/components/homes/home-software-development-company/ImageSequenceScroll";
import Instagram from "@/components/homes/home-software-development-company/Instagram";

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
        <MarqueeSlider items={["Design", "Development", "Branding", "Strategy","Design", "Development", "Branding", "Strategy","Design", "Development", "Branding", "Strategy","Design", "Development", "Branding", "Strategy"]} />
        <Capabilities />
        <ImageSequenceScroll />
        <Instagram />
        <section className="mt-52">
          <MarqueeSlider className="text-[#D9D9D9]" items={["Brands that trust us", "Brands that trust us", "Brands that trust us", "Brands that trust us"]} />
        </section>
        <BrandsMarquee direction="left" items={["brand-1.png", "brand-2.png", "brand-3.png", "brand-4.png", "brand-5.png", "brand-6.png", "brand-7.png", "brand-8.png", "brand-9.png", "brand-11.png"]} />
        <BrandsMarquee direction="right" items={[  "brand-11.png","brand-9.png","brand-8.png","brand-7.png","brand-6.png","brand-5.png","brand-4.png","brand-3.png","brand-2.png","brand-1.png",]} />
        <div className="w-6/12 mx-auto text-5xl text-center font-body pt-52">
          Trusted by unions, local businesses, national brands, <br /> event planners, and companies that care about quality.
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