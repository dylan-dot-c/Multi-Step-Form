import StepHeader from "./StepHeader";
import Constants from "../lib/constants";
import Switch from "./Switch";
import useFormData from "../stores/FormData";

const Step2 = () => {
    // const [currentPlan, setCurrentPlan] = useState(0);
    const [currentPlan, checked, toggleYearly, changePlan] = useFormData(
        (state) => [
            state.plan.index,
            state.plan.yearly,
            state.toggleYearly,
            state.updatePlanIndex,
        ]
    );
    // const currentPlan,
    const { plans } = Constants;
    return (
        <div>
            <StepHeader
                title='Select Plan'
                description='You have the option of monthly or yearly billing'
            />

            <form>
                <div className=' grid  gap-4 mt-4 md:grid-cols-3'>
                    {plans.map((plan, index) => {
                        const price = checked
                            ? plan.price.yearly
                            : plan.price.monthly;
                        const priceString = checked
                            ? `$${price}/yr`
                            : `$${price}/mo`;
                        return (
                            <div
                                onClick={() => changePlan(index)}
                                key={index}
                                className={`flex gap-4 border p-4 rounded-lg transition items-start md:flex-col hover:border-purplish cursor-pointer md:gap-8 ${
                                    currentPlan == index
                                        ? "bg-lightBlue border-purplish"
                                        : "border-coolGray"
                                }`}>
                                <img
                                    src={plan.icon}
                                    alt='Icon Img'
                                    width={40}
                                />

                                <div>
                                    <p className='font-medium text-marine'>
                                        {plan.name}
                                    </p>
                                    <p className='text-sm text-coolGray'>
                                        {priceString}
                                    </p>

                                    <p className='text-marine'>
                                        {checked && "2 months Free"}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='bg-lightBlue px-4 py-2 flex justify-center gap-4 mt-8 rounded-lg'>
                    <span
                        className={`font-medium ${
                            checked ? "text-coolGray" : "text-marine"
                        } `}>
                        Monthly
                    </span>
                    <Switch checked={checked} toggle={toggleYearly} />
                    <span
                        className={`font-medium ${
                            checked ? "text-marine" : "text-coolGray"
                        }`}>
                        Yearly
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Step2;
