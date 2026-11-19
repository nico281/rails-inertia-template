import eslint from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      '.agents',
      '.claude',
      'node_modules',
      'public/vite*',
      'tmp',
      'vendor',
    ],
  },
  {
    files: ['app/frontend/**/*.{ts,tsx}'],
    rules: eslint.configs.recommended.rules,
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ['app/frontend/**/*.{ts,tsx}', 'vite.config.ts'],
  })),
  {
    files: ['app/frontend/**/*.{ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    files: ['eslint.config.js', 'vite.config.ts'],
    languageOptions: {
      globals: globals.node,
    },
    rules: eslint.configs.recommended.rules,
  },
)
