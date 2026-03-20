import Link from 'next/link';
import Reveal from './Reveal';

export default function Programs() {
  return (
    <section id="programs" className="relative py-20 px-4 max-w-7xl mx-auto flex flex-col gap-16 overflow-hidden">
      
      {/* Decors */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#963fdb] rounded-full blur-[120px] opacity-10 -z-10 pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 text-[#963fdb] opacity-20 animate-spin-slow -z-10">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6">
        <Reveal>
          <div className="inline-block bg-[#963fdb] text-white px-6 py-2 rounded-full font-bold uppercase text-sm w-fit rotate-[-2deg]">
            Master The Craft
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            Choose Your <br/>
            <span className="text-[#963fdb] underline underline-offset-8 decoration-[#963fdb]">Creative Path</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="text-xl font-medium text-[#f3e8ff] max-w-2xl">
            From basics to motion graphics, we have the right program to launch your career.
          </p>
        </Reveal>
      </div>

      {/* Pipeline Connection SVG */}
      <div className="hidden md:block absolute top-[45%] left-0 w-full h-[200px] -z-10 pointer-events-none opacity-50">
        <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none" className="overflow-visible">
          <path 
            d="M 160 100 C 350 100 350 100 500 100 C 650 100 650 100 840 100" 
            stroke="#963fdb" 
            strokeWidth="3" 
            strokeDasharray="10 10" 
            fill="none"
          />
           <circle cx="160" cy="100" r="6" fill="#963fdb">
            <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="100" r="6" fill="#963fdb">
             <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="840" cy="100" r="6" fill="#963fdb">
             <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" begin="1s" />
          </circle>
        </svg>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 gap-8 items-start">
        
        {/* Card 1: Basic Video Editing */}
        <Reveal width="100%" delay={0.2}>
          <div className="bg-[#17052b] border-4 border-[#963fdb] rounded-[2.5rem] p-8 shadow-[8px_8px_0px_0px_rgba(70,4,88,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(70,4,88,1)] transition-all flex flex-col gap-6 relative h-full">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#17052b] border-2 border-[#963fdb] px-4 py-1 rounded-full font-black uppercase text-xs tracking-widest text-white whitespace-nowrap z-10">
              Start Here
            </div>
            <div className="text-center border-b-2 border-[#f3e8ff] pb-6">
              <h3 className="text-2xl font-black uppercase mb-2 text-white">Basic Video Editing</h3>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-black tracking-tighter text-[#d8b4fe]">7400 DA</span>
                <span className="text-sm font-bold text-[#d8b4fe] uppercase">12 Sessions</span>
              </div>
            </div>
            <ul className="flex flex-col gap-4 font-bold text-sm uppercase text-white">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#963fdb] text-white rounded-full flex items-center justify-center shrink-0 text-xs font-black">✓</div>
                <span>Adobe Premiere Pro</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#963fdb] text-white rounded-full flex items-center justify-center shrink-0 text-xs font-black">✓</div>
                <span>Recorded Sessions (12h)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#963fdb] text-white rounded-full flex items-center justify-center shrink-0 text-xs font-black">✓</div>
                <span>Direct contact with mentor</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#963fdb] text-white rounded-full flex items-center justify-center shrink-0 text-xs font-black">✓</div>
                <span>Weekly homeworks</span>
              </li>
            </ul>
            <Link 
              href="/Contact" 
              className="bg-[#f3e8ff] text-[#17052b] border-2 border-[#963fdb] px-6 py-3 rounded-full font-black uppercase text-center hover:bg-[#963fdb] hover:text-white transition-colors mt-auto"
            >
              Get Started
            </Link>
          </div>
        </Reveal>

        {/* Card 2: Advanced Video Editing (Most Popular) */}
        <Reveal width="100%" delay={0.4}>
          <div className="bg-[#17052b] text-white border-4 border-[#963fdb] rounded-[2.5rem] p-8 shadow-[12px_12px_0px_0px_rgba(70,4,88,0.5)] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_rgba(70,4,88,0.8)] transition-all flex flex-col gap-6 relative scale-105 z-10 h-full">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#963fdb] text-white border-2 border-[#963fdb] px-4 py-1 rounded-full font-black uppercase text-xs tracking-widest shadow-sm whitespace-nowrap z-20">
              Most Popular
            </div>
            <div className="text-center border-b-2 border-purple-700 pb-6">
              <h3 className="text-2xl font-black uppercase mb-2">Advanced Video Editing</h3>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-black tracking-tighter text-[#d8b4fe]">9800 DA</span>
                <span className="text-sm font-bold text-[#e9d5ff] uppercase">18 Sessions | 6 Weeks</span>
              </div>
            </div>
            <ul className="flex flex-col gap-4 font-bold text-sm uppercase">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white text-[#17052b] rounded-full flex items-center justify-center shrink-0 text-xs font-black">✓</div>
                <span>Premiere Pro + After Effects</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white text-[#17052b] rounded-full flex items-center justify-center shrink-0 text-xs font-black">✓</div>
                <span>Live + Recorded</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white text-[#17052b] rounded-full flex items-center justify-center shrink-0 text-xs font-black">✓</div>
                <span>Direct contact with mentor</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white text-[#17052b] rounded-full flex items-center justify-center shrink-0 text-xs font-black">✓</div>
                <span>Weekly homeworks & quizzes</span>
              </li>
            </ul>
            <Link 
              href="/Contact" 
              className="bg-[#f3e8ff] text-[#17052b] px-6 py-4 rounded-full font-black uppercase text-center hover:bg-[#963fdb] hover:text-white hover:border-[#963fdb] border-2 border-transparent transition-colors mt-auto shadow-[4px_4px_0px_0px_rgba(70,4,88,1)]"
            >
              Join The Academy
            </Link>
          </div>
        </Reveal>

        {/* Card 3: Motion Design */}
        <Reveal width="100%" delay={0.6}>
          <div className="bg-[#17052b] border-4 border-[#963fdb] rounded-[2.5rem] p-8 shadow-[8px_8px_0px_0px_rgba(70,4,88,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(70,4,88,1)] transition-all flex flex-col gap-6 relative h-full">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#17052b] border-2 border-[#963fdb] px-4 py-1 rounded-full font-black uppercase text-xs tracking-widest text-white whitespace-nowrap z-10">
              Pro Level
            </div>
            <div className="text-center border-b-2 border-[#f3e8ff] pb-6">
              <h3 className="text-2xl font-black uppercase mb-2 text-white">Motion Design</h3>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-black tracking-tighter text-[#d8b4fe]">17 500 DA</span>
                <span className="text-sm font-bold text-[#d8b4fe] uppercase">12 Sessions | 4 Weeks</span>
              </div>
            </div>
            <ul className="flex flex-col gap-4 font-bold text-sm uppercase text-white">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#963fdb] text-white rounded-full flex items-center justify-center shrink-0 text-xs font-black">✓</div>
                <span>Adobe After Effects</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#963fdb] text-white rounded-full flex items-center justify-center shrink-0 text-xs font-black">✓</div>
                <span>6 Chapters | Live + Recorded</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#963fdb] text-white rounded-full flex items-center justify-center shrink-0 text-xs font-black">✓</div>
                <span>Weekly Homeworks + Quizzes</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#963fdb] text-white rounded-full flex items-center justify-center shrink-0 text-xs font-black">✓</div>
                <span>24/7 contact with mentor</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#963fdb] text-white rounded-full flex items-center justify-center shrink-0 text-xs font-black">✓</div>
                <span>Real-life Project</span>
              </li>
            </ul>
            <Link 
              href="/Contact"
              className="bg-[#f3e8ff] text-[#17052b] px-6 py-3 rounded-full font-black uppercase text-center hover:bg-white hover:text-[#17052b] hover:border-[#963fdb] border-2 border-transparent transition-colors mt-auto"
            >
              Apply Now
            </Link>
          </div>
        </Reveal>

      </div>

    </section>
  )
}
