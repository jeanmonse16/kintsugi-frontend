import { useState, useEffect, useRef } from 'react'
import { useIntersectionObserver } from "../../../Hooks/useIntersectionObserver"
import RoadmapBorder from '../../../assets/images/roadmap-border.png'
import RoadmapBorderMobile from '../../../assets/images/roadmap-border-mobile.png'

export const RoadmapCard = ({ children, title }) => {
    const [ matches, setMatches ] = useState(
        window.matchMedia('(min-width: 375px)').matches
    )
    const [ isVisible, setObserver ] = useIntersectionObserver({
        threshold: 0.1
    })
    const ref = useRef(null)

    useEffect(() => {
        window.matchMedia('(min-width: 375px)').addEventListener('change', e => {
            setMatches(e.matches)
        })
        setObserver(ref.current)
    }, [])

    return (
        <div ref={ref} className={` ${isVisible ? 'visible animate__animated animate__fadeIn' : 'invisible'} relative `}>
            <div className='absolute top-[-15px] left-1/2 flex items-center justify-center w-32 translate-x-[-50%] bg-[#393110] before:absolute before:block before:top-[-8px] before:w-full before:border-[#393110] before:border-b-8 before:border-x-8 before:border-x-transparent after:absolute after:block after:bottom-[-8px] after:w-full after:border-[#393110] after:border-t-8 after:border-x-8 after:border-x-transparent'>
                <span className='absolute top-[-10px] w-10/12 h-[1px] bg-[#ffdc3a]'></span>
                <span className='absolute bottom-[-10px] w-10/12 h-[1px] bg-[#ffdc3a]'></span>
                <span className='text-[#ffdc3a] uppercase font-[Audiowide] font-bold'>{ title }</span>
            </div>  
            {
                matches ? <img className='w-full max-w-[425px]' src={RoadmapBorder} /> :
                (<img className='w-full h-full max-w-[425px]' src={RoadmapBorderMobile} />)

            }
            <article className='absolute top-0 flex flex-col justify-center items-center h-full w-full px-8 text-sm xs:text-base text-left '>
                { children }
            </article>
        </div>
    )
}