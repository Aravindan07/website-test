import { Row, Col, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
// import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import Link from 'next/link'
import { useAppDispatch } from 'app/hooks'
import { toggleSidebar } from 'components/Layout/LayoutSlice'
import { useMediaQuery } from 'utils/useMediaQueries'

const Header = () => {
	const dispatch = useAppDispatch()
	const [width] = useMediaQuery()

	return (
		<Row className={styles.headerDiv} justify='space-between' align='middle'>
			<Col flex='none'>
				<Link href='/' passHref>
					<div
						style={{ width: width > 800 ? '5vw' : '50px', maxWidth: '150px' }}
					>
						<Image
							src='/assets/images/leap-club-logo.png'
							alt='leap club logo'
							// width={width > 4000 ? 150 : 70}
							// height={width > 4000 ? 150 : 70}
							width='100%'
							height='100%'
							objectFit='contain'
						/>
					</div>
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
						onClick={() => dispatch(toggleSidebar())}
					/>
				</div>
			</Col>
		</Row>
	)
}

export default Header
