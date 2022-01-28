/* eslint-disable @next/next/no-img-element */
// import { Col, Row, Space } from 'antd'
// import Image from 'next/image'
import React from 'react'
import styles from './Testimonials.module.css'
import Masonry from 'react-responsive-masonry'

function Testimonials() {
	return (
		<div className={styles.wrapper}>
			<Masonry columnsCount={2}>
				<img
					src='/assets/images/ss-1.jpg'
					alt='SS1'
					className={styles.testimonial}
				/>
				<img
					src='/assets/images/ss-2.jpg'
					alt='SS1'
					className={`${styles.testimonial}`}
				/>
				<img
					src='/assets/images/ss-3.jpg'
					alt='SS1'
					className={`${styles.testimonial}`}
				/>
				<img
					src='/assets/images/ss-5.jpg'
					alt='SS1'
					className={styles.testimonial}
				/>
				<img
					src='/assets/images/ss-4.jpg'
					alt='SS1'
					className={`${styles.testimonial} ${styles.lastImage}`}
					style={{ marginBottom: 0 }}
				/>
			</Masonry>
		</div>
	)
}

export default Testimonials
