"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const years = ["1977", "1980", "1982", "1991", "1995", "1998", "2001", "2003", "2006", "2015", "2021", "2026"];

export default function Timeline() {
  const containerRef = useRef(null);
  const yearRefs = useRef([]);
  const lineRef = useRef(null);
  const dotRef = useRef(null);

  const [active, setActive] = useState(0);

  // ---- animate to index ----
  const goTo = index => {
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
    gsap.fromTo(".content", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4 });
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
        onUpdate: self => {
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
    <section
      ref={containerRef}
      className="h-screen w-full flex bg-[#f5f5f5] overflow-hidden pt-96"
    >
      {/* LEFT YEARS */}
      <div className="w-1/3 relative flex items-center pl-10">
        {/* vertical line */}
        <div className="absolute left-[0] top-0 h-full w-[2px] bg-gray-300 flex" />
        {/* moving indicator */}
        <div
          ref={lineRef}
          className="absolute left-4 w-4 h-[2px] bg-black"
        />

        <div className="space-y-4">
          {years.map((year, i) => (
            <div
              key={i}
              ref={el => (yearRefs.current[i] = el)}
              className="text-2xl opacity-30 transition"
            >
              {year}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-2/3 right-section relative flex flex-col justify-start pt-20 px-16">
        {/* TOP LINE */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-300" />

        {/* MOVING DOT */}
        <div
          ref={dotRef}
          className="absolute top-0 left-0 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black"
        />

        {/* BIG YEAR */}
        <div className="text-[120px] leading-none font-light tracking-tight mb-10">{years[active]}</div>

        {/* IMAGE */}
        <div className="w-full max-w-3xl mb-10">
          <img
            src="/your-image.jpg"
            className="w-full h-auto object-cover"
            alt=""
          />
        </div>

        {/* CONTENT */}
        <div className="content">
          <h2 className="text-5xl font-semibold mb-4">Humble beginnings</h2>
          <p className="text-gray-600 max-w-xl">Kristal Graphics has been around since 1977. Trusted for our quality, partnered with for our expertise.</p>
        </div>
      </div>
    </section>
  );
}
