'use client'
import Image from "next/image"
import Button from "../ui/tailwindcss-buttons"
import { useState } from "react"
import './hero.css';
import { motion } from "framer-motion";


const Hero = () => {

  const [count, setCount] = useState(1);

    const back = ()=> {
      if(count === 1) {
      
        setCount(5);
      }
     setCount(Prev=>Prev - 1)
    }

    const next = ()=> {
      if(count === 4) {
      
        setCount(0);
      }
     setCount(Prev=>Prev + 1)
    }

  return (
    <div className="min-h-screen mt-[8vh] border border-b-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 h-full gap-4 sm:gap-2">
        <motion.div
        initial={{ opacity: 0, translateY: 20 }} // Start from below
        whileInView={{ opacity: 1, translateY: 0 }} // Animate into view
        exit={{ opacity: 0, translateY: 20 }} // Animate out of view
        transition={{ duration: 1.5, delay: .5 }}
        className="flex justify-center items-center hero">
          <div 
          className="max-w-[600px] p-4 rounded-lg">
            <span className="">
            <h1 className="uppercase text-white">Add Plants to your Living Space</h1>
            </span>
            
            <p className="text-white capitalize">Plants are enexpensive means to accessorizing your space and adding color and texture.</p>
            <Button
            buttonClassName="relative w-[10rem] mt-6 inline-flex h-12 overflow-hidden rounded-full p-[1px]"
            spanClassName="flex uppercase items-center gap-2 h-full w-full cursor-pointer justify-center rounded-full hover hover:bg-blue-600 bg-green-600 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"
            >LEARN MORE</Button>
          </div>
        </motion.div>

        <div className="h-full bg-green-600 grid-rows-2">
          <div className="h-[60vh] sm:h-[60vh]">
            <Image className="h-full w-full object-cover transition-all block" priority width={1000} height={1000} src={`/assets/pic-${count}.jpg`} alt="" />
          </div>
          <div className="sm:h-[40vh] p-4 flex flex-col justify-center">
            <motion.div
            initial={{ opacity: 0, translateY: 20 }} // Start from below
            whileInView={{ opacity: 1, translateY: 0 }} // Animate into view
            exit={{ opacity: 0, translateY: 20 }} // Animate out of view
            transition={{ duration: 1.5, delay: .5 }}>
            <h3 className="font-normal uppercase border-b-2 mb-4 text-white">Transform your space with expert interior design.</h3>
            <p className="text-white">Choose us as your interior designer for personalized,innovative solutions that blend style with functionality.We transform spaces into elegant, comfortable environments that reflect your vision,ensuring a seamless experience from concept to completion.</p>
            </motion.div>
            


            <motion.div 
            initial={{ opacity: 0, translateY: 20 }} // Start from below
            whileInView={{ opacity: 1, translateY: 0 }} // Animate into view
            exit={{ opacity: 0, translateY: 20 }} // Animate out of view
            transition={{ duration: 1.5, delay: .5 }} 
            className="flex justify-start items-center gap-4 mt-4">
              <Image 
              className="cursor-pointer" 
              width={50} height={50} 
              src="/assets/back.png" 
              alt=""
              onClick={back}
               />
              <div className="h-[3rem] w-[2px] bg-white" />
              <Image 
              className="cursor-pointer" 
              width={50} 
              height={50} 
              src="/assets/next.png"
              onClick={next}
             
              alt="" />
            </motion.div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero