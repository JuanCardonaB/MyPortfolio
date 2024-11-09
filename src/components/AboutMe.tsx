import { useTranslation } from 'react-i18next'
import Cook from '../assets/IMG_4000.jpg'
import Gym from '../assets/IMG_4001.jpg'
import Friends from '../assets/IMG_4002.jpg'
import Nature from '../assets/IMG_4003.jpg'
import GoogleFontLoader from 'react-google-font-loader'

export const AboutMe = () => {
    const { t } = useTranslation('global')
    return (
        <div className='flex flex-col justify-center items-center mt-[150px] transition-all duration-500' style={{ gap: '1rem' }}>
            <GoogleFontLoader fonts={[{ font: 'Shrikhand', weights: [400, 700] }]} />

            <div className='flex gap-3'>
            <h1 style={{ fontFamily: 'Shrikhand, sans-serif' }} className='text-[#5b21b6] text-[45px] sm:text-[50px] font-bold mb-[50px]'>{t('AboutMe.titleAbout')}</h1>
            <h1 style={{ fontFamily: 'Shrikhand, sans-serif' }} className='text-white text-[45px] sm:text-[50px] font-bold mb-[50px]'>{t('AboutMe.titleMe')} 🙋🏻‍♂️</h1>
            </div>

            <div className='grid grid-cols-1 custom-sm:grid-cols-2 gap-4 custom-lg:flex md:justify-center'>
                <div
                    style={{ transitionDelay: '100ms' }}
                    className={`
                    w-[250px]
                    px-2 
                    pt-2 
                    pb-8 
                    h-fit
                    bg-white 
                    rounded-sm 
                    custom-lg:-rotate-12 
                    shadow-md 
                    transition-all 
                    duration-500 
                    custom-lg:hover:w-[280px] 
                    custom-lg:hover:-rotate-[20deg]`}>
                    <img className="rounded-sm" src={Nature} alt="" />
                    <p className='text-[#000]'>{t('AboutMe.Nature')}</p>
                </div>

                <div
                    style={{ transitionDelay: '100ms' }}
                    className={`
                    w-[250px] 
                    px-2 
                    pt-2 
                    pb-8 
                    h-fit 
                    bg-white 
                    rounded-sm 
                    custom-lg:rotate-12 
                    shadow-xl 
                    transition-all 
                    duration-500 
                    custom-lg:hover:w-[280px] 
                    custom-lg:hover:rotate-[24deg]`}>
                    <img className="rounded-sm" src={Cook} alt="" />
                    <p className='text-[#000] w-[240px]'>{t('AboutMe.Cook')}</p>
                </div>

                <div
                    style={{ transitionDelay: '100ms' }}
                    className={`
                    w-[250px] 
                    px-2 
                    pt-2 
                    pb-8 
                    h-fit 
                    bg-white 
                    rounded-sm 
                    custom-lg:-rotate-12 
                    shadow-xl
                    transition-all 
                    duration-500 
                    custom-lg:hover:w-[280px] 
                    custom-lg:hover:-rotate-[24deg]`}>
                    <img className="rounded-sm" src={Gym} alt="" />
                    <p className='text-[#000]'>{t('AboutMe.Gym')}</p>
                </div>

                <div
                    style={{ transitionDelay: '100ms' }}
                    className={`
                    w-[250px] 
                    px-2 
                    pt-2 
                    pb-8 
                    h-fit 
                    bg-white 
                    rounded-sm 
                    custom-lg:rotate-12 
                    shadow-2xl 
                    transition-all 
                    duration-500 
                    custom-lg:hover:w-[280px] 
                    custom-lg:hover:rotate-[25deg]`}>
                    <img className="rounded-sm" src={Friends} alt="" />
                    <p className='text-[#000] w-[230px]'>{t('AboutMe.Friends')}</p>
                </div>
            </div>
        </div>
    )
}
