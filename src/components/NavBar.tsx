import useFormData from "../stores/FormData";

type Props = {
    steps: JSX.Element[];
};
const NavBar = ({ steps }: Props) => {
    const [currentStep, goto] = useFormData((state) => [
        state.currentStep,
        state.goTo,
    ]);

    return (
        <div className=' flex justify-center gap-4 py-8 text-current '>
            {steps.map((_, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => goto(index)}
                        className={`p-4 rounded-full border border-white flex items-center justify-center w-10 h-10 ${
                            currentStep == index
                                ? "bg-lightBlue font-bold text-black"
                                : "text-white"
                        }`}>
                        {index + 1}
                    </div>
                );
            })}
        </div>
    );
};

export default NavBar;
