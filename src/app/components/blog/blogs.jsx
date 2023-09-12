"use client"
import React, { useState } from 'react'
import { BsArrowUpCircleFill, BsFillHeartFill, BsPersonFill, BsSaveFill } from "react-icons/bs";
import {fadeIn} from '../components/varients'
import { motion,AnimatePresence } from 'framer-motion'
const blogs = () => {
  const [state,setState]=useState()
  return (
    <div id='blog' className='w-full h-full bg-[#a0a0a0] relative'>
      
          <div  className='flex flex-wrap justify-center items-center gap-5 py-12 md:py-32 '>
                      <div  className="shadow-md shadow-black bg-slate-200 rounded-2xl ">
                            <div className='sm:w-[400px] w-[300px] h-[400px]  lg:mx-0 flex flex-col '>
                                <img  src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200" className='rounded-t-lg flex-1 h-[250px] w-full' alt="" />
                                <div className='flex-1 mt-5 w-11/12 mx-auto'>
                                    <div className='flex justify-between mx-4'>
                                          <h2 className='font-bold text-xl mb-2'>Today We Have 2m Car</h2>
                                          
                                    </div>
                                          <p className='text-sm text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam adipisci repellat esse ab cum excepturi deserunt corporis exercitationem molestias consequuntur iste, modi provident, obcaecati, dolorum ipsa temporibus vitae. Qui, est!</p>
                                </div>
                            </div>
                            <div className='w-full h-[60px]  flex justify-between '>
                                  <div className='saved text-red-500  flex justify-center w-full  gap-3 rounded-bl-lg text-3xl cursor-pointer  items-center' title='like'>
                                  <BsFillHeartFill></BsFillHeartFill> 
                                  </div>
                                  
                                  <div className='saved text-slate-700  flex justify-center w-full rounded-br-lg  text-3xl cursor-pointer  items-center' title='save'>
                                  <BsSaveFill></BsSaveFill>
                                  </div>
                                  
                            </div>
                      </div>
                      <div  className="shadow-md shadow-black bg-slate-200 rounded-2xl ">
                            <div className='sm:w-[400px] w-[300px] h-[400px]  lg:mx-0 flex flex-col '>
                                <img  src="https://www.topgear.com/sites/default/files/2023/03/TG%20LAMBO230309_0013.jpg" className='rounded-t-lg flex-1 h-[250px] w-full' alt="" />
                                <div className='flex-1 mt-5 w-11/12 mx-auto'>
                                    <div className='flex justify-between mx-4'>
                                          <h2 className='font-bold text-xl mb-2'>Today We Have 2m Car</h2>
                                          
                                    </div>
                                          <p className='text-sm text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam adipisci repellat esse ab cum excepturi deserunt corporis exercitationem molestias consequuntur iste, modi provident, obcaecati, dolorum ipsa temporibus vitae. Qui, est!</p>
                                </div>
                            </div>
                            <div className='w-full h-[60px]  flex justify-between '>
                                  <div className='saved text-red-500  flex justify-center w-full  gap-3 rounded-bl-lg text-3xl cursor-pointer  items-center' title='like'>
                                  <BsFillHeartFill></BsFillHeartFill> 
                                  </div>
                                  
                                  <div className='saved text-slate-700  flex justify-center w-full rounded-br-lg  text-3xl cursor-pointer  items-center' title='save'>
                                  <BsSaveFill></BsSaveFill>
                                  </div>
                                  
                            </div>
                      </div>
                      <div  className="shadow-md shadow-black bg-slate-200 rounded-2xl ">
                            <div className='sm:w-[400px] w-[300px] h-[400px]  lg:mx-0 flex flex-col '>
                                <img  src="https://www.topgear.com/sites/default/files/2022/07/6_0.jpg" className='rounded-t-lg flex-1 h-[250px] w-full' alt="" />
                                <div className='flex-1 mt-5 w-11/12 mx-auto'>
                                    <div className='flex justify-between mx-4'>
                                          <h2 className='font-bold text-xl mb-2'>Today We Have 2m Car</h2>
                                          
                                    </div>
                                          <p className='text-sm text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam adipisci repellat esse ab cum excepturi deserunt corporis exercitationem molestias consequuntur iste, modi provident, obcaecati, dolorum ipsa temporibus vitae. Qui, est!</p>
                                </div>
                            </div>
                            <div className='w-full h-[60px]  flex justify-between '>
                                  <div className='saved text-red-500  flex justify-center w-full  gap-3 rounded-bl-lg text-3xl cursor-pointer  items-center' title='like'>
                                  <BsFillHeartFill></BsFillHeartFill> 
                                  </div>
                                  
                                  <div className='saved text-slate-700  flex justify-center w-full rounded-br-lg  text-3xl cursor-pointer  items-center' title='save'>
                                  <BsSaveFill></BsSaveFill>
                                  </div>
                                  
                            </div>
                      </div>
                      <div  className="shadow-md shadow-black bg-slate-200 rounded-2xl ">
                            <div className='sm:w-[400px] w-[300px] h-[400px]  lg:mx-0 flex flex-col '>
                                <img  src="https://www.topgear.com/sites/default/files/2022/07/13.jpg" className='rounded-t-lg flex-1 h-[250px] w-full' alt="" />
                                <div className='flex-1 mt-5 w-11/12 mx-auto'>
                                    <div className='flex justify-between mx-4'>
                                          <h2 className='font-bold text-xl mb-2'>Today We Have 2m Car</h2>
                                          
                                    </div>
                                          <p className='text-sm text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam adipisci repellat esse ab cum excepturi deserunt corporis exercitationem molestias consequuntur iste, modi provident, obcaecati, dolorum ipsa temporibus vitae. Qui, est!</p>
                                </div>
                            </div>
                            <div className='w-full h-[60px]  flex justify-between '>
                                  <div className='saved text-red-500  flex justify-center w-full  gap-3 rounded-bl-lg text-3xl cursor-pointer  items-center' title='like'>
                                  <BsFillHeartFill></BsFillHeartFill> 
                                  </div>
                                  
                                  <div className='saved text-slate-700  flex justify-center w-full rounded-br-lg  text-3xl cursor-pointer  items-center' title='save'>
                                  <BsSaveFill></BsSaveFill>
                                  </div>
                                  
                            </div>
                      </div>
                      <div  className="shadow-md shadow-black bg-slate-200 rounded-2xl ">
                            <div className='sm:w-[400px] w-[300px] h-[400px]  lg:mx-0 flex flex-col '>
                                <img  src="https://www.usnews.com/object/image/00000186-0f0d-da67-a5ef-2f5f87990000/2023-lucid-air-1.jpg?update-time=1675289789997&size=responsive640" className='rounded-t-lg flex-1 h-[250px] w-full' alt="" />
                                <div className='flex-1 mt-5 w-11/12 mx-auto'>
                                    <div className='flex justify-between mx-4'>
                                          <h2 className='font-bold text-xl mb-2'>Today We Have 2m Car</h2>
                                          
                                    </div>
                                          <p className='text-sm text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam adipisci repellat esse ab cum excepturi deserunt corporis exercitationem molestias consequuntur iste, modi provident, obcaecati, dolorum ipsa temporibus vitae. Qui, est!</p>
                                </div>
                            </div>
                            <div className='w-full h-[60px]  flex justify-between '>
                                  <div className='saved text-red-500  flex justify-center w-full  gap-3 rounded-bl-lg text-3xl cursor-pointer  items-center' title='like'>
                                  <BsFillHeartFill></BsFillHeartFill> 
                                  </div>
                                  
                                  <div className='saved text-slate-700  flex justify-center w-full rounded-br-lg  text-3xl cursor-pointer  items-center' title='save'>
                                  <BsSaveFill></BsSaveFill>
                                  </div>
                                  
                            </div>
                      </div>
                      <div  className="shadow-md shadow-black bg-slate-200 rounded-2xl ">
                            <div className='sm:w-[400px] w-[300px] h-[400px]  lg:mx-0 flex flex-col '>
                                <img  src="https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg" className='rounded-t-lg flex-1 h-[250px] w-full' alt="" />
                                <div className='flex-1 mt-5 w-11/12 mx-auto'>
                                    <div className='flex justify-between mx-4'>
                                          <h2 className='font-bold text-xl mb-2'>Today We Have 2m Car</h2>
                                          
                                    </div>
                                          <p className='text-sm text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam adipisci repellat esse ab cum excepturi deserunt corporis exercitationem molestias consequuntur iste, modi provident, obcaecati, dolorum ipsa temporibus vitae. Qui, est!</p>
                                </div>
                            </div>
                            <div className='w-full h-[60px]  flex justify-between '>
                                  <div className='saved text-red-500  flex justify-center w-full  gap-3 rounded-bl-lg text-3xl cursor-pointer  items-center' title='like'>
                                  <BsFillHeartFill></BsFillHeartFill> 
                                  </div>
                                  
                                  <div className='saved text-slate-700  flex justify-center w-full rounded-br-lg  text-3xl cursor-pointer  items-center' title='save'>
                                  <BsSaveFill></BsSaveFill>
                                  </div>
                                  
                            </div>
                      </div>
                      <div  className="shadow-md shadow-black bg-slate-200 rounded-2xl ">
                            <div className='sm:w-[400px] w-[300px] h-[400px]  lg:mx-0 flex flex-col '>
                                <img  src="https://car-images.bauersecure.com/wp-images/2697/bmw-ix.jpg" className='rounded-t-lg flex-1 h-[250px] w-full' alt="" />
                                <div className='flex-1 mt-5 w-11/12 mx-auto'>
                                    <div className='flex justify-between mx-4'>
                                          <h2 className='font-bold text-xl mb-2'>Today We Have 2m Car</h2>
                                          
                                    </div>
                                          <p className='text-sm text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam adipisci repellat esse ab cum excepturi deserunt corporis exercitationem molestias consequuntur iste, modi provident, obcaecati, dolorum ipsa temporibus vitae. Qui, est!</p>
                                </div>
                            </div>
                            <div className='w-full h-[60px]  flex justify-between '>
                                  <div className='saved text-red-500  flex justify-center w-full  gap-3 rounded-bl-lg text-3xl cursor-pointer  items-center' title='like'>
                                  <BsFillHeartFill></BsFillHeartFill> 
                                  </div>
                                  
                                  <div className='saved text-slate-700  flex justify-center w-full rounded-br-lg  text-3xl cursor-pointer  items-center' title='save'>
                                  <BsSaveFill></BsSaveFill>
                                  </div>
                                  
                            </div>
                      </div>
                      <div  className="shadow-md shadow-black bg-slate-200 rounded-2xl ">
                            <div className='sm:w-[400px] w-[300px] h-[400px]  lg:mx-0 flex flex-col '>
                                <img  src="https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format" className='rounded-t-lg flex-1 h-[250px] w-full' alt="" />
                                <div className='flex-1 mt-5 w-11/12 mx-auto'>
                                    <div className='flex justify-between mx-4'>
                                          <h2 className='font-bold text-xl mb-2'>Today We Have 2m Car</h2>
                                          
                                    </div>
                                          <p className='text-sm text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam adipisci repellat esse ab cum excepturi deserunt corporis exercitationem molestias consequuntur iste, modi provident, obcaecati, dolorum ipsa temporibus vitae. Qui, est!</p>
                                </div>
                            </div>
                            <div className='w-full h-[60px]  flex justify-between '>
                                  <div className='saved text-red-500  flex justify-center w-full  gap-3 rounded-bl-lg text-3xl cursor-pointer  items-center' title='like'>
                                  <BsFillHeartFill></BsFillHeartFill> 
                                  </div>
                                  
                                  <div className='saved text-slate-700  flex justify-center w-full rounded-br-lg  text-3xl cursor-pointer  items-center' title='save'>
                                  <BsSaveFill></BsSaveFill>
                                  </div>
                                  
                            </div>
                      </div>
                    
                     
              
                  
          </div>
    </div>
  )
}

export default blogs