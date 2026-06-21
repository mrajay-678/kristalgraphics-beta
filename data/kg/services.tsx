import ScreenPrintingSection from "@/components/service/ScreenPrintingSection";
import EmbroiderySection from "@/components/service/EmbroiderySection";
import PromotionalProductsSection from "@/components/service/PromotionalProductsSection";
import PackagingSection from "@/components/service/PackagingSection";
import FulfillmentSection from "@/components/service/FulfillmentSection";
import LabelsSection from "@/components/service/LabelsSection";

export const services = [
  {
    slug: "screen-printing",
    question: "Screen Printing",
    description:
      "Screen printing is what we've been doing the longest, and honestly, it's still our favorite. There's something satisfying about watching ink go through mesh and land exactly where it should. It's also the most vibrant, durable, and consistent customization across hundreds and thousands of pieces...",
    hoverImage: "/img/kg/screen-hover.svg",
    answer: <ScreenPrintingSection />,
  },
  {
    slug: "embroidery",
    question: "Embroidery",
    description:
      "Embroidery takes patience and expertise. Thread tension has to be just right, placement has to be precise, and there's no rushing a good stitch. But when it's done well, embroidered logos and designs become part of the fabric, they don't just sit on top...",
    hoverImage: "/img/kg/embroidery-hover.svg",
    answer: <EmbroiderySection />,
  },
  {
    slug: "labels",
    question: "Labels",
    description:
      "Promotional Products don't have to end up in a drawer if they're sourced well. We source products people like to actually use. Good quality drinkware, useful accessories, hats and tees that last, and totes that don't fall apart. We customize them with your branding with print, embroidery, or labels; you can consult our design team to know what works best...",
    hoverImage: "/img/kg/labels-hover.svg",
    answer: <LabelsSection />,
  },
  {
    slug: "promotional-products",
    question: "Promotional Products",
    description:
      "Packaging is crucial for your business because it's the first thing someone touches, and it sets the tone before they even see what's inside. We make luxury packaging boxes, mylar bags and shipment boxes. The kind of stuff that actually protects your product and makes it look thoughtful...",
    hoverImage: "/img/kg/promotional-hover.svg",
    answer: <PromotionalProductsSection />,
  },
  {
    slug: "packaging",
    question: "Packaging",
    description:
      "Fulfillment & Deilvery is another service we offer here at our Chatsworth, CA facility. Printing is one thing, but getting it packed, sorted, and shipped to the right place on time? That's the part people underestimate...",
    hoverImage: "/img/kg/packing-hover.svg",
    answer: <PackagingSection />,
  },
  {
    slug: "fulfillment-delivery",
    question: "Fulfillment & Delivery",
    description:
      "Labels seem simple until you need them to have the perfect finish that suits your brand identity or look professional on a hundred different products. With an in-house designer to support you, we print custom labels in matte, glossy, clear, and holographic finishes. They're waterproof, oil-resistant, and can be die-cut to any shape...",
    hoverImage: "/img/kg/fulfillment-hover.svg",
    answer: <FulfillmentSection />,
  },
];
