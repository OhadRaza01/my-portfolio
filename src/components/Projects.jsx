import ProjectCard from "./ProjectCard"

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        return <ProjectCard key={index} projectName={project.title} projectDescription={project.description} tech={project.tech} />
                    })}
                </div>

            </div>
        </section>
    )
}