'use client'

import LiquidEther from '@/components/liquid-ether'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={30}
          cursorSize={120}
          isViscous={true}
          viscous={25}
          iterationsViscous={16}
          iterationsPoisson={32}
          resolution={0.6}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.8}
          autoIntensity={2.5}
          takeoverDuration={0.1}
          autoResumeDelay={1000}
          autoRampDuration={1.2}
        />
      </div>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6" data-aos="zoom-in" data-aos-delay="200">
          <div className="w-44 h-44 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary via-accent to-primary p-1">
            <img
              src="/profile-picture.png"
              alt="Karl Edu Martin Gomez"
              className="w-full h-full rounded-full object-cover object-center"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance" data-aos="fade-up" data-aos-delay="400">
          Karl Edu Martin Gomez
        </h1>

        <p className="text-lg md:text-xl text-white/70 mb-8" data-aos="fade-up" data-aos-delay="600">
          Software Developer Intern | 22 years old
        </p>

        <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-12" data-aos="fade-up" data-aos-delay="800">
          Learning Never Stops
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-white/70" data-aos="fade-up" data-aos-delay="1000">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Cebu, Philippines</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Available for work</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="1200">
          <a
            href="#work"
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/50 bg-white/10 text-white font-semibold hover:bg-white/20 hover:border-white/70 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
