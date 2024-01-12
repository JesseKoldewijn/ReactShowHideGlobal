/** @type {import("prettier").Config & import("prettier-plugin-tailwindcss") & import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,

  // Import sorting plugin
  importOrder: [
    "^@react/(.*)$",
    "^react/(.*)$",
    "^@/(.*)$",
    "^@/(.css)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  // TailwindCSS plugin
  tailwindConfig: "./tailwind.config.js",
  tailwindAttributes: ["className"],
  tailwindFunctions: [""], // not needed for now
};
export default config;
