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
            error: '#c22f3d',
            primary: {
                light: '#F0F3FA',
                dark: '#032030',
            },
            secondary: {
                light: '#D7E2F6',
                dark: '#006DA4',
            },
            tiertary: {
                light: '#B1C9EF',
                dark: '#022B42',
            },
            quartiary: {
                light: '#385784',
                dark: '#003554',
            },
            navGradient: '#6A99DD',
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
