export const Header = () => {
    return (
        <header className="p-4 h-[5.5rem] flex items-center">
            <img className="w-14 rounded-full" src={__ASSETS_URL__ + 'logo.jpeg'} alt="Kintsugi logo" />
            <img className="ml-4 w-32" src={__ASSETS_URL__ + 'logo-letters.png'} alt="Kintsugi logo letters" />
        </header>       
    )
}