export default function LabelsSection() {
  return (
    <section className="text-black">
      <div className="">
        {/* Top Intro */}
        <div className="">
          <p className="text-5xl leading-none font-body font-light">
            Labels seem simple until you need them to have the perfect finish
            that suits your brand identity or look professional on a hundred
            different products. With an in-house designer to support you, we
            print custom labels in matte, glossy, clear, and holographic
            finishes. They’re waterproof, oil-resistant, and can be die-cut to
            any shape.
          </p>
        </div>

        {/* Middle Grid */}
        <div className="mt-28 grid grid-cols-1 gap-28 md:grid-cols-2">
          {/* Left Image */}
          <div>
            <img
              src="https://placehold.co/600x800"
              alt="Embroidery machine"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-28">
            <img
              src="https://placehold.co/600x600"
              alt="Printed label sample"
              className="w-full object-cover"
            />

            <p className="text-5xl leading-none font-body font-light">
              We’ve done labels for skincare, haircare and beauty brands, food
              packaging, promo products, you name it. We do decals too! Decals
              for windows, vehicles, indoor and outdoor equipment, that are
              all-weather and go on storefronts, company vehicles, laptop
              stickers, and promotional giveaways. The goal with both of these
              is the same, make your product stick in the minds of your clients.
            </p>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-28">
          <img
            src="https://placehold.co/1200x700"
            alt="Large format label printer"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}