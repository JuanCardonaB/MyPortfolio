import { ProjectCard } from "./ProjectCard"

export const Projects = () => {

    return (
        <div>
            <h1>Projects</h1>
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">

            <ProjectCard />
            </div>
        </div>
    )
}