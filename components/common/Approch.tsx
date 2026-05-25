import Link from "next/link";
import Image from "next/image";

import { approach1 } from "@/data/approach.json";
import RevealText from "../animation/RevealText";
export default function Approch() {
  return (
    <div className="mxd-section padding-pre-grid mobile-grid-s pt-52">
      <div className="container mx-auto">
        {/* Block - Section Title Start */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="p-0 container-fluid">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <RevealText as="h2" className="font-light reveal-type font-heading text-9xl">
                      Why Choose Us?
                    </RevealText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Section Title End */}
        {/* Block - Approach and Philosophy List Start */}
        <div className="mxd-block">
          <div className="mxd-approach-list">
            {approach1.map((item, idx) => (
              <div className="mxd-approach-list__item" key={idx}>
                <div className="mxd-approach-list__border anim-uni-in-up" />
                <div className="mxd-approach-list__inner">
                  <div className="px-0 container-fluid">
                    <div className="flex flex-col justify-between gap-0 xl:flex-row">
                      <div className="w-full xl:w-1/2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title !text-start anim-uni-in-up">
                          <h6 className="text-7xl font-heading">{item.title}</h6>
                        </div>
                      </div>
                      <div className="w-full xl:w-1/2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p className="w-3/4 text-5xl font-thin">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up" />
              </div>
            ))}
          </div>
        </div>
        {/* Block - Approach and Philosophy List Start */}
      </div>
    </div>
  );
}
