"use client";

import { useState } from "react";
import ScreenPrintingSection from "@/components/service/ScreenPrintingSection";
import EmbroiderySection from "@/components/service/EmbroiderySection";
import PromotionalProductsSection from "@/components/service/PromotionalProductsSection";
import PackagingSection from "@/components/service/PackagingSection";
import FulfillmentSection from "@/components/service/FulfillmentSection";
import LabelsSection from "@/components/service/LabelsSection";
import Image from "next/image";
import ServiceHero from "@/components/kg/ServiceHero";
import { services } from "@/data/kg/services";
import Link from "next/link";

type HoverState = {
  activeIndex: number | null;
  x: number;
};

const Page = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const [hoverState, setHoverState] = useState<HoverState>({
    activeIndex: null,
    x: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>, index: number) => {
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
    <main className="pt-60">
      <div className="w-11/12 mx-auto">
        <ServiceHero />
        <div className="relative font-inter antialiased">
          <div className="relative min-h-screen overflow-hidde">
            <div className="mxd-block">
              <div className="p-0 container-fluid">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item no-margin">
                    <div className="mxd-cpb-list">
                      {services.map((item, idx: number) => {
                        const isOpen = openIndex === idx;
                        return (
                          <div
                            className="mxd-cpb-list__item hover-reveal__item"
                            onMouseMove={(e) => handleMouseMove(e, idx)}
                            onMouseLeave={handleMouseLeave}
                            key={idx}
                          >
                            <Link href={`/service/${item.slug}`}>
                              <div className="mxd-cpb-list__divider" />

                              <div className="mxd-cpb-list__content anim-uni-in-up justify-between">
                                <div className="mxd-awards-list__icon">
                                  <i className="ph ph-arrow-right"> →</i>
                                </div>
                                <h6 className="m-0 w-1/4 mxd-cpb-list__title text-7xl font-heading">
                                  {item.question}
                                </h6>
                                <div className="mxd-cpb-list__num w-2/4 font-heading">
                                  {!isOpen && (
                                    <p className="text-5xl font-body font-light">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                                <div className=" ">
                                  <Image
                                    className="w-full h-full"
                                    alt="Project Preview"
                                    src={item.hoverImage}
                                    width={300}
                                    height={430}
                                  />
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
