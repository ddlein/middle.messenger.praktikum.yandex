import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'


export default [
    {
        files: [
            'src/**/*.ts',
            'src/**/*.js',
        ],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',
            },
            globals: {
                ...globals.browser,
                ...globals.builtin,
                ...globals.es2021,
            },
        },
        plugins: {
            '@typescript-eslint': ts,
        },
        rules: {
            'no-unused-vars': 2,
            'max-len': [1, 100],
            'max-params': [2, 3],
            'indent': [
                2,
                4,
            ],
            "@typescript-eslint/no-unused-vars": 2,
            '@typescript-eslint/comma-dangle': [
                2,
                {
                    'arrays': 'always-multiline',
                    'objects': 'always-multiline',
                    'imports': 'always-multiline',
                    'exports': 'always-multiline',
                    'enums': 'always-multiline',
                    'generics': 'always-multiline',
                    'tuples': 'always-multiline',
                    'functions': 'only-multiline',
                },
            ],
        }
    }
]
