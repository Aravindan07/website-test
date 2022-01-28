import { Row, Col, Button } from 'antd'
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

			<Col xs={0} md={14}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<div className={styles.headerButton}>home</div>
					<div className={styles.headerButtonHighlighted}>
						we&apos;re hiring
					</div>
					<div className={styles.headerButton}>about us</div>
					<div className={styles.headerButton}>blog</div>
					<div className={styles.headerButton}>testimonials 🙋‍♀️</div>
				</div>
			</Col>
			<Col xs={12} md={0}>
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Button icon={<MenuOutlined />} size='large' />
				</div>
			</Col>
		</Row>
	)
}

export default Header
