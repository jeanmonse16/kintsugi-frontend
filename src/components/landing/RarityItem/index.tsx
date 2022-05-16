import { useEffect, useRef } from "react"
import { useIntersectionObserver } from "../../../Hooks/useIntersectionObserver"

export const RarityItem = ({ number, name, img, description = null }) => {
    const ref = useRef(null)
    const [ isVisible, setObserver ] = useIntersectionObserver({
        threshold: 1
    })

    useEffect(() => {
        setObserver(ref.current)
    }, [])

    return (
        <>
            <div ref={ref} className="max-w-[200px] min-h-[100px] justify-self-center self-center">
                {
                    isVisible && (
                        <>
                            <img className="animate__animated animate__slow animate__fadeIn" src={img} />
                            <div className="relative">
                                <span className="animate-grow-width absolute top-0 left-1/2 translate-x-[-50%] block mx-auto w-full h-1 bg-[#393110]"></span>
                                <span className="animate-move-left absolute w-1/3 border-t-8 border-t-[#ffdc3a] border-r-transparent border-r-8"></span>
                                <span className="animate-move-right absolute right-0 w-1/3 border-b-8 border-b-[#ffdc3a] border-l-transparent border-l-8"></span>
                            </div>
                        </>
                    )
                }
            </div>
            <div className="justify-self-center">
                {
                    isVisible && (
                        <>
                                <div className="flex w-full font-[Audiowide] text-lg md:text-2xl">
                                <span className="animate__animated animate__fadeIn relative flex justify-center px-4 block w-6 md:w-12 h-full bg-[#ffdc3a] text-[#393110] after:absolute after:bottom-0 after:left-0 after:w-16 after:md:w-24 after:h-0.5 after:bg-[#ffdc3a] z-10">
                                    { number }
                                </span>
                                <span className="animate-grow-width relative px-2 w-full text-center bg-[#393110] text-white after:absolute after:left-full after:top-0 after:h-full after:w-0.5 after:bg-[#ffdc3a]">
                                    <span className="animate__animated animate__slow animate__fadeIn">
                                        { name }
                                    </span>
                                </span>
                            </div>
                            <div className="animate-grow-width relative mt-1 w-full border-r-4 border-r-transparent border-t-2 border-t-[#ffdc3a]">
                                <div className="absolute top-[6px] left-[-20px] rotate-[-45deg] w-6 border-r-2 border-r-transparent border-t-2 border-t-[#ffdc3a]">
                                    <span className="animate__animated animate__fadeIn absolute left-[-4px] top-[-4px] block w-2 h-2 rounded bg-[#ffdc3a]"></span>
                                </div>
                            </div>
                            <p className="animate__animated animate__fadeIn mt-1 text-white text-sm md:text-base text-center" style={{ animationDelay: "0.5s"}}>
                                { description }
                            </p>
                        </>
                    )
                }
            </div>
        </>
    )
}