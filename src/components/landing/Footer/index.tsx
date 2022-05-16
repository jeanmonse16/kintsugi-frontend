import { FaDiscord } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { SocialLink } from '../../SocialLink'

export const Footer = () => {
    return (
        <div className="container mx-auto text-center">
            <img className='w-60 mx-auto mb-6' src={` ${__ASSETS_URL__}logo-letters.png`} />
            <div className="flex justify-center mb-4">
                <SocialLink 
                    link="https://instagram.com/kintsuginft?utm_medium=copy_link"
                    icon={() => <BsInstagram />}
                />
                <SocialLink 
                    link="https://twitter.com/kintsuginft?s=11&t=-Hmo9i2gU_f1C2mPJtVE2A"
                    icon={() => <BsTwitter />}
                />
                <SocialLink 
                    link="https://discord.gg/SAkZpkdh"
                    icon={() => <FaDiscord />}
                />
            </div>
            <p className="text-xs text-white mb-4">Copyright © 2022 Kintsugi NFTs</p>
        </div>
    )
}