import Link from "next/link";

export const ContactDetails = () => {
  return (
    <section>
      <div className="text-5xl font-body text-start">
        <h2 className="font-heading">What Happens Next?</h2>
        <p className="pt-10 text-3xl">
          Within 24 hours on a weekday: We'll review your project details and
          send you a detailed quote with pricing, timeline, and next steps.
        </p>
        <p className="pt-10 text-3xl">
          If we need clarification: We'll reach out via email or
        </p>
        <p className="pt-10 text-3xl">
          phone to discuss your project in more detail. Design files not ready?
          No problem. We'll guide you through the artwork preparation process or
          offer our design services.
        </p>
      </div>
      <div className="text-5xl font-body text-start pt-52">
        <h2 className="font-heading">Prefer to talk directly?</h2>
        <div className="pt-20 flex flex-col md:flex-row gap-20 text-3xl">
          <div className="w-1/2">
            <p>
              <b>Call us:</b> (818) 342-7822
            </p>
            <p>Monday – Friday, 9am – 5pm PST</p>
          </div>
          <div>
            <b>Visit us:</b> <br /> 9607 Canoga Ave, <br /> Chatsworth, CA 91311
          </div>
        </div>
      </div>
      <div>
        <p className="pt-20 text-3xl">
          <b> Email Us: </b>
          <br />
        </p>
      </div>
      <h1 className="text-5xl md:text-8xl">
        <Link
          href="mailto:info@kristalgraphics.net"
          className="text-[#B3B3B3] hover:text-[#FEBB12] font-heading flex group"
        >
          info@kristalgraphics.net
          <div className="hidden md:block">
            <svg
              width="68"
              height="69"
              viewBox="0 0 68 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 0H42V18H36.333L25 6.00041V0Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
              <path
                d="M0 0H18V18H11.9996L0 6.00041V0Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
              <path
                d="M50 26H68V43H61.9996L50 31.6671V26Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
              <path
                d="M50 52H68V69H61.9996L50 57.6671V52Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
              <path
                d="M50 0H68V18H61.9996L50 6.00041V0Z"
                fill="#B3B3B3"
                className="group-hover:fill-[#FEBB12]"
              />
            </svg>
          </div>
        </Link>
      </h1>
    </section>
  );
};

export default ContactDetails;
