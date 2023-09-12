import React, { useState } from 'react'
import Aboutus from './aboutus'
import Contactus from './contactus'

const aboutandcontactus = () => {
  const [state,setState]=useState("about")
  const setcontact=()=>{
        setState("contact")
  }
  const setabout=()=>{
    setState("about")
}
  return (
    <div id='about' className='w-full z-20 relative lg:h-screen bg-[#a0a0a0]'>
        <div className='flex flex-col md:w-[500px] lg:w-[700px] 2xl:w-[900px] h-screen mx-auto justify-start lg:justify-center w-full items-center'>
            
            <div  className='flex  w-full  text-white font-medium '>
                  <div className={` w-1/2 ${state!='about'?'bg-gray-900':'bg-gray-700'} p-3 px-7 lg:rounded-tl-lg text-center cursor-pointer`} onClick={setcontact}>ContactUs</div>
                  <div className={` w-1/2 ${state!='contact'?'bg-gray-900':'bg-gray-700'} p-3 px-7 lg:rounded-tr-lg text-center cursor-pointer`} onClick={setabout}>AboutUs</div>
            </div>
            <div className='box w-full lg:h-[600px] lg:bg-slate-700 lg:shadow-lg lg:shadow-black'>
                  {state=="about"?<Aboutus></Aboutus>:state=="contact"?<Contactus></Contactus>:'null'}
                  
            </div>
        </div>
    </div>
  )
}

export default aboutandcontactus