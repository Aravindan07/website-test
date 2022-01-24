import { Row, Col, Button } from 'antd'
import { MenuFoldOutlined } from '@ant-design/icons'

import styles from './Header.module.css'
const Header = () => {
	return (
		<Row className={styles.headerDiv} justify='space-between' align='middle'>
			<Col flex='none'> Logo</Col>
			<Col flex='auto'> EMPTY SPACE</Col>

			<Col flex='none'>
				<Button type='text' className={styles.headerButton}>
					Text Button
				</Button>
				<Button type='text' className={styles.headerButton}>
					Text Button
				</Button>
				<Button type='text' className={styles.headerButton}>
					Text Button
				</Button>
			</Col>
			<Col flex='none'>
				<MenuFoldOutlined />
			</Col>
		</Row>
	)
}

export default Header
