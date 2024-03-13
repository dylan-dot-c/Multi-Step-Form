export default {
    plans: [
        {
            name: "Arcade",
            price: {
                monthly: 9,
                yearly: 90,
            },
            icon: "/icon-arcade.svg",
        },
        {
            name: "Advanced",
            price: {
                monthly: 12,
                yearly: 120,
            },
            icon: "/icon-advanced.svg",
        },
        {
            name: "Pro",
            price: {
                monthly: 15,
                yearly: 150,
            },
            icon: "/icon-pro.svg",
        },
    ],
    addons: [
        {
            title: "Online Service",
            description: "Access to muliplayer games",
            name: "online",
            price: {
                monthly: 1,
                yearly: 10,
            },
        },
        {
            title: "Larger storage",
            description: "Extra 1TB of cloud save",
            name: "storage",
            price: {
                monthly: 2,
                yearly: 20,
            },
        },
        {
            title: "Customizable Profile",
            description: "Access to muliplayer games",
            name: "customizable",
            price: {
                monthly: 1,
                yearly: 10,
            },
        },
    ],
};
