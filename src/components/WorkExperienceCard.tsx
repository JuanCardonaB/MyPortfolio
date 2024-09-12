import { Code } from '@nextui-org/react'

interface WorkExperienceCardProps {
    jobTitle: string;
    rol: string;
    time: string;
    technologies: string[];
}

export const WorkExperienceCard = ({ jobTitle, rol, time, technologies }: WorkExperienceCardProps) => {
    return (
        <div style={{ transitionDelay: '100ms' }} className="flex flex-col md:flex-row gap-6 w-fit h-[200px] rounded-lg transition-all duration-500 m-[-16px] custom-md:hover:m-4">

            <div className="w-[250px]">
                <h3 className="text-[25px]">{jobTitle}</h3>
                <p>{rol}</p>
                <p>{time}</p>
                <div className="flex flex-wrap gap-1 mt-4">
                    {
                        technologies.map((tech, index) => (
                            <Code key={index} color="secondary">{tech}</Code>
                        ))
                    }
                </div>
            </div>

            <div className="w-[300px] md:w-[400px]">
                <p>I'm working on INFERA, making new features that the app require</p>

                <p></p>
            </div>

        </div>
    )
}
