export default function PackagingSection() {
  return (
    <section className=" text-black">
      <div className=" py-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-28 md:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col gap-28">
            <img
              src="https://placehold.co/600x600"
              alt="Packaging sample"
              className="w-full object-cover"
            />

            <div className="">
              <p className="text-5xl leading-none font-body font-light mb-10">
                Packaging is crucial for your business because it’s the first
                thing someone touches, and it sets the tone before they even see
                what’s inside. We make luxury packaging boxes, mylar bags and
                shipment boxes. The kind of stuff that actually protects your
                product and makes it look thoughtful.
              </p>

              <p className="text-5xl leading-none font-body font-light">
                We’ve worked with beauty brands, food companies, and plenty of
                small businesses launching their first product. Some want bold
                and colorful, others want minimal and clean. Either way, we
                print it, and assemble it. It’s not just a box, it’s part of
                the experience. One that could go viral in an unboxing video.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://placehold.co/600x800"
              alt="Embroidery machine"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-10">
          <img
            src="https://placehold.co/1200x700"
            alt="Large format printing"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}