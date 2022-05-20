import { useEffect, useRef } from 'react'
import { useIntersectionObserver } from "../../../Hooks/useIntersectionObserver"
import { RarityItem } from "../RarityItem"

export const Rarity = () => {
    const ref = useRef(null)
    const [ isVisible, setObserver ] = useIntersectionObserver({
        threshold: 0.8
    })

    useEffect(() => {
        setObserver(ref.current)
    }, [])

    return (
        <div id='Rarity' className="container mx-auto">
            <h2 ref={ref} className={`${isVisible ? 'visible animate__animated animate__fadeInUp' : 'invisible'} mb-8 text-3xl md:text-4xl font-[Audiowide] uppercase text-white text-center`}><span className="text-[#ffdc3a]">kintsugi</span> rarity</h2>
            <div className="grid grid-cols-[auto_min-content] gap-x-4 gap-y-8 md:gap-y-16 md:gap-x-8 md:grid-rows-[min-content] md:grid-cols-[auto_min-content_auto_min-content] lg:grid-cols-4 p-4">
                <RarityItem 
                    number='01'
                    name='Citizen'
                    img={`${__ASSETS_URL__}citizen.png`}
                    description='Broken humans with golden scars. Being born blessed with the golden Scar, these men and women have been promised a good life within the Walls of Kinkuni city but having the favor of the god can be a tricky thing. Not everything is what it seems.'
                />
                <RarityItem 
                    number='02'
                    name='Humanoids'
                    img={`${__ASSETS_URL__}humanoids.png`}
                    description='These parts give you upgrades. People remade by radiation, born twisted with fragments of different beasts, who were very close at the time of the explosion, the usefulness of their abilities is the only thing that prevents them from being cleansed of the perfect image that the Celestials have for the world.'
                />
                <RarityItem 
                    number='03'
                    name='Commanders'
                    img={`${__ASSETS_URL__}commanders.png`}
                    description='The heads of the military arm of the celestials. Zealots who rose from the depths of their ranks slashing and burning everything that stood in the way of their masters and being well rewarded for it.'
                />
                <RarityItem 
                    number='04'
                    name='Celestials'
                    img={`${__ASSETS_URL__}celestials.png`}
                    description='Divine entities that have taken physical form in our universe. do not let their beauty deceive you, they could do whatever they wanted  with a flick of their fingers'
                />
            </div>
        </div>
    )
}