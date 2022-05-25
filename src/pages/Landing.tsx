import { Home } from '../components/landing/Home'
import { About } from '../components/landing/About'
import { History } from '../components/landing/History'
import { Roadmap } from '../components/landing/Roadmap'
import { Characters } from '../components/landing/Characters'
import { Team } from '../components/landing/Team'
import { Footer } from '../components/landing/Footer'

export const Landing = () => {

    return (
        <div className="grid grid-rows-[100vh] gap-16 bg-[url('/src/assets/images/kintsugi-bg.png')] bg-contain animate-slide-bg">
            <Home />
            <About />
            <History />
            <Roadmap />
            <Characters />
            <Team />
            <Footer />
        </div>
    )
}