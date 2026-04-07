import Image from 'next/image'
import React from 'react'

function Tech() {

  const skills =[
    { id: 1, name: "C", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { id: 2, name: "Java", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { id: 3, name: "HTML5", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { id: 4, name: "CSS3", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { id: 5, name: "JavaScript", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { id: 6, name: "Node.js", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { id: 7, name: "MySQL", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { id: 8, name: "MongoDB", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { id: 9, name: "VSCode", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { id: 10, name: "Eclipse", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
    { id: 11, name: "Figma", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { id: 12, name: "Git", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { id: 13, name: "Playwright", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },]
  return (
    <section className="py-6 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-10xl mx-auto">
        <div className="marquee">
          <div className="marquee__inner">
            {
              skills.concat(skills).map((skill, idx) => (
                <div key={`${skill.id}-${idx}`} className="marquee__item flex items-center justify-center transition-opacity duration-200">
                  <Image width={96} height={96} unoptimized src={skill.imageUrl} alt={skill.name} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tech
