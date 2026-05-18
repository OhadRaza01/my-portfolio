import React from 'react'

export default function ProjectLink({ link }) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors" >
            Github ↗
        </a>
        
    )
}
