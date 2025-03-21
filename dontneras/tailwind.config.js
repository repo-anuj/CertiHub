/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
    	extend: {
    		animation: {
    			meteor: 'meteor 5s linear infinite'
    		},
    		keyframes: {
    			meteor: {
    				'0%': {
    					transform: 'rotate(var(--angle)) translateX(0)',
    					opacity: '1'
    				},
    				'70%': {
    					opacity: '1'
    				},
    				'100%': {
    					transform: 'rotate(var(--angle)) translateX(-500px)',
    					opacity: '0'
    				}
    			}
    		}
    	}
    },
	plugins: [],
  }