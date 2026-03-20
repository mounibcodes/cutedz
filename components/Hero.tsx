'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Reveal from './Reveal';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      setIsMuted(videoRef.current.muted);
    }
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-20 left-[10%] w-24 h-24 text-[#963fdb] opacity-60 animate-bounce-slow hidden lg:block -z-10">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-[5%] w-48 h-48 text-[#460458] opacity-40 hidden lg:block -z-10 rotate-12">
         <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 10 Q 50 190 90 10 T 180 10" />
            <path d="M10 50 Q 50 230 90 50 T 180 50" />
            <path d="M10 90 Q 50 270 90 90 T 180 90" />
         </svg>
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#963fdb] rounded-full blur-[120px] opacity-20 -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#460458] rounded-full blur-[120px] opacity-20 -z-10 pointer-events-none"></div>

      <div className="px-4 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10 relative">
      
      {/* Text Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
        <Reveal>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            Innovate <br />
            <span className="text-[#963fdb]">Create</span> <br />
            Elevate
          </h1>
        </Reveal>
        
        <Reveal delay={0.4}>
          <p className="text-xl md:text-2xl font-bold text-white max-w-2xl uppercase tracking-wide">
            Transform your creative vision into reality with Cutscnedz DZ.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <Link 
            href="/Contact" 
            className="group flex items-center gap-3 bg-[#17052b] text-white px-12 py-6 rounded-full font-black uppercase text-xl border-4 border-[#963fdb] hover:bg-[#963fdb] hover:text-white hover:border-[#963fdb] transition-all hover:shadow-[8px_8px_0px_0px_rgba(70,4,88,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none"
          >
            Start Your Journey
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 group-hover:translate-x-2 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </Reveal>
      </div>

      {/* Video/Image Placeholder */}
      <div className="relative w-full aspect-[4/5] lg:aspect-square bg-[#17052b]/50 border-4 border-[#963fdb] rounded-[2rem] shadow-[16px_16px_0px_0px_rgba(70,4,88,0.5)] overflow-hidden group cursor-pointer hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[20px_20px_0px_0px_rgba(70,4,88,1)] transition-all z-10">
        <video 
          ref={videoRef}
          src="/hero-video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#460458]/40 to-transparent pointer-events-none"></div>

        {/* Sound Toggle Button */}
        <button
          onClick={toggleMute}
          className="absolute top-6 right-6 w-12 h-12 bg-[#17052b]/80 backdrop-blur-sm border-2 border-[#963fdb] rounded-full flex items-center justify-center text-white hover:bg-[#963fdb] transition-all z-30"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          )}
        </button>

        <div className="absolute bottom-6 left-6 bg-[#17052b] text-white border-2 border-[#963fdb] px-6 py-3 rounded-xl font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(70,4,88,1)] rotate-[-2deg] z-20">
            Welcome to Cutscnedz DZ
        </div>
      </div>
      
      </div>

    </section>
  )
}