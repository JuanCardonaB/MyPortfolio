// import { useContext } from "react"
// import { ScrollContext } from "../contexts/ScrollContext"

// interface ImageCardProps {
//   image: string
//   left?: boolean
//   right?: boolean
// }

// export const ImageCard = ({image, left = false, right = false} : ImageCardProps) => {
//   const {scrollValue} = useContext(ScrollContext)
//   return (
//     <div className={`px-2 pt-2 pb-12 h-fit bg-white rounded-sm ${left ? '-rotate-12' : ''} ${right ? 'rotate-12' : ''}`}>
//         <img className="rounded-sm" width={250} src={image} alt="" />
//     </div>
//   )
// }
