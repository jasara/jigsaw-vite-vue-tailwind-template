import { defineConfig } from 'vite';
import jigsaw from './build-plugins/rollup/jigsaw'
import vue from '@vitejs/plugin-vue'

export default ({ command }) => defineConfig({
	publicDir: 'fake_dir_so_nothing_gets_copied',
	base: command === 'serve' ? '' : '/source/assets/build/',
	build: {
		manifest: true,
		outDir: 'source/assets/build',
		assetsDir: '.',
		rollupOptions: {
			input: 'source/_assets/js/main.ts',
		},
	},
	plugins: [
		jigsaw(),
		vue(),
	],
	resolve: {
		alias: {
			vue: 'vue/dist/vue.esm-bundler.js',
		},
	},
});