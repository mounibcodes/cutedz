import Link from 'next/link';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 max-w-7xl mx-auto flex flex-col gap-20 overflow-hidden">
      
      {/* Decors */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 -z-10 opacity-20 hidden md:block pointer-events-none">
         <svg width="100%" height="100%" viewBox="0 0 1000 500" preserveAspectRatio="none">
            <path 
               d="M 0 100 Q 250 100 250 250 T 500 250 T 750 250 T 1000 400" 
               fill="none" 
               stroke="#963fdb" 
               strokeWidth="2" 
               strokeDasharray="10 10"
            />
             <path 
               d="M 0 150 Q 250 150 250 300 T 500 300 T 750 300 T 1000 450" 
               fill="none" 
               stroke="#963fdb" 
               strokeWidth="2" 
               strokeDasharray="10 10"
               opacity="0.5"
            />
         </svg>
      </div>
      <div className="absolute top-1/3 right-10 w-32 h-32 text-[#460458] opacity-30 rotate-45 -z-10">
         <svg viewBox="0 0 100 100" fill="currentColor">
            <rect width="100" height="100" rx="20" />
         </svg>
      </div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-4 border-[#963fdb] rounded-full opacity-20 -z-10"></div>

      {/* Header & Bio */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 flex flex-col gap-8">
          <Reveal>
            <div className="inline-block bg-[#963fdb] text-white px-6 py-2 rounded-full font-bold uppercase text-sm w-fit rotate-[-2deg]">
              Who is Cutscnedz DZ?
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              Creators Training <br/>
              <span className="text-[#963fdb] decoration-8 underline underline-offset-8 decoration-[#963fdb]">Future Creators</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl font-medium text-[#f3e8ff] max-w-xl leading-relaxed">
              We don't just teach software—we build careers. Our philosophy is simple: <span className="font-black text-white">master the art of storytelling</span>. We combine technical skills with creative vision to create video editors and motion designers who dominate the industry.
            </p>
          </Reveal>
          
          {/* Stats */}
          <Reveal delay={0.6}>
            <div className="flex gap-8 md:gap-12 border-t-2 border-[#963fdb] pt-8 mt-4 text-white">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#963fdb]">500+</span>
                <span className="text-sm font-bold uppercase text-[#e9d5ff]">Students</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#963fdb]">100%</span>
                <span className="text-sm font-bold uppercase text-[#e9d5ff]">Placement</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#963fdb]">50+</span>
                <span className="text-sm font-bold uppercase text-[#e9d5ff]">Projects</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Image/Visual Placeholder */}
        <div className="flex-1 w-full">
           <Reveal delay={0.4}>
             <div className="bg-[#17052b] border-4 border-[#963fdb] rounded-[2.5rem] p-8 shadow-[12px_12px_0px_0px_rgba(70,4,88,1)] flex flex-col gap-6 rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                <h3 className="text-3xl font-black uppercase text-center border-b-4 text-white border-[#963fdb] pb-4">The Process</h3>
                <ul className="flex flex-col gap-4 font-bold text-lg uppercase text-white">
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#963fdb] text-white rounded-full flex items-center justify-center shrink-0">1</div>
                    <span className='text-[#f3e8ff]'>Concept & Storyboard</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#963fdb] text-white rounded-full flex items-center justify-center shrink-0">2</div>
                    <span className='text-[#f3e8ff]'>Editing & Rhythm</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#963fdb] text-white rounded-full flex items-center justify-center shrink-0">3</div>
                    <span className='text-[#f3e8ff]'>Motion & VFX</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#963fdb] text-white rounded-full flex items-center justify-center shrink-0">4</div>
                    <span className='text-[#f3e8ff]'>Sound Design & Mix</span>
                  </li>
                </ul>
                <div className="bg-[#f3e8ff] p-4 rounded-xl border-2 border-[#963fdb] text-[#17052b] text-center font-bold text-sm mt-2">
                  "Better cuts, smoother transitions, higher retention."
                </div>
             </div>
           </Reveal>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <Reveal width="100%" delay={0.2}>
          <div className="bg-[#17052b] border-4 border-[#963fdb] rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(70,4,88,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(70,4,88,1)] transition-all flex flex-col gap-4 h-full">
            <div className="w-12 h-12 bg-[#f3e8ff] rounded-full flex items-center justify-center text-[#17052b] mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.3625.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black uppercase text-white">Visual Storytelling</h3>
            <p className="font-medium text-[#f3e8ff]">
              Learn to craft narratives that engage. Pacing, emotion, and structure are the keys to retention.
            </p>
          </div>
        </Reveal>

        {/* Card 2 */}
        <Reveal width="100%" delay={0.4}>
          <div className="bg-[#17052b] text-white border-4 border-[#963fdb] rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(70,4,88,0.5)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(70,4,88,0.8)] transition-all flex flex-col gap-4 h-full">
            <div className="w-12 h-12 bg-[#f3e8ff] rounded-full flex items-center justify-center text-[#17052b] mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black uppercase">Motion & VFX</h3>
            <p className="font-medium text-[#f3e8ff]">
              Master After Effects. Create custom transitions, kinetic typography, and visual effects that wow clients.
            </p>
          </div>
        </Reveal>

        {/* Card 3 */}
        <Reveal width="100%" delay={0.6}>
          <div className="bg-[#17052b] border-4 border-[#963fdb] rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(70,4,88,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(70,4,88,1)] transition-all flex flex-col gap-4 h-full">
            <div className="w-12 h-12 bg-[#f3e8ff] rounded-full flex items-center justify-center text-[#17052b] mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black uppercase text-white">Career & Branding</h3>
            <p className="font-medium text-[#f3e8ff]">
              Portfolio building, client acquisition, and pricing strategies. Turn your skills into a profitable business.
            </p>
          </div>
        </Reveal>
      </div>

      {/* CTA Strip */}
      <div className="bg-[#f3e8ff] border-4 border-[#963fdb] rounded-full p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0px_0px_rgba(70,4,88,1)]">
        <div className="flex flex-col px-4 text-center md:text-left">
          <h4 className="text-2xl font-black uppercase text-[#17052b]">Ready to create?</h4>
          <p className="font-bold text-purple-700">DM me "CREATE" on Instagram to get started.</p>
        </div>
        <Link 
          href="/Contact" 
          className="bg-[#17052b] text-white px-8 py-4 rounded-full font-black uppercase text-lg hover:bg-purple-800 transition-all active:scale-95 hover:shadow-lg whitespace-nowrap"
        >
          Apply Now
        </Link>
      </div>

    </section>
  )
}
