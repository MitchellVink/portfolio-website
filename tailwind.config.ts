import {type Config} from 'tailwindcss';

const config: Config = {
    content: [
        './app.vue',
        './components/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#D93912',
                },
                background: {
                    DEFAULT: '#F5F5F5',
                    light: '#FFFFFF',
                    dark: '#000000',
                },
            },
            fontFamily: {
                sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
                serif: ['Aclonica', 'serif'],
                mono: ['DM Mono', 'monospace'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

export default config;
