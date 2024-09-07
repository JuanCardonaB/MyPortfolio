import { Intro } from "../components/Intro"

export const Home = () => {
  return (
    <div className="flex justify-center h-[4000px]">
      <div className="w-full flex flex-col max-w-[1024px] px-6">
        <Intro />
      </div>
    </div>
  )
}
