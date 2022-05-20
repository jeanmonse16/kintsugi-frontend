import { useRef, useEffect, useState } from 'react'
import { useIntersectionObserver } from "../../../Hooks/useIntersectionObserver"
import { BsCaretRightFill } from 'react-icons/bs'
import { BsCaretLeftFill } from 'react-icons/bs'
import { TeamCard } from '../TeamCard'

export const Team = () => {
    const [ scroll, setScroll ] = useState({ item: null, current: 0, max: null, onScreen: 0 })
    const [ isVisible, setObserver ] = useIntersectionObserver({
        threshold: 0.3
    })
    const refScroll = useRef(null)
    const ref = useRef(null)

    useEffect(() => {

        const handleScrollMax = () => {
            const itemWidth = refScroll.current.firstElementChild.clientWidth
            refScroll.current.scrollLeft = 0

            if ( window.innerWidth >= 1280 ) {
                setScroll({...scroll, item: itemWidth, max: itemWidth * 3})
            } else if ( window.innerWidth >= 1024 ) {
                setScroll({...scroll, item: itemWidth, max: itemWidth * 4})
            } else if ( window.innerWidth >= 640 ) {
                setScroll({...scroll, item: itemWidth, max: itemWidth * 6})
            } else {
                setScroll({...scroll, item: itemWidth, max: itemWidth * 7})
            }
        }

        handleScrollMax()

        window.addEventListener('resize', handleScrollMax)
        setObserver(ref.current)
        
        return () => {
            window.removeEventListener("resize", handleScrollMax)
        }
    }, [])

    const handleOnClick = (type) => {
        if(type === 'left') {
            refScroll.current.scrollLeft -= scroll.item
            setScroll({...scroll, current: scroll.current -= scroll.item })
        } else {
            refScroll.current.scrollLeft += scroll.item
            setScroll({...scroll, current: scroll.current += scroll.item })
        }
    }

    return (
        <div id='Team' ref={ref} className="container mx-auto p-4">
            <h2 className={`${isVisible ? 'visible animate__animated animate__fadeInUp' : 'invisible'} mb-8 text-3xl md:text-4xl font-[Audiowide] uppercase text-white text-center `}><span className="text-[#ffdc3a]">kintsugi</span> Team</h2>
            <div className={`${isVisible ? 'visible animate__animated animate__fadeIn' : 'invisible'} flex items-center `}>
                <button className={scroll.current === 0 ? 'opacity-25' : ''} disabled={ scroll.current === 0 && true } onClick={() => handleOnClick('left')}>
                    <BsCaretLeftFill className='text-[#ffdc3a] text-4xl' />
                </button>
                <div ref={refScroll} className="flex w-full overflow-x-scroll scroll-smooth snap-x sm:snap-none scrollbar-hide border-x-2 border-x-[#ffdc3a]">
                    <TeamCard 
                        image='logo.jpeg'
                        link='#'
                        name='Samu'
                        ocupation='Founder'
                    />
                    <TeamCard 
                        image='logo.jpeg'
                        link='#'
                        name='Carlos'
                        ocupation='Founder'
                    />
                    <TeamCard 
                        image='logo.jpeg'
                        link='#'
                        name='Diego'
                        ocupation='Founder'
                    />
                    <TeamCard 
                        image='logo.jpeg'
                        link='#'
                        name='Rafa'
                        ocupation='Art Director'
                    />
                    <TeamCard 
                        image='logo.jpeg'
                        link='#'
                        name='Chris'
                        ocupation='Artist'
                    />
                    <TeamCard 
                        image='logo.jpeg'
                        link='#'
                        name='Maria Elisa'
                        ocupation='Marketing'
                    />
                    <TeamCard 
                        image='logo.jpeg'
                        link='#'
                        name='Jeanpier'
                        ocupation='Informatic'
                    />
                    <TeamCard 
                        image='logo.jpeg'
                        link='#'
                        name='Will'
                        ocupation='Informatic'
                    />
                </div>
                <button className={scroll.current === scroll.max ? 'opacity-25' : ''} disabled={ scroll.current === scroll.max && true } onClick={() => handleOnClick('right')}>
                    <BsCaretRightFill className='text-[#ffdc3a] text-4xl' />
                </button>
            </div>
        </div>
    )
}