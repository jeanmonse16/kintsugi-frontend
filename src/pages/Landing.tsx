import { Home } from '../components/landing/Home'
import { About } from '../components/landing/About'
import { Separator } from '../components/landing/Separator'
import { History } from '../components/landing/History'
import { Roadmap } from '../components/landing/Roadmap'

export const Landing = () => {


    return (
        <div className="grid grid-rows-[100vh] gap-16">
            <Home />
            <Separator />
            <About />
            <History />
            <Roadmap />
        </div>
    )
}