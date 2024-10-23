'use client'
import { motion } from 'framer-motion'
import pic4 from '../../public/assets/pic-4.jpg'
import Image from "next/image"
import { services1, services2 } from "@/components/constant"


const Services = () => {
  return (
    <div className="mt-[8vh] container m-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="">
          <motion.h3 
          initial={{ opacity: 0, translateX: 20 }} // Start from below
          whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
          exit={{ opacity: 0, translateX: 20 }} // Animate out of view
          transition={{ duration: 1.5, delay: .5 }} 
          className='mb-4'>Why Our Services Are Unique</motion.h3>
          <motion.p 
          initial={{ opacity: 0, translateX: -20 }} // Start from below
          whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
          exit={{ opacity: 0, translateX: -20 }} // Animate out of view
          transition={{ duration: 1.5, delay: .5 }} 
          className='mb-4'>we believe that interior design is not just about aesthetics; it's 
          about creating spaces that reflect the unique personality and lifestyle of our clients. Here&apos;s what sets our services apart:</motion.p>
        <div 
           className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <motion.li 
            initial={{ opacity: 0, translateX: 20 }} // Start from below
            whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
            exit={{ opacity: 0, translateX: 20 }} // Animate out of view
            transition={{ duration: 1.5, delay: .5 }} 
            className="list-none flex items-center gap-2">
              <span style={{height:'2rem',width: '2rem'}} className="flex-shrink-0 flex justify-center items-center bg-blue-700 rounded-full text-white">01</span>
              <span>Tailored Design Solutions: We understand that every project is distinct. Our team takes the time to listen 
              to your needs and preferences, ensuring that our designs are personalized to fit your vision and lifestyle.</span>
            </motion.li>
            <motion.li
            initial={{ opacity: 0, translateX: -20 }} // Start from below
            whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
            exit={{ opacity: 0, translateX: -20 }} // Animate out of view
            transition={{ duration: 1.5, delay: .5 }}  
            className="list-none flex items-center gap-2">
              <span style={{height:'2rem',width: '2rem'}} className="flex-shrink-0 flex justify-center items-center bg-blue-700 rounded-full text-white">02</span>
              <span>Holistic Approach: We consider all aspects of a space, from functionality and flow to aesthetics and atmosphere. 
              Our designs integrate color, texture, and lighting to create harmonious environments that enhance your well-being.</span>
            </motion.li>
            <motion.li 
            initial={{ opacity: 0, translateX: 20 }} // Start from below
            whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
            exit={{ opacity: 0, translateX: 20 }} // Animate out of view
            transition={{ duration: 1.5, delay: .5 }} 
            className="list-none flex items-center gap-2">
              <span style={{height:'2rem',width: '2rem'}} className="flex-shrink-0 flex justify-center items-center bg-blue-700 rounded-full text-white">03</span>
              <span>Sustainable Practices: We prioritize eco-friendly materials and practices in our designs, promoting sustainability 
              without compromising on style. Our commitment to the environment reflects our dedication to creating spaces that are both beautiful and responsible.</span>
            </motion.li>
            <motion.li 
            initial={{ opacity: 0, translateX: -20 }} // Start from below
            whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
            exit={{ opacity: 0, translateX: -20 }} // Animate out of view
            transition={{ duration: 1.5, delay: .5 }} 
            className="list-none flex items-center gap-2">
              <span style={{height:'2rem',width: '2rem'}} className="flex-shrink-0 flex justify-center items-center bg-blue-700 rounded-full text-white">04</span>
              <span>Expert Team: Our team consists of experienced designers, architects, and project managers who collaborate seamlessly to bring your vision to life. With a diverse range of expertise, we ensure that every detail is executed to perfection.</span>
            </motion.li>
            <motion.li 
            initial={{ opacity: 0, translateX: 20 }} // Start from below
            whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
            exit={{ opacity: 0, translateX: 20 }} // Animate out of view
            transition={{ duration: 1.5, delay: .5 }} 
            className="list-none flex items-center gap-2">
              <span style={{height:'2rem',width: '2rem'}} className="flex-shrink-0 flex justify-center items-center bg-blue-700 rounded-full text-white">05</span>
              <span>Innovative Technology: We utilize cutting-edge design software and visualization tools, allowing you to see your project in 3D before it comes to life. This transparency helps you make informed decisions and feel confident in your choices.</span>
            </motion.li>
            <motion.li 
            initial={{ opacity: 0, translateX: -20 }} // Start from below
            whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
            exit={{ opacity: 0, translateX: -20 }} // Animate out of view
            transition={{ duration: 1.5, delay: .5 }} 
            className="list-none flex items-center gap-2">
              <span style={{height:'2rem',width: '2rem'}} className="flex-shrink-0 flex justify-center items-center bg-blue-700 rounded-full text-white">06</span>
              <span>Exceptional Customer Service: From the initial consultation to the final installation, we pride ourselves on 
              providing an outstanding customer experience. Our team is dedicated to ensuring your satisfaction at every stage of the project.</span>
            </motion.li>
            <motion.li 
            initial={{ opacity: 0, translateX: 20 }} // Start from below
            whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
            exit={{ opacity: 0, translateX: 20 }} // Animate out of view
            transition={{ duration: 1.5, delay: .5 }} 
            className="list-none flex items-center gap-2">
              <span style={{height:'2rem',width: '2rem'}} className="flex-shrink-0 flex justify-center items-center bg-blue-700 rounded-full text-white">07</span>
              <span>Timely Project Delivery: We understand that your time is valuable. Our efficient processes and project 
              management ensure that your project stays on schedule without compromising quality.</span>
            </motion.li>
          </div>

          <motion.p 
          initial={{ opacity: 0, translateY: 20 }} // Start from below
          whileInView={{ opacity: 1, translateY: 0 }} // Animate into view
          exit={{ opacity: 0, translateY: 20 }} // Animate out of view
          transition={{ duration: 1.5, delay: .5 }} 
          className='mb-6'>we strive to redefine interior design by offering services that are innovative, sustainable, and uniquely yours. Let us transform your space into a reflection of your style and personality.</motion.p>
        
          
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services1.map((item)=>(
              <div key={item.id} className='flex flex-col '>
                <div className="mb-6 h-14 w-14 border bottom-3 border-orange-400 rounded-full flex justify-center items-center">
                  <item.icon size={22} className='text-center text-orange-400' />
                </div>
                <motion.div 
                key={item.id}
                initial={{ opacity: 0, translateY: 20 }} // Start from below
                whileInView={{ opacity: 1, translateY: 0 }} // Animate into view
                exit={{ opacity: 0, translateY: 20 }} // Animate out of view
                transition={{ duration: 1.5, delay: .5 }}  
                className="flex items-start gap-2">
                <Image src={item.image} alt="image" width={40} height={40} />
                <div className="">
                  <h6 className='mb-4'>{item.title}</h6>
                  <p>{item.text}</p>
                </div>
               
              </motion.div>
              </div>
            ))}
          </div>

         
         
        </div>

      
      </div>
    </div>
  )
}

export default Services