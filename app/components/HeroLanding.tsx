import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function HeroLanding() {
  return (
    <section className="h-screen text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/mugilan.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-end md:justify-center px-6 md:px-12 lg:px-20 py-12 pb-20 md:py-12 lg:py-0 h-screen pt-20">
        {/* Content */}
        <div className="w-full max-w-4xl text-center lg:text-left">
          <p className="text-gray-200 text-lg md:text-xl mb-4">Hi, I&apos;m Mugilan,</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6">
            I&apos;M A Front<br />
            End Developer
          </h1>
          <p className="text-gray-200 text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-block border-b-2 border-white text-lg font-semibold hover:text-gray-300 hover:border-gray-300 transition pb-1"
          >
            Hire Me 
          </Link>
          <Link 
            href="/download-resume" 
            className="inline-block border-b-2 border-white text-lg font-semibold hover:text-gray-300 hover:border-gray-300 transition pb-1 ml-6"
          >
           Download Resume
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroLanding
