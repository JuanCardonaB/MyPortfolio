import { useRef } from "react";
import { NavBar } from "../components/NavBar";
import { Welcome } from "../components/Welcome";
import { WorkExperience } from "../components/WorkExperience";
import { Projects } from "../components/Projects";

export const Home = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col bg-[#000]">
      <NavBar
        aboutRef={aboutMeRef}
        welcomeRef={welcomeRef}
        experienceRef={workExperienceRef}
        projectsRef={projectsRef}
      />
      <div className="w-full flex flex-col">
        <div ref={welcomeRef} id="intro">
          <Welcome />
        </div>
        <div ref={workExperienceRef} id="workExperience">
          <WorkExperience />
        </div>
        <div ref={projectsRef} id="projects">
          <Projects />
        </div>
        <div ref={aboutMeRef} id="aboutMe">
          {/* <AboutMe /> */}
        </div>
      </div>
    </div>
  );
};
