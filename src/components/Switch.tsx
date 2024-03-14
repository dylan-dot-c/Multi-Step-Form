type SwitchProps = {
    checked: boolean;
    toggle: () => void;
};

const Switch = ({ checked, toggle }: SwitchProps) => {
    return (
        <div className={`w-12 bg-marine  p-1 rounded-full`} onClick={toggle}>
            <div
                className={`rounded-full w-4 h-4 bg-white transition ${
                    checked && "translate-x-6"
                }`}></div>
        </div>
    );
};

export default Switch;
