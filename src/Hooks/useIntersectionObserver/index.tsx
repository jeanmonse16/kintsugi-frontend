import { useRef, useEffect, useState } from 'react'

export const useIntersectionObserver = ({ threshold }) => {
    const [ isVisible, setIsVisible ] = useState(false)

    const options = {
        threshold,
    }

    const observer = new IntersectionObserver(e => {
        if ( e[0].isIntersecting ) {
            setIsVisible(true)
            observer.disconnect()
        }
    }, options)

    const setObserver = (refCurrent) => {
        observer.observe(refCurrent)
    }

    return [ isVisible, setObserver ]
}