import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import '../styles/globals.css'
import Layout from 'components/Layout'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { Provider } from 'react-redux'
import store from 'app/store'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Scrollbars autoHide style={{ height: '100vh' }} universal={true}>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</Scrollbars>
	)
}

export default MyApp
