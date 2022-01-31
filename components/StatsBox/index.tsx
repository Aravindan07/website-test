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
		// <div className={styles.statsBoxContainer}>
		// 	<div style={{ background: topBackground }} className={styles.statsBoxTop}>
		// 		{topText}
		// 	</div>
		// 	<div className={styles.statsBoxBottom}>{bottomText}</div>
		// </div>
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
