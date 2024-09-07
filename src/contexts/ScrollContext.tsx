import { createContext, ReactNode, useEffect, useState } from "react";

interface ScrollContextProps {
    scrollValue: number;
    setScrollValue: (value: number) => void;
}

export const ScrollContext = createContext({} as ScrollContextProps);

export const ScrollProvider = ({ children }: { children: ReactNode}) => {
    const [scrollValue, setScrollValue] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollValue(window.scrollY) // Ajusta el divisor para cambiar la sensibilidad
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <ScrollContext.Provider value={{scrollValue, setScrollValue}}>
            {children}
        </ScrollContext.Provider>
    )
}