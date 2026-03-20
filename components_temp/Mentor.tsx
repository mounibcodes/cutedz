import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';

export default function Mentor() {
  return (
    <section id="mentor" className="relative py-20 px-4 max-w-7xl mx-auto">
      
      {/* Decors */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#963fdb] opacity-10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 text-[#460458] opacity-20 -z-10 animate-spin-slow">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      <div className="flex flex-col items-center text-center gap-6 mb-16">
        <Reveal>
          <div className="inline-block bg-[#963fdb] text-white px-6 py-2 rounded-full font-bold uppercase text-sm w-fit rotate-[-2deg]">
            Meet The Mentor
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            Learn From <br/>
            <span className="text-[#963fdb] decoration-8 underline underline-offset-8 decoration-[#963fdb]">Experience</span>.
          </h2>
        </Reveal>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <Reveal width="100%" delay={0.4}>
          <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-[#963fdb] rounded-[2.5rem] rotate-[-3deg] translate-x-4 translate-y-4 shadow-[0_0_30px_#963fdb]"></div>
              <div className="absolute inset-0 bg-[#17052b] border-2 border-[#963fdb] rounded-[2.5rem] overflow-hidden rotate-[0deg] hover:rotate-[1deg] transition-transform duration-500 z-10 shadow-[0_0_20px_#460458]">
                  <Image
                      src="/amine.png"
                      alt="Amine - Founder of Cutscendz"
                      fill
                      className="object-cover"
                  />
                   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#17052b] via-[#17052b]/90 to-transparent p-8 pt-24">
                      <h3 className="text-3xl font-black uppercase text-white">Amine</h3>
                      <p className="text-[#963fdb] font-bold uppercase tracking-wider">Founder & Lead Mentor</p>
                  </div>
              </div>
          </div>
        </Reveal>

        {/* Content Side */}
        <div className="flex flex-col gap-8">
            <Reveal width="100%" delay={0.6}>
              <div className="bg-[#17052b] border-2 border-[#963fdb] p-8 rounded-3xl relative shadow-[0_0_15px_#460458]">
                  <span className="text-6xl text-[#963fdb]/20 absolute top-4 right-6 font-black">01</span>
                  <h4 className="text-2xl font-black uppercase text-white mb-4">Why I Started Cutscendz</h4>
                  <p className="text-lg text-gray-300 font-medium leading-relaxed">
                      &quot;I realized most editors struggle not because of skill, but because they don&apos;t understand 
                      <span className="text-white font-bold"> retention</span> and <span className="text-white font-bold">storytelling</span>. 
                      I built Cutscendz to be the bridge—an agency that delivers high-performance content and an academy that breeds top-tier talent.&quot;
                  </p>
              </div>
            </Reveal>

            <Reveal width="100%" delay={0.8}>
              <div className="bg-[#17052b] border-2 border-[#963fdb] p-8 rounded-3xl relative shadow-[0_0_15px_#460458]">
                  <span className="text-6xl text-[#963fdb]/20 absolute top-4 right-6 font-black">02</span>
                  <h4 className="text-2xl font-black uppercase text-white mb-4">The &quot;Agency-First&quot; Approach</h4>
                  <p className="text-lg text-gray-300 font-medium leading-relaxed">
                      We don&apos;t just teach theory. Our academy curriculum is built directly from the workflows we use with our
                      <span className="text-white font-bold"> paying agency clients</span> every single day. You learn what actually works in the market right now.
                  </p>
              </div>
            </Reveal>

             <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                    href="#programs" 
                    className="bg-[#f3e8ff] text-[#17052b] px-8 py-4 rounded-full font-black uppercase text-lg border-2 border-transparent hover:bg-[#963fdb] hover:text-white hover:border-[#963fdb] transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_#963fdb] flex-1 text-center"
                >
                    Join My Academy
                </Link>
                <Link 
                    href="/Contact" 
                    className="bg-transparent text-white px-8 py-4 rounded-full font-black uppercase text-lg border-2 border-[#963fdb] hover:bg-[#963fdb]/10 hover:shadow-[0_0_15px_#963fdb] transition-all flex-1 text-center"
                >
                    Work With Me
                </Link>
             </div>
        </div>
      </div>
    </section>
  )
}
