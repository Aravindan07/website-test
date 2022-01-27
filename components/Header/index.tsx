import { Row, Col } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
// import Link from 'next/link'
import Image from 'next/image'

import styles from './Header.module.css'
const Header = () => {
	return (
		<Row className={styles.headerDiv} justify='space-between' align='middle'>
			<Col flex='none'>
				<Image
					src='/assets/images/leap-club-logo.png'
					alt='leap club logo'
					width={70}
					height={70}
				/>
			</Col>
			<Col flex='auto'></Col>

			<Col xs={0} md={12}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
					}}
				>
					<div className={styles.headerButton}>home</div>
					<div className={styles.headerButton}>we&apos;re hiring</div>
					<div className={styles.headerButton}>about us</div>
					<div className={styles.headerButton}>blog</div>
					<div className={styles.headerButton}>testimonials 🙋‍♀️</div>
				</div>
			</Col>
			<Col flex='none'>
				<MenuOutlined style={{ color: '#000', fontSize: '1.5rem' }} />
			</Col>
		</Row>
	)
}

export default Header
