import { create } from "zustand";

type FormData = {
    currentStep: number;
    personal: Personal;
    personalErrors: PersonalErrors;
    plan: {
        index: number;
        yearly: boolean;
    };
    addons: {
        online: boolean;
        storage: boolean;
        customizable: boolean;
    };
    submitted: boolean;

    submitForm: () => void;

    updateAddons: (name: AddonsKeys, checked: boolean) => void;
    updatePersonal: (name: string, value: string) => void;
    increment: () => void;
    decrement: () => void;
    goTo: (num: number) => void;
    updatePlanIndex: (index: number) => void;
    toggleYearly: () => void;
    updatePersonalErrors: (name: keyof PersonalErrors, value: string) => void;
};

type Personal = {
    name: string;
    email: string;
    phone: string;
};

export type PersonalErrors = {
    [key in keyof Personal]: string;
};

type Addons = {
    online: boolean;
    storage: boolean;
    customizable: boolean;
};

export type AddonsKeys = keyof Addons;
const useFormData = create<FormData>((set) => ({
    currentStep: 0,
    increment: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    goTo: (num) => set(() => ({ currentStep: num })),
    decrement: () => set((state) => ({ currentStep: state.currentStep - 1 })),
    personal: {
        name: "",
        email: "",
        phone: "",
    },
    plan: {
        index: 0,
        yearly: false,
    },
    addons: {
        online: false,
        storage: false,
        customizable: false,
    },
    personalErrors: {
        name: "",
        email: "",
        phone: "",
    },

    submitted: false,

    submitForm: () => set(() => ({ submitted: true })),

    updateAddons: (name, checked) =>
        set((state) => ({ addons: { ...state.addons, [name]: checked } })),

    updatePlanIndex: (index: number) =>
        set((state) => ({ plan: { index, yearly: state.plan.yearly } })),
    toggleYearly: () =>
        set((state) => ({
            plan: { index: state.plan.index, yearly: !state.plan.yearly },
        })),
    updatePersonal: (name, value) =>
        set((state) => ({
            personal: {
                ...state.personal,
                [name]: value,
            },
        })),
    updatePersonalErrors: (name: keyof PersonalErrors, value: string) =>
        set((state) => ({
            personalErrors: {
                ...state.personalErrors,
                [name]: value,
            },
        })),
}));

export default useFormData;
