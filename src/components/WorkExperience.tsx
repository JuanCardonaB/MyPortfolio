import { Code } from "@nextui-org/react"
import GoogleFontLoader from "react-google-font-loader"

export const WorkExperience = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[280px] w-full">
      <GoogleFontLoader fonts={[{ font: 'Shrikhand', weights: [400, 700] }]} />

      <div className="max-w-[1024px] w-full">
        <div className="flex justify-center items-center gap-3">
          <h2 className="text-[50px]" style={{ fontFamily: 'Shrikhand, sans-serif' }} >Work</h2>
          <h2 className="text-[50px] text-violet-800" style={{ fontFamily: 'Shrikhand, sans-serif' }}>Experience</h2>
        </div>
        <div className="flex justify-center w-full mt-10 gap-10">
          <div className="h-[650px] w-1 bg-violet-800 rounded-lg">
            <div className="w-2 h-2 bg-white mt-20 ml-[-2px] rounded-full"></div>
            <div className="w-2 h-2 bg-white mt-56 ml-[-2px] rounded-full"></div>
            <div className="w-2 h-2 bg-white mt-56 ml-[-2px] rounded-full"></div>
          </div>

          <div className="pt-8 flex flex-col gap-16">
            <div style={{ transitionDelay: '100ms' }} className="flex gap-6 w-fit h-[200px] rounded-lg transition-all duration-500 m-[-16px] hover:m-4">

              <div className="w-[250px]">
                <h3 className="text-[25px]">INFERA</h3>
                <p>Full Stack Mobile Developer</p>
                <p>2024 - Present</p>
                <div className="flex flex-wrap gap-1 mt-4">
                  <Code color="secondary">PHP</Code>
                  <Code color="secondary">React Native</Code>
                  <Code color="secondary">SQL</Code>
                </div>
              </div>

              <div className="w-[400px]">
                <p>I'm working on INFERA, making new features that the app require</p>

                <p></p>
              </div>

            </div>

            <div style={{ transitionDelay: '100ms' }} className="flex gap-6 w-fit h-[200px] rounded-lg transition-all duration-500 m-[-16px] hover:m-4">

              <div className="w-[250px]">
                <h3 className="text-[25px]">INFERA</h3>
                <p>Full Stack Web Developer</p>
                <p>2024 - 2024</p>
                <div className="flex flex-wrap gap-1 mt-4">
                  <Code color="secondary">Python</Code>
                  <Code color="secondary">React</Code>
                  <Code color="secondary">Fast API</Code>
                </div>
              </div>

              <div className="w-[400px]">
                <p>I'm working on INFERA, making new features that the app require</p>

                <p></p>
              </div>

            </div>

            <div style={{ transitionDelay: '100ms' }} className="flex gap-6 w-fit h-[200px] rounded-lg transition-all duration-500 m-[-16px] hover:m-4">

              <div className="w-[250px]">
                <h3 className="text-[25px]">INFERA</h3>
                <p>Full Stack Mobile Developer</p>
                <p>2024 - Present</p>
                <div className="flex flex-wrap gap-1 mt-4">
                  <Code color="secondary">PHP</Code>
                  <Code color="secondary">React Native</Code>
                  <Code color="secondary">SQL</Code>
                </div>
              </div>

              <div className="w-[400px]">
                <p>I'm working on INFERA, making new features that the app require</p>

                <p></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
