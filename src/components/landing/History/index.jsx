import { useEffect, useRef } from 'react'
import { useIntersectionObserver } from "../../../Hooks/useIntersectionObserver"

export const History = () => {
    const ref = useRef(null)
    const [ isVisible, setObserver ] = useIntersectionObserver({
        threshold: 0.8
    })

    useEffect(() => {
        setObserver(ref.current)
    }, [])

    return (
        <div ref={ref} className="min-h-[200px]">
            {
                isVisible && 
                    (   
                        <div className='container mx-auto md:w-11/12 mx-auto text-center text-white'>
                            <div className='flex flex-col md:flex-row gap-8 p-4'>
                                <div className='flex flex-col justify-center flex-1 text-center md:order-last'>
                                    <h2 className='animate__animated animate__fadeInUp mb-8 text-3xl md:text-4xl font-[Audiowide] uppercase'><span className="text-[#ffdc3a]">kintsugi</span> City</h2>
                                    <h3 className='animate__animated animate__fadeInUp mb-2 text-xl md:text-2xl font-[Audiowide] uppercase' style={{ animationDelay: '0.25s' }}><span className='text-[#ffdc3a]'>-</span> Kinkuni City <span className='text-[#ffdc3a]'>-</span></h3>
                                    <p className='animate__animated animate__fadeInUp text-lg' style={{ animationDelay: '0.50s' }}>Kinkuni is a city with a humble Japanese culture, where the whole plot happens. Everyone looks happy and complies with the rules.</p>
                                </div>
                                <picture className='flex-1 md:order-first'>
                                    <img className='mx-auto animate__animated animate__fadeInUp' style={{ animationDelay: '0.75s' }} src={`${__ASSETS_URL__}city.png`} />
                                </picture>
                            </div>
                        </div>
                    )
            }

        </div>
    )
}