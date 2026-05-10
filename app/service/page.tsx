"use client";
import { useEffect, useRef, useState } from "react";
import faqs from "@/data/faqs.json";
import { Faq } from "@/types/faq";
import RevealText from "@/components/animation/RevealText";

export default function Faqs() {
  const faqCotentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [faqContentHeights, setfaqContentHeights] = useState<number[]>([]);
  const [activeFaq, setActiveFaq] = useState(-1);
  useEffect(() => {
    // Get scrollHeight for each submenu and store in state
    const heights = faqCotentRefs.current.map((submenu) =>
      submenu ? submenu.scrollHeight : 0
    );
    setfaqContentHeights(heights);
  }, []);
  return (
    <>
      {/* Section - Inner Page Headline Start */}
      <div className="mxd-section mxd-section-inner-form padding-default pt-96">
        <div className="mxd-container grid-container">
          {/* Block - Inner Page Headline Start */}
          <div>
            <RevealText as="h1" className="font-light reveal-type font-heading text-9xl pb-24" >
              Our Services
            </RevealText>
          </div> 
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {/* Inner Headline Name Start */}
                <div className="col-12 col-xl-2 mxd-grid-item no-margin" />
                {/* Inner Headline Name Start */}
                {/* Inner Headline Content Start */}
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-accordion loading__fade">
                      {faqs.map((f: Faq, idx: number) => (
                        <div key={idx} className="mxd-accordion__item">
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                          <div
                            onClick={() =>
                              setActiveFaq((pre) => (pre == idx ? -1 : idx))
                            }
                            className="mxd-accordion__title anim-uni-in-up"
                          >
                            <h6 className=" reveal-type font-heading text-7xl">{f.question}</h6>
                            <div
                              className={`mxd-accordion__arrow ${
                                idx == activeFaq ? "accordion-rotate" : ""
                              } `}
                            >
                              <i className="ph ph-plus" />
                            </div>
                          </div>
                          <div
                            className="mxd-accordion__content"
                            style={{
                              display: "block",
                              height:
                                activeFaq === idx
                                  ? `calc(${faqContentHeights[idx]}px + 3.4rem)`
                                  : 0,
                              paddingBottom: activeFaq === idx ? "3.4rem" : 0,
                              transition: "all 0.3s ease",
                            }}
                            ref={(el) => {
                              faqCotentRefs.current[idx] = el;
                            }}
                          >
                            <p className="mxd-accordion__text">{f.answer}</p>
                          </div>
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Inner Headline Content End */}
              </div>
            </div>
          </div>
          {/* Block - Inner Page Headline End */}
        </div>
      </div>
      {/* Section - Inner Page Headline End */}
    </>
  );
}
