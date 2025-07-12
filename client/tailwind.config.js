// tailwind.config.js
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default { // Use 'export default' for ES module syntax in Vite
  // Crucial: Point Tailwind to your React components to scan for classes
  content: [
    "./index.html", // Include your public HTML if you have inline classes there
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main Background and Borders
        'devflow-bg': '#121416', // The dark background color
        'devflow-border-dark': '#2c3135', // Border color for header, tabs, tables
        'devflow-border-light': '#40484f', // Lighter border for table cells

        // Text Colors
        'devflow-text-white': '#FFFFFF', // Pure white text
        'devflow-text-light-gray': '#a2abb3', // Lighter grey text (e.g., Story ID, Assignee)

        // Component Backgrounds (e.g., table header, select input, buttons)
        'devflow-component-bg': '#1e2124', // Background for table headers, select inputs
        'devflow-button-bg': '#2c3135', // Background for status/priority buttons, bell icon button
      },
      fontFamily: {
        // Define your custom font stack
        sans: ['Inter', 'Noto Sans', 'sans-serif'],
      },
      spacing: {
        '13': '0.8125rem', // 13px converted to rem
        '15': '0.9375rem', // 15px converted to rem
      },
      fontSize: {
        '22px': ['1.375rem', { // 22px title for sections
          lineHeight: '1.25',
          letterSpacing: '-0.015em',
        }],
        '32px': ['2rem', { // 32px main dashboard title
          lineHeight: '1.25',
          letterSpacing: '-0.015em',
        }],
        'sm-custom': ['0.875rem', { // 14px text with custom tracking
          lineHeight: '1.25rem',
          letterSpacing: '0.015em',
        }],
      },
    },
  },
  // In Tailwind CSS v4, plugins are typically automatically enabled by the Vite plugin
  // based on your dependencies. However, explicitly including them here ensures they are picked up.
  plugins: [
    forms,
    containerQueries,
  ],
};