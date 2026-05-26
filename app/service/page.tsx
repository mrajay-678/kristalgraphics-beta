'use client'

import { useState } from 'react'
import ScreenPrintingSection from '@/components/service/ScreenPrintingSection'
import EmbroiderySection from '@/components/service/EmbroiderySection'
import PromotionalProductsSection from '@/components/service/PromotionalProductsSection'
import PackagingSection from '@/components/service/PackagingSection'
import FulfillmentSection from '@/components/service/FulfillmentSection'
import LabelsSection from '@/components/service/LabelsSection'

type FAQItem = {
  question: string
  description: string
  answer: React.ReactNode
}

const faqs: FAQItem[] = [
  {
    question: "Screen printing",
    description:
      "Screen printing is what we've been doing the longest, and honestly, it's still our favorite...",
    answer: <ScreenPrintingSection />,
  },
  {
    question: "Embroidery",
    description:
      "Embroidery takes patience and expertise. Thread tension has to be just ...",
    answer: <EmbroiderySection />,
  },
  {
    question: "Promotional Products",
    description:
      "Promotional Products don't have to end up in a drawer if they're sourced well. We source ...",
    answer: <PromotionalProductsSection />,
  },
  {
    question: "Packaging",
    description:
      "Packaging is crucial for your business because it's the first thing someone touches, and it ...",
    answer: <PackagingSection />,
  },
  {
    question: "Fulfillment & Delivery",
    description:
      "Fulfillment & Delivery is another service we offer here at our Chatsworth, CA facility. Printing is ...",
    answer: <FulfillmentSection />,
  },
  {
    question: "Labels",
    description:
      "Labels seem simple until you need them to have the perfect finish that suits your ...",
    answer: <LabelsSection />,
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <main className="pt-60">
      <div className="mxd-container grid-container">
        {/* <h1 className="font-heading font-light">Our Service</h1> */}
        <div className="relative font-inter antialiased">
          <div className="relative min-h-screen overflow-hidde">
            <div className="mx-auto w-full px-4 py-24 md:px-6">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index

                return (
                  <div key={index} className="py-2 border-y border-black-300 hover:border-black">
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-content-${index}`}
                      id={`faq-title-${index}`}
                      className="flex w-full items-center justify-between py-10 text-left font-semibold opacity-30 transition-opacity duration-200 hover:opacity-100 "
                    >
                      <h2 className='w-2/4 font-heading text-7xl'>{faq.question}</h2>

                      {!isOpen && (
                        <p className='w-2/4 text-5xl font-body font-light'>{faq.description}</p>
                      )}
                    </button>

                    <div
                      id={`faq-content-${index}`}
                      role="region"
                      aria-labelledby={`faq-title-${index}`}
                      className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out ${isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                        }`}
                    >
                      <div className="overflow-hidden">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page