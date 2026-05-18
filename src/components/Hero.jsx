import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Hero() {
    let [displayText, setDisplatText] = useState("")
    let name = "Ohad Raza"

    useEffect(() => {

        let i = 0
        let typeNameInterval = setInterval(() => {

            if (displayText.length < name.length) {
                setDisplatText(name.slice(0, i + 1))
                i++
            }
            else {
                clearInterval(typeNameInterval)
            }

        }, 200);

    }, [])

    return (
        <section id='home' className='h-screen flex flex-col justify-center items-center gap-4 bg-gray-950 text-white'>
            <p className='text-blue-400 text-lg'>Hello, I'm</p>
            <h1 className='text-5xl font-bold'>
                {displayText}
                <span className='animate-pulse text-blue-500'>|</span>
            </h1>
            <p className='text-xl text-gray-400'>Frontend Developer</p>
            <button href="#about" className='mt-4 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer'>
                View My Work
            </button>
        </section>
    )
}