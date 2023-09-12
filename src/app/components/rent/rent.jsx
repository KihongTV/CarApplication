import React from 'react'
import { BsCheck2, BsXLg } from 'react-icons/bs'
import {fadeIn} from '../components/varients'
import { motion } from 'framer-motion'
const rent = () => {
  return (
    <div id='rent' className='w-full bg-[#35405f] xl:h-screen py-12 xl:py-0'>
        <div   className='flex  flex-wrap xl:flex-nowrap gap-5 xl:gap-0 xl:flex-row  justify-center items-center text-center   h-full '>
        <motion.div variants={fadeIn('down',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.6}} className="shadow-md xl:-mr-8  shadow-black bg-slate-200  pb-12 xl:scale-105 relative rounded-2xl ">
                            <div className='sm:w-[400px] w-[300px]  h-fit  flex flex-col '>
                                <img  src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200" className='rounded-t-lg    w-full' alt="" />
                                <div className='flex-1 mt-5 w-11/12 mx-auto'>
                                    <h2 className='font-bold mb-4 text-2xl'>Six Mount</h2>
                                          <div className='flex flex-col space-y-3 xl:-ml-7 justify-center w-full'>
                                          <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500'>You can call to elon mask</h6>
                                                  <BsXLg className='text-2xl  text-red-700'></BsXLg>
                                                </div>
                                                <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500 '>You Can Change The Car</h6>
                                                  <BsCheck2 className='text-2xl  text-green-700'></BsCheck2>

                                                </div>
                                                <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500'>You can Costom the car</h6>
                                                  <BsCheck2 className='text-2xl  text-green-700'></BsCheck2>

                                                </div>
                                                <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500'>you can take your mony</h6>
                                                  <BsCheck2 className='text-2xl  text-green-700'></BsCheck2>
                                                </div>
                                                <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500'>Rent car From were store </h6>
                                                  <BsCheck2 className='text-2xl  text-green-700'></BsCheck2>
                                                </div>
                                                
                                          </div>
                                          <button  className='lg:py-2 py-2 mt-4 xl:mr-16  rounded-lg lg:w-[322px] w-10/12 mx-auto text-xl text-center bg-white text-black  hover:bg-black transition-all duration-300 ease-out font-bold shadow-md shadow-black  hover:text-white'>OrderNow</button>

                                </div>
                            </div>
                           
      </motion.div>
       <motion.div variants={fadeIn('down',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.6}} className="shadow-md   shadow-black bg-slate-200 z-10 pb-12 xl:scale-110 relative rounded-2xl ">
                            <div className='sm:w-[400px] w-[300px] h-fit  flex flex-col '>
                                <img  src="https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format" className='rounded-t-lg    w-full' alt="" />
                                <div className='flex-1 mt-5 w-11/12 mx-auto'>
                                    <h2 className='font-bold mb-4 text-2xl'>One Year</h2>
                                          <div className='flex flex-col space-y-3 justify-center w-full'>
                                          <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500'>You can call to elon mask</h6>
                                                  <BsCheck2 className='text-2xl  text-green-700'></BsCheck2>

                                                </div>
                                                <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500 '>You Can Change The Car</h6>
                                                  <BsCheck2 className='text-2xl  text-green-700'></BsCheck2>

                                                </div>
                                                <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500'>You can Costom the car</h6>
                                                  <BsCheck2 className='text-2xl  text-green-700'></BsCheck2>

                                                </div>
                                                <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500'>you can take your mony</h6>
                                                  <BsCheck2 className='text-2xl  text-green-700'></BsCheck2>
                                                </div>
                                                <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500'>Rent car From were store </h6>
                                                  <BsCheck2 className='text-2xl  text-green-700'></BsCheck2>
                                                </div>
                                                
                                          </div>
                                          <button  className='lg:py-2 py-2 mt-4  rounded-lg lg:w-[322px] w-10/12 mx-auto text-xl text-center bg-white text-black  hover:bg-black transition-all duration-300 ease-out font-bold shadow-md shadow-black  hover:text-white'>OrderNow</button>

                                </div>
                            </div>
                          
      </motion.div>
      <motion.div  variants={fadeIn('down',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.6}}  className="shadow-md xl:-ml-8  shadow-black bg-slate-200  pb-12 relative rounded-2xl ">
                            <div className='sm:w-[400px] w-[300px] h-fit  flex flex-col '>
                                <img  src="https://www.topgear.com/sites/default/files/2023/03/TG%20LAMBO230309_0013.jpg" className='rounded-t-lg    w-full' alt="" />
                                <div className='flex-1 mt-5 w-11/12 mx-auto'>
                                    <h2 className='font-bold mb-4 text-2xl'>Two Mount</h2>
                                          <div className='flex flex-col space-y-3 xl:ml-7 justify-center w-full'>
                                          <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500'>You can call to elon mask</h6>
                                                  <BsXLg className='text-2xl  text-red-700'></BsXLg>
                                                </div>
                                                <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500 '>You Can Change The Car</h6>
                                                  <BsXLg className='text-2xl  text-red-700'></BsXLg>
                                                </div>
                                                <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500'>You can Costom the car</h6>
                                                  <BsXLg className='text-2xl  text-red-700'></BsXLg>
                                                </div>
                                                <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500'>you can take your mony</h6>
                                                  <BsCheck2 className='text-2xl  text-green-700'></BsCheck2>
                                                </div>
                                                <div className='flex text-base font-medium justify-around'>
                                                  <h6 className='text-gray-500'>Rent car From were store </h6>
                                                  <BsCheck2 className='text-2xl  text-green-700'></BsCheck2>
                                                </div>
                                                
                                          </div>
                                          <button  className='lg:py-2 py-2 mt-4 xl:ml-9  rounded-lg lg:w-[322px] w-10/12 mx-auto text-xl text-center bg-white text-black  hover:bg-black transition-all duration-300 ease-out font-bold shadow-md shadow-black  hover:text-white'>OrderNow</button>

                                </div>
                            </div>
                           
      </motion.div>
        </div>
    </div>
  )
}

export default rent