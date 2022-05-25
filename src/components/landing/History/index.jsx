import { useEffect, useRef } from 'react'
import { useIntersectionObserver } from "../../../Hooks/useIntersectionObserver"

export const History = () => {
    const ref = useRef(null)
    const [ isVisible, setObserver ] = useIntersectionObserver({
        threshold: 0.4
    })

    useEffect(() => {
        setObserver(ref.current)
    }, [])

    return (
        <div id='History' ref={ref} className="container mx-auto p-4">
            <div className='mx-auto text-center text-white'>
                <div className='flex flex-col md:flex-row gap-8 p-4 md:p-0'>
                    <div className='flex flex-col justify-center flex-1 text-center md:order-last'>
                        <h2 className={`${isVisible ? 'visible animate__animated animate__fadeInUp' : 'invisible'} mb-8 text-3xl md:text-4xl font-[Audiowide] uppercase `}><span className="text-[#ffdc3a]">Kinkuni</span> City</h2>
                        <p className={`${isVisible ? 'visible animate__animated animate__fadeInUp' : 'invisible'} text-lg `} style={{ animationDelay: '0.25s' }}>Kinkuni is a city with a humble Japanese culture, where the whole plot happens. They are ruled by an authoritarian government Which everybody seems to be happy with.</p>
                        <p className={`${isVisible ? 'visible animate__animated animate__fadeInUp' : 'invisible'} text-lg `} style={{ animationDelay: '0.5s' }}>However, there is a group of people who won't settle for this lifestyle they are called the resistance.</p>
                    </div>
                    <picture className='flex-1 md:order-first'>
                        <img className={`${isVisible ? 'visible animate__animated animate__fadeInUp' : 'invisible'} mx-auto `} style={{ animationDelay: '0.5s' }} src={`${__ASSETS_URL__}city.png`} />
                    </picture>
                </div>
            </div>
        </div>
    )
}