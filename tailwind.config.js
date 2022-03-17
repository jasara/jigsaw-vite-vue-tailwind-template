const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './source/_assets/js/**/*.vue',
        './source/_assets/js/**/*.ts',
        './source/**/*.blade.php',
        './source/**/*.blade.md',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
