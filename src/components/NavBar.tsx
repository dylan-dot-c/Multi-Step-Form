import useFormData from "../stores/FormData";

type Props = {
    steps: {
        title: string;
        step: JSX.Element;
    }[];
};
const NavBar = ({ steps }: Props) => {
    const [currentStep] = useFormData((state) => [state.currentStep]);

    return (
        <div className=' flex gap-4 py-8 justify-center text-current md:flex-col md:bg-[url("/bg-sidebar-desktop.svg")] md:h-full bg-cover md:w-[244px] md:p-6 md:gap-5 md:justify-start md:bg-no-repeat md:rounded-lg'>
            {steps.map((_, index) => {
                return (
                    <div className='flex gap-4 items-center' key={index}>
                        <div
                            key={index}
                            // uncomment to allow navigation by indication, faster when testing
                            // not recommended for production
                            // onClick={() => goto(index)
                            // }
                            className={`p-4 rounded-full border border-white flex items-center justify-center w-10 h-10 ${
                                currentStep == index
                                    ? "bg-lightBlue font-bold text-black"
                                    : "text-white"
                            }`}>
                            {index + 1}
                        </div>
                        <div className='hidden md:flex md:flex-col md:gap'>
                            <span className='text-lightBlue font-light text-xs uppercase'>
                                STEP {index + 1}
                            </span>
                            <span className='text-alabaster font-medium'>
                                {steps[index].title}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default NavBar;
