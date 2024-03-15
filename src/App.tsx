import "./App.css";
import BottomNav from "./components/BottomNav";
import NavBar from "./components/NavBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import useFormData from "./stores/FormData";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
    { title: "Your Info", step: <Step1 /> },
    { title: "Select Plan", step: <Step2 /> },
    { title: " Addons", step: <Step3 /> },
    { title: " Summary", step: <Step4 /> },
];

function App() {
    const [currentStep, submitted, prevSteps] = useFormData((state) => [
        state.currentStep,
        state.submitted,
        state.prevStep,
    ]);
    return (
        <main className='md:flex overflow-hidden  md:bg-white md:rounded-lg md:shadow-pastel md:items-start md:p-4 md:h-[550px]'>
            <NavBar steps={steps} />
            <div
                className={`md:px-20 md:flex md:flex-col md:h-full md:w-[700px] overflow-hidden ${
                    submitted ? "md:justify-center" : "md:justify-between"
                }`}>
                <AnimatePresence key={currentStep}>
                    <motion.div
                        initial={{
                            x: currentStep > prevSteps ? "100%" : "-100%",
                        }}
                        animate={{ x: "0%" }}
                        exit={{
                            x: currentStep > prevSteps ? "-100%" : "100%",
                        }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className='step--container z-10'>
                        {steps[currentStep].step}
                    </motion.div>
                </AnimatePresence>
                <BottomNav />
            </div>
        </main>
    );
}

export default App;
