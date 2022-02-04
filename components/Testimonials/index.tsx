/* eslint-disable @next/next/no-img-element */
// import { Col, Row, Space } from 'antd'
// import Image from 'next/image'
import React from 'react'
import styles from './Testimonials.module.css'
import Masonry from 'react-responsive-masonry'
import { Carousel } from 'antd'

const contentStyle = {
	height: '200px',
	display: 'flex',
	width: '100%',
}

function Testimonials() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.carousel}>
				<Carousel style={{ height: '200px' }} autoplay>
					<div style={contentStyle}>
						<img
							src='/assets/images/testimonial-1.jpeg'
							alt='ss1'
							className={styles.carouselImage}
						/>
					</div>
					<div style={contentStyle}>
						<img
							src='/assets/images/ss-2.jpg'
							alt='ss2'
							className={styles.carouselImage}
						/>
					</div>
					<div style={contentStyle}>
						<img
							src='/assets/images/ss-3.jpg'
							alt='ss3'
							className={styles.carouselImage}
						/>
					</div>
					<div style={contentStyle}>
						<img
							src='/assets/images/ss-5.jpg'
							alt='ss5'
							className={styles.carouselImage}
						/>
					</div>
					<div style={contentStyle}>
						<img
							src='/assets/images/ss-4.jpg'
							alt='ss4'
							className={styles.carouselImage}
						/>
					</div>
				</Carousel>
			</div>
			<div className={styles.masonry}>
				<Masonry columnsCount={2}>
					<img
						src='/assets/images/tt.jpeg'
						alt='SS1'
						className={styles.testimonial}
						style={{ borderRadius: '10px', border: '1px solid black' }}
					/>
					{/* <div style={{ height: '50%', backgroundSize: 'contain' }}> */}
					<img
						src='/assets/images/ss-praj-twitter.jpg'
						alt='SS2'
						className={`${styles.testimonial}`}
						style={{ borderRadius: '10px' }}
					/>
					{/* </div> */}
					<img
						src='/assets/images/testimonial-3.jpg'
						alt='SS3'
						className={`${styles.testimonial}`}
						style={{ borderRadius: '10px' }}
					/>
					<img
						src='assets/images/testimonial-4.jpg'
						alt='SS4'
						className={styles.testimonial}
						style={{ borderRadius: '10px' }}
					/>
					<img
						src='/assets/images/testimonial.png'
						alt='SS5'
						className={`${styles.testimonial} ${styles.lastImage}`}
						style={{
							marginBottom: 0,
							borderRadius: '10px',
							border: '1px solid black',
						}}
					/>
				</Masonry>
			</div>
		</div>
	)
}

export default Testimonials
