"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageSequenceScroll = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const frameCount = 190; // total PNG frames

    const currentFrame = (index) =>
      `/img/kg/sequence/Sequen_0${String(index).padStart(4, "0")}.png`;

    const images = [];
    const imageSeq = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
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
        trigger: canvas,
        start: "top 50%",
        end: "400% 50%",
        scrub: true,
        pin: true,
        markers: false,
      },
      onUpdate: render,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <canvas className="mx-auto !w-[90vw]" ref={canvasRef} />
    </div>
  );
};

export default ImageSequenceScroll;
