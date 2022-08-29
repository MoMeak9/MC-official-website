module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "no-console":"warn",
    "no-debugger":"warn",
    "prettier/prettier": [
      "off",
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        singleQuote: false,
        semi: true,
        trailingComma: "all",
        arrowParens: "avoid",
        htmlWhitespaceSensitivity: "ignore",
      },
    ],
  },
};
