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

type FAQItem = {
  question: string;
  description: string;
  hoverImage: string;
  answer: React.ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: "Screen printing",
    description:
      "Screen printing is what we've been doing the longest, and honestly, it's still our favorite...",
    hoverImage: "/img/kg/screen-hover.svg",
    answer: <ScreenPrintingSection />,
  },
  {
    question: "Embroidery",
    description:
      "Embroidery takes patience and expertise. Thread tension has to be just ...",
    hoverImage: "/img/kg/embroidery-hover.svg",
    answer: <EmbroiderySection />,
  },
  {
    question: "Promotional Products",
    description:
      "Promotional Products don't have to end up in a drawer if they're sourced well. We source ...",
    hoverImage: "/img/kg/promotional-hover.svg",
    answer: <PromotionalProductsSection />,
  },
  {
    question: "Packaging",
    description:
      "Packaging is crucial for your business because it's the first thing someone touches, and it ...",
    hoverImage: "/img/kg/packing-hover.svg",
    answer: <PackagingSection />,
  },
  {
    question: "Fulfillment & Delivery",
    description:
      "Fulfillment & Delivery is another service we offer here at our Chatsworth, CA facility. Printing is ...",
    hoverImage: "/img/kg/screen-hover.svg",
    answer: <FulfillmentSection />,
  },
  {
    question: "Labels",
    description:
      "Labels seem simple until you need them to have the perfect finish that suits your ...",
    hoverImage: "/img/kg/labels-hover.svg",
    answer: <LabelsSection />,
  },
];

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
      <div className="mxd-container grid-container">
        <ServiceHero />
        <div className="relative font-inter antialiased">
          <div className="relative min-h-screen overflow-hidde">
            <div className="mxd-block">
              <div className="p-0 container-fluid">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item no-margin">
                    <div className="mxd-cpb-list">
                      {faqs.map((item, idx: number) => {
                        const isOpen = openIndex === idx;
                        return (
                          <div
                            className="mxd-cpb-list__item hover-reveal__item"
                            onMouseMove={(e) => handleMouseMove(e, idx)}
                            onMouseLeave={handleMouseLeave}
                            key={idx}
                          >
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
                            <div className="mxd-cpb-list__content anim-uni-in-up justify-between">
                              <h6 className="m-0 w-2/4 mxd-cpb-list__title font-40 font-heading">{item.question}</h6>
                              <div className="mxd-cpb-list__num w-2/4 font-heading">
                                {!isOpen && (
                                  <p className="text-5xl font-body font-light">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        )
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
