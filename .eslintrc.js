module.exports = {
  env: { browser: true, commonjs: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@angular-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    createDefaultProgram: true,
  },
  plugins: [
    '@angular-eslint/template',
    '@typescript-eslint',
    'import',
    'prefer-arrow',
    'prettier',
    'simple-import-sort',
  ],
  rules: {
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: {
            message: 'Avoid using the `Object` type. Did you mean `object`?',
          },
          Function: {
            message:
              'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
          },
          Boolean: {
            message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
          },
          Number: {
            message: 'Avoid using the `Number` type. Did you mean `number`?',
          },
          String: {
            message: 'Avoid using the `String` type. Did you mean `string`?',
          },
          Symbol: {
            message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
          },
        },
      },
    ],

    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit',
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'off',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/semi': ['off', null],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'always',
        types: 'prefer-import',
        lib: 'always',
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    'arrow-body-style': 'error',
    'arrow-parens': ['off', 'always'],
    'brace-style': ['off', 'off'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    complexity: 'off',
    'constructor-super': 'error',
    curly: 'error',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'id-blacklist': 'off',
    'id-match': 'off',

    'import/order': 'warn',
    'max-classes-per-file': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',

    'no-console': [
      'error',
      {
        allow: [
          'log',
          'warn',
          'dir',
          'timeLog',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context',
        ],
      },
    ],
    'no-debugger': 'error',
    'no-empty': 'off',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-new-wrappers': 'error',
    'no-restricted-imports': ['error', 'rxjs/Rx'],
    'no-shadow': [
      'error',
      {
        hoist: 'all',
      },
    ],
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'off',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow/prefer-arrow-functions': 'error',
    'prettier/prettier': 'error',
    radix: 'error',
    'space-in-parens': ['off', 'never'],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'use-isnan': 'error',
    'valid-typeof': 'off',

    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
  overrides: [
    /**
     * -----------------------------------------------------
     * TYPESCRIPT FILES (COMPONENTS, SERVICES ETC) (.ts)
     * -----------------------------------------------------
     */
    {
      files: ['*.ts'],
      /**
       * We use a dedicated tsconfig file for the compilation related to linting so that we
       * have complete control over what gets included and we can maximize performance
       */
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
      /**
       * See packages/eslint-plugin/src/configs/README.md
       * for what this recommended config contains.
       */
      extends: ['plugin:@angular-eslint/recommended'],
      rules: {
        /**
         * Any TypeScript related rules you wish to use/reconfigure over and above the
         * recommended set provided by the @angular-eslint project would go here.
         *
         * There are some examples below from the @angular-eslint plugin and ESLint core:
         */

        // ORIGINAL tslint.json -> "directive-selector": [true, "attribute", "pr", "camelCase"],
        '@angular-eslint/directive-selector': [
          'error',
          { type: 'attribute', prefix: 'pr', style: 'camelCase' },
        ],

        // ORIGINAL tslint.json -> "component-selector": [true, "element", "pr", "kebab-case"],
        '@angular-eslint/component-selector': [
          'error',
          { type: 'element', prefix: 'pr', style: 'kebab-case' },
        ],

        quotes: ['error', 'single', { allowTemplateLiterals: true }],
      },
    },
    {
      files: ['*.component.html'],
      /**
       * See packages/eslint-plugin-template/src/configs/README.md
       * for what this recommended config contains.
       */
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        /**
         * Any template/HTML related rules you wish to use/reconfigure over and above the
         * recommended set provided by the @angular-eslint project would go here.
         *
         * There is an example below from ESLint core (note, this specific example is not
         * necessarily recommended for all projects):
         */
        // 'max-len': ['error', { code: 80 }],
      },
    },

    /**
     * -----------------------------------------------------
     * EXTRACT INLINE TEMPLATES (from within .component.ts)
     * -----------------------------------------------------
     *
     * This extra piece of configuration is necessary to extract inline
     * templates from within Component metadata, e.g.:
     *
     * @Component({
     *  template: `<h1>Hello, World!</h1>`
     * })
     * ...
     *
     * It works by extracting the template part of the file and treating it as
     * if it were a full .html file, and it will therefore match the configuration
     * specific for *.component.html above when it comes to actual rules etc.
     *
     * NOTE: This processor will skip a lot of work when it runs if you don't use
     * inline templates in your projects currently, so there is no great benefit
     * in removing it, but you can if you want to.
     *
     * You won't specify any rules here. As noted above, the rules that are relevant
     * to inline templates are the same as the ones defined for *.component.html.
     */
    {
      files: ['*.component.ts'],
      extends: ['plugin:@angular-eslint/template/process-inline-templates'],
    },
  ],
};
