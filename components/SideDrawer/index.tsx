import { Drawer } from 'antd'

// import styles from './SideDrawer.module.css'
const SideDrawer = () => {
	return (
		<Drawer
			title='Basic Drawer'
			placement='right'
			onClose={() => {}}
			visible={false}
		>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Drawer>
	)
}

export default SideDrawer
