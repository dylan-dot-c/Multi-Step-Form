import { PersonalErrors } from "../stores/FormData";

type Props = {
    name: keyof PersonalErrors;
    error: string;
};

const LabelError = ({ name, error }: Props) => {
    return (
        <div className='flex justify-between'>
            <label htmlFor={name} className='capitalize'>
                {name}
            </label>
            <span className='text-strawBerryred font-medium text-sm'>
                {error}
            </span>
        </div>
    );
};

export default LabelError;
