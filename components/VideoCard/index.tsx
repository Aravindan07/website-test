import React from 'react'
import { Typography } from 'antd'
import styles from './Videocard.module.css'

type VideoCardPropsType = {
	link: string
	text: string
}

const { Text } = Typography

function VideoCard({ link, text }: VideoCardPropsType) {
	return (
		<div className={styles.videoCardContainer}>
			<iframe src={link} frameBorder='1' width='100%'></iframe>
			<div style={{ backgroundColor: '#e5e5e5' }}>
				<Text>{text}</Text>
			</div>
		</div>
	)
}

export default VideoCard
