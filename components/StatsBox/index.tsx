import { Col, Row } from 'antd'
import React from 'react'
import { useMediaQuery } from 'utils/useMediaQueries'
import styles from './StatsBox.module.css'

type StatsBoxPropsType = {
	topText: string
	bottomText: string
	topBackground: string
}

function StatsBox({ topText, bottomText, topBackground }: StatsBoxPropsType) {
	const [width] = useMediaQuery()

	return (
		<>
			<Row>
				<Col xs={24}>
					<div
						style={{ background: topBackground }}
						className={styles.statsBoxTop}
					>
						{topText}
					</div>
				</Col>
			</Row>
			<Row
				style={{
					minHeight: '100%',
					textAlign: width > 4000 ? 'center' : 'left',
				}}
			>
				<Col className={styles.statsBoxBottom}>{bottomText}</Col>
			</Row>
		</>
	)
}

export default StatsBox
