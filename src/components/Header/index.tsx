import Logo  from '../../assets/images/logo.jpeg'

export const Header = () => {
    return (
        <header className="p-4 h-[5.5rem] flex items-center">
            <img className="w-14 rounded-full" src={Logo} alt="Kintsugi logo" />
            <span className="ml-4 text-white text-xl font-semibold">Kintsugi NFTs</span>
        </header>       
    )
}