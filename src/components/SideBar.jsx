import React from 'react'

export default function SideBar({isOpen}) {
    return (
        <div className={`flex flex-col justify-center items-center font-bold fixed top-0 right-0 h-svh rounded-xl w-64 bg-blue-700 text-amber-50 text-xl 
        transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <ul className='flex flex-col justify-center items-start gap-6 '>
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
        </div>
    )
}
