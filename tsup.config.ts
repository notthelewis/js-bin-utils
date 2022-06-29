import { defineConfig } from 'tsup';

export default defineConfig({
    clean: true,
    entry: ['src/**/*.ts'],
    format: ['esm', 'cjs'],
    minify: true,
    env: { 'NODE_ENV': 'production' },
    skipNodeModulesBundle: true
    // tsconfig: './tsconfig.json'
})
