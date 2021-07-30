module.exports = {
 env: {
  browser: true,
  es2021: true,
  node: true,
 },
 settings: {
  'import/no-unresolved': 0, // Turn off "Unable to resolve path to module ..." error
  'import/extensions': 0, // Turn off "Missing file extension for ..." error
 },
 extends: [
  'airbnb',
  'prettier',
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:import/errors',
  'plugin:import/warnings',
  'plugin:import/typescript',
 ],
 parser: '@typescript-eslint/parser',
 parserOptions: {
  ecmaFeatures: {
   tsx: true,
  },
  ecmaVersion: 12,
  sourceType: 'module',
 },
 plugins: ['react', '@typescript-eslint', 'prettier'],
 ignorePatterns: ['App.tsx'],
 rules: {
  'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  'import/extensions': [
   'error',
   'ignorePackages',
   {
    js: 'never',
    jsx: 'never',
    ts: 'never',
    tsx: 'never',
   },
  ],
  'prettier/prettier': [
   'error',
   {
    endOfLine: 'auto',
   },
  ],
  'react/react-in-jsx-scope': 'off',
  'no-unused-vars': 'warn',
  'linebreak-style': ['error', 'windows'],
  quotes: ['error', 'single'],
  semi: ['error', 'never'],
  'no-console': 1, // Warning to reduce console logs used throughout app
  'react/prop-types': 0, // Not using prop-types because we have TypeScript
  'newline-before-return': 1,
  'no-useless-return': 1,
  'prefer-const': 1,
  'no-useless-return': 1,
  'no-unused-vars': 0,
  'default-case': 1, // require `default` cases in `switch` statements
  'default-case-last': 1, // enforce default clauses in switch statements to be last
  eqeqeq: 1, // require the use of `===` and `!==`
  'no-empty-function': 1,
  'no-multi-spaces': 1,
  'no-useless-return': 1,
  'require-await': 1,
  camelcase: 'error',
  'max-lines': ['error', 200],
  'max-nested-callbacks': ['error', 3],
  'arrow-body-style': ['error', 'always'], // require braces around arrow function bodies
  'no-duplicate-imports': 'error', // disallow duplicate module imports
  'no-var': 'error',
  'prefer-destructuring': [
   'error',
   {
    VariableDeclarator: {
     array: false,
     object: true,
    },
    AssignmentExpression: {
     array: true,
     object: true,
    },
   },
   {
    enforceForRenamedProperties: false,
   },
  ],
 },
}
