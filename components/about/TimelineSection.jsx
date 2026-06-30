"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import scrollDown from "@/public/img/kg/scroll-down.svg";

gsap.registerPlugin(ScrollTrigger);

const years = [
  {
    year: "1977",
    image: "/img/kg/year-1977.png",
    title: "Humble beginnings",
    description:
      "Kristal Graphics has been around since 1977. Trusted for our quality, partnered with for our expertise.",
  },
  {
    year: "1988",
    image: "/img/kg/year-1988.png",
    title: "New Chapter",
    description:
      "The business transitioned to new ownership under the Saifee family, continuing the legacy as a trusted union print shop.",
  },
  {
    year: "2003",
    image: "/img/kg/year-2003.png",
    title: "Increasing Accessibility",
    description:
      "We moved from a commercial space to a retail storefront, making quality printing more accessible to the local community.",
  },
  {
    year: "2007",
    image: "/img/kg/year-2007.png",
    title: "Evolving to Digital",
    description:
      "By investing in advanced digital equipment, we expanded our capabilities and speed without compromising on quality.",
  },
  {
    year: "2012",
    image: "/img/kg/year-2012.png",
    title: "Growing the Portfolio",
    description:
      "Opened our second retail location and added screen printing and wide-format technology to serve more clients with new customization services.",
  },
  {
    year: "2017",
    image: "/img/kg/year-2017.png",
    title: "Expanding Services",
    description: "Acquired a mailing house and packaging house.",
  },
  {
    year: "2020",
    image: "/img/kg/year-2020.png",
    title: "The Pandemic Pivot",
    description:
      "Print retail was slow and eventually obsolete. Healthcare essentials were in high-demand. We pivoted from B2C to B2B, printing for essential supplies when they mattered most.",
  },
  {
    year: "2021",
    image: "/img/kg/year-2021.png",
    title: "Labels at Scale",
    description:
      "Added our first digital label press, bringing speed and precision to custom label production.",
  },
  {
    year: "2022",
    image: "/img/kg/year-2022.png",
    title: "Speed Meets Volume",
    description:
      "Installed high-speed digital equipment for postcards and flyers, handling bulk orders faster and delivering rush services at lightning speed.",
  },
  {
    year: "2023",
    image: "/img/kg/year-2023.png",
    title: "Adding Texture with Embroidery",
    description:
      "Brought embroidery in-house, giving clients another way to make their brand feel premium and permanent.",
  },
  {
    year: "2025",
    image: "/img/kg/year-2025.png",
    title: "Expanding Capabilities",
    description:
      "Added digital cup-printing and corrugated box-printing machines to increase our packaging and promotional product offerings.",
  },
  {
    year: "2026",
    image: "/img/kg/year-2026.png",
    title: "Perpetually Evolving",
    description:
      "Currently in the process of adding advanced UV label technology and foil embellishments, because print keeps evolving and so do we.",
  },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const yearRefs = useRef([]);
  const lineRef = useRef(null);
  const dotRef = useRef(null);

  const [active, setActive] = useState(0);

  // ---- animate to index ----
  const goTo = (index) => {
    if (index < 0 || index >= years.length) return;

    const progress = index / (years.length - 1);

    const rightSection = containerRef.current.querySelector(".right-section");

    const width = rightSection.offsetWidth;

    // gsap.to(dotRef.current, {
    //   x: progress * width - 8, // center the dot
    //   duration: 0.4,
    //   ease: "power2.out",
    // });
    setActive(index);
    gsap.to(".year-slider", {
      xPercent: -(index * 8.33),
      duration: 0.7,
      ease: "power3.out",
    });
    const target = yearRefs.current[index];

    // move horizontal indicator
    gsap.to(lineRef.current, {
      x: target.offsetTop,
      duration: 0.4,
      ease: "power2.out",
    });

    // highlight years
    yearRefs.current.forEach((el, i) => {
      gsap.to(el, {
        opacity: i === index ? 1 : 0.3,
        x: i === index ? 10 : 0,
        duration: 0.3,
      });
    });

    // content animation
    gsap.fromTo(
      ".content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.4 },
    );
  };

  // ---- scroll control (STEP BASED) ----
  useEffect(() => {
    const ctx = gsap.context(() => {
      let current = 0;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${years.length * 300}`,
        pin: true,
        scrub: true,
        snap: {
          snapTo: 1 / (years.length - 1),
          duration: 0.3,
        },
        onUpdate: (self) => {
          const index = Math.round(self.progress * (years.length - 1));
          if (index !== current) {
            current = index;
            goTo(index);
          }
        },
      });

      goTo(0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen container mx-auto overflow-hidden"
    >
      <div className="text-7xl xl:text-9xl font-heading font-thin kg-width pb-24">
        40 years of print, perfect, repeat
      </div>
      <div className="flex kg-width justify-between">
        {/* LEFT YEARS */}
        <div className="relative flex items-end justify-center w-1/12 pl-10">
          {/* vertical line */}
          <div className="space-y-2">
            {years.map((year, i) => (
              <div
                key={i}
                ref={(el) => (yearRefs.current[i] = el)}
                className="text-3xl xl:text-5xl transition cursor-pointer opacity-30 py-2"
                onClick={() => goTo(i)}
              >
                {year.year}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex flex-col justify-between gap-20 w-10/12 px-16 pt-20 right-section">
          {/* TOP LINE */}
          <div className="h-full">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-300" />

            {/* MOVING DOT */}
            <div
              ref={dotRef}
              className="absolute top-0 left-[6%] w-10 h-10 -translate-y-1/2 bg-yellow-1000"
            >
              <Image
                src="/img/kg/time-logo.svg"
                alt="Time Logo"
                width={16}
                height={16}
              />
            </div>

            {/* BIG YEAR */}
            <div className="relative h-full flex flex-col justify-between">
              <div className="relative h-36 overflow-hidden mb-10 w-full">
                <div className="flex items-center year-slider w-max ">
                  {years.map((item, index) => (
                    <div
                      key={item.year}
                      className={`year-item w-1/12 text-9xl text-center pr-20 whitespace-nowrap transition-all duration-500 ${
                        active === index
                          ? "text-black scale-100 opacity-100"
                          : "text-gray-300 scale-90 opacity-100"
                      }`}
                    >
                      {item.year}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="md:flex items-end ">
                  <div className="relative content">
                    <h2 className="mb-4 text-6xl xl:text-8xl font-heading">
                      {years[active]?.title}
                    </h2>
                  </div>
                  <Image
                    src={years[active]?.image}
                    alt="Year"
                    className="md:w-2/4 max-h-96 ms-auto content"
                    style={{ objectFit: "contain" }}
                    width={900}
                    height={900}
                  />
                </div>
                <p className="pt-10 text-gray-600">
                  {years[active]?.description}
                </p>
              </div>
            </div>
            <div
              className="absolute bottom-10 right-0"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <div className="flex flex-col items-center cursor-pointer">
                <p
                  className="text-2xl pb-10"
                  style={{
                    textOrientation: "mixed",
                    writingMode: "vertical-lr",
                  }}
                >
                  Scroll down
                </p>
                <div className="animate-bounce">
                  <Image
                    src={scrollDown}
                    alt="Scroll down"
                    className="w-12 rotate-180 "
                  />
                  <Image
                    src={scrollDown}
                    alt="Scroll down"
                    className="w-12 rotate-180"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
