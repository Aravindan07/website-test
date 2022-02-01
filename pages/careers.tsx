/* eslint-disable @next/next/no-img-element */
import { Carousel, Col, Row, Typography } from 'antd'
import Card from 'components/Card'
import JobBox from 'components/JobBox'
import TestimonialsCarousel from 'components/TestimonialsCarousel'
import VideoCard from 'components/VideoCard'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Careers.module.css'
import Gallery from 'react-grid-gallery'
import { emails, investors } from 'constants/constants'
import Image from 'next/image'
import TeamGallery from 'components/TeamGallery'
import { useState } from 'react'
import { useMediaQuery } from 'utils/useMediaQueries'

const { Title, Text } = Typography

const Careers: NextPage = () => {
	const [isOpen, setIsOpen] = useState('')
	const [width] = useMediaQuery()

	const onJobBoxClick = (job: string) => {
		setIsOpen(job)
	}

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

				<Row
					justify='space-between'
					style={{ backgroundColor: '#e5e5e5', padding: '0.5rem' }}
				>
					<Col xs={24} md={6}>
						<VideoCard
							link='https://youtube.com/embed/SihSIlXQFm4'
							text='‘meet our first team member’'
						/>
					</Col>
					<Col xs={24} md={6}>
						<VideoCard
							link='https://youtube.com/embed/FdJmM2AaZmA'
							text='‘building leap with an incredible team’'
						/>
					</Col>
					<Col xs={24} md={6}>
						<VideoCard
							link='https://youtube.com/embed/QG9DWbylotE'
							text='‘becoming a founding team member’'
						/>
					</Col>
					<Col xs={24} md={6}>
						<VideoCard
							link='https://youtube.com/embed/5ECw8jpAC1o'
							text="‘shit we've heard while building leap.club’"
						/>
					</Col>
				</Row>
			</div>

			{/* Values and guiding principles section */}
			<div className={styles.teamMembersVideosWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title
							id={styles.foundingMembersSectionHeading}
							style={{ textAlign: 'center' }}
						>
							📝 our values and guiding principles
						</Title>
					</Col>
				</Row>
				<Row justify='space-between'>
					<Col xs={24} md={7}>
						<Card
							icon='/assets/icons/think.svg'
							heading='first principle thinking'
							description='when in doubt, ask yourself, will this help our mission? if yes, do it'
						/>
					</Col>
					<Col xs={24} md={7}>
						<Card
							icon='/assets/icons/process.svg'
							heading='process ≠ progress'
							description='innovation is our best friend and getting attached to a process, our worst enemy. everything can be improved'
						/>
					</Col>
					<Col xs={24} md={7}>
						<Card
							icon='/assets/icons/80-20.svg'
							heading='80/20'
							description="feedback moves things forward and helps you grow. don't get offended or take it personally. when giving feedback, focus on the 'delta'. the 20% that can change the 80%"
						/>
					</Col>
				</Row>
				<Row justify='space-between' style={{ marginTop: '2rem' }}>
					<Col xs={24} md={7}>
						<Card
							icon='/assets/icons/dream-big.svg'
							heading='dream big'
							description='we believe we are building a multi unicorn. remember, nothing big ever comes easy. work hard. enjoy the ride'
						/>
					</Col>
					<Col xs={24} md={7}>
						<Card
							icon='/assets/icons/right.svg'
							heading='right > fast'
							description='play the long game'
						/>
					</Col>
					<Col xs={24} md={7}>
						<Card
							icon='/assets/icons/priority.svg'
							heading='prioritize ruthlessly'
							description='focus on needle movers only'
						/>
					</Col>
				</Row>
			</div>

			{/* Perks Section */}
			<div className={styles.perksSectionWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title
							id={styles.foundingMembersSectionHeading}
							style={{ textAlign: 'center' }}
						>
							🎉 perks of working at leap.club
						</Title>
					</Col>
				</Row>
				<Row justify='space-between'>
					<Col xs={24} md={7}>
						<Card
							icon='/assets/icons/leave-policy.svg'
							heading='flexible leave policy'
							description='vacation leaves, wellness leaves, compulsory down time.we trust you to do the right thing'
						/>
					</Col>
					<Col xs={24} md={7}>
						<Card
							icon='/assets/icons/5-day-work.svg'
							heading='5 day work week'
							description='we try to combine speed with enough downtime. burnouts are real'
						/>
					</Col>
					<Col xs={24} md={7}>
						<Card
							icon='/assets/icons/esop.svg'
							heading="esop's & regular appraisals"
							description="let's win together"
						/>
					</Col>
				</Row>
				<Row justify='space-between' style={{ marginTop: '2rem' }}>
					<Col xs={24} md={7}>
						<Card
							icon='/assets/icons/remote-work.svg'
							heading='remote work'
							description='gurgaon is our hq but you decide where you want to work from'
						/>
					</Col>
					<Col xs={24} md={7}>
						<Card
							icon='/assets/icons/dreamers.svg'
							heading='dreamers'
							description='you work with folks who dream big and want to build a multi unicorn'
						/>
					</Col>
					<Col xs={24} md={7}>
						<Card
							icon='/assets/icons/diversity.svg'
							heading='diversity goals'
							description='72% of the team is women'
						/>
					</Col>
				</Row>
			</div>

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

				<div className={styles.jobsContainer}>
					<JobBox
						heading='talent acquisition manager'
						description='lorem ipsum'
						isOpen={isOpen}
						onClick={() => onJobBoxClick('talent acquisition manager')}
					/>
					<JobBox
						heading='graphic designer'
						description='lorem ipsum'
						isOpen={isOpen}
						onClick={() => onJobBoxClick('graphic designer')}
					/>
					<JobBox
						heading='manager, content and communication'
						description='lorem ipsum'
						isOpen={isOpen}
						onClick={() => onJobBoxClick('manager, content and communication')}
					/>
					<JobBox
						heading='vp, product'
						description='lorem ipsum'
						isOpen={isOpen}
						onClick={() => onJobBoxClick('vp, product')}
					/>
					<JobBox
						heading='associate - human capital'
						description='lorem ipsum'
						isOpen={isOpen}
						onClick={() => onJobBoxClick('associate - human capital')}
					/>
					<JobBox
						heading='react native app developer'
						description='lorem ipsum'
						isOpen={isOpen}
						onClick={() => onJobBoxClick('react native app developer')}
					/>
					<JobBox
						heading='senior backend developer'
						description='lorem ipsum'
						isOpen={isOpen}
						onClick={() => onJobBoxClick('senior backend developer')}
					/>
					<JobBox
						heading='data analyst'
						description='lorem ipsum'
						isOpen={isOpen}
						onClick={() => onJobBoxClick('data analyst')}
					/>
					<JobBox
						heading='business development intern'
						description='lorem ipsum'
						isOpen={isOpen}
						onClick={() => onJobBoxClick('business development intern')}
					/>
					<JobBox
						heading='member onboarding manager'
						description='lorem ipsum'
						isOpen={isOpen}
						onClick={() => onJobBoxClick('')}
					/>
					<JobBox
						heading='manager, performance marketing'
						description='lorem ipsum'
						isOpen={isOpen}
						onClick={() => onJobBoxClick('manager, performance marketing')}
					/>
					<JobBox
						heading='vp, marketing and branding'
						description='lorem ipsum'
						isOpen={isOpen}
						onClick={() => onJobBoxClick('vp, marketing and branding')}
					/>
				</div>
				<div style={{ marginTop: width > 800 ? '5.5rem' : '2rem' }}>
					<Text>
						can’t find an open position of your interest? write to us and if we
						like each other, we will find a role for you.
					</Text>
				</div>
			</div>

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

				<Row justify='space-between'>
					<Col xs={24} md={7}>
						<iframe
							width='100%'
							height='200'
							src='https://youtube.com/embed/Gtq-YL7fIVM'
							title='Youtube Videos'
							frameBorder='0'
						></iframe>
					</Col>
					<Col xs={24} md={7}>
						<iframe
							width='100%'
							height='200'
							src='https://youtube.com/embed/lXifOZ9dKgM'
							title='Youtube Videos'
							frameBorder='0'
						></iframe>
					</Col>
					<Col xs={24} md={7}>
						<iframe
							width='100%'
							height='200'
							src='https://youtube.com/embed/4icp1Bph8YU'
							title='Youtube Videos'
							frameBorder='0'
						></iframe>
					</Col>
				</Row>
			</div>

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

				<Row justify='center'>
					<Col xs={24}>
						{width < 800 ? (
							<Carousel autoplay>
								{emails.map((email, index) => (
									<div key={index}>
										<img
											src={email.src}
											width='100%'
											height='100%'
											alt='Team'
											loading='lazy'
										/>
									</div>
								))}
							</Carousel>
						) : (
							<Gallery rowHeight={225} images={emails} />
						)}
					</Col>
				</Row>
			</div>

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

				<Row justify='center'>
					<Col xs={24} md={12}>
						<Carousel autoplay>
							<div className={styles.teamImageStyle}>
								<img
									src='/assets/images/team-image-1.jpg'
									width='100%'
									height='100%'
									alt='Team'
									loading='lazy'
								/>
							</div>
							<div className={styles.teamImageStyle}>
								<img
									src='/assets/images/team-image-2.jpg'
									width='100%'
									height='100%'
									alt='Team'
									loading='lazy'
								/>
							</div>
							<div className={styles.teamImageStyle}>
								<img
									src='/assets/images/team-image-3.jpg'
									width='100%'
									height='100%'
									alt='Team'
									loading='lazy'
								/>
							</div>
							<div className={styles.teamImageStyle}>
								<img
									src='/assets/images/team-image-4.jpg'
									width='100%'
									height='100%'
									alt='Team'
									loading='lazy'
								/>
							</div>
						</Carousel>
					</Col>
				</Row>
			</div>

			{/* Backed By Section */}
			<div className={styles.backedBySectionWrapper}>
				<Row justify='center'>
					<Col xs={24}>
						<Title
							style={{ textAlign: 'center' }}
							id={styles.foundingMembersSectionHeading}
						>
							we are backed by the{' '}
							<span
								style={{
									color: '#F42B4D',
								}}
							>
								best
							</span>
						</Title>
					</Col>
				</Row>

				<Row
					gutter={[8, 8]}
					justify={width > 800 ? 'space-between' : 'center'}
					align='middle'
					style={{ width: '100%' }}
				>
					<Col className='gutter-row' xs={12} md={4}>
						<div className={styles.companyCard}>
							<Image
								src='/assets/images/firstcheque.png'
								alt='companies logo'
								width='150'
								height='100%'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' xs={12} md={4}>
						<div className={styles.companyCard}>
							<Image
								src='/assets/images/whiteboard_capital.png'
								alt='companies logo'
								width='150'
								height='100%'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' xs={12} md={4}>
						<div className={styles.companyCard}>
							<Image
								src='/assets/images/enzia.png'
								alt='companies logo'
								width='150'
								height='100%'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' xs={12} md={4}>
						<div className={styles.companyCard}>
							<Image
								src='/assets/images/artha_ventures.png'
								alt='companies logo'
								width='150'
								height='100%'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
					<Col className='gutter-row' xs={12} md={4}>
						<div className={styles.companyCard}>
							<Image
								src='/assets/images/titan_capital.png'
								alt='companies logo'
								width='150'
								height='100%'
								// layout='fill'
								objectFit='contain'
							/>
						</div>
					</Col>
				</Row>

				{width < 800 ? (
					<Carousel autoplay>
						{investors.map((investor, index) => (
							<div key={index} className={styles.investorsCard}>
								<Image
									src={investor.src}
									alt='companies logo'
									width='150'
									height='200'
									// layout='fill'
									objectFit='contain'
								/>
								<Text id={styles.investorName}>{investor.name}</Text>
								<Text id={styles.investorDescription}>
									{investor.description}
								</Text>
							</div>
						))}
					</Carousel>
				) : (
					<>
						<Row
							gutter={[8, 8]}
							justify={width > 800 ? 'space-between' : 'center'}
							align='middle'
							style={{ width: '100%', marginTop: '2rem' }}
						>
							{investors.slice(0, 4).map((investor) => (
								<Col key={investor.id} className='gutter-row' xs={12} md={4}>
									<div className={styles.investorsCard}>
										<Image
											src={investor.src}
											alt='companies logo'
											width='150'
											height='200'
											// layout='fill'
											objectFit='contain'
										/>
										<Text id={styles.investorName}>{investor.name}</Text>
										<Text id={styles.investorDescription}>
											{investor.description}
										</Text>
									</div>
								</Col>
							))}
						</Row>

						<Row
							gutter={[8, 8]}
							justify={width > 800 ? 'space-between' : 'center'}
							align='middle'
							style={{ width: '100%' }}
						>
							{investors.slice(4, 8).map((investor) => (
								<Col key={investor.id} className='gutter-row' xs={12} md={4}>
									<div className={styles.investorsCard}>
										<Image
											src={investor.src}
											alt='companies logo'
											width='150'
											height='200'
											// layout='fill'
											objectFit='contain'
										/>
										<Text id={styles.investorName}>{investor.name}</Text>
										<Text id={styles.investorDescription}>
											{investor.description}
										</Text>
									</div>
								</Col>
							))}
						</Row>
					</>
				)}

				<Row>
					<Col xs={24}>
						<Title style={{ textAlign: 'center' }} id={styles.andMoreText}>
							and more
						</Title>
					</Col>
				</Row>
			</div>

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
			</div>
		</div>
	)
}

export default Careers
