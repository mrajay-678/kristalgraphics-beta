export default function PromotionalProductsSection() {
  return (
    <section className=" text-black">
      <div className="py-28">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
          {/* Left Image */}
          <div>
            <img
              src="https://placehold.co/600x800"
              alt="Embroidery machine"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-24">
            <p className="text-5xl leading-none font-body font-light">
              Promotional Products don’t have to end up in a drawer if they’re
              sourced well. We source products people like to actually use. Good
              quality drinkware, useful accessories, hats and tees that last,
              and totes that don’t fall apart. We customize them with your
              branding with print, embroidery, or labels; you can consult our
              design team to know what works best.
            </p>

            <img
              src="https://placehold.co/600x600"
              alt="Promotional apparel"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Middle Text */}
        <div className="my-28 text-center">
          <p className="text-5xl leading-none font-body font-light">
            It could be for trade shows, corporate gifts, employee swag, and
            events. With a large selection of premium quality blanks that you
            can pick from, you can choose what best suits your requirements.
            Promo products are essentially memorabilia people will keep, use and
            remember your brand by.
          </p>
        </div>

        {/* Bottom Image */}
        <div className="">
          <img
            src="https://placehold.co/1200x700"
            alt="Large format printer"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}