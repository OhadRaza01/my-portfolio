import React from 'react'
import SkillCard from './SkillCard'
import ProjectLink from './ProjectLink'

export default function ProjectCard({projectName, projectDescription, tech ,githubLink }) {
    return (

        <div  className="flex flex-col gap-4 p-6 bg-gray-900 border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-colors">

            <h3 className="text-xl font-semibold">{projectName}</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{projectDescription}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                    <SkillCard techName={t} />
                ))}
            </div>

            {/* Links */}
            {githubLink && (
                    <div className="flex gap-4 mt-2">
                        <ProjectLink link = {githubLink} />
                    </div>
                )}
        </div>


    )
}
