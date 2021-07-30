module.exports = {
 env: {
  browser: true,
  es2021: true,
  node: true,
 },
 settings: {
  'import/resolver': {
   node: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
   },
  },
 },
 extends: [
  'airbnb',
  'eslint-config-prettier',
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:@typescript-eslint/recommended',
 ],
 parser: '@typescript-eslint/parser',
 parserOptions: {
  ecmaFeatures: {
   tsx: true,
  },
  ecmaVersion: 12,
  sourceType: 'module',
 },
 plugins: ['react', '@typescript-eslint', 'eslint-plugin-prettier'],
 ignorePatterns: ['App.tsx'],
 rules: {
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
  'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
  'import/no-extraneous-dependencies': 0,
  'no-param-reassign': ['error', { props: false }],
  'no-unused-vars': 'warn',
  indent: ['error', 1],
  'linebreak-style': ['error', 'unix'],
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
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': ['error'],
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
