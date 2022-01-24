import React, { ReactChildren, ReactChild } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import SideDrawer from 'components/SideDrawer'

interface LayoutProps {
	children: ReactChild | ReactChildren
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header></Header>
			<SideDrawer></SideDrawer>
			<div>{children}</div>

			<Footer></Footer>
		</>
	)
}

export default Layout
