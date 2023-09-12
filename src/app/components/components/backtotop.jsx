'use client'
import { useState,useEffect} from "react";
//import icons
import { BsArrowUpCircleFill } from "react-icons/bs";
//import link (react-scroll)
import { Link } from "react-scroll";

function backtotop() {
    const [arr,setArr]=useState(false)
    const handlerscroll=()=>{
        if(window.scrollY>1400){
          setArr(true)
        }
        else(setArr(false))
       
      }
      useEffect(()=>{
        window.addEventListener('scroll',handlerscroll);
      })

  return (
   
            <>
            {arr?
            <Link to="home" smooth className="cursor-pointer fixed bottom-10 right-14 z-50 "  spy="true"><BsArrowUpCircleFill className="text-6xl text-white bg-red-500 animate-bounce  rounded-full"></BsArrowUpCircleFill></Link>
            
            :null}
            </>
            
    
  )
}
export default backtotop;