import React from 'react'

export default function ProjectCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 p-6 bg-gray-900 border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-colors">

                <h3 className="text-xl font-semibold">Weather App</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque magnam dolor.</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                    {/* {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-md text-xs">
                            {t}
                        </span>
                    ))} */}
                </div>

                {/* Links */}
                {/* {project.github && (
                    <div className="flex gap-4 mt-2">
                        <a href={project.github} className="text-sm text-gray-400 hover:text-white transition-colors">
                            GitHub ↗
                        </a>
                        <a href={project.live} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                            Live Demo ↗
                        </a>
                    </div>
                )} */}
            </div>
            
        </div>
    )
}
