module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                paths: ["src"],
            },
        },
    },
    extends: [
        "prettier",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "unused-imports"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {
        "prettier/prettier": "error",
        "no-console": "warn",
        "no-eval": "warn",
        "no-proto": 2,
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": "warn",
        "react/display-name": "off",
        "react/prop-types": "off",
        "react/jsx-uses-react": "error",
        "react/react-in-jsx-scope": "off",
        "react-hooks/exhaustive-deps": "error",
    },
};
