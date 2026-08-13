/**
 * PostCSS Configuration Node for Tailwind CSS v4 & Next.js 16
 * Resolves the Turbopack build evaluation failure by routing through the dedicated postcss package.
 */
module.exports = {
  plugins: {
    // Tailwind CSS v4 requires the explicit standalone PostCSS integration wrapper package
    "@tailwindcss/postcss": {},
  },
};
