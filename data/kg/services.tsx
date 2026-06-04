import ScreenPrintingSection from "@/components/service/ScreenPrintingSection";
import EmbroiderySection from "@/components/service/EmbroiderySection";
import PromotionalProductsSection from "@/components/service/PromotionalProductsSection";
import PackagingSection from "@/components/service/PackagingSection";
import FulfillmentSection from "@/components/service/FulfillmentSection";
import LabelsSection from "@/components/service/LabelsSection";

export const services = [
  {
    slug: "screen-printing",
    question: "Screen printing",
    description:
      "Screen printing is what we've been doing the longest, and honestly, it's still our favorite...",
    hoverImage: "/img/kg/screen-hover.svg",
    answer: <ScreenPrintingSection />,
  },
  {
    slug: "embroidery",
    question: "Embroidery",
    description:
      "Embroidery takes patience and expertise. Thread tension has to be just...",
    hoverImage: "/img/kg/embroidery-hover.svg",
    answer: <EmbroiderySection />,
  },
  {
    slug: "labels",
    question: "Labels",
    description:
      "Labels seem simple until you need them to have the perfect finish...",
    hoverImage: "/img/kg/labels-hover.svg",
    answer: <LabelsSection />,
  },
  {
    slug: "promotional-products",
    question: "Promotional Products",
    description:
      "Promotional Products don't have to end up in a drawer if they're sourced well...",
    hoverImage: "/img/kg/promotional-hover.svg",
    answer: <PromotionalProductsSection />,
  },
  {
    slug: "packaging",
    question: "Packaging",
    description:
      "Packaging is crucial for your business because it's the first thing someone touches...",
    hoverImage: "/img/kg/packing-hover.svg",
    answer: <PackagingSection />,
  },
  {
    slug: "fulfillment-delivery",
    question: "Fulfillment & Delivery",
    description:
      "Fulfillment & Delivery is another service we offer here at our Chatsworth, CA facility...",
    hoverImage: "/img/kg/fulfillment-hover.svg",
    answer: <FulfillmentSection />,
  },
];
