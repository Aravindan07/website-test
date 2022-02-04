/* eslint-disable @next/next/no-img-element */
import { Col, Row, Typography } from 'antd'
import { useMediaQuery } from 'utils/useMediaQueries'
const { Title, Text } = Typography

import styles from './Jumbotron.module.css'

const Jumbotron = () => {
	const [width] = useMediaQuery()

	return (
		<div className={styles.jumbotronContainer}>
			<Row>
				<Title level={1} id={styles.titleText}>
					more women in
					<br /> leadership positions
				</Title>
			</Row>
			<Row>
				<Title level={3} id={styles.subText}>
					a community-led professional network for women. make new connections &
					friends, join communities, and access exclusive experiences.
				</Title>
			</Row>
			<Row style={{ marginTop: width > 800 ? '80px' : '33px' }}>
				<Text id={styles.smallText}>
					3500+ paying members across industries, experience levels, cities.
					join the revolution!
				</Text>
			</Row>
			<Row
				justify='space-between'
				style={{ paddingTop: width < 800 ? '1rem' : '3rem' }}
			>
				<Col xs={12}>
					{/* <a
						href='https://www.producthunt.com/posts/leap-club?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-leap-club'
						target='_blank'
						rel='noreferrer'
					> */}
					<img
						src='https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=310530&theme=dark&period=daily'
						alt='leap.club - A community-led professional network for women | Product Hunt'
						style={{
							width: width > 4000 ? '98%' : '80%',
							height: width > 4000 ? 'auto' : '54px',
						}}
						// width='250'
						// height='54'
					/>
					{/* </a> */}
				</Col>
				<Col xs={12}>
					{/* <a
						href='https://www.producthunt.com/posts/leap-club?utm_source=badge-golden-kitty-badge&utm_medium=badge&utm_souce=badge-leap-club'
						target='_blank'
						rel='noreferrer'
					> */}
					<img
						src='https://api.producthunt.com/widgets/embed-image/v1/golden-kitty-badge.svg?post_id=310530&theme=dark'
						alt='leap.club - A community-led professional network for women | Product Hunt'
						style={{
							width: width > 4000 ? '98%' : '80%',
							height: width > 4000 ? 'auto' : '54px',
						}}
						// width='250'
						// height='54'
					/>
					{/* </a> */}
				</Col>
			</Row>
		</div>
	)
}

export default Jumbotron
