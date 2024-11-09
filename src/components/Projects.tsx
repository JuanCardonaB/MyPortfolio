import GoogleFontLoader from "react-google-font-loader"
import { ProjectCard } from "./ProjectCard"

export const Projects = () => {

    const projects = [
        {
            title: 'Project 1',
            subtitle1: 'This is a project',
            subtitle2: 'of hosting a website',
        },
        {
            title: 'Project 2',
            subtitle1: 'This is a project',
            subtitle2: 'of hosting a website',
        },
        {
            title: 'Project 2',
            subtitle1: 'This is a project',
            subtitle2: 'of hosting a website',
        },
        {
            title: 'Project 2',
            subtitle1: 'This is a project',
            subtitle2: 'of hosting a website',
        },
        {
            title: 'Project 2',
            subtitle1: 'This is a project',
            subtitle2: 'of hosting a website',
        },
        {
            title: 'Project 2',
            subtitle1: 'This is a project',
            subtitle2: 'of hosting a website',
        }
    ]

    return (
        <div className="flex flex-col justify-center items-center mt-24 w-full">
            <GoogleFontLoader fonts={[{ font: 'Shrikhand', weights: [400, 700] }]} />
            <h1 style={{ fontFamily: 'Shrikhand, sans-serif' }} className='text-white text-[45px] sm:text-[50px] font-bold mb-[50px]'>Projects</h1>
            <div className="w-fit gap-2 grid grid-cols-12 grid-rows-2">

            {
                projects.map((project) => (
                    <ProjectCard title={project.title} subtitle1={project.subtitle1} subtitle2={project.subtitle2} />
                ))
            }
            </div>
        </div>
    )
}