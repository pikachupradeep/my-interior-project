'use client'
import { motion } from 'framer-motion'
import Image from "next/image"


const Projects = () => {
  return (
    <div className="mt-[8vh] container m-auto p-4 sm:p-0">

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 ">
        <div className="sm:basis-1/2">
          <motion.div
           initial={{ opacity: 0, translateX: 20 }} // Start from below
           whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
           exit={{ opacity: 0, translateX: 20 }} // Animate out of view
           transition={{ duration: 1.5, delay: .5 }}  
           className="mb-4">
            <h3>Key Features of Our Designs:
            </h3>
          </motion.div>
            
          <motion.div
           initial={{ opacity: 0, translateX: -20 }} // Start from below
           whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
           exit={{ opacity: 0, translateX: -20 }} // Animate out of view
           transition={{ duration: 1.5, delay: .5 }}  
           className="mb-4">
            <p>As an interior design company, our recent projects have focused on creating spaces that reflect both the personality of the client and the latest trends in design. We specialize in modern, functional interiors that emphasize comfort, sustainability, and aesthetic appeal. Our portfolio includes residential homes, boutique hotels, and luxury villas, each designed with attention to detail and a deep understanding of the client’s lifestyle.</p>
          </motion.div>
          

          <motion.div
          initial={{ opacity: 0, translateX: 20 }} // Start from below
          whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
          exit={{ opacity: 0, translateX: 20 }} // Animate out of view
          transition={{ duration: 1.5, delay: .5 }}  
           className="flex flex-col gap-4">
            <li className="list-none flex items-center gap-2">
              <span style={{height:'2rem',width: '2rem'}} className="flex-shrink-0 flex justify-center items-center bg-blue-700 rounded-full text-white">01</span>
              <span>Sustainability: Use of eco-friendly materials and energy-efficient designs.</span>
            </li>
            <li className="list-none flex items-center gap-2">
              <span style={{height:'2rem',width: '2rem'}} className="flex-shrink-0 flex justify-center items-center bg-blue-700 rounded-full text-white">02</span>
              <span>Customization: Each project is tailored to the client's specific needs, ensuring a personalized and unique space.</span>
            </li>
            <li className="list-none flex items-center gap-2">
              <span style={{height:'2rem',width: '2rem'}} className="flex-shrink-0 flex justify-center items-center bg-blue-700 rounded-full text-white">03</span>
              <span>Aesthetics: Clean lines, modern furnishings, and a careful balance between form and function.</span>
            </li>
            <li className="list-none flex items-center gap-2">
              <span style={{height:'2rem',width: '2rem'}} className="flex-shrink-0 flex justify-center items-center bg-blue-700 rounded-full text-white">04</span>
              <span>Technology Integration: Smart home features and energy-efficient systems.</span>
            </li>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 grid-rows-5 gap-2 md:gap-4 mt-4 h-[50vh] sm:basis-1/2">
          <motion.div
           initial={{ opacity: 0, translateX: -20 }} // Start from below
           whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
           exit={{ opacity: 0, translateX: -20 }} // Animate out of view
           transition={{ duration: 1.5, delay: .5 }}  
          className="row-span-2 bg-red-500">
          <Image className="block w-full h-full object-cover" src="https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={500} height={500} />
          </motion.div>
          <motion.div
           initial={{ opacity: 0, translateX: 20 }} // Start from below
           whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
           exit={{ opacity: 0, translateX: 20 }} // Animate out of view
           transition={{ duration: 1.5, delay: .5 }}  
          className="col-start-2 row-start-2 row-span-2">
          <Image className="block w-full h-full object-cover" src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={500} height={500} />
          </motion.div>
          <motion.div
           initial={{ opacity: 0, translateX: -20 }} // Start from below
           whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
           exit={{ opacity: 0, translateX: -20 }} // Animate out of view
           transition={{ duration: 1.5, delay: .5 }}  
          className="col-start-2 row-start-4 row-span-2">
          <Image className="block w-full h-full object-cover" src="https://images.pexels.com/photos/2067638/pexels-photo-2067638.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={500} height={500} />
          </motion.div>
          <motion.div
           initial={{ opacity: 0, translateX: 20 }} // Start from below
           whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
           exit={{ opacity: 0, translateX: 20 }} // Animate out of view
           transition={{ duration: 1.5, delay: .5 }}  
          className="row-span-2">
          <Image className="block w-full h-full object-cover" src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={500} height={500} />
          </motion.div>
        </div>
      </div>

        <div className="mt-8">
         <h3 className='text-center mb-4'>Our Recent Projects</h3>

         <div className="grid grid-cols-1 gap-4 sm:grid-cols-8 sm:grid-rows-5 lg:grid-rows-6">
            <motion.div 
            initial={{ opacity: 0, translateX: -20 }} // Start from below
            whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
            exit={{ opacity: 0, translateX: -20 }} // Animate out of view
            transition={{ duration: 1.5, delay: .5 }}  
            className="object-cover bg-red-500 text-white text-3xl sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-3">
              <Image className='block object-cover h-full w-full' src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600" width={800} height={800} alt="pic"  />
            </motion.div>

            <motion.div 
             initial={{ opacity: 0, translateX: 20 }} // Start from below
             whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
             exit={{ opacity: 0, translateX: 20 }} // Animate out of view
             transition={{ duration: 1.5, delay: .5 }}  
            className="object-cover bg-red-500 text-white text-3xl sm:row-start-3 sm:col-start-1 sm:col-end-3 sm:row-end-6 lg:row-end-7">
            <Image className='block object-cover h-full w-full' src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600" width={800} height={800} alt="pic"  />
            </motion.div>

            <motion.div 
             initial={{ opacity: 0, translateX: -20 }} // Start from below
             whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
             exit={{ opacity: 0, translateX: -20 }} // Animate out of view
             transition={{ duration: 1.5, delay: .5 }}  
            className="object-cover bg-red-500 text-white text-3xl sm:row-start-5 sm:col-start-3 sm:col-end-6 lg:row-end-7">
            <Image className='block object-cover h-full w-full' src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600" width={800} height={800} alt="pic"  />
            </motion.div>

            <motion.div 
             initial={{ opacity: 0, translateX: 20 }} // Start from below
             whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
             exit={{ opacity: 0, translateX: 20 }} // Animate out of view
             transition={{ duration: 1.5, delay: .5 }}  
            className="object-cover bg-red-500 text-white text-3xl sm:row-start-3 sm:col-start-3 sm:col-end-6 sm:row-end-5">
            <Image className='block object-cover h-full w-full' src="https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=600" width={800} height={800} alt="pic"  />
            </motion.div>

            <motion.div 
             initial={{ opacity: 0, translateX: -20 }} // Start from below
             whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
             exit={{ opacity: 0, translateX: -20 }} // Animate out of view
             transition={{ duration: 1.5, delay: .5 }}  
            className="object-cover bg-red-500 text-white text-3xl sm:col-start-4 sm:row-start-1 sm:row-end-3 sm:col-end-6">
            <Image className='block object-cover h-full w-full' src="https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&w=600" width={800} height={800} alt="pic"  />
            </motion.div>

            <motion.div 
             initial={{ opacity: 0, translateX: 20 }} // Start from below
             whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
             exit={{ opacity: 0, translateX: 20 }} // Animate out of view
             transition={{ duration: 1.5, delay: .5 }}  
            className="object-cover bg-red-500 text-white text-3xl sm:col-start-6 sm:col-end-8 sm:row-start-1 sm:row-end-4">
            <Image className='block object-cover h-full w-full' src="https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=600" width={800} height={800} alt="pic"  />
            </motion.div>

            <motion.div 
             initial={{ opacity: 0, translateX: -20 }} // Start from below
             whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
             exit={{ opacity: 0, translateX: -20 }} // Animate out of view
             transition={{ duration: 1.5, delay: .5 }}  
            className="object-cover bg-red-500 text-white text-3xl sm:row-start-1 sm:row-end-3">
            <Image className='block object-cover h-full w-full' src="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=600" width={800} height={800} alt="pic"  />
            </motion.div>

            <motion.div 
             initial={{ opacity: 0, translateX: 20 }} // Start from below
             whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
             exit={{ opacity: 0, translateX: 20 }} // Animate out of view
             transition={{ duration: 1.5, delay: .5 }}  
            className="object-cover bg-red-500 text-white text-3xl">
            <Image className='block object-cover h-full w-full' src="https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600" width={800} height={800} alt="pic"  />
            </motion.div>

            <motion.div 
             initial={{ opacity: 0, translateX: -20 }} // Start from below
             whileInView={{ opacity: 1, translateX: 0 }} // Animate into view
             exit={{ opacity: 0, translateX: -20 }} // Animate out of view
             transition={{ duration: 1.5, delay: .5 }}  
            className="object-cover bg-red-500 text-white text-3xl sm:row-start-4 sm:row-end-6 sm:col-end-9 sm:col-start-6 lg:row-end-7">
            <Image className='block object-cover h-full w-full' src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=600" width={800} height={800} alt="pic"  />
            </motion.div>
         </div>
        </div>

      

    </div>
  )
}

export default Projects