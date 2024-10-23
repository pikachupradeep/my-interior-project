import Button from "@/components/ui/tailwindcss-buttons"
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa"
import { FaEarthAsia, FaLocationDot } from "react-icons/fa6"


const Contact = () => {
  return (
    <div className="mt-[8vh] container m-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center sm:min-h-screen">
        <div className="">
          <h3 className="mb-4">Get In Touch</h3>
          <p className="mb-4">Feel free to reach out if you’re looking for innovative interior solutions, have any questions, or want to discuss a potential project. Whether you’re interested in transforming your space, seeking design advice, or exploring collaboration opportunities, I’m excited to connect and help bring your vision to life!
        </p>
        <div className="flex items-center gap-2 mb-4">
          <FaPhone className="text-teal-700" size={20} />
          <p>(123) 456 7890</p>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <FaEnvelope className="text-teal-700" size={20} />
          <p>john@gmail.com</p>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <FaLocationDot className="text-teal-700" size={20} />
          <p>4140 Rd, Richardson Califonia.</p>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <FaFacebook className="text-teal-700" size={20} />
          <p>Modular Official</p>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <FaEarthAsia className="text-teal-700" size={20} />
          <p>www.interiorsphere.vercel.app</p>
        </div>
        </div>
        <div className="">
          <h3 className="mb-4">Send Us A Message</h3>
          <form action="">
            <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4">
              <input name="name" className="border mb-4 border-gray-300 py-2 px-2 rounded-lg" type="text" placeholder="Your Name" />
              <input name="email" className="border mb-4 border-gray-300 py-2 px-2 rounded-lg" type="email" placeholder="Email" />
              <input name="phone" className="border mb-4 border-gray-300 py-2 px-2 rounded-lg" type="text" placeholder="phone" />
              <input name="name" className="border mb-4 border-gray-300 py-2 px-2 rounded-lg" type="text" placeholder="Select Service" />
            </div>
            <textarea className="py-2 w-full px-2 min-h-32 rounded-lg border border-gray-300" typeof="text" id="message" placeholder="Message"></textarea>

            <Button
            buttonClassName="relative w-[10rem] mt-6 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            spanClassName="flex uppercase items-center gap-2 h-full w-full cursor-pointer justify-center rounded-full hover hover:bg-green-600 bg-blue-600 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"
            >Send Message</Button>
         
          </form>
        </div>
    
      </div>
    </div>
  )
}

export default Contact