import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'button-bg-color': '#28bffc',
        'main-bg-color': '#1c2655',
        'hover-button-bg-color': 'rgb(245 158 11)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'hero-pattern':
          "linear-gradient(to right, rgba(255, 255, 255, 1) 45%, rgba(211, 220, 224, 0) 100%), url('/images/landing_page/getty-images-wLUbZBvfBe0-unsplash.jpg')",
          "work-with-us-pattern": "linear-gradient(to right bottom, white, rgba(28, 38, 85 , 0.6) 100%), url('https://img.freepik.com/free-photo/hands-holding-puzzle-business-problem-solving-concept_53876-129016.jpg')",
      },
      textColor: {
        'main-text-color': '#1864abb3'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
    },
    animation: {
        'infinite-scroll': 'infinite-scroll 35s linear infinite',
    },
    keyframes: {
        'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
        },
        "fade-in-left": {
                    "0%": {
                        opacity: "0",
                        transform: "translate3d(-100%, 0, 0)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translate3d(0, 0, 0)",
                    },
                },
    }     
    },
  },
  animation: {
    fadeinleft: 'fade-in-left 1s ease-in-out 0.25s 1',
  },
  plugins: [
    require('flowbite/plugin'),
    nextui(),
    require('tailwindcss-animated')
]
};
export default config;


