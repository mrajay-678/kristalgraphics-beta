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

    const frameCount = 176;

    const currentFrame = (index) =>
      `/img/kg/sequence/ezgif-frame-${String(index).padStart(3, "0")}.png`;

    const images = [];

    const imageSeq = {
      frame: 0,
    };

    // PRELOAD IMAGES
    for (let i = 1; i <= frameCount; i++) {

      const img = new window.Image();

      img.src = currentFrame(i);
      img.style.objectFit = "contain";

      images.push(img);
    }

    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    canvas.width = 1980;
    canvas.height = 310;

    const render = () => {

      const image = images[imageSeq.frame];

      // IMPORTANT FIX
      if (!image || !image.complete) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      context.drawImage(
        image,
        0,
        0,
        canvas.width,
        canvas.height
      );
    };

    // INITIAL RENDER
    images[0].onload = () => {
      render();
    };

    const tween = gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",

      onUpdate: render,

      scrollTrigger: {
        trigger: ".mid-animation",
        start: "25% top",
        end: "200% bottom",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    return () => {

      tween.kill();

      ScrollTrigger.getAll().forEach((t) => t.kill());

    };

  }, []);

  return (
    <section
      className="mid-animation pb-52"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <div className="flex justify-between mx-auto mxd-container grid-container">

          <div className="flex flex-col w-2/4 gap-5 pb-52">

            <div className="flex items-center gap-7">

              <RevealText className="reveal-type">
                <div className="text-[12vw] leading-none font-bold font-heading">
                  4
                </div>
              </RevealText>

              <RevealText className="reveal-type">
                <div className="font-light leading-none text-[4.5vw] font-heading">
                  decades of expertise
                </div>
              </RevealText>

            </div>

            <div className="pt-10 text-5xl font-body reveal-type w-10/12">
              We're a full-service print and promo shop in
              Chatsworth, California. We handle it all
              in-house with an experienced crew,
              committed to delivering quality that lasts
              and timelines you can actually count on.
            </div>

          </div>

          <div className="text-end">
            <Image
              src={expertiesLogo}
              alt="experties logo"
              className="w-10/12 pt-20"
            />
          </div>

        </div>
      </div>

      <canvas
        ref={canvasRef}
        className="mx-auto w-full"
      />

    </section>
  );
};

export default ImageSequenceScroll;