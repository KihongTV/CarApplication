import React from 'react'
import {fadeIn} from '../components/varients'
import { motion } from 'framer-motion'
function aboutus() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full relative z-50">
    <motion.img variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:false,amount:0.6}} src='/image/elon.jpg' className='lg:w-1/3 w-full lg:h-full h-72 md:h-80 object-cover '></motion.img>
    <div className=' lg:w-2/3 w-full pb-4 lg:pb-0'>
          <div  className='flex flex-col justify-center mt-4 lg:mt-12 lg:ml-5'>
          <motion.h2 variants={fadeIn('down',0.6)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:false,amount:0.6}} className='text-3xl font-bold text-white text-center lg:text-left'>My Name Is <span className='text-red-500'>Elon Mosk</span></motion.h2>
          <motion.p variants={fadeIn('down',0.8)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:false,amount:0.6}} className='font-medium text-sm lg:text-base lg:max-w-lg mx-3 lg:mx-0 text-center lg:text-left text-slate-800 lg:text-slate-300 mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, porro nesciunt maiores doloremque laboriosam assumenda dolores modi hic quis laborum enim ex nulla ea, officia aliquid! Sint, temporibus qui. Architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati, illum minus cupiditate itaque eaque quisquam recusandae eius asperiores quibusdam quod modi nulla a? Similique unde est obcaecati sint non.</motion.p>
        <motion.button variants={fadeIn('down',0.9)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:false,amount:0.6}} className='lg:py-2 py-1 mt-2  rounded-lg lg:w-[322px] w-10/12 mx-auto lg:mx-0 text-xl text-center bg-white text-black  hover:bg-black transition-all duration-300 ease-out font-bold shadow-md shadow-black  hover:text-white'>Learn More</motion.button>

          </div>  
    </div>
</div>
  )
}

export default aboutus