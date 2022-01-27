import React from 'react'
import { Button, Typography } from 'antd'
import styles from './EndSection.module.css'

const { Title } = Typography

function EndSection() {
	return (
		<div className={styles.endSectionWrapper}>
			<Title id={styles.endSectionText}>yeh kadam nahi chalang hai</Title>
			<Title id={styles.endSectionTextHindi}>ये कदम नहीं, छलांग है </Title>
			<Button id={styles.buttonPrimary}>explore our membership</Button>
		</div>
	)
}

export default EndSection
