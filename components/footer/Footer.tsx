import { IoLogoFirefox } from "react-icons/io5"
import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <div className="bg-blue-950 text-gray-100 mt-16">
        <div className="container m-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-start">
            <h6 className="font-bold flex items-center mb-4 gap-2">
            <Image priority src="/assets/logo.png" alt="" width={70} height={70} />
            </h6>
            <p>All Content on this website is protected by copyright and may not be used without permission from VANHAUSER INTERIORS</p>
            </div>
            <div className="">
                <h6 className="mb-4">Usefull Links</h6>
                <div className="flex flex-col">
                <Link className="mb-3" href="/technology">Technology</Link>
               <Link className="mb-3" href="/services">Service</Link>
               <Link className="mb-3" href="/projects">Projects</Link>
               <Link className="mb-3" href="/contact">Contact</Link>
                </div>
              
        
            </div>

            <div className="">
                <h6 className="mb-4">Q & A</h6>
                <form>
                    <input className="py-2 px-2" type="text" placeholder="email" />
                    <button type="submit" className="bg-blue-600 py-2 px-2">Subscribe</button>
                </form>
                <p className="mb-4">Subscribe to get newsletters</p>
                <p>Discount for selected users</p>
            </div>

            <div className="">
                <h6 className="mb-4">Policy</h6>
                <p>All rights reserved ©2024</p>
            </div>


        </div>

    </div>
  )
}

export default Footer