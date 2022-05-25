export const SocialLink = ({ link, icon }) => {
    return (
        <a className="mx-4 text-3xl text-white hover:text-kintsugi-yellow transition-colors duration-300" href={link}>
            { icon() }
        </a>
    )
}