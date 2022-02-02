import { Col, Row } from 'antd'
import React from 'react'
import styles from './StatsBox.module.css'

type StatsBoxPropsType = {
	topText: string
	bottomText: string
	topBackground: string
}

function StatsBox({ topText, bottomText, topBackground }: StatsBoxPropsType) {
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
			<Row style={{ minHeight: '100%' }}>
				<Col className={styles.statsBoxBottom}>{bottomText}</Col>
			</Row>
		</>
	)
}

export default StatsBox
