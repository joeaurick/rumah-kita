/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}", // <- agar Markdown ikut discan
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            lineHeight: "1.8",
            maxWidth: "none",
            color: "#1f2937", // text-gray-800
            a: {
              color: "#2563eb", // blue-600
              "&:hover": {
                color: "#1d4ed8", // blue-700
              },
            },
            h1: { fontWeight: "800", letterSpacing: "-0.025em" },
            h2: { fontWeight: "700", letterSpacing: "-0.02em" },
            h3: { fontWeight: "700" },
            p: { marginTop: "1em", marginBottom: "1em" },
            ul: { paddingLeft: "1.25em", marginTop: "1em", marginBottom: "1em" },
            ol: { paddingLeft: "1.25em", marginTop: "1em", marginBottom: "1em" },
            li: { marginTop: "0.25em", marginBottom: "0.25em" },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
