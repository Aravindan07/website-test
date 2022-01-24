import { Row, Col, Button } from 'antd'
import { MenuFoldOutlined } from '@ant-design/icons'
import Link from 'next/link'

import styles from './Header.module.css'
const Header = () => {
	return (
		<Row className={styles.headerDiv} justify='space-between' align='middle'>
			<Col flex='none'> Logo</Col>
			<Col flex='auto'> EMPTY SPACE</Col>

			<Col flex='none'>
				<Button type='text' className={styles.headerButton}>
					home
				</Button>
				<Button type='text' className={styles.headerButton}>
					<Link href='/careers'>
						<a>we're hiring</a>
					</Link>
				</Button>
				<Button type='text' className={styles.headerButton}>
					about us
				</Button>
				<Button type='text' className={styles.headerButton}>
					blog
				</Button>
				<Button type='text' className={styles.headerButton}>
					testimonials
				</Button>
			</Col>
			<Col flex='none'>
				<MenuFoldOutlined />
			</Col>
		</Row>
	)
}

export default Header
