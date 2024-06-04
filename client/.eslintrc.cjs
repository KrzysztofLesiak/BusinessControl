module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
    },
    plugins: ['react-refresh', '@typescript-eslint', 'prettier', 'jest'],
    rules: {
        'no-console': 2,
        trailingComma: 0,
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                trailingComma: 'es5',
            },
        ],
        'react-refresh/only-export-components': [
            'error',
            { allowConstantExport: true },
        ],
    },
}
