import React, { ReactChildren, ReactChild, useState } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import SideDrawer from 'components/SideDrawer'
import styles from './Layout.module.css'

interface LayoutProps {
	children: ReactChild | ReactChildren
}

const Layout = ({ children }: LayoutProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const sideDrawerHandler = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.layoutWrapper}>
			<Header sideDrawerHandler={sideDrawerHandler} />
			<SideDrawer isOpen={isOpen} sideDrawerHandler={sideDrawerHandler} />
			<div>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
