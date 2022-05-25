import { Hero } from "../components/comingSoon/Hero"
import { Footer } from "../components/comingSoon/Footer"

export const ComingSoon = () => {
    
    return (
        <div className="relative h-screen grid grid-rows-[1fr_min-content] gap-4 z-30 bg-[url('/src/assets/images/kintsugi-bg.png')] bg-cover animate-slide-bg overflow-hidden">
            <Hero />
            <Footer />
        </div>
    )
}