import CardService from './CardService';

const Services = () => {
    return (
        <div className="grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3 gap-4 place-items-center">
            <CardService
                key="1"
                department="design"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis deserunt perspiciatis, doloribus quaerat voluptates necessitatibus quibusdam eos voluptatibus, aut alias, et natus. Eveniet tenetur velit esse quia, eaque corrupti magni!"
            />
            <CardService
                key="2"
                department="development"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis deserunt perspiciatis, doloribus quaerat voluptates necessitatibus quibusdam eos voluptatibus, aut alias, et natus. Eveniet tenetur velit esse quia, eaque corrupti magni!"
            />
            <CardService
                key="3"
                department="marketing"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis deserunt perspiciatis, doloribus quaerat voluptates necessitatibus quibusdam eos voluptatibus, aut alias, et natus. Eveniet tenetur velit esse quia, eaque corrupti magni!"
            />
        </div>
    );
};

export default Services;
