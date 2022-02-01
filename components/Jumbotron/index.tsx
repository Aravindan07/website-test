import { Row, Typography } from 'antd'
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
		</div>
	)
}

export default Jumbotron
