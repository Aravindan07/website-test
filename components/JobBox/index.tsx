import React from 'react'
import { Typography } from 'antd'
import styles from './JobBox.module.css'

type JobBoxPropsType = {
	heading: string
	description: string
	isOpen: string
	onClick: () => void
}

const { Text } = Typography

function JobBox({ heading, onClick }: JobBoxPropsType) {
	return (
		<div
			style={{ display: 'flex', flexDirection: 'column' }}
			className={styles.container}
		>
			<div className={styles.jobBox} onClick={onClick}>
				<Text id={styles.heading}>{heading}</Text>
			</div>
			{/* {isOpen === heading && (
				<div className={styles.jobDescriptionContainer}>
					<Text>{description}</Text>
				</div>
			)} */}
		</div>
	)
}

export default JobBox
