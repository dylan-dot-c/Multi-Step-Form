/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "hsl(213, 96%, 18%)",
                lightBlue: "#EBF2FC",
                marine: "hsl(213, 96%, 18%)",
                purplish: "hsl(243, 100%, 62%)",
                pastel: "hsl(228, 100%, 84%)",
                strawBerryred: "hsl(354, 84%, 57%)",
                coolGray: "hsl(231, 11%, 63%)",
                lightGray: "hsl(229, 24%, 87%)",
                magnolia: "hsl(217, 100%, 97%)",
                alabaster: "hsl(231, 100%, 99%)",
                white: "hsl(0, 0%, 100%)",
                current: "currentColor",
            },
            fontFamily: {
                ubuntu: "Ubuntu, sans-serif",
            },
        },
    },
    plugins: [],
};
