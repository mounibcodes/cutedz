import Link from 'next/link';

export default function ContactPage() {
  return (
    <section id="contact" className="relative py-32 px-4 max-w-4xl mx-auto flex flex-col gap-12 overflow-hidden">
      
      {/* Decors */}
      <div className="absolute top-20 -left-20 w-40 h-40 bg-[#963fdb] rounded-full blur-[100px] opacity-20 -z-10"></div>
      <div className="absolute bottom-40 -right-20 w-40 h-40 bg-[#460458] rounded-full blur-[100px] opacity-20 -z-10"></div>
      
      <div className="absolute top-40 right-10 w-16 h-16 text-[#963fdb] opacity-20 animate-pulse -z-10">
         <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
         </svg>
      </div>

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6">
        <div className="inline-block bg-[#963fdb] text-white px-6 py-2 rounded-full font-bold uppercase text-sm w-fit rotate-[-2deg]">
          Start Your Career
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
          Join The <br/>
          <span className="text-[#963fdb] decoration-8 underline underline-offset-8 decoration-[#963fdb]">Academy</span>.
        </h1>
        <p className="text-xl font-medium text-[#f3e8ff] max-w-xl">
          Ready to master video editing? Fill out the application below. We select students who are serious about building a career.
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="bg-[#17052b] border-4 border-[#963fdb] rounded-[2.5rem] p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(70,4,88,1)]">
        <form className="flex flex-col gap-8">
          
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-black text-white uppercase text-sm ml-2">Full Name / Nom complet *</label>
            <input 
              type="text" 
              id="name" 
              required
              placeholder="YOUR NAME"
              className="w-full bg-[#17052b] border-2 border-[#963fdb] rounded-xl px-6 py-4 font-bold text-white placeholder:text-[#f3e8ff]/30 focus:outline-none focus:shadow-[0_0_15px_#963fdb] transition-all"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-black text-white uppercase text-sm ml-2">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              required
              placeholder="you@example.com"
              className="w-full bg-[#17052b] border-2 border-[#963fdb] rounded-xl px-6 py-4 font-bold text-white placeholder:text-[#f3e8ff]/30 focus:outline-none focus:shadow-[0_0_15px_#963fdb] transition-all"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-black text-white uppercase text-sm ml-2">WhatsApp Number *</label>
            <input 
              type="tel" 
              id="phone" 
              required
              placeholder="+213 ..."
              className="w-full bg-[#17052b] border-2 border-[#963fdb] rounded-xl px-6 py-4 font-bold text-white placeholder:text-[#f3e8ff]/30 focus:outline-none focus:shadow-[0_0_15px_#963fdb] transition-all"
            />
          </div>

          {/* Instagram */}
          <div className="flex flex-col gap-2">
            <label htmlFor="instagram" className="font-black text-white uppercase text-sm ml-2">Instagram Link / Handle *</label>
            <input 
              type="text" 
              id="instagram" 
              required
              placeholder="@username"
              className="w-full bg-[#17052b] border-2 border-[#963fdb] rounded-xl px-6 py-4 font-bold text-white placeholder:text-[#f3e8ff]/30 focus:outline-none focus:shadow-[0_0_15px_#963fdb] transition-all"
            />
          </div>

          {/* Program Selection */}
          <div className="flex flex-col gap-4">
            <label className="font-black text-white uppercase text-sm ml-2">Select Program / Choisis ton programme *</label>
            <div className="grid md:grid-cols-3 gap-4">
              <label className="cursor-pointer">
                <input type="radio" name="program" value="basic" className="peer sr-only" required />
                <div className="bg-[#17052b] border-2 border-[#963fdb] rounded-xl px-4 py-4 font-bold text-center uppercase text-white peer-checked:bg-[#963fdb] peer-checked:text-white transition-all hover:bg-[#963fdb]/20">
                  Basic Editing
                  <span className="block text-xs mt-1 text-[#f3e8ff]">7400 DA</span>
                </div>
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="program" value="advanced" className="peer sr-only" required />
                <div className="bg-[#17052b] border-2 border-[#963fdb] rounded-xl px-4 py-4 font-bold text-center uppercase text-white peer-checked:bg-[#963fdb] peer-checked:text-white transition-all hover:bg-[#963fdb]/20">
                  Advanced
                  <span className="block text-xs mt-1 text-[#f3e8ff]">9800 DA</span>
                </div>
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="program" value="motion" className="peer sr-only" required />
                <div className="bg-[#17052b] border-2 border-[#963fdb] rounded-xl px-4 py-4 font-bold text-center uppercase text-white peer-checked:bg-[#963fdb] peer-checked:text-white transition-all hover:bg-[#963fdb]/20">
                  Motion Design
                  <span className="block text-xs mt-1 text-[#f3e8ff]">17 500 DA</span>
                </div>
              </label>
            </div>
          </div>

          {/* Experience Level */}
          <div className="flex flex-col gap-4">
            <label className="font-black text-white uppercase text-sm ml-2">Current Experience Level *</label>
            <div className="flex flex-wrap gap-4">
              <label className="cursor-pointer flex-1">
                <input type="radio" name="level" value="beginner" className="peer sr-only" required />
                <div className="bg-[#17052b] border-2 border-[#963fdb] rounded-xl px-4 py-3 font-bold text-center uppercase text-white peer-checked:bg-[#963fdb] transition-all">
                  Beginner
                </div>
              </label>
              <label className="cursor-pointer flex-1">
                <input type="radio" name="level" value="intermediate" className="peer sr-only" required />
                <div className="bg-[#17052b] border-2 border-[#963fdb] rounded-xl px-4 py-3 font-bold text-center uppercase text-white peer-checked:bg-[#963fdb] transition-all">
                  Intermediate
                </div>
              </label>
              <label className="cursor-pointer flex-1">
                <input type="radio" name="level" value="advanced" className="peer sr-only" required />
                <div className="bg-[#17052b] border-2 border-[#963fdb] rounded-xl px-4 py-3 font-bold text-center uppercase text-white peer-checked:bg-[#963fdb] transition-all">
                  Advanced
                </div>
              </label>
            </div>
          </div>

          {/* PC Specs */}
          <div className="flex flex-col gap-2">
            <label htmlFor="specs" className="font-black text-white uppercase text-sm ml-2">Computer Specs (CPU, RAM, GPU) *</label>
            <p className="text-xs font-bold text-[#f3e8ff] ml-2 mb-1">We need to know if your PC can handle the software.</p>
            <textarea 
              id="specs" 
              rows={2}
              required
              placeholder="e.g. i7 10th gen, 16GB RAM, GTX 1660"
              className="w-full bg-[#17052b] border-2 border-[#963fdb] rounded-xl px-6 py-4 font-bold text-white placeholder:text-[#f3e8ff]/30 focus:outline-none focus:shadow-[0_0_15px_#963fdb] transition-all resize-none"
            ></textarea>
          </div>

          {/* Goal */}
          <div className="flex flex-col gap-2">
            <label htmlFor="goal" className="font-black text-white uppercase text-sm ml-2">Why do you want to join? *</label>
            <textarea 
              id="goal" 
              rows={4}
              required
              className="w-full bg-[#17052b] border-2 border-[#963fdb] rounded-xl px-6 py-4 font-bold text-white placeholder:text-[#f3e8ff]/30 focus:outline-none focus:shadow-[0_0_15px_#963fdb] transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="bg-[#963fdb] text-white px-8 py-5 rounded-full font-black uppercase text-xl hover:bg-white hover:text-[#17052b] hover:border-white border-4 border-[#963fdb] transition-all active:scale-95 hover:shadow-[0_0_20px_#963fdb] mt-4"
          >
            Submit Application
          </button>

        </form>
      </div>

      {/* WhatsApp Alternative */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 w-full max-w-md">
            <div className="h-[2px] bg-[#963fdb] flex-1"></div>
            <span className="font-black uppercase text-sm text-white">OR</span>
            <div className="h-[2px] bg-[#963fdb] flex-1"></div>
        </div>
        
        <Link 
          href="https://wa.me/213000000000" // Replace with actual WhatsApp number
          target="_blank"
          className="flex items-center gap-3 bg-[#25D366] text-white border-4 border-[#25D366] px-8 py-4 rounded-full font-black uppercase text-lg hover:bg-white hover:text-[#25D366] transition-all hover:shadow-[0_0_20px_#25D366] active:translate-y-1 active:shadow-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          Chat on WhatsApp
        </Link>
      </div>

    </section>
  )
}
