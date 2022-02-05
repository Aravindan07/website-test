/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'antd'
import styles from './MobileAppGallery.module.css'

function MobileAppGallery() {
	return (
		<Carousel autoplay>
			<img
				src='/assets/images/app-ss-1.jpg'
				className={styles.image}
				alt='Mobile App Image'
			/>

			<img
				src='/assets/images/app-ss-2.jpg'
				className={styles.image}
				alt='Mobile App Image'
			/>
			<img
				src='/assets/images/app-ss-3.jpg'
				className={styles.image}
				alt='Mobile App Image'
			/>
			<img
				src='/assets/images/app-ss-4.jpg'
				className={styles.image}
				alt='Mobile App Image'
			/>
			<img
				src='/assets/images/app-ss-5.jpg'
				className={styles.image}
				alt='Mobile App Image'
			/>
			<img
				src='/assets/images/app-ss-6.jpg'
				className={styles.image}
				alt='Mobile App Image'
			/>
		</Carousel>
	)
}

export default MobileAppGallery
