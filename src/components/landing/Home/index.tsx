import { Header } from "../Header"
import { Hero } from '../Hero'

export const Home = () => {
    return (
        <div id='Home' className="relative flex flex-col">
            <Header />
            <Hero />
        </div>
    )
}