"use client"
import React, { useEffect, useState } from 'react'
import {fadeIn} from '../components/varients'
import { motion,AnimatePresence } from 'framer-motion'
import { BsArrowRightCircleFill } from 'react-icons/bs'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const cars = () => {
  const handler=()=>{
    setObjectNow(objectNow + 1)
    
  }
  let [objectNow,setObjectNow]=useState(0)
  
  const [items,setItems]=useState([{
    id:1,
    name:'Model X',
    price:'$68,590',
    discription:'After Federal Tax Credit & Est. Gas Savings',
    img:'modeX.png'
  },
  {
  id:2,
    name:'Model Y',
    price:'$36,640',
    discription:'After Federal Tax Credit & Est. Gas Savings',
    img:'modelY.png'
  },{
  id:3,
  name:'Model 3',
  price:'$29,740',
  discription:'After Federal Tax Credit & Est. Gas Savings',
  img:'model3.png'
}

])

  return (
    <Swiper pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper  bg-[#35405f]"
    id='cars'
  >
    
    <div id='cars'>
      <div className='flex h-full w-full text-center items-center justify-center'>
        
       
          
           {items.map(item=>
        <SwiperSlide>
            <div className='flex flex-col justify-center h-full lg:justify-start  text-slate-100 text-center  gap-10'>
             <motion.img variants={fadeIn('down',0.2)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:false,amount:0.6}} className='lg:max-w-[1000px] w-11/12 lg:h-[600px] h-[200px] md:h-[300px] mt-10 lg:mt-3 object-scale-down mx-auto ' src={`/image/${item.img}`}></motion.img>
                   <div className='flex  flex-col gap-3'>
                       <motion.h2 variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:false,amount:0.6}} className='text-3xl lg:text-5xl font-bold '>{item.name}</motion.h2>
                       <motion.h4 variants={fadeIn('down',0.6)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }} viewport={{once:false,amount:0.6}} className='text-xl lg:text-4xl font-semibold'>From {item.price}</motion.h4>
                       <motion.p variants={fadeIn('down',0.7)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }} viewport={{once:false,amount:0.6}} className='text-gray-400'>{item.discription}</motion.p>
                     <motion.button variants={fadeIn('down',0.8)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }} viewport={{once:false,amount:0.6}} className='py-3 lg:py-5 mt-4 lg:mt-0 rounded-lg sm:w-[322px] w-10/12 mx-auto  text-xl text-center bg-white text-black  hover:bg-black transition-all duration-300 ease-out font-bold shadow-md shadow-black  hover:text-white'>Learn More</motion.button>

             </div>
                   </div> 
             </SwiperSlide>
           )}
            
            
            
            
              
               
      </div>
    </div>
      </Swiper>
  )
}

export default cars