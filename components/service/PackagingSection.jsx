import Image from "next/image";
export default function PackagingSection() {
  return (
    <section className=" text-black">
      <div className=" py-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-28 md:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col  gap-20">
            <Image
              src="/img/kg/service/pack01.png"
              alt="Embroidery machine"
              className=""
              width={4000}
              height={4000}
            />

            <div className="">
              <p className="text-5xl leading-none font-body font-light">
                Packaging is crucial for your business because it’s the first
                thing someone touches, and it sets the tone before they even see
                what’s inside. We make luxury packaging boxes, mylar bags and
                shipment boxes. The kind of stuff that actually protects your
                product and makes it look thoughtful.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/img/kg/service/pack02.png"
              alt="Embroidery machine"
              className=""
              width={4000}
              height={4000}
            />
          </div>
        </div>

        {/* Bottom Image */}

        <div className="mt-28">
          <p className="text-5xl leading-none font-body font-light">
            We’ve worked with beauty brands, food companies, and plenty of small
            businesses launching their first product. Some want bold and
            colorful, others want minimal and clean. Either way, we print it,
            and assemble it. It’s not just a box, it’s part of the experience.
            One that could go viral in an unboxing video.
          </p>
        </div>
        <div className="mt-10">
          <Image
            src="/img/kg/service/pack03.png"
            alt="Large format printing"
            className="w-full object-cover"
            width={1200}
            height={700}
          />
        </div>
      </div>
    </section>
  );
}
