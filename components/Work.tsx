import React from 'react';
import Reveal from './Reveal';

const projects = [
  {
    category: "Short Form",
    title: "Viral Reels",
    stats: "1.2M+ Views",
    videoUrl: "https://www.instagram.com/reel/DVMK_eNDHbP/embed"
  },
  {
    category: "YouTube",
    title: "Documentary Style",
    stats: "High Retention",
    videoUrl: "https://www.instagram.com/reel/DVMK_eNDHbP/embed" 
  },
  {
    category: "Ads",
    title: "Performance Creative",
    stats: "3.5x ROAS",
    videoUrl: "https://www.instagram.com/reel/DVMK_eNDHbP/embed"
  }
];

export default function Work() {
  return (
    <section id="work" className="relative py-20 px-4 max-w-7xl mx-auto overflow-hidden">
      
      {/* Decors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#460458] rounded-full blur-[150px] opacity-10 -z-10 pointer-events-none"></div>
       <div className="absolute top-10 right-10 w-24 h-24 text-[#963fdb] opacity-20 animate-spin-slow -z-10">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
            <path d="M12 8v8M8 12h8" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 w-16 h-16 text-[#963fdb] opacity-20 animate-bounce -z-10">
         <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
         </svg>
      </div>

      <div className="flex flex-col items-center text-center gap-6 mb-16">
        <Reveal>
          <div className="inline-block bg-[#963fdb] text-white px-6 py-2 rounded-full font-bold uppercase text-sm w-fit rotate-[2deg]">
            Portfolio
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            We Let The <br/>
            <span className="text-[#963fdb] decoration-8 underline underline-offset-8 decoration-[#963fdb]">Edits Speak</span>.
          </h2>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <Reveal key={i} width="100%" delay={i * 0.2}>
            <div className="group relative aspect-[9/16] bg-[#17052b] border-2 border-[#963fdb]/10 rounded-[2rem] overflow-hidden hover:border-[#963fdb] transition-all hover:shadow-[0px_0px_30px_0px_rgba(147,51,234,0.3)] hover:-translate-y-2 h-full">
              
              {/* Video Embed */}
              <div className="absolute inset-0 w-full h-full scale-[1.35] origin-center">
                   <iframe 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none"
                  src={`${project.videoUrl}/?autoplay=1&muted=1`} 
                  frameBorder="0" 
                  allowFullScreen
                  scrolling="no"
                  ></iframe>
              </div>
  
              {/* Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17052b] via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end">
                  <div>
                     <span className="text-[#963fdb] font-bold text-xs uppercase tracking-widest mb-1 block">{project.category}</span>
                     <h3 className="text-2xl font-black uppercase text-white leading-none">{project.title}</h3>
                  </div>
                  <div className="bg-[#963fdb] text-white font-black text-xs px-2 py-1 rounded rotate-[-3deg] group-hover:rotate-0 transition-transform">
                    {project.stats}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 text-center">
         <a href="https://www.instagram.com/cutscene.dz/" target="_blank" className="inline-flex items-center gap-2 border-b-2 border-[#963fdb] text-white font-bold uppercase hover:text-[#963fdb] transition-colors pb-1">
            View More on Instagram 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
         </a>
      </div>
    </section>
  )
}
