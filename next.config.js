/** @type {import('next').NextConfig} */
// next.config.js
const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
	reactStrictMode: true,
	// experimental: {
	//   serverComponents: true,
	// },
	modifyVars: { '@primary-color': 'red' }, // optional

	// for Next.js ONLY
	nextjs: {
		localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
	},

	// Other Config Here...
	images: {
		domains: ['api.producthunt.com'],
	},

	webpack(config) {
		return config
	},
})
