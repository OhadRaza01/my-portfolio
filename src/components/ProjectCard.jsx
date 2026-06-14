import React from 'react'
import SkillCard from './SkillCard'
import ProjectLink from './ProjectLink'

export default function ProjectCard({ projectName, projectDescription, tech, githubLink, featured }) {
    return (
        <div
            className={`flex flex-col gap-4 p-5 bg-[#111827] rounded-xl border-[2.5px] border-black transition-all duration-100
        ${featured
                    ? 'md:col-span-2 lg:col-span-1 shadow-[5px_5px_0_#fef08a] border-yellow-200'
                    : 'shadow-[4px_4px_0_#000]'
                }`}
            style={{ fontFamily: 'Nunito, sans-serif' }}
        >
            {featured && (
                <span className='self-start font-extrabold text-[10px] bg-rose-500 text-white border-2 border-black px-2.5 py-0.5 rounded shadow-[1px_1px_0_#000] uppercase tracking-wider'>
                    Featured
                </span>
            )}

            <h3 className='font-black text-lg text-white leading-tight'>
                {projectName}
            </h3>

            {/* Description */}
            <p className='font-bold text-[13px] text-gray-400 leading-relaxed flex-1'>
                {projectDescription}
            </p>

            {tech.length > 0 && (
                <div className='flex flex-wrap gap-2'>
                    {tech.map((t) => (
                        <span
                            key={t}
                            className='font-extrabold text-[11px] bg-[#1f2937] text-yellow-200 border-[1.5px] border-[#374151] px-2.5 py-1 rounded'
                        >
                            {t}
                        </span>
                    ))}
                </div>
            )}

            {githubLink && (
                <a

                    href={githubLink}
                    target='_blank'
                    rel='noreferrer'
                    className='self-start font-black text-[13px] bg-yellow-200 text-black border-2 border-black px-4 py-2 rounded-lg no-underline shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-100 mt-1'
                >
                    GitHub →
                </a>
            )
            }
        </div >
    )
}