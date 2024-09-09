import Cook from '../assets/IMG_4000.jpg'
import Gym from '../assets/IMG_4001.jpg'
import Friends from '../assets/IMG_4002.jpg'
import Nature from '../assets/IMG_4003.jpg'

export const AboutMe = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[100px] transition-all duration-500' style={{gap: '1rem'}}>
        <div className='flex justify-center'>
            <div 
            className={`w-[250px] px-2 pt-2 pb-8 h-fit bg-white rounded-sm -rotate-12 shadow-md transition-all duration-500 hover:w-[280px] hover:-rotate-[20deg] hover:z-10`}>
                <img className="rounded-sm" src={Nature} alt="" />
                <p className='text-[#000]'>I ❤️ Nature, and take walks to relaxing myself.</p>
            </div>

            <div 
            className={`w-[250px] px-2 pt-2 pb-8 h-fit bg-white rounded-sm rotate-12 shadow-xl transition-all duration-500 hover:w-[280px] hover:rotate-[24deg] hover:z-10`}>
                <img className="rounded-sm" src={Cook} alt="" />
                <p className='text-[#000] w-[240px]'>Cooking make feel that I have the control👨🏻‍🍳.</p>
            </div>

            <div 
            className={`w-[250px] px-2 pt-2 pb-8 h-fit bg-white rounded-sm -rotate-12 shadow-xl transition-all duration-500 hover:w-[280px] hover:-rotate-[24deg] hover:z-10`}>
                <img className="rounded-sm" src={Gym} alt="" />
                <p className='text-[#000]'>Gym💪🏼.</p>
            </div>

            <div 
            className={`w-[250px] px-2 pt-2 pb-8 h-fit bg-white rounded-sm rotate-12 shadow-2xl transition-all duration-500 hover:w-[280px] hover:rotate-[25deg] hover:z-10`}>
                <img className="rounded-sm" src={Friends} alt="" />
                <p className='text-[#000] w-[230px]'>Having friend has made me learn a lot🧍🏻‍♂️🧍🏻‍♂️🧍🏻‍♂️🧍🏻‍♂️.</p>
            </div>
        </div>
        <button className='border-2 border-[#5b21b6] rounded-md w-28 h-8 hover:bg-[#5b21b6] transition duration-400'>See More</button>
    </div>
  )
}
