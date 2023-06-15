import CardService from './CardService';

const Services = () => {
    return (
        <>
            <div className="w-full auto-grid">
                <CardService
                    key="1"
                    department="design"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis deserunt perspiciatis, doloribus quaerat voluptates necessitatibus quibusdam eos voluptatibus, aut alias, et natus. Eveniet tenetur velit esse quia, eaque corrupti magni! Reiciendis deserunt perspiciatis, doloribus quaerat voluptates necessitatibus quibusdam eos voluptatibus, aut alias, et natus. sit amet, consectetur adipisicing elit. Reiciendis deserunt perspiciatis"
                />
                <CardService
                    key="2"
                    department="development"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis deserunt perspiciatis, doloribus quaerat voluptates necessitatibus quibusdam eos voluptatibus, aut alias, et natus. Eveniet tenetur velit esse quia, eaque corrupti magni! Reiciendis deserunt perspiciatis, doloribus quaerat voluptates necessitatibus quibusdam eos voluptatibus, aut alias, et natus. sit amet, consectetur adipisicing elit. Reiciendis deserunt perspiciatis"
                />
                <CardService
                    key="3"
                    department="marketing"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis deserunt perspiciatis, doloribus quaerat voluptates necessitatibus quibusdam eos voluptatibus, aut alias, et natus. Eveniet tenetur velit esse quia, eaque corrupti magni! Reiciendis deserunt perspiciatis, doloribus quaerat voluptates necessitatibus quibusdam eos voluptatibus, aut alias, et natus. sit amet, consectetur adipisicing elit. Reiciendis deserunt perspiciatis"
                />
            </div>
        </>
    );
};

export default Services;
