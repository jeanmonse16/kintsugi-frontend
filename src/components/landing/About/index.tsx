import { useEffect, useRef } from 'react'
import { useIntersectionObserver } from "../../../Hooks/useIntersectionObserver"

export const About = () => {
    const ref = useRef(null)
    const [ isVisible, setObserver ] = useIntersectionObserver({
        threshold: 0.75
    });

    useEffect(() => {
        setObserver(ref.current)
    }, [])

    return (
        <div ref={ref} id='About' className="container mx-auto flex flex-col p-4 md:p-0 items-center text-white text-center">
                <h2 className={`${isVisible ? 'visible animate__animated animate__fadeInUp' : 'invisible'} mb-8 text-3xl md:text-4xl font-[Audiowide] uppercase `}>About <span className="text-[#ffdc3a]">kintsugi</span></h2>
                <article className="flex flex-col md:w-1/2 text-lg gap-4">
                    <p className={`${isVisible ? 'visible animate__animated animate__fadeInUp' : 'invisible'} `} style={{ animationDelay: '0.25s'}}>We are a unique collection of 8888 broken characters repaired with Kintsugi technique, which is the art of repairing broken things with gold dust. Every NFT gives you access to exclusive utility and benefits.</p> 
                    <p className={`${isVisible ? 'visible animate__animated animate__fadeInUp' : 'invisible'} `} style={{ animationDelay: '0.5s'}}>The Kintsugi are alive and they have feelings. They live inside a story that you are going to be part of. You will be immersed in an experience with a unique and original concept.</p> 
                    <p className={`${isVisible ? 'visible animate__animated animate__fadeInUp' : 'invisible'} `} style={{ animationDelay: '0.75s'}}>Enjoy the experience <span className="font-[Audiowide] text-[#ffdc3a]">kintsugi</span></p> 
                </article>
        </div>

    )
}