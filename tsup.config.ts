import { defineConfig } from 'tsup';

export default defineConfig({
    clean: true,
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    env: { 'NODE_ENV': 'production' },
    dts: true
});
