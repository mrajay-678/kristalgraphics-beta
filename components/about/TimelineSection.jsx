"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import year from "@/public/img/kg/year-1977.png";

gsap.registerPlugin(ScrollTrigger);

const years = [
  "1977",
  "1980",
  "1982",
  "1991",
  "1995",
  "1998",
  "2001",
  "2003",
  "2006",
  "2015",
  "2021",
  "2026",
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

    gsap.to(dotRef.current, {
      x: progress * width - 8, // center the dot
      duration: 0.4,
      ease: "power2.out",
    });
    setActive(index);

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
      <div className="text-6xl md:text-9xl font-heading font-thin kg-width pb-24">
        40 years of print, perfect, repeat
      </div>
      <div className="flex kg-width justify-between">
        {/* LEFT YEARS */}
        <div className="relative flex items-center justify-center w-1/12 pl-10">
          {/* vertical line */}
          <div className="space-y-4">
            {years.map((year, i) => (
              <div
                key={i}
                ref={(el) => (yearRefs.current[i] = el)}
                className="text-3xl md:text-5xl transition cursor-pointer opacity-30 py-2"
                onClick={() => goTo(i)}
              >
                {year}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex flex-col justify-between w-10/12 px-16 pt-20 right-section pb-20">
          {/* TOP LINE */}
          <div>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-300" />

            {/* MOVING DOT */}
            <div
              ref={dotRef}
              className="absolute top-0 left-0 w-10 h-10 -translate-y-1/2 bg-yellow-1000"
            >
              <Image
                src="/img/kg/time-logo.svg"
                alt="Time Logo"
                width={16}
                height={16}
              />
            </div>

            {/* BIG YEAR */}
            <div className="relative md:flex">
              <div className="text-6xl md:text-9xl leading-none font-light mb-10">
                {years[active]}
                <div className="relative w-4/4 content">
                  <h2 className="mb-4 font-semibold text-6xl md:text-9xl font-heading">
                    Humble beginnings
                  </h2>
                  <p className="pt-10 text-gray-600">
                    Kristal Graphics has been around since 1977. Trusted for our
                    quality, partnered with for our expertise.
                  </p>
                </div>
              </div>
              <Image
                src={year}
                alt="Year"
                className="md:w-2/4 ms-auto content"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
