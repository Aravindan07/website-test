/* eslint-disable @next/next/no-img-element */
import { Carousel, Col, Row } from 'antd'
import styles from './TeamFaces.module.css'

function TeamFaces() {
	return (
		<Row justify='center'>
			<Col xs={24} md={12}>
				<Carousel autoplay>
					<div className={styles.teamImageStyle}>
						<img
							src='/assets/images/team-image-1.jpg'
							width='100%'
							height='100%'
							alt='Team'
							loading='lazy'
						/>
					</div>
					<div className={styles.teamImageStyle}>
						<img
							src='/assets/images/team-image-2.jpg'
							width='100%'
							height='100%'
							alt='Team'
							loading='lazy'
						/>
					</div>
					<div className={styles.teamImageStyle}>
						<img
							src='/assets/images/team-image-3.jpg'
							width='100%'
							height='100%'
							alt='Team'
							loading='lazy'
						/>
					</div>
					<div className={styles.teamImageStyle}>
						<img
							src='/assets/images/team-image-4.jpg'
							width='100%'
							height='100%'
							alt='Team'
							loading='lazy'
						/>
					</div>
				</Carousel>
			</Col>
		</Row>
	)
}

export default TeamFaces
