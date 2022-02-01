import { Drawer } from 'antd'
import Link from 'next/link'

type PropsType = {
	isOpen: boolean
	sideDrawerHandler: () => void
}

const SideDrawer = ({ isOpen, sideDrawerHandler }: PropsType) => {
	return (
		<Drawer
			title=''
			placement='right'
			onClose={sideDrawerHandler}
			visible={isOpen}
			width='60%'
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'flex-start',
					width: '100%',
					height: '50%',
				}}
			>
				<Link href='/' passHref>
					<div onClick={sideDrawerHandler}>home</div>
				</Link>
				<Link href='/careers' passHref>
					<div onClick={sideDrawerHandler}>we&apos;re hiring</div>
				</Link>
				<Link href='/about' passHref>
					<div onClick={sideDrawerHandler}>about us</div>
				</Link>
				<a
					href='https://leap.substack.com/'
					target='_blank'
					rel='noreferrer noopener'
				>
					<div style={{ color: 'black' }} onClick={sideDrawerHandler}>
						blog
					</div>
				</a>
				<a
					href='https://love.leap.club'
					target='_blank'
					rel='noreferrer noopener'
				>
					<div style={{ color: 'black' }} onClick={sideDrawerHandler}>
						testimonials 🙋‍♀️
					</div>
				</a>
			</div>
		</Drawer>
	)
}

export default SideDrawer
