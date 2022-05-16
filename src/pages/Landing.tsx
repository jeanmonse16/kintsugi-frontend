import { Home } from '../components/landing/Home'
import { About } from '../components/landing/About'
import { Separator } from '../components/landing/Separator'
import { History } from '../components/landing/History'
import { Roadmap } from '../components/landing/Roadmap'
import { Rarity } from '../components/landing/Rarity'
import { Team } from '../components/landing/Team'
import { Footer } from '../components/landing/Footer'

export const Landing = () => {

    return (
        <div className="grid grid-rows-[100vh] gap-16">
            <Home />
            <Separator />
            <About />
            <History />
            <Roadmap />
            <Rarity />
            <Team />
            <Footer />
        </div>
    )
}