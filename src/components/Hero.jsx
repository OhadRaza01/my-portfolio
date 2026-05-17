import React from 'react'

export default function Hero() {
    return (
        <section id='home' className='h-screen flex flex-col justify-center items-center gap-4 bg-gray-950 text-white'>
            <p className='text-blue-400 text-lg'>Hello, I'm</p>
            <h1 className='text-5xl font-bold'>Ohad Raza</h1>
            <p className='text-xl text-gray-400'>Frontend Developer</p>
            <button className='mt-4 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer'>
                View My Work
            </button>
        </section>
    )
}
