"use client"
import React from 'react'

function Skill() {
  // Your skills list - customize as needed
  const skills = [
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Git', icon: '🔧' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
  ]

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[200px] overflow-hidden">
      <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex animate-scroll gap-0">
        {/* First set of skills */}
        {skills.map((skill, index) => (
          <div
            key={`skill-1-${index}`}
            className="flex-shrink-0 flex flex-col items-center justify-center gap-2 py-6 px-8 mx-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 w-[180px]"
          >
            <span className="text-4xl">{skill.icon}</span>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {skills.map((skill, index) => (
          <div
            key={`skill-2-${index}`}
            className="flex-shrink-0 flex flex-col items-center justify-center gap-2 py-6 px-8 mx-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 w-[180px]"
          >
            <span className="text-4xl">{skill.icon}</span>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
        
        {/* Third set for extra smooth transition */}
        {skills.map((skill, index) => (
          <div
            key={`skill-3-${index}`}
            className="flex-shrink-0 flex flex-col items-center justify-center gap-2 py-6 px-8 mx-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 w-[180px]"
          >
            <span className="text-4xl">{skill.icon}</span>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default Skill