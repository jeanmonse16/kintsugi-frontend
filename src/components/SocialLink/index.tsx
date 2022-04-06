export const SocialLink = ({ link, icon }) => {
    return (
        <a className="mx-4 text-3xl hover:text-[#c62f42] transition-colors duration-300" href={link}>
            { icon() }
        </a>
    )
}