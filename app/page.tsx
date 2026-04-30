import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import "@/public/css/kg.css";

import About from "@/components/homes/home-software-development-company/About";
import Capabilities from "@/components/homes/home-software-development-company/Capabilities";
import Facts from "@/components/homes/home-software-development-company/Facts";
import Hero from "@/components/homes/home-software-development-company/Hero";
import MarqueeSlider from "@/components/homes/home-software-development-company/MarqueeSlider";
import MarqueeSlider2 from "@/components/homes/home-software-development-company/MarqueeSlider2";
import ParallaxBanner from "@/components/homes/home-software-development-company/ParallaxBanner";
import ParallaxDivider from "@/components/homes/home-software-development-company/ParallaxDivider";
import Projects from "@/components/homes/home-software-development-company/Projects";
import Services from "@/components/homes/home-software-development-company/Services";
import TechStacks from "@/components/homes/home-software-development-company/TechStacks";
import Experties from "@/components/homes/home-software-development-company/Experties";
import BrandsMarquee from "@/components/homes/home-software-development-company/BrandsMarquee";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Software Development Company || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function HomeSoftwareDevelopmentCompanyPage() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <MarqueeSlider items={["Design", "Development", "Branding", "Strategy"]} />
        <Capabilities />
        <Experties />
        <video
          className=" w-11/12 mx-auto"
          preload="auto"
          autoPlay
          loop
          muted
        >
          <source type="video/mp4" src="img/kg/download.mp4" />
        </video>
        <section className="mt-52">
          <MarqueeSlider items={["Brands that trust us", "Brands that trust us", "Brands that trust us", "Brands that trust us"]} />
        </section>
        <BrandsMarquee direction="left" items={["brand-1.png", "brand-2.png", "brand-3.png", "brand-4.png", "brand-5.png", "brand-6.png", "brand-7.png", "brand-8.png", "brand-9.png", "brand-11.png"]} />
        <BrandsMarquee direction="right" items={[  "brand-11.png","brand-9.png","brand-8.png","brand-7.png","brand-6.png","brand-5.png","brand-4.png","brand-3.png","brand-2.png","brand-1.png",]} />
      </main>
      <Footer2 />
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