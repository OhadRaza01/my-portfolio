import { useState, useEffect } from 'react'

export default function Hero() {
    const [displayText, setDisplayText] = useState('')
    const name = 'Ohad Raza'

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            if (i < name.length) {
                setDisplayText(name.slice(0, i + 1))
                i++
            } else {
                clearInterval(interval)
            }
        }, 150)
        return () => clearInterval(interval)
    }, [])

    return (
        <section
            id='home'
            className='min-h-screen flex items-center bg-[#030712] px-5 py-20'
            style={{ fontFamily: 'Nunito, sans-serif' }}
        >
            <div className='max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10'>

                <div className='items-center flex flex-col md:items-start gap-4 flex-1'>

                    <span className='font-extrabold text-xs bg-yellow-200 text-black border-2 border-black px-4 py-1.5 rounded-full shadow-[3px_3px_0_#000]'>
                        Full Stack Developer
                    </span>

                    <p className='font-bold text-gray-400 text-lg'>
                        Hello, I'm
                    </p>

                    <h1 className='font-black text-5xl md:text-6xl text-white tracking-tight leading-tight'>
                        {displayText}
                        <span className='animate-pulse text-yellow-300'>|</span>
                    </h1>

                    <div className='w-20 h-1 bg-rose-500 border border-black shadow-[2px_2px_0_#000] rounded-sm' />

                    <p className='font-bold text-center md:text-start text-gray-400 text-base  max-w-sm'>
                        Turning ideas into fast, functional & beautiful digital products.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-3 mt-2'>
                        <a
                            href='#projects'
                            className='font-black text-sm bg-yellow-200 text-black border-[2.5px] border-black px-6 py-3 rounded-xl no-underline shadow-[4px_4px_0_#f43f5e] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#f43f5e] transition-all duration-100 text-center'
                        >
                            See my work
                        </a>
                        <a
                            href='#contact'
                            className='font-black text-[14px] bg-transparent text-white border-[2.5px] border-white px-6 py-3 rounded-xl no-underline hover:bg-white hover:text-black transition-all duration-100 text-center'
                        >
                            Hire me !
                        </a>
                    </div>

                </div>

                <div className='hidden md:flex shrink-0'>
                    <div className='w-44 h-44 md:w-52 md:h-52 rounded-2xl bg-[#1f2937] border-[3px] border-yellow-200 shadow-[6px_6px_0_#fef08a] flex items-center justify-center'>
                        <span className='font-black text-5xl md:text-6xl text-yellow-200'>OR</span>
                    </div>
                </div>

            </div >

        </section >
    )
}