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
            },
            animation: {
                "reverse-spin": "reverse-spin 7s linear infinite",
            },
        },
    },
    plugins: [],
};
