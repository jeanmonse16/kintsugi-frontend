import { Header } from "../Header"
import { Hero } from '../Hero'

export const Home = () => {
    return (
        <div className="relative flex flex-col">
            <Header />
            <Hero />
        </div>
    )
}