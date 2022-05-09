import { useState, useEffect, useRef } from 'react'
import { useIntersectionObserver } from '../../../Hooks/useIntersectionObserver'

export const Separator = () => {
    const [ matches, setMatches ] = useState(
        window.matchMedia('(max-width: 640px)').matches
    )
    const ref = useRef(null)
    const [ isVisible, setObserver ] = useIntersectionObserver({
        threshold: 1
    })

    useEffect(() => {
        window.matchMedia('(max-width: 640px)').addEventListener('change', e => {
            setMatches(e.matches)
        })
        setObserver(ref.current)
    }, [])

    return (
        <div ref={ref} className="min-h-[45px]">
            {
                isVisible &&
                    (
                        <div className='animate__animated animate__slower animate__fadeIn'>
                            {
                                matches ? 
                                    (
                                        <div className='relative bg-[url("/src/assets/images/separator-mobile-bars.png")] bg-contain animate-slide-mobile'>
                                            <img className='w-full' src={`${__ASSETS_URL__}separator-mobile.png`} />
                                        </div>
                                    )
                                :  (
                                        <div className='relative bg-[url("/src/assets/images/separator-desktop-bars.png")] bg-contain animate-slide-desktop'>
                                            <img className='w-full' src={`${__ASSETS_URL__}separator-desktop.png`} />
                                        </div>
                                    )
                            }
                        </div>
                    )
            }
        </div>

    )
}