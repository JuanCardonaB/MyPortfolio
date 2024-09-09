import { AboutMe } from "../components/AboutMe"
import { Intro } from "../components/Intro"
// import { WorkExperience } from "../components/WorkExperience"

export const Home = () => {
  return (
    <div className="flex justify-center h-[4000px]">
      <div className="w-full flex flex-col px-6">
        <Intro />
        <AboutMe />
        {/* <WorkExperience /> */}
      </div>
    </div>
  )
}
