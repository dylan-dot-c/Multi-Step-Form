import StepHeader from "./StepHeader";

import Constants from "../lib/constants";
import useFormData, { AddonsKeys } from "../stores/FormData";

const Step3 = () => {
    const { addons } = Constants;
    const [addOns, updateAddons] = useFormData((state) => [
        state.addons,
        state.updateAddons,
    ]);
    return (
        <div>
            <StepHeader
                title='Addons'
                description='Add-ons help enhancing your gaming experience.'
            />

            <form className='mt-2 space-y-4'>
                {addons.map((addon, index) => {
                    const name = addon.name;
                    const checked = addOns[addon.name as AddonsKeys];
                    return (
                        <div
                            className={`field flex gap-4 items-center border border-coolGray p-4 rounded-md ${
                                checked && "bg-lightBlue"
                            }`}
                            key={index}>
                            <div className=''>
                                <input
                                    title='_'
                                    type='checkbox'
                                    id={name}
                                    name={name}
                                    className='accent-purplish scale-150'
                                    checked={checked}
                                    onChange={(e) =>
                                        updateAddons(
                                            e.target.name as AddonsKeys,
                                            e.target.checked
                                        )
                                    }
                                />
                            </div>
                            <label htmlFor={name}>
                                <div className='text-marine font-medium'>
                                    {addon.title}
                                </div>
                                <div className='text-coolGray text-sm'>
                                    {addon.description}
                                </div>
                                {/* <div>{addon.price.monthly}</div> */}
                            </label>
                        </div>
                    );
                })}
            </form>
        </div>
    );
};

export default Step3;
