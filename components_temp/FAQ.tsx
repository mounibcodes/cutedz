'use client';
import { useState } from 'react';

const faqs = [
  {
    question: "How do I pay? (CCP/BaridiMob)",
    answer: "We accept payments via CCP and BaridiMob. Once you contact us, we'll send you the RIP/CCP details. You can send the receipt via Instagram DM to confirm your spot."
  },
  {
    question: "Is the content in Darja or English?",
    answer: "The courses are taught primarily in Algerian Darja (mixed with technical English terms) to ensure you understand everything clearly while learning the industry-standard terminology."
  },
  {
    question: "Do I need a powerful PC?",
    answer: "For the Basic course, a mid-range laptop (i5, 8GB RAM) is enough. For Advanced & Motion Design, you'll need at least 16GB RAM and a decent graphics card to run After Effects smoothly."
  },
  {
    question: "Can I find work in Algeria with these skills?",
    answer: "Absolutely. The demand for video editors in Algeria is exploding—content creators, agencies, and businesses are all hiring. We also teach you how to find high-paying foreign clients."
  }
];

import Reveal from './Reveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 px-4 max-w-7xl mx-auto flex flex-col gap-12 overflow-hidden">
      
      {/* Decors */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#963fdb] rounded-full blur-[150px] opacity-10 -z-10 pointer-events-none"></div>
      
      <div className="absolute bottom-20 right-10 w-32 h-32 text-[#460458] opacity-20 animate-spin-slow -z-10">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      <div className="absolute top-10 left-10 w-16 h-16 text-[#963fdb] opacity-30 animate-bounce-slow -z-10">
         <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
         </svg>
      </div>

      <div className="flex flex-col gap-4 items-center text-center">
        <Reveal>
          <div className="inline-block bg-[#963fdb] text-white px-6 py-2 rounded-full font-bold uppercase text-sm w-fit rotate-[-2deg]">
            Got Questions?
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            Frequently Asked <br/>
            <span className="text-[#963fdb] decoration-8 underline underline-offset-8 decoration-[#963fdb]">Questions</span>
          </h2>
        </Reveal>
      </div>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
        {faqs.map((faq, index) => (
          <Reveal key={index} width="100%" delay={index * 0.1}>
            <div 
              onClick={() => toggleFAQ(index)}
            className={`
              bg-[#17052b] border-4  border-[#963fdb] rounded-2xl p-6 cursor-pointer transition-all duration-300
              ${openIndex === index ? 'shadow-[8px_8px_0px_0px_rgba(70,4,88,1)] translate-x-[-4px] translate-y-[-4px]' : 'shadow-none hover:shadow-[4px_4px_0px_0px_rgba(70,4,88,1)]'}
            `}
          >
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-xl md:text-2xl font-black uppercase text-white">{faq.question}</h3>
              <div className={`text-2xl font-black transition-transform duration-300 text-white ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </div>
            </div>
            
            <div 
              className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="text-lg font-medium text-purple-800 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
