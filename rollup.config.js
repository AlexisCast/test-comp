import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

// Create multiple build configurations
export default [
  // Build with inlined CSS (default)
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: 'dist/ac-components.umd.js',
        format: 'umd',
        name: 'ACComponents',
        sourcemap: true,
        globals: {
          'preact': 'preact',
          'preact/hooks': 'preactHooks',
          'preact/jsx-runtime': 'preactJSXRuntime',
          'classnames': 'classNames'
        },
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.app.json',
        declaration: true,
        declarationDir: 'dist',
        exclude: ['**/*.test.*', '**/*.stories.*', 'vitest.config.ts', 'src/main.tsx', 'src/app.tsx'],
        compilerOptions: {
          outDir: 'dist',
          noEmit: false,
          verbatimModuleSyntax: false,
          allowImportingTsExtensions: false
        }
      }),
      postcss({
        // Inline CSS into JS bundles - no separate CSS file needed
        extract: false,
        inject: true,
        minimize: true,
        sourceMap: true,
        modules: true,
        use: {
          sass: {
            // Silence legacy Sass API deprecation warnings
            // This is needed until rollup-plugin-postcss updates to modern Sass API
            silenceDeprecations: ['legacy-js-api'],
            includePaths: ['./src'],
          },
        },
      }),
    ],
    external: ['preact', 'preact/hooks', 'preact/jsx-runtime', 'classnames'],
  },
  // Build with extracted CSS (for those who prefer separate CSS file)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index-with-css.esm.js',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.app.json',
        declaration: false, // Don't duplicate type declarations
        exclude: ['**/*.test.*', '**/*.stories.*', 'vitest.config.ts', 'src/main.tsx', 'src/app.tsx'],
        compilerOptions: {
          outDir: 'dist',
          noEmit: false,
          verbatimModuleSyntax: false,
          allowImportingTsExtensions: false
        }
      }),
      postcss({
        extract: 'index.css',
        minimize: true,
        sourceMap: true,
        modules: true,
        use: {
          sass: {
            silenceDeprecations: ['legacy-js-api'],
            includePaths: ['./src'],
          },
        },
      }),
    ],
    external: ['preact', 'preact/hooks', 'preact/jsx-runtime', 'classnames'],
  },
];
