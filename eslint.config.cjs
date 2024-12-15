const angularEslintPlugin = require("@angular-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const tsEslintPlugin = require("@typescript-eslint/eslint-plugin");
const tailwindcssPlugin = require("eslint-plugin-tailwindcss");

module.exports = [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser, // Usa el parser importado como un objeto
      parserOptions: {
        project: ["tsconfig.json"],
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
      },
    },
    plugins: {
      "@angular-eslint": angularEslintPlugin,
      "@typescript-eslint": tsEslintPlugin,
    },
    rules: {
      "@angular-eslint/component-class-suffix": ["error", { suffixes: ["Component"] }],
      "@angular-eslint/no-empty-lifecycle-method": "warn",
      "@angular-eslint/directive-class-suffix": ["error", { suffixes: ["Directive"] }],
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "max-len": ["warn", { "code": 200 }],
    },
  },
  {
    files: ["src/**/*.html"],
    languageOptions: {
      parser: require("@angular-eslint/template-parser"), // Usa el parser requerido como un objeto
    },
    plugins: {
      "@angular-eslint/template": require("@angular-eslint/eslint-plugin-template"),
    },
    rules: {
      "@angular-eslint/template/no-negated-async": "error",
      "max-len": ["warn", { "code": 200 }],
    },
  },
];
