import useFormData, { PersonalErrors } from "../stores/FormData";

const BottomNav = () => {
    const [
        currentStep,
        increment,
        decrement,
        personal,
        updatePersonalErrors,
        submitted,
        submitForm,
    ] = useFormData((state) => [
        state.currentStep,
        state.increment,
        state.decrement,
        state.personal,
        state.updatePersonalErrors,
        state.submitted,
        state.submitForm,
    ]);

    const validateThenIncrement = () => {
        const { name, email, phone } = personal;

        const fields = [
            { key: "name", value: name },
            { key: "email", value: email },
            { key: "phone", value: phone },
        ];
        let errorCount = 0;
        fields.forEach((field) => {
            const { key, value } = field;

            if (value.trim() == "") {
                updatePersonalErrors(
                    key as keyof PersonalErrors,
                    "This field is required"
                );
                errorCount++;
            } else if (key == "email") {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                console.log("TESTING EMAIL", emailPattern.test(value));
                if (!emailPattern.test(value)) {
                    updatePersonalErrors("email", "Email is invalid!");
                    errorCount++;
                } else {
                    updatePersonalErrors(key as keyof PersonalErrors, "");
                }
            } else {
                updatePersonalErrors(key as keyof PersonalErrors, "");
            }
        });

        if (!errorCount) {
            increment();
        }
    };

    if (submitted) {
        return null;
    }
    return (
        <div className='bg-white absolute bottom-0 left-0 w-full p-4 flex justify-between'>
            <div>
                {currentStep > 0 && (
                    <button
                        onClick={decrement}
                        className='px-4 py-2 font-bold text-coolGray hover:text-marine transition'>
                        Go Back
                    </button>
                )}
            </div>
            {currentStep == 3 ? (
                <button className='btn' onClick={submitForm}>
                    Confirm
                </button>
            ) : (
                <button onClick={validateThenIncrement} className='btn'>
                    Next Step
                </button>
            )}
        </div>
    );
};

export default BottomNav;
