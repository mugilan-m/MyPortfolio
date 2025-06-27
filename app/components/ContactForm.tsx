import React from 'react'

function ContactForm() {
  return (
    <div className='w-[50%] h-[600px]  mx-auto container shadow-2xl  bg-gray-100 rounded-3xl'>

<form className='m-6' >

   <div className='mt-5 flex gap-5 justify-center'>
   <label className='m-6 font-bold  '>Name* :</label>

    <input type='text' aria-label='Name' className='w-[70%]  border-2 border-black h-10 rounded-lg  ml-[22px]  m-6 p-2' placeholder='Enter Your name' required/>

   </div>

   <div className='m-2 flex gap-5 justify-center'>
   <label className=' m-6 font-bold '>Email* :</label>

    <input type='email' aria-label='email' className='w-[70%] h-10 rounded-lg border-2 border-black  ml-[20px]  m-6 p-2 ' placeholder='Enter Your email' required/>
   </div>

<div className='m-1 flex gap-5 justify-center'>
<label className=' m-6 font-bold '>comments :</label>

<textarea  aria-label='comments' className='w-[70%] h-[30vh] rounded-lg  p-5 border-2 border-black  m-6 ml-[-10px] ' placeholder='please add your comments ...'required/>
</div>
<div>
    <button className='bg-blue-700 pl-5 pr-5 pt-3 pb-3 rounded-lg ml-[40%] mt-10 text-white'>Submit</button>
</div>
</form>
</div>
  )
}

export default ContactForm