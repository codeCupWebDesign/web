type Deparment = 'design' | 'development' | 'marketing';

interface CardServiceProps {
    department: Deparment;
    description: string;
}

const CardService: React.FC<CardServiceProps> = ({
    department,
    description,
}) => {
    return (
        <div
            className={`${
                department === 'design'
                    ? 'bg-[#7646FF]'
                    : department === 'development'
                    ? 'bg-[#46EFFF]'
                    : department === 'marketing'
                    ? 'bg-[#EE46FF]'
                    : null
            } rounded-3xl max-w-[300px]`}
        >
            <div className="p-4">
                <h2 className="text-white capitalize text-3xl font-bold">
                    {department === 'design'
                        ? 'diseño'
                        : department === 'development'
                        ? 'development'
                        : department === 'marketing'
                        ? 'marketing'
                        : null}
                </h2>
                <h2
                    className={`${
                        department === 'design' || department === 'marketing'
                            ? 'text-[#46EFFF]'
                            : 'text-[#4F0072]'
                    } capitalize text-3xl font-bold`}
                >
                    {department === 'design' || department === 'development'
                        ? 'web'
                        : 'digital'}
                </h2>
                <div>
                    <p className="text-white">{description}</p>
                </div>
                <div className="mt-2">
                    <div className="flex justify-end">
                        <a
                            href="#"
                            className="text-white bg-[#4F0072] px-4 h-8 rounded-full flex items-center font-medium"
                        >
                            Ver más
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardService;
