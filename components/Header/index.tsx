import { Row, Col, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
// import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import Link from 'next/link'

type HeaderPropsType = {
	sideDrawerHandler: () => void
}

const Header = ({ sideDrawerHandler }: HeaderPropsType) => {
	return (
		<Row className={styles.headerDiv} justify='space-between' align='middle'>
			<Col flex='none'>
				<Link href='/' passHref>
					<Image
						src='/assets/images/leap-club-logo.png'
						alt='leap club logo'
						width={70}
						height={70}
					/>
				</Link>
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
					<Link href='/' passHref>
						<div className={styles.headerButton}>home</div>
					</Link>
					<Link href='/careers' passHref>
						<div className={styles.headerButtonHighlighted}>
							we&apos;re hiring
						</div>
					</Link>
					<Link href='/about' passHref>
						<div className={styles.headerButton}>about us</div>
					</Link>
					<a
						href='https://leap.substack.com/'
						target='_blank'
						rel='noreferrer noopener'
					>
						<div className={styles.headerButton}>blog</div>
					</a>
					<a
						href='https://love.leap.club'
						target='_blank'
						rel='noreferrer noopener'
					>
						<div className={styles.headerButton}>testimonials 🙋‍♀️</div>
					</a>
				</div>
			</Col>
			<Col xs={12} md={0}>
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Button
						icon={<MenuOutlined />}
						size='large'
						onClick={sideDrawerHandler}
					/>
				</div>
			</Col>
		</Row>
	)
}

export default Header
