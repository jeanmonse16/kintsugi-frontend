import { useState } from 'react'
import { BsCaretRight } from 'react-icons/bs'
import { BsCaretRightFill } from 'react-icons/bs'

export const MenuItem = ({ title, active = null, onClick }) => {
    const [ isHover, setIsHover ] = useState(false)

    const handleIsHover = () => {
            setIsHover(prevState => !prevState)
    }

    return (
        <li className='flex items-center font-["Audiowide"] font-bold text-[#ffdc3a] text-lg uppercase cursor-pointer hover:scale-125 transition-all' onMouseOver={handleIsHover} onMouseOut={handleIsHover}>
            {
                active || isHover
                    ? <BsCaretRightFill className='mr-4'/> 
                    : <BsCaretRight className='mr-4'/> 
            }
            <a href={`#${title}`} onClick={onClick}>{ title }</a>
        </li>
    )
}