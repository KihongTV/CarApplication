"use client"
import React from 'react'
import Navbar from '../components/navbar'
import Backtotop from '../components/backtotop'
import {fadeIn} from '../components/varients'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <>
    <Navbar/>
    <div id='home' className='w-full h-screen text-white bg-[#a0a0a0]'>
        <Backtotop></Backtotop>
        <div className='flex gap-2 lg:gap-0 container mx-auto h-full flex-col items-center justify-center lg:justify-around lg:flex-row-reverse '>
        <div className='xl:flex-1'>
              <motion.img variants={fadeIn('down',0.4)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.6}}  className='w-11/12 object-contain mx-auto lg:w-full h-fit mt-12  lg:mt-0 mb-6 lg:mb-0 lg:mx-0'  src='/image/header1img.png'></motion.img>
            </div>
            <div className='flex flex-col gap-2 lg:gap-4  text-center lg:text-left lg:flex-1'>
              <motion.h2 variants={fadeIn('down',0.1)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.6}} className=' text-2xl flex-wrap md:text-3xl lg:text-5xl font-extrabold flex justify-center lg:justify-start items-center gap-1 lg:gap-2'>Welcome To <span className='text-red-500 flex items-center'>Tesla<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<linearGradient id="hYUdtUaVASII5z536JSn5a_OinYGm0fZ470_gr1" x1="23.752" x2="26.887" y1="3.536" y2="43.985" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".499" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#hYUdtUaVASII5z536JSn5a_OinYGm0fZ470_gr1)" fill-rule="evenodd" d="M5.271,10.155c4.896-1.983,12.974-2.241,16.483-2.109 L24,10.93l2.247-2.884c3.509-0.132,11.587,0.125,16.482,2.109c-0.676,1.284-3.617,3.11-5.233,3.516 c-0.092-2.523-3.658-3.049-7.079-3.049L23.999,45.04l-6.417-34.419c-3.425,0-6.991,0.526-7.083,3.049 C8.885,13.265,5.946,11.439,5.271,10.155L5.271,10.155z M3,6.734l1.253,1.839c4.753-1.668,10.394-2.47,16.347-2.65 c2.253-0.069,4.547-0.069,6.798,0c5.953,0.179,11.595,0.981,16.348,2.65L45,6.734c-5.613-1.902-11.577-2.536-17.532-2.69 c-2.307-0.059-4.63-0.059-6.933,0C14.575,4.198,8.614,4.832,3,6.734L3,6.734z" clip-rule="evenodd"></path>
</svg></span> WebSite</motion.h2>
              <motion.h4 variants={fadeIn('down',0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.6}} className='text-lg md:text-2xl lg:text-3xl font-semibold text-gray-700'>Do you want a car !!!</motion.h4>
              <motion.p variants={fadeIn('down',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.6}} className=' md:text-base lg:text-xl text-gray-700 max-w-lg px-3 lg:px-0 mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit fugiat facere similique eligendi, amet debitis iure culpa rerum error modi blanditiis temporibus necessitatibus eveniet voluptate provident ipsum voluptas magni.</motion.p>
              <motion.button variants={fadeIn('down',0.4)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.6}} className='lg:py-5 py-3 mt-4 lg:mt-0 rounded-lg lg:w-[322px] w-10/12 mx-auto lg:mx-0 text-xl text-center bg-white text-black  hover:bg-black transition-all duration-300 ease-out font-bold shadow-md shadow-black  hover:text-white'>Learn More</motion.button>
            </div>
            
        </div>
    </div>
    </>
  )
}
export default Header;


