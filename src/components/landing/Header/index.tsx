import { useState } from 'react'
import { Menu } from '../Menu'
import { MenuItem } from '../MenuItem'
import { FaBars } from 'react-icons/fa'
import { BsXLg } from 'react-icons/bs'


export const Header = () => {
    const [ toggleMenu, setToggleMenu ] = useState(null)

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <header className="w-full p-4 flex justify-end">
            {
                !toggleMenu 
                    ? (<FaBars className='relative z-20 text-[#ffdc3a] text-3xl cursor-pointer animate__animated animate__faster animate__rotateIn' onClick={handleToggleMenu} />)
                    : (<BsXLg className='relative my-[5px] z-20 text-[#ffdc3a] text-xl cursor-pointer animate__animated animate__faster animate__rotateIn' onClick={handleToggleMenu} />)
            }

            {
                toggleMenu !== null &&
                    (
                        <Menu toggleMenu={toggleMenu}>
                            <MenuItem title='Home' />
                            <MenuItem title='About' />
                            <MenuItem title='History' />
                            <MenuItem title='Roadmap' />
                            <MenuItem title='Rarity' />
                            <MenuItem title='Team' />
                        </Menu>
                    )
            }

        </header>
    )
}