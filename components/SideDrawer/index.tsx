import { Drawer } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { sidebarOpen, toggleSidebar } from 'components/Layout/LayoutSlice'
import Link from 'next/link'

const SideDrawer = () => {
	const dispatch = useAppDispatch()
	const isSidebarOpen = useAppSelector(sidebarOpen)

	return (
		<Drawer
			title=''
			placement='right'
			onClose={() => dispatch(toggleSidebar())}
			visible={isSidebarOpen}
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
					<div
						onClick={() => dispatch(toggleSidebar())}
						style={{ cursor: 'pointer' }}
					>
						home
					</div>
				</Link>
				<Link href='/careers' passHref>
					<div
						onClick={() => dispatch(toggleSidebar())}
						style={{ cursor: 'pointer' }}
					>
						we&apos;re hiring
					</div>
				</Link>
				<Link href='/about' passHref>
					<div
						onClick={() => dispatch(toggleSidebar())}
						style={{ cursor: 'pointer' }}
					>
						about us
					</div>
				</Link>
				<a
					href='https://leap.substack.com/'
					target='_blank'
					rel='noreferrer noopener'
				>
					<div
						style={{ color: 'black' }}
						onClick={() => dispatch(toggleSidebar())}
					>
						blog
					</div>
				</a>
				<a
					href='https://love.leap.club'
					target='_blank'
					rel='noreferrer noopener'
				>
					<div
						style={{ color: 'black' }}
						onClick={() => dispatch(toggleSidebar())}
					>
						testimonials 🙋‍♀️
					</div>
				</a>
			</div>
		</Drawer>
	)
}

export default SideDrawer
