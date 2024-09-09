import { useContext } from 'react'
import GoogleFontLoader from 'react-google-font-loader'
import { ScrollContext } from '../contexts/ScrollContext'
import { useScreenWidth } from '../hooks/useScreenWidth'
import { useTranslation } from 'react-i18next'

export const Intro = () => {
    const { t } = useTranslation('global')
    // Get the scrollValue and opacity from the ScrollContext to animate the text
    const { scrollValue, opacity } = useContext(ScrollContext)
    // Get the width of the screen to clamp the scrollValue
    const { width } = useScreenWidth()

    // Clamp the scrollValue to a maximum of half the width of the screen
    const clampedScrollValue = Math.min(Math.max(scrollValue, 0), width / 2)

    return (
        <div style={{ marginRight: `${clampedScrollValue}px` }} className="flex w-full flex-col items-start sm:items-center">
            <GoogleFontLoader fonts={[{ font: 'Shrikhand', weights: [400, 700] }, { font: 'Jersey 15', weights: [400] }]} />

            <h1 style={{ fontFamily: 'Shrikhand, sans-serif', marginRight: width > 768 ? `${clampedScrollValue}px` : ''}} className="mt-6 text-[40px] sm:text-[60px] sm:mt-32 text-violet-800">
                {t('Intro.Hello')}
            </h1>
            <h1 style={{ fontFamily: 'Shrikhand, sans-serif', marginRight: `${-clampedScrollValue / 2}px` }} className="text-[60px] mt-[-20px] sm:mt-[-40px] sm:text-[100px]">
                {t('Intro.Name')}
            </h1>
            <h1 style={{ fontFamily: 'Shrikhand, sans-serif', marginRight: `${clampedScrollValue / 2}px` }} className="text-[60px] mt-[-30px] sm:mt-[-50px] sm:text-[100px] tracking-wider">
                {t('Intro.LastName')}
            </h1>
            <p style={{ fontFamily: 'Jersey 15, sans-seif', opacity: opacity }}>
                {t('Intro.Rol')}
            </p>

            <div style={{ opacity: opacity, marginLeft: `${clampedScrollValue / 2}px` }} className="flex gap-3 mt-8">   
                <button className="border-2 border-[#5b21b6] rounded-md w-28 h-8 hover:bg-[#5b21b6] transition duration-400">Git</button>
                <button className="border-2 border-[#5b21b6] rounded-md w-28 h-8 hover:bg-[#5b21b6] transition duration-400">Git</button>
            </div>
        </div>
    )
}
