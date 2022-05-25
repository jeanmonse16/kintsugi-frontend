import { useRef, useEffect } from 'react'
import { useIntersectionObserver } from "../../../Hooks/useIntersectionObserver"
import { FaTwitter } from "react-icons/fa";

export const TeamCard = ({ image, name, ocupation, link }) => {
    const [ isVisible, setObserver ] = useIntersectionObserver({
        threshold: 0.2
    })
    const ref = useRef(null)

    useEffect(() => {
        setObserver(ref.current)
    }, [])

    return (
        <div ref={ref} className="min-w-full h-[324px] sm:min-w-[50%] lg:min-w-[25%] xl:min-w-[20%] flex flex-col items-center mx-auto snap-center overflow-x-hidden scrollbar-hide">
            {
                isVisible && 
                (
                    <>
                        <div className="relative">
                            <img className='animate__animated animate__fadeInBottomLeft' src={`${__ASSETS_URL__}team-card-bg-left.png`} />
                            <img className='absolute top-0 animate__animated animate__fadeInTopRight' src={`${__ASSETS_URL__}team-card-bg-right.png`} />
                            <img  className='animate__animated animate__fast animate__fadeIn absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] w-11/12 rounded-full' src={`${__ASSETS_URL__}${ image }`} />
                        </div>
                        <div className="relative mt-6 text-center">
                            <img className='animate__animated animate__fadeIn animate__slow' src={`${__ASSETS_URL__}team-name-border.png`} />
                            <div className='absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] w-fit text-white'>
                                    <span className='animate__animated animate__fadeInUp text-kintsugi-yellow font-[Audiowide] text-xl uppercase' style={{ animationDelay: '0.25s' }}>{ name }</span>
                                    <p className='animate__animated animate__fadeInUp font-[Audiowide] uppercase' style={{ animationDelay: '0.50s' }}>{ ocupation }</p>
                                    <a className='animate__animated animate__fadeInUp' style={{ animationDelay: '0.75s' }} href={link}>
                                        <FaTwitter className="text-xl mt-2 mx-auto" />
                                    </a>
                            </div>
                        </div>
                    </>
                )
            }

        </div>
    )
}