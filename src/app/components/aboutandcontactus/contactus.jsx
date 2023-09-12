'use client'
import React from 'react'
import {fadeIn} from '../components/varients'
import { motion } from 'framer-motion'
function contactus() {
  return (
  <div  className='flex justify-center items-center flex-col md:flex-row pt-6'>
       <form className='md:rounded-l-3xl flex flex-col items-center justify-center lg:p-6 xl:p-12 p-0 sm:p-12'>
            <div className='flex md:flex-row flex-col md:gap-8 gap-5 py-3'>
                              <motion.div variants={fadeIn('down',0.6)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:false,amount:0.6}} className="flex flex-col">
                              <label className='mb-2 font-bold text-white text-lg' id='name'  htmlFor='name'>Name:</label>
                              <input type="text" name='name' id='name' className='md:py-3 sm:py-2 py-1 w-[250px] sm:w-[300px] px-2 focus-visible:outline-none bg-transparent placeholder:text-gray-400 text-white border-b-2 border-b-white'  placeholder='Please Enter Your Name' />
                              </motion.div>
                              <motion.div variants={fadeIn('down',0.6)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:false,amount:0.6}} className="flex flex-col">
                              <label className='mb-2 font-bold text-white text-lg' id='name'  htmlFor='name'>Family:</label>
                              <input type="text" name='name' id='name' className='md:py-3 sm:py-2 py-1 w-[250px] sm:w-[300px] px-2 focus-visible:outline-none bg-transparent placeholder:text-gray-400 text-white border-b-2 border-b-white'  placeholder='Please Enter Your Family' />
                              </motion.div>
            </div>
            <div className='flex md:flex-row flex-col md:gap-8 gap-5 py-3'>
                              <motion.div variants={fadeIn('down',0.7)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:false,amount:0.6}} className="flex flex-col">
                              <label className='mb-2 font-bold text-white text-lg' id='name'  htmlFor='name'>Email:</label>
                              <input type="email" name='name' id='name' className='md:py-3 sm:py-2 py-1 w-[250px] sm:w-[300px] px-2 focus-visible:outline-none bg-transparent placeholder:text-gray-400 text-white border-b-2 border-b-white'  placeholder='Please Enter Your Email' />
                              </motion.div>
                              <motion.div variants={fadeIn('down',0.7)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:false,amount:0.6}} className="flex flex-col">
                              <label className='mb-2 font-bold text-white text-lg' id='name'  htmlFor='name'>PhoneNumber:</label>
                              <input type="text" name='name' id='name' className='md:py-3 sm:py-2 py-1 w-[250px] sm:w-[300px] px-2 focus-visible:outline-none bg-transparent placeholder:text-gray-400 text-white border-b-2 border-b-white'  placeholder='Please Enter Your PhoneNumber' />
                              </motion.div>
            </div>
        <motion.button variants={fadeIn('down',0.9)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:false,amount:0.6}}  className='lg:py-2 py-1 mt-12  rounded-lg lg:w-[322px] w-10/12 mx-auto lg:mx-0 text-xl text-center bg-white text-black  hover:bg-black transition-all duration-300 ease-out font-bold shadow-md shadow-black  hover:text-white'>Send</motion.button>

      </form>
  </div>
    
  )
}

export default contactus