/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            screens: {
                sm: '320px',
                md: '481px',
                lg: '769px',
                xl: '1025px',
                '2xl': '1201px',
            },
        },
    },

    plugins: [],
};
