"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealText from "@/components/animation/RevealText";
import Image from "next/image";
import expertiesLogo from "@/public/img/kg/experties-logo.svg";

gsap.registerPlugin(ScrollTrigger);

const ImageSequenceScroll = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const frameCount = 175;

    const currentFrame = (index) =>
      `/img/kg/sequence/Sequen_0${String(index).padStart(4, "0")}.png`;

    const images = [];
    const imageSeq = { frame: 0 };

    // Load images
    for (let i = 0; i < frameCount; i++) {
      const img = new window.Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Responsive canvas sizing
    const setCanvasSize = () => {
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 0.45;
    };

    setCanvasSize();

    const render = () => {
      if (!images[imageSeq.frame]) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const img = images[imageSeq.frame];

      // Maintain aspect ratio
      const canvasRatio = canvas.width / canvas.height;
      const imageRatio = img.width / img.height;

      let drawWidth;
      let drawHeight;

      if (imageRatio > canvasRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imageRatio;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imageRatio;
      }

      const x = (canvas.width - drawWidth) / 2;
      const y = (canvas.height - drawHeight) / 2;

      context.drawImage(img, x, y, drawWidth, drawHeight);
    };

    images[0].onload = render;

    const animation = gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: ".mid-animation",
        start: "top top",
        end: "400% top",
        scrub: true,
        pin: true,
        markers: false,
      },
      onUpdate: render,
    });

    window.addEventListener("resize", setCanvasSize);

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section className="mid-animation relative min-h-screen overflow-hidden pb-20 md:pb-32 lg:pb-52">
      
      {/* Content */}
      <div className="mx-auto max-w-[1200px] px-5 pt-10 md:px-8 lg:px-0">
        
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start">
          
          {/* Left Content */}
          <div className="flex w-full flex-col gap-5 lg:w-2/4">
            
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              
              <RevealText className="reveal-type">
                <div className="font-heading text-[22vw] font-bold leading-none sm:text-[14vw] lg:text-[12vw]">
                  4
                </div>
              </RevealText>

              <RevealText className="reveal-type">
                <div className="font-heading text-4xl font-light leading-none sm:text-5xl md:text-6xl lg:text-[70px]">
                  decades of expertise
                </div>
              </RevealText>

            </div>

            <RevealText className="pt-4 md:pt-8 lg:pt-10">
              <p className="font-body text-xl leading-relaxed sm:text-2xl md:text-3xl lg:text-5xl">
                We're a full-service print and promo shop in Chatsworth,
                California. We handle it all in-house with an experienced crew,
                committed to delivering quality that lasts and timelines you can
                actually count on.
              </p>
            </RevealText>

          </div>

          {/* Logo */}
          <div className="flex justify-start lg:justify-end">
            <Image
              src={expertiesLogo}
              alt="expertise logo"
              className="w-full sm:w-full md:w-full lg:w-72 xl:w-full"
              priority
            />
          </div>

        </div>
      </div>

      {/* Canvas */}
      <div className="mt-10 md:mt-16 lg:mt-20">
        <canvas
          ref={canvasRef}
          className="mx-auto h-auto w-[95vw] max-w-[1980px]"
        />
      </div>
    </section>
  );
};

export default ImageSequenceScroll;