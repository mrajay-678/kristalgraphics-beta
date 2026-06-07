"use client";
import Image from "next/image";
import { useState } from "react";
import capabilities from "@/data/capabilities.json";
import RevealText from "@/components/animation/RevealText";
import { compatibility } from "@/types/capabilities";
import blackLogo from "@/public/img/kg/black-logo.svg";
import Link from "next/link";

type HoverState = {
  activeIndex: number | null;
  x: number;
};
export default function Capabilities() {
  const [hoverState, setHoverState] = useState<HoverState>({
    activeIndex: null,
    x: 0,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    setHoverState({
      activeIndex: index,
      x: e.clientX,
    });
  };

  const handleMouseLeave = () => {
    setHoverState((pre) => {
      return {
        activeIndex: null,
        x: pre.x,
      };
    });
  };

  return (
    <div className="overflow-hidden mxd-section padding-grid-pre-pinned">
      <div className="mxd-container grid-container">
        {/* Block - Section Title Start */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="p-0 container-fluid">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <RevealText
                      as="h2"
                      className="font-light reveal-type font-heading md:text-9xl text-7xl font-black"
                    >
                      Our capabilities
                    </RevealText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Section Title End */}
        {/* Block - Our Capabilities List Start */}
        <div className="mxd-block">
          <div className="p-0 container-fluid">
            <div className="row g-0">
              <div className="col-12 mxd-grid-item no-margin">
                <div className="mxd-cpb-list">
                  {capabilities.map((item: compatibility, idx: number) => (
                    <div
                      className="mxd-cpb-list__item hover-reveal__item"
                      onMouseMove={(e) => handleMouseMove(e, idx)}
                      onMouseLeave={handleMouseLeave}
                      key={idx}
                    >
                      <Link href={`/service/${item.slug}`}>
                        <div className="mxd-cpb-list__divider anim-uni-in-up" />
                        <div
                          className="hover-reveal__content hover-reveal-280x340"
                          style={{
                            opacity: hoverState.activeIndex === idx ? 1 : 0,
                            transform: "translate(-80%, -50%)",
                            left: hoverState.x,

                            pointerEvents: "none",
                            transition: "opacity 0.3s ease",
                          }}
                        >
                          <Image
                            className="hover-reveal__image"
                            style={{
                              transform:
                                hoverState.activeIndex === idx
                                  ? "scale(1,1)"
                                  : "scale(1,1.4)",
                              transition: "transform 0.3s ease",
                            }}
                            alt="Project Preview"
                            src={item.hoverImage}
                            width={600}
                            height={730}
                          />
                        </div>
                        <div className="mxd-cpb-list__content anim-uni-in-up">
                          <h6 className="m-0 mxd-cpb-list__title font-40 font-heading">
                            {item.title}
                          </h6>
                          <div className="mxd-cpb-list__num font-heading">
                            <h6 className="font-bold">/0{idx + 1}</h6>
                          </div>
                        </div>
                        <div className="mxd-cpb-list__image anim-uni-in-up">
                          <Image
                            alt="Project Preview"
                            src={item.mainImage}
                            width={1200}
                            height={800}
                          />
                        </div>
                        <div className="mxd-cpb-list__divider anim-uni-in-up" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Our Capabilities List Start */}
      </div>
    </div>
  );
}
