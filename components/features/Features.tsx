'use client'
import Image from "next/image"
import { features } from "../constant"
import { motion } from "framer-motion"


const Features = () => {
    
  return (
    <div className="mt-8 mb-8 container m-auto">
        <h3 className="text-center mb-4">Most Asked Design Methods</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            <div className="sm:h-[90vh] flex flex-col gap-1">
                <motion.div 
                 initial={{ opacity: 0, translateX: 20 }} // Start from below
                 whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
                 exit={{ opacity: 0, translateX: 20 }} // Animate out of view
                 transition={{ duration: 1.5, delay: .5 }} className="sm:h-[60vh] bg-slate-500">
                <Image className="block w-full h-full object-cover" src="/assets/Bohemian.png" alt="" width={1000} height={1000} />
                </motion.div>

                <motion.div
                 initial={{ opacity: 0, translateX: -20 }} // Start from below
                 whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
                 exit={{ opacity: 0, translateX: -20 }} // Animate out of view
                 transition={{ duration: 1.5, delay: .5 }} 
                 className="sm:h-[30vh] flex flex-col justify-center">
                    <h5>Bohemian Style</h5>
                    <p>Eclectic patterns, bold colors, and and abundance of textures come together for a relaxed, artistic feel.</p>
                </motion.div>

            </div>
            <div className="sm:h-[90vh] flex flex-col gap-4">
                {features.map((item)=> (
                    <div key={item.id} className="sm:h-[30vh] sm:basis-1/3 flex gap-4">
                        <motion.div
                        initial={{ opacity: 0, translateX: -20 }} // Start from below
                        whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
                        exit={{ opacity: 0, translateX: -20 }} // Animate out of view
                        transition={{ duration: 1.5, delay: .5 }} 
                         className=" basis-1/3 sm:basis-1/3 w-[8rem] h-auto">
                        <Image className="block w-full h-full object-cover" src={item.image} alt="" width={1000} height={1000} />
                        </motion.div>
                        <motion.div 
                         initial={{ opacity: 0, translateY: 20 }} // Start from below
                         whileInView={{ opacity: 1, translateY: 0 }} // Animate into view
                         exit={{ opacity: 0, translateY: 20 }} // Animate out of view
                         transition={{ duration: 1.5, delay: .5 }} 
                        className="basis-2/3 sm:basis-2/3">
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
        

    
    </div>
  )
}

export default Features