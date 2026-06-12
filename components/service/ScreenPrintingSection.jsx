
import Image from "next/image";

export default function ScreenPrintingSection() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto py-12">
        {/* Top Layout */}
        <div className="grid grid-cols-1 gap-28 md:grid-cols-2">
          {/* Left Image */}
          <div>
            <Image
              src="/img/kg/service/screen01.png"
              alt="Screen printing machine"
              className=""
              width={4000}
              height={4000}
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between">
            <p className="text-5xl leading-none font-body font-light">
              Screen printing is what we’ve been doing the longest, and honestly,
              it’s still our favorite. There’s something satisfying about
              watching ink go through mesh and land exactly where it should. It’s
              also the most vibrant, durable, and consistent customization across
              hundreds and thousands of pieces.
            </p>

            <Image
              src="/img/kg/service/screen02.png"
              alt="Screen printing machine"
              className="w-full object-cove"
              width={600}
              height={600}
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