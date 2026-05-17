const projects = [
    {
        title: "Weather App",
        description: "A real-time weather app that fetches live data using Open-Meteo API. Features include city search, error handling, and search history.",
        tech: ["HTML", "CSS", "JavaScript", "REST API"],
        github: "#",
        live: "#"
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio website built with React and Tailwind CSS showcasing my projects and skills.",
        tech: ["React", "Tailwind CSS"],
        github: "#",
        live: "#"
    },
    {
        title: "Coming Soon",
        description: "Currently working on new projects. Check back soon!",
        tech: [],
        github: null,
        live: null
    }
]

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center items-center px-8 py-20 bg-gray-950 text-white">
            <div className="max-w-5xl w-full">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-blue-400 text-lg mb-2">My Work</p>
                    <h2 className="text-4xl font-bold">Projects</h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col gap-4 p-6 bg-gray-900 border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-colors">

                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-md text-xs">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            {project.github && (
                                <div className="flex gap-4 mt-2">
                                    <a href={project.github} className="text-sm text-gray-400 hover:text-white transition-colors">
                                        GitHub ↗
                                    </a>
                                    <a href={project.live} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                                        Live Demo ↗
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}