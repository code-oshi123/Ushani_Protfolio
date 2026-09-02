/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBg: "#F6F3F9", // Pale purplish off-white
        themeLavender: "#C3B5FD", // Dreamy lavender
        themeLilac: "#EAE6FF", // Soft lilac
        themePlum: "#3B1C54", // Deep plum
        themeCharcoal: "#2D2633", // Dark charcoal with subtle violet undertone
        themeBlush: "#FFF0F2", // Soft blush pink
        themeAccent: "#8B5CF6", // Vibrancy accent
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        script: ["'Caveat'", "cursive"],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'sparkle-slow': 'sparkle 4s ease-in-out infinite',
        'sparkle-fast': 'sparkle 2.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        }
      },
    },
  },
  plugins: [],
}
