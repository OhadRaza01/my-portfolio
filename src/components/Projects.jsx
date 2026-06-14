import ProjectCard from "./ProjectCard"

const projects = [
    {
        title: "CodeShare",
        description: "A developer platform to share code snippets, get community reviews, and upvote the best solutions.",
        tech: ["React", "React-Router", "Tailwind CSS", "Firebase"],
        github: "https://github.com/OhadRaza01/code-share",
        featured: true
    },
    {
        title: "Weather App",
        description: "A real-time weather app that fetches live data using Open-Meteo API. Features city search, error handling, and search history.",
        tech: ["HTML", "CSS", "JavaScript", "REST API"],
        github: "https://github.com/OhadRaza01/WeatherAPP-Js",
        featured: false
    },
    {
        title: "Coming Soon",
        description: "Currently working on new projects. Check back soon!",
        tech: [],
        github: null,
        featured: false
    }
]

export default function Projects() {
    return (
        <section
            id='projects'
            className='min-h-screen flex flex-col justify-center items-center px-5 py-20 bg-[#030712]'
            style={{ fontFamily: 'Nunito, sans-serif' }}
        >
            <div className='max-w-5xl w-full'>

                {/* Header */}
                <div className='mb-10 flex items-center gap-3'>
                    <span className='bg-rose-500 text-white font-black text-xs px-3 py-1.5 rounded border-2 border-white tracking-widest uppercase shadow-[2px_2px_0_#fff]'>
                        Projects
                    </span>
                    <h2 className='font-black text-2xl text-white'>My Work</h2>
                </div>

                {/* Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            projectName={project.title}
                            projectDescription={project.description}
                            tech={project.tech}
                            githubLink={project.github}
                            featured={project.featured}
                        />
                    ))}
                </div>

                {/* See all link */}
                <div className='mt-10 flex justify-center'>
                    <a
                        href='https://github.com/OhadRaza01'
                        target='_blank'
                        rel='noreferrer'
                        className='font-black text-[14px] bg-yellow-200 text-black border-[2.5px] border-black px-6 py-2.5 rounded-xl no-underline shadow-[3px_3px_0_#f43f5e] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#f43f5e] transition-all duration-100'
                    >
                        See all on GitHub →
                    </a>
                </div>

            </div>
        </section>
    )
}