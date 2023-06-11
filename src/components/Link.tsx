interface LinkProps {
    title: string;
}

export const SECTIONS = [
    { title: 'inicio' },
    { title: 'nosotros' },
    { title: 'servicios' },
    { title: 'equipo de trabajo' },
    { title: 'portafolio' },
    { title: 'contacto' },
];

const Link: React.FC<LinkProps> = ({ title }) => {
    return (
        <li className="w-full 2xl:w-auto h-14 2xl:h-9 px-9 hover:border-b-2 hover:border-white cursor-pointer">
            <a
                className="w-full h-full flex justify-center items-center font-bold capitalize"
                href="#"
            >
                <span className="text-white" aria-hidden="true">
                    {title}
                </span>
            </a>
        </li>
    );
};

export default Link;
