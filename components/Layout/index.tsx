import React, { ReactChildren, ReactChild } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import SideDrawer from 'components/SideDrawer'
import styles from './Layout.module.css'

interface LayoutProps {
	children: ReactChild | ReactChildren
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.layoutWrapper}>
			<Header />
			<SideDrawer />
			<div>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
