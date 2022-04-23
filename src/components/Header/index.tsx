import Logo  from '../../assets/images/logo.jpeg'
import Letter from '../../assets/images/logo-letters.png'

export const Header = () => {
    return (
        <header className="p-4 h-[5.5rem] flex items-center">
            <img className="w-14 rounded-full" src={Logo} alt="Kintsugi logo" />
            <img className="ml-4 w-32" src={Letter} alt="Kintsugi logo letters" />
        </header>       
    )
}