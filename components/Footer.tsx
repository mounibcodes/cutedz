import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative p-4 pb-8 flex justify-center mt-auto text-white overflow-hidden">
       {/* Decors */}
       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#963fdb] opacity-10 blur-[100px] -z-10 pointer-events-none"></div>

      <div className="w-full max-w-6xl bg-[#17052b] border-2 border-[#963fdb] rounded-3xl p-8 md:p-12 shadow-[0_0_20px_#963fdb] flex flex-col md:flex-row justify-between gap-8 items-start relative overflow-hidden">
        
         <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#963fdb] opacity-20 rounded-full blur-[60px] pointer-events-none"></div>

        <div className="flex flex-col gap-4">
          <Link href="/" className="text-3xl font-black tracking-tighter uppercase text-white">
            Cutscnedz DZ
          </Link>
          <p className="font-medium text-sm max-w-xs text-white">
            Empowering the next generation of video creators and motion designers.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-4">
            <h3 className="font-black uppercase text-lg text-white">Menu</h3>
            <div className="flex flex-col gap-2 font-bold text-sm uppercase text-white">
              <Link href="#about" className="hover:underline decoration-2 underline-offset-4 decoration-[#963fdb]">About Us</Link>
              <Link href="#work" className="hover:underline decoration-2 underline-offset-4 decoration-[#963fdb]">Our Work</Link>
              <Link href="#programs" className="hover:underline decoration-2 underline-offset-4 decoration-[#963fdb]">Programs</Link>
              <Link href="#stories" className="hover:underline decoration-2 underline-offset-4 decoration-[#963fdb]">Success Stories</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-black uppercase text-lg text-white">Connect</h3>
            <div className="flex flex-col gap-2 font-bold text-sm uppercase text-white">
              <Link href="https://instagram.com/cutscnedzdz" target="_blank" className="hover:underline decoration-2 underline-offset-4 decoration-[#963fdb]">Instagram</Link>
              <Link href="#" className="hover:underline decoration-2 underline-offset-4 decoration-[#963fdb]">Twitter</Link>
              <Link href="#" className="hover:underline decoration-2 underline-offset-4 decoration-[#963fdb]">Email</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start md:items-end">
           <Link 
            href="/Contact" 
            className="bg-[#963fdb] text-white px-8 py-3 rounded-full font-bold uppercase text-sm border-2 border-transparent hover:bg-[#17052b] hover:text-white hover:border-[#963fdb] transition-all active:scale-95 hover:shadow-[0_0_15px_#963fdb]"
          >
            Start Now
          </Link>
          <p className="text-xs font-bold uppercase mt-auto text-white">
            © {new Date().getFullYear()} Cutscnedz DZ.
          </p>
        </div>

      </div>
    </footer>
  )
}
