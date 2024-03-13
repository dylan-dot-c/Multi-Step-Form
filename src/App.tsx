import "./App.css";
import BottomNav from "./components/BottomNav";
import NavBar from "./components/NavBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import useFormData from "./stores/FormData";

const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

function App() {
    const currentStep = useFormData((state) => state.currentStep);
    return (
        <main>
            <NavBar steps={steps} />
            <div className='step--container'>{steps[currentStep]}</div>
            <BottomNav />
        </main>
    );
}

export default App;
