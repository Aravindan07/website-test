import { Row, Col, Button } from 'antd'
import { MenuFoldOutlined } from '@ant-design/icons'
import Link from 'next/link'
import Image from 'next/image';

import styles from './Header.module.css'
const Header = () => {
	return (
		<Row className={styles.headerDiv} justify='space-between' align='middle'>
			<Col flex='none'>
				<Image src="/assets/images/leap-club-logo.png" alt='leap club logo' width={70} height={70} />
			</Col>
			<Col flex='auto'></Col>

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
					testimonials 🙋‍♀️
				</Button>
			</Col>
			{/* <Col flex='none'>
				<MenuFoldOutlined />
			</Col> */}
		</Row>
	)
}

export default Header
