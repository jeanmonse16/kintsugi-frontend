import { useState } from 'react'
import { Menu } from '../Menu'
import { MenuItem } from '../MenuItem'
import { FaBars } from 'react-icons/fa'
import { BsXLg } from 'react-icons/bs'



export const Header = () => {
    const [ toggleMenu, setToggleMenu ] = useState(null)
    const [ isActive, setIsActive ] = useState('Home')

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    const handleOnClick = (title) => {
        setIsActive(title)
        setToggleMenu(!toggleMenu)
    }

    console.log(isActive)
    
    return (
        <header className="w-full p-4 flex justify-end">
            {
                !toggleMenu 
                    ? (<FaBars className='relative z-20 text-kintsugi-yellow text-3xl cursor-pointer animate__animated animate__faster animate__rotateIn' onClick={handleToggleMenu} />)
                    : (<BsXLg className='relative my-[5px] z-20 text-kintsugi-yellow text-xl cursor-pointer animate__animated animate__faster animate__rotateIn' onClick={handleToggleMenu} />)
            }

            {
                toggleMenu !== null &&
                    (
                        <Menu toggleMenu={toggleMenu}>
                            <MenuItem title='Home' onClick={() => handleOnClick('Home') } active={isActive === 'Home' ? true : false} />
                            <MenuItem title='About' onClick={() => handleOnClick('About') } active={isActive === 'About' ? true : false} />
                            <MenuItem title='History' onClick={() => handleOnClick('History') } active={isActive === 'History' ? true : false} />
                            <MenuItem title='Roadmap' onClick={() => handleOnClick('Roadmap') } active={isActive === 'Roadmap' ? true : false} />
                            <MenuItem title='Characters' onClick={() => handleOnClick('Characters') } active={isActive === 'Characters' ? true : false} />
                            <MenuItem title='Team' onClick={() => handleOnClick('Team') } active={isActive === 'Team' ? true : false} />
                        </Menu>
                    )
            }

        </header>
    )
}