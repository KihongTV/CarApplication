import { Link } from "react-scroll"
import Image from "next/image"
import {AiOutlineAlignRight,AiOutlineClose} from "react-icons/ai";
import { useEffect, useState } from "react";
const navbar = () => {
  const [header,setHeader]=useState(false)
  const [headerscroll,setHeaderscroll]=useState(false)

  const handlerscroll=()=>{
    if(window.scrollY>130){
      setHeaderscroll(true)
    }else(setHeaderscroll(false))
   
  }
  useEffect(()=>{
    window.addEventListener('scroll',handlerscroll);
  })
  
 
  return (
    <div className={`${headerscroll?'shadow-md shadow-slate-900 lg:mt-0  bg-white  xl:w-full ':`bg-slate-100 2xl:w-3/4 ${header?'rounded-t-xl':'rounded-lg'}  lg:rounded-lg`} transition-all  ease-in-out duration-200 fixed z-20 w-11/12 lg:w-10/12  right-1/2 translate-x-1/2  mt-5  lg:py-3 py-1`}>
      <div className={` relative flex px-12 lg:container lg:mx-auto justify-between lg:justify-center  2xl:justify-around  items-center`}>
                <div className='flex items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<linearGradient id="hYUdtUaVASII5z536JSn5a_OinYGm0fZ470_gr1" x1="23.752" x2="26.887" y1="3.536" y2="43.985" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".499" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#hYUdtUaVASII5z536JSn5a_OinYGm0fZ470_gr1)" fill-rule="evenodd" d="M5.271,10.155c4.896-1.983,12.974-2.241,16.483-2.109 L24,10.93l2.247-2.884c3.509-0.132,11.587,0.125,16.482,2.109c-0.676,1.284-3.617,3.11-5.233,3.516 c-0.092-2.523-3.658-3.049-7.079-3.049L23.999,45.04l-6.417-34.419c-3.425,0-6.991,0.526-7.083,3.049 C8.885,13.265,5.946,11.439,5.271,10.155L5.271,10.155z M3,6.734l1.253,1.839c4.753-1.668,10.394-2.47,16.347-2.65 c2.253-0.069,4.547-0.069,6.798,0c5.953,0.179,11.595,0.981,16.348,2.65L45,6.734c-5.613-1.902-11.577-2.536-17.532-2.69 c-2.307-0.059-4.63-0.059-6.933,0C14.575,4.198,8.614,4.832,3,6.734L3,6.734z" clip-rule="evenodd"></path>
</svg>
                </div>
                <div className="flex  lg:hidden">
                  {!header?<AiOutlineAlignRight onClick={()=>setHeader(true)} className="text-2xl  cursor-pointer"></AiOutlineAlignRight>:<AiOutlineClose onClick={()=>setHeader(false)} className="text-2xl cursor-pointer"></AiOutlineClose>}
                </div>
                <div className={`lg:flex gap-3  ${!header?'hidden':'flex'} flex-col rounded-b-lg absolute w-full lg:w-fit top-[52px]   lg:px-0 text-center lg:text-left gap-7 py-5 lg:py-0 right-[50%] translate-x-[50%]  bg-white lg:bg-transparent lg:static lg:flex-row  lg:gap-8 2xl:gap-10  font-bold text-xl `}>
                    <Link to="home" smooth className="cursor-pointer" activeClass="text-red-500" spy="true">Home</Link>
                    <Link to="cars" smooth className="cursor-pointer" activeClass="text-red-500" spy="true">Cars</Link>
                    <Link to="blog" smooth className="cursor-pointer" activeClass="text-red-500" spy="true">Blog</Link>
                    <Link to="rent" smooth className="cursor-pointer" activeClass="text-red-500" spy="true">Rent</Link>
                    <Link to="about" smooth className="cursor-pointer" activeClass="text-red-500" spy="true">About</Link>
                    
                </div>
            </div>
      </div>
  )
}

export default navbar