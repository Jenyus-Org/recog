module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  ignorePatterns: ["node_modules/*", ".next/*", ".out/*", "!.prettierrc.js"], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ["eslint:recommended", "prettier", "prettier/react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "import/extensions": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
    "react/no-unescaped-entities": "off",
    "import/no-cycle": [0, { ignoreExternal: true }],
    "prefer-const": "off",
    // needed because of https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use & https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: true },
    ],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    // Why would you want unused vars?
    "@typescript-eslint/no-unused-vars": ["error"],
    // I suggest this setting for requiring return types on functions only where useful
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
  },
};
