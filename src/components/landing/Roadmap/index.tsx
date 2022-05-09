import { useEffect, useRef } from 'react'
import { useIntersectionObserver } from "../../../Hooks/useIntersectionObserver"
import { RoadmapCard } from '../RoadmapCard'
import { RoadmapItem } from '../RoadmapItem'

export const Roadmap = () => {
    const ref = useRef(null)
    const [ isVisible, setObserver ] = useIntersectionObserver({
        threshold: 0.8
    })

    useEffect(() => {
        setObserver(ref.current)
    }, [])

    return (
        <div className='text-center text-white'>
            <h2 ref={ref} className={` ${isVisible ? 'visible animate__animated animate__fadeIn' : 'invisible'} mb-8 text-3xl md:text-4xl font-[Audiowide] uppercase `}><span className="text-[#ffdc3a]">kintsugi</span> Roadmap</h2>
            <div className='flex flex-col gap-12 items-center lg:justify-evenly lg:flex-row p-4'>
                <RoadmapCard title='Phase_1'>
                    <RoadmapItem title='Kintsugi commnity' content='First is our community, you are essential for us. We want to give you a space to enjoy, vote and fell privileged.' />
                    <RoadmapItem title='Easter eggs or riddles' content='There will be many rewards to people who solve or find some easter eggs. They can be everywhere. So keep your eyes open!' />
                    <RoadmapItem title='Giveaways and collabs' content='We want to give you opportunities to win, so there will be a lot of giveaways and chances with our collabs.' />
                    <RoadmapItem title='Journey begins' content='Minting day, the moment that everything start.' last />
                </RoadmapCard>
                <RoadmapCard title='Phase_2'>
                    <RoadmapItem title='Holder benefits' content='We want to give to holders voice and vote about future decisions of the project. Holders will have access to an exclusive chat in discord. there will be more utilities for holders to be determined.' />
                    <RoadmapItem title='Comic book our video teaser (chapter 1)' content='Kintsugi is more than just a collection, it is a history and we want you to enjoy it. the Holders will decide if it till be a comic book or a video teaser. We eant to hear you and you.' />
                    <RoadmapItem title='Merch' content='Streetwear, collectibles and much more.' />
                    <RoadmapItem title='Kintsugi will continue' content='Coming soon...' last />
                </RoadmapCard>
            </div>
        </div>
    )
}