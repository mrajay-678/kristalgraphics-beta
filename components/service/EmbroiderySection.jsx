import Image from "next/image";

export default function EmbroiderySection() {
  return (
    <section className=" text-black">
      <div className=" py-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-28 md:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col  gap-20">
            <p className="text-5xl leading-none font-body font-light">
              Embroidery takes patience and expertise. Thread tension has to be
              just right, placement has to be precise, and there’s no rushing a
              good stitch. But when it’s done well, embroidered logos and
              designs become part of the fabric, they don’t just sit on top.
            </p>

            <Image
              src="/img/kg/service/emb01.png"
              alt="Embroidery machine"
              className=""
              width={4000}
              height={4000}
            />
          </div>

          {/* Right Column */}
          <div className="">
            <video
              src="/video/kg/embroidery.mp4"
              autoPlay
              loop
              playsInline
              muted
              className=""
            />
          </div>
        </div>

        {/* Large Bottom Image */}
        <div className="mt-28">
          <Image
            src="/img/kg/service/emb02.png"
            alt="Embroidery machine"
            className=""
            width={4000}
            height={4000}
          />
        </div>

        {/* Bottom Text */}
        <div className=" my-28  text-center">
          <p className="text-5xl leading-none font-body font-light">
            We embroider on hats, polos, jackets, bags, and more. We also
            embroider patches and stitch them onto merch. Yes, embroidery can be
            slower than printing, but it lasts longer and feels more
            substantial. In the world of customization embroidery is like quiet
            luxury.
          </p>
        </div>
      </div>
    </section>
  );
}
