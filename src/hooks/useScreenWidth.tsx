import { useEffect, useState } from "react"

export const useScreenWidth = () => {
    // State to hold the width of the screen
    const [width, setWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        // Function to handle the resize event
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            // Remove the event listener when the component is unmounted
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return {width}
}