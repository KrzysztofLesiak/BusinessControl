/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    experimental: {
        applyComplexClasses: true,
    },
    theme: {
        colors: {
            white: '#ffffff',
            dark: '#000000',
            success: '#28a745',
            warning: '#ffc107',
            error: '#dc3545',
            primary: {
                light: '#F0F3FA',
                dark: '#032030',
            },
            secondary: {
                light: '#395886',
                dark: '#006DA4',
            },
            grey: {
                light: '#E7EBF4',
                dark: '#022B42',
            },
            blue1: {
                light: '#b1c9ef',
                dark: '#003554',
            },
            blue2: {
                light: '#8aaee0',
                dark: '#004d74',
            },
            blue3: {
                light: '#638ecb',
                dark: '#006da4',
            },
        },
        extend: {
            animation: {
                textShow: 'textShow 150ms ease-in-out',
            },
            keyframes: {
                textShow: {
                    '0%': { width: '0' },
                    '75%': { width: '50%' },
                    '100%': { width: '100%' },
                },
            },
        },
    },
    plugins: [],
}
