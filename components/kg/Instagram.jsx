import Image from "next/image";
import instagram1 from "../../public/img/kg/instagram-1.png";
import instagram2 from "../../public/img/kg/instagram-2.png";
import instagram3 from "../../public/img/kg/instagram-3.png";

export const Instagram = () => {
  return (
    <section className="mxd-container grid-container py-16 md:py-24">
      {/* Top Content */}
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
        
        {/* Left */}
        <div className="w-full lg:w-6/12">
          <h2 className="font-heading text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            We're highly <br />
            (almost incurably) social!
          </h2>
        </div>

        {/* Right */}
        <div className="w-full lg:w-6/12">
          <p className="font-body text-xl leading-relaxed sm:text-2xl md:text-3xl lg:text-5xl">
            Follow us for behind-the-scenes production, service
            spotlights, and proof that print isn't dead it's just
            getting better.
          </p>
        </div>
      </div>

      {/* Instagram Images */}
      <div className="pt-12 md:pt-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          
          <div className="overflow-hidden">
            <Image
              src={instagram1}
              alt="Instagram post 1"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden">
            <Image
              src={instagram2}
              alt="Instagram post 2"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden sm:col-span-2 lg:col-span-1">
            <Image
              src={instagram3}
              alt="Instagram post 3"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Instagram;