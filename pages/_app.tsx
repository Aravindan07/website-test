import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import '../styles/globals.css'
import Layout from 'components/Layout'
import { Scrollbars } from 'react-custom-scrollbars-2'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Scrollbars autoHide style={{ height: '100vh' }} universal={true}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Scrollbars>
	)
}

export default MyApp
