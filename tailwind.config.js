/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                orange: "#FF774C",
                darkBlue: "#242F65",
                darkGray: "#525665",
                lightBlue: "#7390F9",
                customBlack: "#2A2C32",
                lightGray: "#A1A1A1",
                grayBlue: "#E8EFF0",
                "c-gray-200": "#EDF0F9",
                "c-gray-400": "#585F6F",
            },
            fontFamily: {
                serif: "Fraunces, serif",
                sans: "Mulish, sans-serif",
            },
            keyframes: {
                "reverse-spin": {
                    from: {
                        transform: "rotate(360deg)",
                    },
                },
                run: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
            animation: {
                "reverse-spin": "reverse-spin 7s linear infinite",
                running: "run 15s linear infinite",
            },
            screens: {
                xs: "460px",
            },
            boxShadow: {
                solid: "0px 5px 0px -1px rgba(0, 0, 0, .5)",
                center: "0 10px 50px -12px rgb(0 0 0 / 0.25)",
            },
            backgroundImage: {
                "c-gray-200-400":
                    "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);",
            },
            width: {
                18: "4.2rem",
            },
            height: {
                18: "4.2rem",
            },
        },
    },
    plugins: [],
};
