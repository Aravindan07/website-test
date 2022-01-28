import React from 'react'
import { Col, Row, Typography } from 'antd'
import styles from './MembersCompanies.module.css'
import Image from 'next/image'
import { membersCompaniesImages } from 'constants/constants'

const { Title } = Typography

function MembersCompanies() {
	return (
		<div className={styles.wrapper}>
			<Title level={2} id={styles.headingText}>
				thousands of{' '}
				<span style={{ textDecoration: 'line-through' }}>women</span> leaders
				have already taken the leap and ❤️ us
			</Title>
			<div className={styles.imageWrapper}>
				<Row gutter={[8, 8]} justify='space-between' style={{ width: '100%' }}>
					{membersCompaniesImages.map((company: any) => (
						<Col key={company.id} className='gutter-row' span={4}>
							<div className={styles.companyCard}>
								<Image
									src={company.img}
									alt='companies logo'
									width='100%'
									height='100%'
									// layout='fill'
									objectFit='contain'
								/>
							</div>
						</Col>
					))}
				</Row>
			</div>
		</div>
	)
}

export default MembersCompanies
