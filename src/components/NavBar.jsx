import React from 'react'

export default function NavBar() {
    return (
        <header className='sticky top-0 z-50'>
            <nav className=' h-18 flex justify-between items-center pl-8 pr-8 text-xl text-blue-50  bg-blue-700'>
                <div>
                    <h1>Ohad Raza</h1>
                </div>
                <ul className='flex justify-center items-center gap-12'>
                    <li className='cursor-pointer'>
                        <a href="#home" className='hover:text-blue-200 transition-colors'>Home</a>
                    </li>
                    <li className='cursor-pointer'>
                        <a href="#about" className='hover:text-blue-200 transition-colors'>About me</a>
                    </li>
                    <li className='cursor-pointer'>
                        <a href="#myprojects" className='hover:text-blue-200 transition-colors'>My Projects</a>
                    </li>
                    <li className='cursor-pointer'>
                        <a href="#contact" className='hover:text-blue-200 transition-colors'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
