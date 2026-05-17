import React from 'react'

export default function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center px-8 py-20 bg-gray-900 text-white">
            <div className="max-w-4xl w-full flex flex-col md:flex-row gap-12 items-center">

                {/* Left side - Avatar */}
                <div className="flex-shrink-0">
                    <div className="w-48 h-48 rounded-full bg-blue-600 flex justify-center items-center text-6xl font-bold">
                        OR
                    </div>
                </div>

                {/* Right side - Text */}
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="text-blue-400 text-lg mb-2">About Me</p>
                        <h2 className="text-4xl font-bold">Ohad Raza</h2>
                        <p className="text-gray-400 mt-1">Software Engineering Student — Karachi, Pakistan</p>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        I'm a 3rd year Software Engineering student with a passion for building
                        real-world solutions. I enjoy turning ideas into working products —
                        from a simple UI to a fully functional web app.
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        Currently on my journey to become a <span className="text-blue-400 font-semibold">Full Stack Developer</span>,
                        actively learning React and modern web technologies.
                        I'm looking for an internship where I can contribute, grow, and solve real problems.
                    </p>

                    {/* Skills */}
                    <div>
                        <p className="text-gray-400 mb-3 text-sm uppercase tracking-widest">Tech Stack</p>
                        <div className="flex flex-wrap gap-3">
                            {["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"].map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-lg text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-2">
                        <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg font-semibold">
                            Hire Me
                        </a>
                        <a href="#projects" className="px-6 py-3 border border-blue-500/30 hover:border-blue-400 text-blue-300 transition-colors rounded-lg font-semibold">
                            My Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
