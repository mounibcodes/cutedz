import React from 'react';
import Reveal from './Reveal';

const testimonials = [
  {
    name: "YASSINE B.",
    role: "Freelance Video Editor",
    quote: "The advanced course changed my workflow completely. I went from charging 2000DA to 8000DA per video.",
    result: "4x Revenue"
  },
  {
    name: "AMIRA K.",
    role: "Content Creator",
    quote: "I learned how to make my own reels pop. My engagement skyrocketed after applying the motion design techniques.",
    result: "+50k Followers"
  },
  {
    name: "KARIM S.",
    role: "Motion Designer",
    quote: "The mentorship was invaluable. Having direct feedback on my projects accelerated my learning by years.",
    result: "Agency Hired"
  }
];

export default function SuccessStories() {
  return (
    <section id="stories" className="relative py-20 px-4 max-w-7xl mx-auto overflow-hidden">
      
      {/* Decors */}
      <div className="absolute top-10 left-10 w-24 h-24 text-[#963fdb] opacity-20 -z-10 animate-bounce-slow">
         <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
         </svg>
      </div>

      <div className="flex flex-col items-center text-center gap-6 mb-16">
        <Reveal>
          <div className="inline-block bg-[#963fdb] text-white px-6 py-2 rounded-full font-bold uppercase text-sm w-fit rotate-[2deg]">
            Real Results
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            Learn Real Skills. <br/>
            <span className="decoration-8 underline underline-offset-8 decoration-[#963fdb]">Get Real Clients</span>.
          </h2>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((story, i) => (
          <Reveal key={i} width="100%" delay={i * 0.2}>
            <div className="bg-[#17052b] border-4 border-[#963fdb] rounded-[2rem] p-8 shadow-[8px_8px_0px_0px_rgba(70,4,88,1)] flex flex-col gap-6 relative hover:-translate-y-1 transition-transform h-full">
               <div className="text-6xl font-black text-[#e9d5ff] absolute top-4 right-6 pointer-events-none">"</div>
              <p className="text-xl font-medium relative z-10 text-white">"{story.quote}"</p>
              
              <div className="mt-auto border-t-2 border-[#963fdb] pt-4 flex flex-col gap-1">
                <h4 className="font-black uppercase text-xl text-white">{story.name}</h4>
                <p className="text-sm font-bold text-[#e9d5ff] uppercase tracking-wider">{story.role}</p>
                <div className="bg-[#963fdb] text-white px-3 py-1 rounded text-sm font-bold w-fit mt-2">
                  {story.result}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
