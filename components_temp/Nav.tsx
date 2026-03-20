import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-[#17052b] border-2 border-[#963fdb] rounded-full px-8 py-4 flex items-center gap-8 shadow-[0_0_20px_#963fdb]">
        <Link href="/" className="flex items-center gap-3 text-xl font-black text-white tracking-tighter uppercase">
          <Image 
            src="/cutscendz.png" 
            alt="Cutscnedz Logo" 
            width={40} 
            height={40} 
            className="rounded-lg"
          />
          Cutscnedz DZ
        </Link>
        
        <div className="hidden md:flex items-center gap-6 font-bold text-sm uppercase tracking-wide">
          <Link href="#about" className="hover:underline text-white decoration-2 underline-offset-4 decoration-[#963fdb]">
            About Us
          </Link>
          <Link href="#work" className="hover:underline text-white decoration-2 underline-offset-4 decoration-[#963fdb]">
            Our Work
          </Link>
          <Link href="#programs" className="hover:underline text-white decoration-2 underline-offset-4 decoration-[#963fdb]">
            Programs
          </Link>
          <Link href="#stories" className="hover:underline text-white decoration-2 underline-offset-4 decoration-[#963fdb]">
            Success Stories
          </Link>
        </div>

        <Link 
          href="/Contact" 
          className="bg-[#963fdb] text-white px-6 py-2 rounded-full font-bold uppercase text-sm border-2 border-transparent hover:bg-[#17052b] hover:text-white hover:border-[#963fdb] transition-all active:scale-95 hover:shadow-[0_0_15px_#963fdb]"
        >
          Start Now
        </Link>
      </div>
    </nav>
  )
}
