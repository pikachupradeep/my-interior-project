'use client'
import { useState } from "react"
import './navbar.css'
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"


const navLinks = [
    {
        id: "1",
        list: "Home",
        link: '/',

    },
    {
        id: "2",
        list: "Technology",
        link: '/technology',
    },
    {
        id: "3",
        list: "Service",
        link: '/services',
    },
   
    {    id: "5",
        list: "Projects",
        link: '/projects',
    },
    {    id: "6",
        list: "Contact",
        link: '/contact',
    },
   

]


const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const pathname = usePathname();

  return (
    <div className="fixed top-0 w-full left-2/4 -translate-x-2/4 z-50 shadow sm:shadow-2xl wrapper">
          <nav className="container m-auto flex items-center justify-between h-[8vh]">
            <Image priority src="/assets/logo.png" alt="" width={70} height={70} />

            <ul className={`${!toggle? 'menuClose' : 'ulLinks'}` }>
                {navLinks.map((link)=>(
                     <div key={link.id} className="flex items-center gap-2">
                     <Link className={`text-white text-sm ${!toggle ? 'blur-out-expand-fwd' : 'tracking-in-contract-bck'}`} href={link.link} onClick={()=>setToggle(false)} >{link.list}</Link>
                 </div>
                 
                    
                ))}
            </ul>

            <ul className="navLinks">
                {navLinks.map((link)=>(
                   <div key={link.id} className="flex items-center gap-2">
                   <Link className={`${pathname=== link.link? 'font-bold' : ''}`} href={link.link}>{link.list}</Link>
               </div>
                ))}
            </ul>

            <button className={!toggle ? 'btn' : 'btnClose'} onClick={()=>setToggle((prev)=> !prev)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
         </nav>

    </div>
  
  )
}

export default Navbar