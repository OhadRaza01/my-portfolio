import React from 'react'

const stack = ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "Node", "Express", "MongoDB", "Firebase"]

export default function About() {
    return (
        <section
            id='about'
            className='min-h-screen flex flex-col justify-center items-center px-5 py-20 bg-yellow-200 border-y-[3px] border-black'
            style={{ fontFamily: 'Nunito, sans-serif' }}
        >
            <div className='max-w-4xl w-full'>

                {/* Section tag */}
                <div className='mb-10 flex items-center gap-3'>
                    <span className='bg-black text-yellow-200 font-black text-xs px-3 py-1.5 rounded border-2 border-black tracking-widest uppercase shadow-[2px_2px_0_#f43f5e]'>
                        About me
                    </span>
                    <h2 className='font-black text-2xl text-black'>Who am I?</h2>
                </div>

                <div className='flex flex-col md:flex-row gap-10 items-center mditems-start'>

                    <div className='shrink-0 flex flex-col items-center gap-3'>
                        <div className='w-44 h-44 rounded-2xl bg-[#030712] border-[3px] border-black shadow-[6px_6px_0_#000] flex items-center justify-center'>
                            <span className='font-black text-5xl text-yellow-200'>OR</span>
                        </div>
                        <span className='font-extrabold text-xs bg-rose-500 text-white border-2 border-black px-3 py-1 rounded-full shadow-[2px_2px_0_#000]'>
                            Open to work
                        </span>
                        <div className='flex flex-col gap-2 w-full mt-1'>
                            <div className='flex items-center gap-2 bg-white border-2 border-black rounded-lg px-3 py-2 shadow-[2px_2px_0_#000]'>
                                <span className='font-black text-xs text-black'>3rd Year</span>
                                <span className='font-bold text-xs text-black/50'>SE Student</span>
                            </div>
                            <div className='flex items-center gap-2 bg-white border-2 border-black rounded-lg px-3 py-2 shadow-[2px_2px_0_#000]'>
                                <span className='font-black text-xs text-black'>Karachi</span>
                                <span className='font-bold text-xs text-black/50'>Pakistan</span>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className='flex flex-col gap-5 flex-1'>

                        <div>
                            <h3 className='font-black text-4xl md:text-5xl text-black tracking-tight leading-tight'>
                                Ohad Raza
                            </h3>
                            <p className='font-bold text-black/50 text-sm mt-1'>
                                Software Engineering Student
                            </p>
                            <div className='w-16 h-1 bg-rose-500 border border-black mt-3 shadow-[2px_2px_0_#000] rounded-sm' />
                        </div>

                        <p className='font-bold text-[15px] text-black/80 leading-relaxed'>
                            I'm a 3rd year Software Engineering student with a passion for building
                            real-world solutions. I enjoy turning ideas into working products —
                            from a simple UI to a fully functional web app.
                        </p>

                        <p className='font-bold text-[15px] text-black/80 leading-relaxed'>
                            Currently on my journey to become a{' '}
                            <span className='font-black text-white bg-black px-1.5 py-0.5 rounded'>
                                Full Stack Developer
                            </span>
                            , actively learning Express and modern web technologies.
                            Looking for an internship where I can contribute, grow & solve real problems.
                        </p>

                        <div>
                            <p className='font-black text-xs text-black/40 uppercase tracking-widest mb-3'>
                                Tech Stack
                            </p>
                            <div className='flex flex-wrap gap-2'>
                                {stack.map((skill) => (
                                    <span
                                        key={skill}
                                        className='font-extrabold text-xs bg-white text-black border-2 border-black px-3 py-1.5 rounded-lg shadow-[2px_2px_0_#000]'
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className='flex flex-wrap gap-3 mt-1'>
                            <a
                                href='#contact'
                                className='font-black text-[14px] bg-black text-yellow-200 border-[2.5px] border-black px-6 py-2.5 rounded-xl no-underline shadow-[3px_3px_0_#f43f5e] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#f43f5e] transition-all duration-100'
                            >
                                Hire me !
                            </a>
                            <a
                                href='#projects'
                                className='font-black text-[14px] bg-transparent text-black border-[2.5px] border-black px-6 py-2.5 rounded-xl no-underline hover:bg-black hover:text-yellow-200 transition-all duration-100'
                            >
                                My Projects
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}   