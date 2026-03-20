import Image from 'next/image';
import Link from 'next/link';

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center gap-6 mb-16">
        <div className="inline-block bg-[#963fdb] text-white px-6 py-2 rounded-full font-bold uppercase text-sm w-fit rotate-[-2deg]">
          Meet The Mentor
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
          Learn From <br/>
          <span className="text-[#963fdb] decoration-8 underline underline-offset-8 decoration-purple-600">Experience</span>.
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 bg-[#963fdb] rounded-[2.5rem] rotate-[-3deg] translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 bg-neutral-900 border-2 border-[#963fdb] rounded-[2.5rem] overflow-hidden rotate-[0deg] hover:rotate-[1deg] transition-transform duration-500 z-10 shadow-[0px_0px_50px_0px_rgba(147,51,234,0.3)]">
                <Image
                    src="/amine.png"
                    alt="Amine - Founder of Cutscendz"
                    fill
                    className="object-cover"
                />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent p-8 pt-24">
                    <h3 className="text-3xl font-black uppercase text-white">Amine</h3>
                    <p className="text-[#963fdb] font-bold uppercase tracking-wider">Founder & Lead Mentor</p>
                </div>
            </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col gap-8">
            <div className="bg-neutral-900 border border-[#963fdb]/10 p-8 rounded-3xl relative">
                <span className="text-6xl text-[#963fdb]/20 absolute top-4 right-6 font-black">01</span>
                <h4 className="text-2xl font-black uppercase text-white mb-4">Why I Started Cutscendz</h4>
                <p className="text-lg text-gray-300 font-medium leading-relaxed">
                    &quot;I realized most editors struggle not because of skill, but because they don&apos;t understand 
                    <span className="text-white font-bold"> retention</span> and <span className="text-white font-bold">storytelling</span>. 
                    I built Cutscendz to be the bridge—an agency that delivers high-performance content and an academy that breeds top-tier talent.&quot;
                </p>
            </div>

            <div className="bg-neutral-900 border border-[#963fdb]/10 p-8 rounded-3xl relative">
                <span className="text-6xl text-[#963fdb]/20 absolute top-4 right-6 font-black">02</span>
                <h4 className="text-2xl font-black uppercase text-white mb-4">The &quot;Agency-First&quot; Approach</h4>
                <p className="text-lg text-gray-300 font-medium leading-relaxed">
                    We don&apos;t just teach theory. Our academy curriculum is built directly from the workflows we use with our
                    <span className="text-white font-bold"> paying agency clients</span> every single day. You learn what actually works in the market right now.
                </p>
            </div>

             <div className="flex gap-4">
                <Link 
                    href="#programs" 
                    className="bg-[#17052b] text-white px-8 py-4 rounded-full font-black uppercase text-lg border-2 border-[#963fdb] hover:bg-[#963fdb] hover:text-white hover:border-[#963fdb] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] flex-1 text-center"
                >
                    Join My Academy
                </Link>
                <Link 
                    href="/Contact" 
                    className="bg-transparent text-white px-8 py-4 rounded-full font-black uppercase text-lg border-2 border-[#963fdb]/20 hover:bg-white/10 transition-all flex-1 text-center"
                >
                    Work With Me
                </Link>
             </div>
        </div>
      </div>
    </section>
  )
}
