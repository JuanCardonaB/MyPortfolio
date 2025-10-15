import { createContext, ReactNode, useEffect, useState } from "react";

// We create the context with the default values, and their types
interface ScrollContextProps {
    scrollValue: number;
    setScrollValue: (value: number) => void;
    opacity: number;
}

// We create the context with the default values, and their types
export const ScrollContext = createContext({} as ScrollContextProps);

// We create the provider that will be used in the main file
export const ScrollProvider = ({ children }: { children: ReactNode}) => {
    const [scrollValue, setScrollValue] = useState(0)
    const [opacity, setOpacity] = useState(0)

    // We create a listener that will update the scrollValue each time the user scrolls
    useEffect(() => {
        const handleScroll = () => {
            setScrollValue(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        // opacity has a value between 0 and 1, so we divide the scrollValue by 100
        setOpacity(Number((scrollValue / 100).toFixed(1)))
    }, [scrollValue])

    return(
        <ScrollContext.Provider value={{scrollValue, setScrollValue, opacity}}>
            {children}
        </ScrollContext.Provider>
    )
}