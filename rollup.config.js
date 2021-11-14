import path from 'path'
import typescript from '@rollup/plugin-typescript'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

const outputTarget = path.resolve(__dirname, './dist')
const plugins = [
	typescript({
		include: 'src/**',
		typescript: require('typescript')
	}),
	getBabelOutputPlugin({
		configFile: path.resolve(__dirname, './babel.config.js'),
		allowAllFormats: true
	})
]

if (process.env.ENV === 'production') {
	plugins.push(terser())
}

export default [
	{
		input: 'src/index.ts',
		output: [
			// CommonJS for bundlers
			{
				name: 'Tunnel',
				file: `${outputTarget}/tunnel.cjs.js`,
				format: 'cjs'
			},
			// ES module for bundlers
			{
				name: 'Tunnel',
				file: `${outputTarget}/tunnel.esm.js`,
				format: 'es'
			},
			// Browser
			{
				name: 'Tunnel',
				file: `${outputTarget}/tunnel.js`,
				format: 'umd'
			}
		],
		plugins
	}
]
