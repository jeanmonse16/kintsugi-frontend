import { useEffect, useRef } from 'react'
import { useIntersectionObserver } from "../../../Hooks/useIntersectionObserver"
import { BsCaretRightFill } from 'react-icons/bs'

export const RoadmapItem = ({ title, content, last = null }) => {
    const ref = useRef(null)
    const [ isVisible, setObserver ] = useIntersectionObserver({
        threshold: 0.8
    })

    useEffect(() => {
        setObserver(ref.current)
    }, [])

    return (
        <div ref={ref}>
            <span className={` ${isVisible ? 'visible animate__animated animate__fadeInUp' : 'invisible'} flex items-center my-4 `}><BsCaretRightFill className='shrink-0 mr-2 mt-1 text-[#ffdc3a] text-2xl'/>
                <h3 className='text-lg xs:text-xl md:text-2xl font-[Audiowide] uppercase'>{ title }</h3>
            </span>
            <p className={` ${isVisible ? 'visible animate__animated animate__fadeInUp' : 'invisible'} ${last ? 'pb-0' : 'pb-4'} ml-2 pl-12 border-l-4 border-dashed border-[#ffdc3a] `}>{ content }</p>
        </div>
        
    )
}