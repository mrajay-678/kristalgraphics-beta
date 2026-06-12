export default function FulfillmentSection() {
  return (
    <section className=" text-black">
      <div className=" py-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-28 md:grid-cols-2">
          {/* Left Image */}
          <div>
            <img
              src="https://placehold.co/600x800"
              alt="Embroidery machine"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between">
            <p className="text-5xl leading-none font-body font-light">
              Fulfillment &amp; Delivery is another service we offer here at our
              Chatsworth, CA facility. Printing is one thing, but getting it
              packed, sorted, and shipped to the right place on time? That’s
              the part people underestimate.
            </p>

            <img
              src="https://placehold.co/600x600"
              alt="Printed apparel"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Image */}
        <div className="my-28">
          <img
            src="https://placehold.co/1200x700"
            alt="Large format printer"
            className="w-full object-cover"
          />
        </div>

        {/* Bottom Text */}
        <div className=" text-center">
          <p className="text-5xl leading-none font-body font-light">
            We handle fulfillment that includes labeling, folding, assembly,
            storing inventory, packing orders, coordinating shipments to one
            location or twenty. It’s not glamorous, but it’s necessary.
            Especially when you’re managing an event or a product launch. We’ve
            done this enough times to know where things go wrong, so we just…
            don’t let them. Printed here, shipped from here, delivered on time.
          </p>
        </div>
      </div>
    </section>
  );
}