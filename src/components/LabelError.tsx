import { PersonalErrors } from "../stores/FormData";

type Props = {
    name: keyof PersonalErrors;
    error: string;
    title: string;
};

const LabelError = ({ name, error, title }: Props) => {
    return (
        <div className='flex justify-between'>
            <label htmlFor={name} className='capitalize'>
                {title}
            </label>
            <span className='text-strawBerryred font-medium text-sm'>
                {error}
            </span>
        </div>
    );
};

export default LabelError;
