import { Col, Row, Typography } from 'antd'
import Image from 'next/image'
import styles from 'styles/Careers.module.css'

const { Title } = Typography

function FeaturedOn() {
	return (
		<>
			<Row
				gutter={[8, 8]}
				justify='space-between'
				align='middle'
				style={{ width: '100%' }}
			>
				<Col className='gutter-row' xs={24} md={4}>
					<div className={styles.companyCard}>
						<Image
							src='/assets/images/et.png'
							alt='companies logo'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
				<Col className='gutter-row' xs={24} md={4}>
					<div className={styles.companyCard}>
						<Image
							src='/assets/images/yourstory.png'
							alt='companies logo'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
				<Col className='gutter-row' xs={24} md={4}>
					<div className={styles.companyCard}>
						<Image
							src='/assets/images/inc42.png'
							alt='companies logo'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
				<Col className='gutter-row' xs={24} md={4}>
					<div className={styles.companyCard}>
						<Image
							src='/assets/images/fortune.png'
							alt='companies logo'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
			</Row>
			<Row>
				<Col xs={24}>
					<Title style={{ textAlign: 'center' }} id={styles.andMoreText}>
						and more
					</Title>
				</Col>
			</Row>
		</>
	)
}

export default FeaturedOn
