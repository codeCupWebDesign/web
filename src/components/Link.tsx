import CardService from './CardService';

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
        <li className="w-full lg:w-auto h-10 lg:h-9 px-4 hover:border-b-2 hover:border-white cursor-pointer">
            <a
                className="w-full h-full flex justify-center items-center font-medium capitalize"
                href="#"
            >
                <span aria-hidden="true">{title}</span>
            </a>
        </li>
    );
};

export default Link;
