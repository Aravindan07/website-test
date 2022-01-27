/* eslint-disable @next/next/no-img-element */
// import { Col, Row, Space } from 'antd'
// import Image from 'next/image'
import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
	return (
		<div className={styles.wrapper}>
			<img
				src='/assets/images/ss-1.jpg'
				alt='SS1'
				style={{ width: '485px', height: '103px', padding: '0.5rem' }}
			/>
			<img
				src='/assets/images/ss-2.jpg'
				alt='SS1'
				style={{ width: '441px', height: '275px', padding: '0.5rem' }}
			/>
			<img
				src='/assets/images/ss-3.jpg'
				alt='SS1'
				style={{ width: '480px', height: '192px', padding: '0.5rem' }}
			/>
			<img
				src='/assets/images/ss-4.jpg'
				alt='SS1'
				style={{ width: '488px', height: '213px', padding: '0.5rem' }}
			/>
			<img
				src='/assets/images/ss-5.jpg'
				alt='SS1'
				style={{ width: '441px', height: '236px', padding: '0.5rem' }}
			/>
		</div>
	)
}

export default Testimonials
