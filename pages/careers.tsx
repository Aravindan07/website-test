/* eslint-disable @next/next/no-img-element */
import { Col, Row, Typography } from 'antd'
import TestimonialsCarousel from 'components/TestimonialsCarousel'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Careers.module.css'
import TeamGallery from 'components/TeamGallery'
import { useMediaQuery } from 'utils/useMediaQueries'
import Jobs from 'components/Jobs'
import TeamMembersVideos from 'components/TeamMembersVideos'
import ValuesAndPrinciples from 'components/ValuesAndPrinciples'
import PerksSection from 'components/PerksSection'
import SampleJobVideos from 'components/SampleJobVideos'
import EmailsWeLike from 'components/EmailsWeLike'
import BackedBy from 'components/BackedBy'
import FeaturedOn from 'components/FeaturedOn'
import TeamFaces from 'components/TeamFaces'

const { Title, Text } = Typography

const Careers: NextPage = () => {
	const [width] = useMediaQuery()

	return (
		<div>
			<Head>
				<title>leap.club | more women in leadership positions</title>
				<link
					rel='shortcut icon'
					href='https://s3.ap-south-1.amazonaws.com/leap.club/assets/favicon32.ico'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,max-width=100%'
				/>
				<meta
					property='og:title'
					content='leap.club | more women in leadership positions'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://leap.club' />
				<meta
					name='image'
					property='og:image'
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/careers-page-final-thumbnail.jpg'
				/>
				<meta
					name='description'
					content='we are a powerful and private network of women leaders.'
				/>
				<meta
					property='og:description'
					content='we are a powerful and private network of women leaders.'
				/>
				<meta
					property='twitter:title'
					content='leap.club | more women in leadership positions'
				/>
				<meta property='twitter:type' content='website' />
				<meta
					property='twitter:url'
					content='https://leap.club/careers/index.html'
				/>
				<meta
					name='image'
					property='twitter:image'
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/careers-page-final-thumbnail.jpg'
				/>
				<meta
					name='twitter:description'
					content='we are a powerful and private network of women leaders.'
				/>
				<meta
					property='twitter:card'
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/careers-page-final-thumbnail.jpg'
				/>
				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://leap.club/careers/index.html'
				/>
				<meta
					property='twitter:title'
					content='leap.club | more women in leadership positions'
				/>
				<meta
					property='twitter:description'
					content='we are a powerful and private network of women leaders.'
				/>
				<meta
					property='twitter:image'
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/careers-page-final-thumbnail.jpg'
				/>
			</Head>

			<Row className={styles.titleWrapper}>
				<Col xs={24}>
					<Title id={styles.titleText}>
						let&apos;s build a company together - join our all star founding
						team
					</Title>
				</Col>
			</Row>
			<Row
				justify='space-between'
				align='middle'
				className={styles.companyPitch}
			>
				<Col xs={24} md={10}>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<Text id={styles.companyPitchText} style={{ marginBottom: '2rem' }}>
							we are building a community-led professional network for women
							with a simple mission - more women in leadership positions. we
							launched in may 2020, have early product-market fit and strong
							business signals. we are backed by some of the best investors in
							india.
						</Text>
						<Text id={styles.companyPitchText}>
							click{' '}
							<a
								href='https://love.leap.club'
								target='_blank'
								rel='noreferrer noopener'
							>
								here
							</a>{' '}
							to read what our members say about us ❤️
						</Text>
					</div>
				</Col>
				<Col xs={24} md={10}>
					<TestimonialsCarousel />
				</Col>
			</Row>

			{/* Team Members Gallery */}
			<div className={styles.teamMembersWrapper}>
				<Row>
					<Col xs={24}>
						<Title id={styles.foundingMembersSectionHeading}>
							our founding team members have previously built companies like
							zomato, uber, linkedin, byju&apos;s, facebook
						</Title>
					</Col>
				</Row>

				<Row>
					<Col xs={24}>
						<TeamGallery />
					</Col>
				</Row>
			</div>
			{/* End of Team Members Gallery */}

			{/* Team Members Videos Section */}
			<div className={styles.teamMembersVideosWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title id={styles.foundingMembersSectionHeading}>
							👀 here are some videos that will tell you more about our team and
							their experience of building leap.club
						</Title>
					</Col>
				</Row>
				<TeamMembersVideos />
			</div>
			{/* End of Team Members Videos Section */}

			{/* Values and guiding principles section */}
			<div className={styles.teamMembersVideosWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title
							id={styles.foundingMembersSectionHeading}
							className={styles.textHeader}
							style={{
								textAlign: 'center',
							}}
						>
							📝 our values and guiding principles
						</Title>
					</Col>
				</Row>

				<ValuesAndPrinciples />
			</div>
			{/* End of Values and guiding principles section */}

			{/* Perks Section */}
			<div className={styles.perksSectionWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title
							id={styles.foundingMembersSectionHeading}
							className={styles.textHeader}
							style={{
								textAlign: 'center',
							}}
						>
							🎉 perks of working at leap.club
						</Title>
					</Col>
				</Row>
				<PerksSection />
			</div>
			{/* End of Perks Section */}

			{/* Jobs Section */}
			<div className={styles.jobsSectionWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title id={styles.jobsSectionHeading}>
							we are a sports team and everyone works hard to not drop the
							baton. check out our open positions below. please send a 1-2 min
							self recorded video 🎥 along with your application telling us why
							you think you should join us. write to us at{' '}
							<span style={{ color: 'red', fontWeight: 600 }}>
								jobs@leap.club
							</span>
						</Title>
					</Col>
				</Row>

				{/* Add/remove jobs from the below component */}
				<Jobs />

				<div style={{ marginTop: width > 800 ? '5.5rem' : '2rem' }}>
					<Text id={styles.noJobsMatchText}>
						can’t find an open position of your interest? write to us and if we
						like each other, we will find a role for you.
					</Text>
				</div>
			</div>
			{/*End of Jobs Section */}

			{/* Sample Job Videos */}
			<div className={styles.sampleJobVideosWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title
							style={{ textAlign: 'center' }}
							id={styles.foundingMembersSectionHeading}
						>
							the kind of videos we like:
						</Title>
					</Col>
				</Row>
				<SampleJobVideos />
			</div>
			{/*End of Sample Job Videos */}

			{/* Emails we Like Section */}
			<div className={styles.emailsSectionWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title
							style={{ textAlign: 'center' }}
							id={styles.foundingMembersSectionHeading}
						>
							the kind of emails we like:
						</Title>
					</Col>
				</Row>
				<EmailsWeLike />
			</div>
			{/*End of Emails we Like Section */}

			{/* Team faces */}
			<div className={styles.teamMembersPhotosWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title
							style={{ textAlign: 'center' }}
							id={styles.foundingMembersSectionHeading}
						>
							a few happy faces from our team meet ups
						</Title>
					</Col>
				</Row>
				<TeamFaces />
			</div>

			{/* End of Team faces */}

			<BackedBy />

			{/* End Of Backed By Section */}

			{/* Featured on Section */}
			<div className={styles.featuredOnWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title
							style={{ textAlign: 'center' }}
							id={styles.foundingMembersSectionHeading}
						>
							we have been featured on
						</Title>
					</Col>
				</Row>
				<FeaturedOn />
			</div>
			{/* Featured on Section */}
		</div>
	)
}

export default Careers
