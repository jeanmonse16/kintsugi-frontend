import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Footer } from "../components/Footer"

export const ComingSoon = () => {
    return (
        <div className="h-screen grid grid-rows-[min-content_1fr_min-content] gap-4">
            <Header />
            <Hero />
            <Footer />
        </div>
    )
}