import { useContext, useEffect, useState } from 'react'
import GoogleFontLoader from 'react-google-font-loader'
import { ScrollContext } from '../contexts/ScrollContext'

export const Intro = () => {
    const {scrollValue} = useContext(ScrollContext)
    const [opacity, setOpacity] = useState(0)

    // each time the scrollValue changes, the opacity is updated
    useEffect(() => {
        // opacity has a value between 0 and 1, so we divide the scrollValue by 100
        setOpacity(Number((scrollValue / 100).toFixed(1)))
    }, [scrollValue])

    return (
        <div style={{ marginRight: `${scrollValue}px` }} className="flex w-full flex-col items-start sm:items-center">
            <GoogleFontLoader fonts={[{ font: 'Shrikhand', weights: [400, 700] }, {font: 'Jersey 15', weights: [400]}]} />

            <h1 style={{ fontFamily: 'Shrikhand, sans-serif', marginRight: `${scrollValue}px`, marginTop: 150 }} className="text-[40px] sm:text-[60px] text-violet-800">Hi I'm</h1>
            <h1 style={{ fontFamily: 'Shrikhand, sans-serif', marginRight: `${scrollValue / 2}px` }} className="text-[60px] mt-[-40px] sm:text-[100px] md:text-[100px]">Juan Jose</h1>
            <h1 style={{ fontFamily: 'Shrikhand, sans-serif', marginRight: `${scrollValue / 2}px` }} className="text-[60px] mt-[-50px] sm:text-[100px] md:text-[100px] tracking-wider">Cardona</h1>
            <p style={{ fontFamily: 'Jersey 15, sans-seif', opacity: opacity }}>Full Stack Software Developer</p>
        </div>
    )
}