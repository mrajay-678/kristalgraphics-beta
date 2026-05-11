export default function ScreenPrintingSection() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto py-12">
        {/* Top Layout */}
        <div className="grid grid-cols-1 gap-28 md:grid-cols-2">
          {/* Left Image */}
          <div>
            <img
              src="https://placehold.co/600x800"
              alt="Screen printing machine"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-28">
            <p className="text-5xl leading-none font-body font-light">
              Screen printing is what we’ve been doing the longest, and honestly,
              it’s still our favorite. There’s something satisfying about
              watching ink go through mesh and land exactly where it should. It’s
              also the most vibrant, durable, and consistent customization across
              hundreds and thousands of pieces.
            </p>

            <img
              src="https://placehold.co/600x600"
              alt="Printed apparel"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Center Text */}
        <div className="mx-auto mt-28 text-center">
          <p className="text-5xl leading-none font-body font-light">
            We screenprint on t-shirts, bags, totes, and pretty much anything
            that can handle ink and pressure. We love scale and we set up each
            job carefully and expertly. It’s repetitive work, but that’s where
            the consistency comes from. Union-made in Chatsworth, the way it’s
            been done for decades.
          </p>
        </div>

        {/* Bottom Image */}
        <div className="mt-28">
          <img
            src="https://placehold.co/1200x600"
            alt="Large format printing"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}