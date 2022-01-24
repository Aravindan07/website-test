import { Row, Col, Button } from 'antd'

import styles from './Header.module.css'
const Header = () => {
	return (
		<Row className={styles.headerDiv} justify='space-between' align='middle'>
			<Col flex='none'> Logo</Col>
			<Col xs={0}>
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
		</Row>
	)
}

export default Header
