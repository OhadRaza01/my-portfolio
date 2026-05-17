import React from 'react'

export default function SkillCard({ techName }) {
    return (
        <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-md text-xs">
            {techName}
        </span>

    )
}
