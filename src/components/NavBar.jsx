import React, { useState } from 'react'
import SideBar from './SideBar'

export default function NavBar() {

    let [isOpen, setIsOpen] = useState(false)
    return (
        <header className='sticky top-0 z-50'>
            <SideBar isOpen = {isOpen} />
            <nav className=' h-18  flex justify-between items-center pl-4 pr-4 md:pl-8 md:pr-8 text-xl text-blue-50  bg-blue-700'>
                <div className='font-bold text-2xl md:text-3xl'>
                    <h1>Ohad Raza</h1>
                </div>
                <button onClick={()=>setIsOpen(!isOpen)} className='md:hidden'>
                    <img className='invert cursor-pointer' src="src\assets\hamburger.png" alt="" />
                </button>
                <ul className='hidden md:flex justify-center items-center gap-12 '>
                    <li className='cursor-pointer'>
                        <a href="#home" className='hover:text-blue-200 transition-colors'>Home</a>
                    </li>
                    <li className='cursor-pointer'>
                        <a href="#about" className='hover:text-blue-200 transition-colors'>About me</a>
                    </li>
                    <li className='cursor-pointer'>
                        <a href="#projects" className='hover:text-blue-200 transition-colors'>My Projects</a>
                    </li>
                    <li className='cursor-pointer'>
                        <a href="#contact" className='hover:text-blue-200 transition-colors'>Contact</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
