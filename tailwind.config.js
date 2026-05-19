tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            colors: {
                background: '#0a0a0f',
                surface: 'rgba(255, 255, 255, 0.03)',
                surfaceBorder: 'rgba(255, 255, 255, 0.08)',
                accent: {
                    light: '#a78bfa',
                    DEFAULT: '#8b5cf6',
                    dark: '#6d28d9',
                },
                secondary: {
                    DEFAULT: '#3b82f6',
                }
            },
            animation: {
                'blob': 'blob 10s infinite alternate',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '100%': { transform: 'translate(30px, 50px) scale(1.1)' },
                }
            }
        }
    }
}
