import MenuBg from '../../../assets/images/menu-bg.png'

export const Menu = ({ children, toggleMenu }) => {
    console.log(toggleMenu)
    
    return (
        <nav className={`absolute right-0 top-0 h-full lg:h-fit text-black z-10 animate__animated animate__faster ${toggleMenu ? 'animate__fadeInRight' : 'animate__fadeOutRight'}`}>
            <img  className='h-full lg:w-72 select-none' src={MenuBg} />
            <ul className='absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] grid gap-4 lg:gap-10 text-base'>
                { children }
            </ul>
        </nav>
    )
}