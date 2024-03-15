import StepHeader from "./StepHeader";
import Constants from "../lib/constants";

import useFormData from "../stores/FormData";
import Success from "./Success";
const Step4 = () => {
    const { addons, plans } = Constants;

    const [planState, currentAddons, goto, submitted] = useFormData((state) => [
        state.plan,
        state.addons,
        state.goTo,
        state.submitted,
    ]);
    const { index, yearly } = planState;
    const currentPlan = plans[index];
    const plan = `${currentPlan.name} (${yearly ? "Yearly" : "Monthly"})`;
    const priceEndString = yearly ? "/yr" : "/mo";
    const planPrice = yearly
        ? currentPlan.price.yearly
        : currentPlan.price.monthly;

    const planPriceString = `$${planPrice}${priceEndString}`;

    const selectedAddons = Object.entries(currentAddons)
        .filter((item) => item[1])
        .map((_, index) => {
            return addons[index];
        });

    console.log(selectedAddons);

    const total =
        planPrice +
        selectedAddons.reduce((sum, addon) => {
            const value = yearly ? addon.price.yearly : addon.price.monthly;
            return sum + value;
        }, 0);

    if (submitted) {
        return (
            <div>
                <Success />
            </div>
        );
    }

    return (
        <div>
            <StepHeader
                title='Finishing Up'
                description='  Double-check everything looks OK before confirming.
'
            />
            <div className='bg-lightBlue rounded-md p-4'>
                <div className='text-marine flex justify-between items-center '>
                    <div>
                        <p className='font-bold'>{plan}</p>
                        <span
                            className='text-coolGray underline'
                            onClick={() => goto(1)}>
                            Change
                        </span>
                    </div>
                    <div className='font-bold'>{planPriceString}</div>
                </div>
                <div className='border-b border-b-coolGray my-3'></div>
                <div className='space-y-2'>
                    {selectedAddons.map((addon) => {
                        const price =
                            `+$${
                                yearly
                                    ? addon.price.yearly
                                    : addon.price.monthly
                            }` + priceEndString;
                        return (
                            <div
                                className='flex justify-between'
                                key={addon.name}>
                                <p className='text-coolGray'>{addon.title}</p>
                                <span className='text-marine'>{price}</span>
                            </div>
                        );
                    })}
                    {selectedAddons.length == 0 && (
                        <p className='text-center text-coolGray p-4'>
                            No Addons Selected
                        </p>
                    )}
                </div>
            </div>

            <div className='justify-between flex pt-4 px-4'>
                <p className='text-coolGray'>
                    Total {yearly ? "per year" : "per month"}
                </p>

                <span className='text-purplish font-bold'>
                    +${total}
                    {priceEndString}
                </span>
            </div>
        </div>
    );
};

export default Step4;
