import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
  {
    // The fact-check skill, tools/ and the Vite config run in Node, not the browser.
    files: ['.claude/skills/**/*.mjs', 'tools/**/*.mjs', 'vite.config.js'],
    languageOptions: { globals: { ...globals.node } },
  },
  {
    // public/draco and public/basis are third-party decoders copied from three.js.
    ignores: ['dist/', 'node_modules/', 'stats.html', 'public/draco/', 'public/basis/'],
  },
];
