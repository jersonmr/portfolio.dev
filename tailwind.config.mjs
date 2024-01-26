/** @type {import('tailwindcss').Config} */
const typographyPlugin = require("@tailwindcss/typography");
const typographyStyles = require("./typography");
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        typography: typographyStyles,
        extend: {},
    },
    plugins: [typographyPlugin],
};
