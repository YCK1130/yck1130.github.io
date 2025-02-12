/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class", "[data-theme=dark]"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                inner: "inset 0 2px 6px 0 rgba(0, 0, 0, 0.3)",
                "inner-sm": "inset 0 1px 4px 0 rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [],
};
