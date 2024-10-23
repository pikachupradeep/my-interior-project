'use client'
import Image from "next/image"
import './tech.css';
import { technology } from "@/components/constant";
import { motion } from "framer-motion";


const Technology = () => {
  return (
    <div className="mt-[8vh] container m-auto p-4">
      <h3 className="text-center capitalize mb-4">Our technologies</h3>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {technology.map((item)=>(
              <motion.div
              initial={{ opacity: 0, translateX: -20 }} // Start from below
              whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
              exit={{ opacity: 0, translateX: -20 }} // Animate out of view
              transition={{ duration: 1.5, delay: .5 }} 
              className="flex items-start gap-2">
                <Image src={item.image} alt ="check" width={40} height={40} />
                <motion.div
                initial={{ opacity: 0, translateY: 20 }} // Start from below
                whileInView={{ opacity: 1, translateY: 0 }} // Animate into view
                exit={{ opacity: 0, translateY: 20 }} // Animate out of view
                transition={{ duration: 1.5, delay: .5 }}  
                className="">
                  <motion.div 
                   initial={{ opacity: 0, translateX: 20 }} // Start from below
                   whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
                   exit={{ opacity: 0, translateX: 20 }} // Animate out of view
                   transition={{ duration: 1.5, delay: .5 }}  className="mb-4">
                   <h6>{item.title}</h6>
                  </motion.div>
                 
                 <motion.div 
                 initial={{ opacity: 0, translateX: -20 }} // Start from below
                 whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
                 exit={{ opacity: 0, translateX: -20 }} // Animate out of view
                 transition={{ duration: 1.5, delay: .5 }}  className="mb-4">
                 <p>{item.text}</p>
                 </motion.div>
                 
                </motion.div>
              </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-4">
          <motion.div 
          initial={{ opacity: 0, translateX: -20 }} // Start from below
          whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
          exit={{ opacity: 0, translateX: -20 }} // Animate out of view
          transition={{ duration: 1.5, delay: .5 }} 
          className="flex flex-col gap-4">
            <h3 className="sm:basis-2/5">Interior technology</h3>
            <p className="sm:basis-3/5">Interior technologies refer to advanced tools and systems used to enhance the functionality, comfort, and aesthetics of indoor spaces. These include smart home automation, energy-efficient lighting, climate control systems, and innovative materials like acoustic panels or sustainable surfaces. By integrating cutting-edge technology, interior designs can create environments that are not only visually appealing but also highly efficient, eco-friendly, and customized to the needs of the occupants.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.div
          initial={{ opacity: 0, translateX: -20 }} // Start from below
          whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
          exit={{ opacity: 0, translateX: -20 }} // Animate out of view
          transition={{ duration: 1.5, delay: .5 }} 
           className="sm:col-span-2 bg-red-500 min-h-[50vh] bg1">
            
          </motion.div>
          <motion.div
          initial={{ opacity: 0, translateX: 20 }} // Start from below
          whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
          exit={{ opacity: 0, translateX: 20 }} // Animate out of view
          transition={{ duration: 1.5, delay: .5 }} 
           className=" bg-red-500 min-h-[50vh] bg2">
            
          </motion.div>
          <motion.div
          initial={{ opacity: 0, translateX: -20 }} // Start from below
          whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
          exit={{ opacity: 0, translateX: -20 }} // Animate out of view
          transition={{ duration: 1.5, delay: .5 }} 
           className=" bg-red-500 min-h-[50vh] bg3">
          
          </motion.div>
          <motion.div
           initial={{ opacity: 0, translateX: 20 }} // Start from below
           whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
           exit={{ opacity: 0, translateX: 20 }} // Animate out of view
           transition={{ duration: 1.5, delay: .5 }} 
           className="sm:col-span-2  min-h-[50vh] bg4 bg-red-500">
          
          </motion.div>



        </div>

      </div>

    </div>
  )
}

export default Technology