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
    const frameCount = 176; // total PNG frames

    const currentFrame = index => `/img/kg/sequence/Sequen_0${String(index).padStart(4, "0")}.png`;

    const images = [];
    const imageSeq = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new window.Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = 1980;
    canvas.height = 310;

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[imageSeq.frame], 0, 0);
    };

    images[0].onload = render;

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: ".mid-animation",
        start: "0% 0%",
        end: "400% 100%",
        scrub: true,
        pin: true,
        markers: false,
      },
      onUpdate: render,
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      className="mid-animation pb-52"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <div className="flex justify-between mx-auto mxd-container grid-container ">
          <div className="flex flex-col w-2/4 gap-5 pb-52">
            <div className="flex items-center gap-7">
              <RevealText className="reveal-type">
                <div className="text-[12vw] leading-none font-bold font-heading reveal-type">4</div>
              </RevealText>
              <RevealText className="reveal-type">
                <div className="font-light leading-none text-[4.5vw] font-heading reveal-type ">decades of expertise</div>
              </RevealText>
            </div>
            <RevealText className="pt-10 text-5xl font-body reveal-type">
              We're a full-service print and promo shop in Chatsworth, California. We handle it all in-house with an experienced crew, committed to delivering quality that lasts and timelines you can
              actually count on
            </RevealText>
          </div>
          <div className="text-end">
            <Image
              src={expertiesLogo}
              alt="experties logo"
              className="w-10/12"
            />
          </div>
        </div>
      </div>
      <canvas
        className="mx-auto !w-[90vw]"
        ref={canvasRef}
      />
    </section>
  );
};

export default ImageSequenceScroll;
