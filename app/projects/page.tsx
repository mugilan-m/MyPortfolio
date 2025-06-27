import React from 'react'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'

function page() {
  return (
    <div> 
      <h1 className='flex justify-center text-3xl font-semibold'>My Projects & Certifications </h1>
      <Projects/>
      <h1 className='flex justify-center text-3xl font-semibold'>Certifications</h1>
      <Certifications/>
    </div>
  )
}

export default page