import { useRef } from "react"
import { AboutMe } from "../components/AboutMe"
import { Intro } from "../components/Intro"
import { Projects } from "../components/Projects"
import { WorkExperience } from "../components/WorkExperience"
import { NavBar } from "../components/NavBar"

export const Home = () => {
  const introRef = useRef<HTMLDivElement>(null)
  const aboutMeRef = useRef<HTMLDivElement>(null)
  const workExperienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  return (
    <div className="flex justify-center h-[4000px]">
      <div className="w-full flex flex-col px-6">
        <NavBar intro={introRef} aboutRef={aboutMeRef} experienceRef={workExperienceRef} projectsRef={projectsRef} />
        <div ref={introRef} id="intro">
          <Intro />
        </div>
        <div ref={workExperienceRef} id="workExperience">
          <WorkExperience />
        </div>
        <div ref={projectsRef} id="projects">
          <Projects />
        </div>
        <div ref={aboutMeRef} id="aboutMe">
          <AboutMe />
        </div>
      </div>
    </div>
  )
}
