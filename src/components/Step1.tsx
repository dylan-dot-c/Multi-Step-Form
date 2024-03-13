import StepHeader from "./StepHeader";
import { useEffect } from "react";
import useFormData, { PersonalErrors } from "../stores/FormData";
import LabelError from "./LabelError";

const Step1 = () => {
    const [personal, updatePersonal, formErrors] = useFormData((state) => [
        state.personal,
        state.updatePersonal,
        state.personalErrors,
    ]);
    const { name, email, phone } = personal;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        updatePersonal(name, value);
    };

    useEffect(() => {
        return () => {
            console.log("Form Has been Submitted");
            console.log(personal);
        };
    }, []);

    const getErrors = (key: keyof PersonalErrors) => {
        if (formErrors[key]) {
            return "border-strawBerryred";
        }
    };
    return (
        <div>
            <StepHeader
                title='Personal Info'
                description='Please Provide your name, email address and phone number.'
            />

            <form className='space-y-4 pt-2'>
                <div className='field'>
                    <LabelError name='name' error={formErrors.name} />
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='e.g. Stephen King'
                        value={name}
                        onChange={onChange}
                        className={`${
                            formErrors.name && "border-strawBerryred"
                        }`}
                    />
                </div>
                <div className='field'>
                    <LabelError name='email' error={formErrors.email} />
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='e.g. stephenking@lorem.com'
                        value={email}
                        onChange={onChange}
                        className={getErrors("email")}
                    />
                </div>

                <div className='field'>
                    <LabelError name='phone' error={formErrors.phone} />{" "}
                    <input
                        type='phone'
                        name='phone'
                        placeholder='e.g. +1 234 567 890'
                        id='phone'
                        value={phone}
                        onChange={onChange}
                        className={getErrors("phone")}
                    />
                </div>
            </form>
        </div>
    );
};

export default Step1;
