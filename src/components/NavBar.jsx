import { useState } from 'react'
import SideBar from './SideBar'

const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('Home')

    return (
        <header className='sticky top-0 z-50' style={{ fontFamily: 'Nunito, sans-serif' }}>
            <SideBar
                isOpen={isOpen}
                links={links}
                active={active}
                setActive={setActive}
                onClose={() => setIsOpen(false)}
            />

            <nav className='h-[62px] flex items-center justify-between px-5 md:px-10 bg-yellow-200 border-b-[3px] border-black'>

                {/* Logo */}
                <div className='flex items-center gap-2'>
                    <span className='w-3 h-3 rounded-full bg-rose-500 border-2 border-black inline-block' />
                    <span className='font-black text-xl text-black tracking-tight'>Ohad Raza</span>
                </div>

                {/* Hamburger - mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label='Toggle menu'
                    className='md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none'
                >
                    <span className={`block w-5 h-[2.5px] bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`block w-5 h-[2.5px] bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-5 h-[2.5px] bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>

                {/* Desktop links */}
                <ul className='hidden md:flex items-center gap-1 list-none'>
                    {links.map(({ label, href }) => (
                        <li key={label}>
                            <a
                                href={href}
                                onClick={() => setActive(label)}
                                className={`font-extrabold text-[13px] px-4 py-[6px] rounded-lg border-2 no-underline transition-all duration-100
                                ${active === label
                                        ? 'bg-rose-500 text-white border-black shadow-[3px_3px_0_#000]'
                                        : 'text-black border-transparent hover:bg-black hover:text-yellow-200 hover:border-black'
                                    }`}
                            >
                                {label}
                            </a>

                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href='#contact'
                    onClick={() => setActive('Contact')}
                    className='hidden md:inline-block font-black text-[13px] bg-black text-yellow-200 border-[2.5px] border-black px-5 py-[7px] rounded-xl no-underline shadow-[3px_3px_0_#f43f5e] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#f43f5e] transition-all duration-100'
                >
                    Hire me !
                </a>

            </nav >
        </header >
    )
}