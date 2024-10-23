'use client'
import { about } from "../constant"
import { motion } from "framer-motion"


const About = () => {
  return (
    <div className="mt-8 container m-auto p-4">
        <h3 className="text-center mb-4">What We Do</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {about.map((item)=>(
                 <motion.div key={item.id}
                 initial={{ opacity: 0, translateX: 20 }} // Start from below
                 whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
                 exit={{ opacity: 0, translateX: 20 }} // Animate out of view
                 transition={{ duration: 1.5, delay: .5 }} 
                 className="">
                    <motion.div
                    initial={{ opacity: 0, translateX: -20 }} // Start from below
                    whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
                    exit={{ opacity: 0, translateX: -20 }} // Animate out of view
                    transition={{ duration: 1.5, delay: .5 }}  
                    className="flex items-center gap-2 mb-4">
                        {<item.icon size={22} className="text-orange-400" />} 
                        <h6>{item.title}</h6>
                    </motion.div>
                    <p>{item.text}</p>
                 </motion.div>
            ))}
           
        </div>
    </div>
  )
}

export default About