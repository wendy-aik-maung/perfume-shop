/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-pattern": "url('../src/images/p17.jpg')",
            },
        },
    },
    plugins: [require("daisyui")],
};