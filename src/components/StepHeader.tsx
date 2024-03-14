type StepHeaderProps = {
    title: string;
    description: string;
};

const StepHeader = ({ title, description }: StepHeaderProps) => {
    return (
        <div>
            <h2 className='text-2xl text-marine font-bold'>{title}</h2>
            <p className=' text-coolGray my-2 font-normal'>{description}</p>
        </div>
    );
};

export default StepHeader;
