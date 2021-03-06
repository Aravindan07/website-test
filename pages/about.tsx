/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-img-element */
import { Button, Col, Row, Typography } from 'antd'
import MobileAppGallery from 'components/MobileAppGallery'
import StatsBox from 'components/StatsBox'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styles from 'styles/About.module.css'
import { useMediaQuery } from 'utils/useMediaQueries'

const { Title, Text } = Typography

function About() {
	const router = useRouter()
	const [width] = useMediaQuery()

	return (
		<div>
			<Head>
				<title>leap.club | more women in leadership positions</title>

				{/* <!-- Google Tag Manager --> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function (w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != "dataLayer" ? "&l=" + l : "";
				j.async = true;
				j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
				f.parentNode.insertBefore(j, f);
			})(window, document, "script", "dataLayer", "GTM-TPCMFN4");`,
					}}
				></script>

				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=UA-156456027-1'
				></script>
				<script
					type='text/javascript'
					dangerouslySetInnerHTML={{
						__html: `
				var googleTrackingId = "UA-156456027-1";`,
					}}
				></script>
				{/* <!-- End Google Tag Manager --> */}

				<link rel='shortcut icon' href='/favicon32.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='./assets/apple-touch-icon.png'
				/>
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon32.png' />
				{/* <link rel="manifest" href="./assets/site.webmanifest" /> */}
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
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
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/leap_og_image.jpg'
				/>
				<meta
					name='description'
					content='a community led professional network for women. make new connections, join communities, and access exclusive experiences.'
				/>
				<meta
					property='og:description'
					content='a community led professional network for women. make new connections, join communities, and access exclusive experiences.'
				/>
				<meta
					property='twitter:title'
					content='leap.club | more women in leadership positions'
				/>
				<meta property='twitter:type' content='website' />
				<meta property='twitter:url' content='https://leap.club' />
				<meta
					name='image'
					property='twitter:image'
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/leap_og_image.jpg'
				/>
				<meta
					name='twitter:description'
					content='a community led professional network for women. make new connections, join communities, and access exclusive experiences.'
				/>
				<meta
					property='twitter:card'
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/leap_og_image.jpg'
				/>
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://leap.club/' />
				<meta
					property='twitter:title'
					content='leap.club | more women in leadership positions'
				/>
				<meta
					property='twitter:description'
					content='a community led professional network for women. make new connections, join communities, and access exclusive experiences.'
				/>
				<meta
					property='twitter:image'
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/leap_og_image.jpg'
				/>
			</Head>

			{/* <!-- Google Tag Manager (noscript) --> */}
			<noscript>
				<iframe
					src='https://www.googletagmanager.com/ns.html?id=GTM-TPCMFN4'
					height='0'
					width='0'
					style={{ display: 'none', visibility: 'hidden' }}
				></iframe>
			</noscript>
			{/* <!-- End Google Tag Manager (noscript) --> */}

			{/* Linkedin Insight tag */}
			<script
				dangerouslySetInnerHTML={{
					__html: `
					_linkedin_partner_id = "4162545";
					window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
					window._linkedin_data_partner_ids.push(_linkedin_partner_id);
					`,
				}}
			></script>

			<script
				dangerouslySetInnerHTML={{
					__html: `
					(
						function(l) {
						if (!l){
							window.lintrk = function(a,b){
							window.lintrk.q.push([a,b])
						};
							window.lintrk.q=[]
						}
						var s = document.getElementsByTagName("script")[0];
						var b = document.createElement("script");
						b.type = "text/javascript";b.async = true;
						b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
						s.parentNode.insertBefore(b, s);
					})(window.lintrk);
					`,
				}}
			></script>
			<noscript>
				<img
					height='1'
					width='1'
					style={{ display: 'none' }}
					alt=''
					src='https://px.ads.linkedin.com/collect/?pid=4162545&fmt=gif'
				/>
			</noscript>

			{/* <!-- Meta Pixel Code --> */}
			<script
				dangerouslySetInnerHTML={{
					__html: `
		!function(f,b,e,v,n,t,s)
		{
			if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};
		if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
		n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];
		s.parentNode.insertBefore(t,s)}(window, document,'script',
		'https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '662548621616004');
		fbq('track', 'PageView');
	`,
				}}
			></script>
			<noscript>
				<img
					height='1'
					width='1'
					style={{ display: 'none' }}
					alt=''
					src='https://www.facebook.com/tr?id=662548621616004&ev=PageView&noscript=1'
				/>
			</noscript>
			{/* <!-- End Meta Pixel Code ??? */}

			<Row
				justify='space-between'
				// align='middle'
				className={styles.aboutSectionWrapper}
			>
				<Col xs={24} md={12} xxl={10}>
					<Title id={styles.headingText}>
						our mission is more women in leadership positions through a private
						and community-led{' '}
						<span style={{ color: 'red' }}>professional network.</span>
					</Title>
				</Col>
				<Col xs={24} md={10} xxl={10}>
					<div className={styles.imageWrapper}>
						<MobileAppGallery />
					</div>
				</Col>
			</Row>

			<Row
				justify='space-between'
				align='top'
				className={styles.whyExistWrapper}
			>
				<Col xs={24} md={8}>
					<Title id={styles.headingText}>
						why we <span style={{ color: 'red' }}>exist</span>
					</Title>
				</Col>
				<Col
					xs={24}
					md={8}
					style={{ paddingRight: width > 2500 ? '5rem' : '1rem' }}
				>
					<Text id={styles.whyExistDescription}>
						women continue to be the most untapped resource in the world and
						once unleashed, have the superpower to change the world.
					</Text>
					<br />
					<br />
					<Text id={styles.whyExistDescription}>
						we are on a mission to accelerate the process and ensure there are
						enough and many women leaders in the world.
					</Text>
				</Col>
				<Col xs={24} md={8}>
					<Text id={styles.whyExistDescription}>
						we believe that when women have a high value network to support them
						and when women have the resources to learn and grow in their
						professional lives, a revolution will be underway.
					</Text>
				</Col>
			</Row>

			<Row
				justify='space-between'
				// align='middle'
				className={styles.genderGraphWrapper}
			>
				<Col xs={24} md={12}>
					<Title id={styles.genderGraphText}>
						women are less likely to be promoted to managerial positions,
					</Title>
					<Text id={styles.genderGraphSubtext}>
						about two thirds of managers end up being men, and from that point
						on, women can never catch up.
					</Text>
				</Col>
				<Col xs={24} md={12}>
					<div
						style={{
							width: width > 1900 ? '300px' : width < 800 ? '200px' : '100%',
							height: width > 1900 ? '300px' : width < 800 ? '200px' : '100%',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Image
							src='/assets/images/gender-image.png'
							alt='Gender Graph'
							layout='fill'
							objectFit='contain'
						/>
					</div>
				</Col>
			</Row>

			<Row
				justify='space-between'
				align='stretch'
				className={styles.statsWrapper}
			>
				<Col xs={24} md={4}>
					<StatsBox
						topText='65%'
						bottomText='what women earn for performing the same work as men'
						topBackground='#151515'
					/>
				</Col>
				<Col xs={24} md={4}>
					<StatsBox
						topText='2%'
						bottomText='venture capital received by women founders'
						topBackground='#c79d58'
					/>
				</Col>
				<Col xs={24} md={4}>
					<StatsBox
						topText='99%'
						bottomText='women believe that a strong support group and network will advance
								their careers'
						topBackground='#151515'
					/>
				</Col>
				<Col xs={24} md={4}>
					<StatsBox
						topText='$12 trillion'
						bottomText='addition to gdp by 2025. empowering women is not social charity'
						topBackground='#c79d58'
					/>
				</Col>
			</Row>

			<div className={styles.whatAreWeNotWrapper}>
				<Row>
					<Col xs={24}>
						<Title id={styles.headingText}>
							what we are <span style={{ color: 'red' }}>not</span>
						</Title>
					</Col>
				</Row>
				<Row justify='space-between'>
					<Col xs={24} md={11}>
						<div className={styles.pointsBox}>
							<Text id={styles.pointHeading}>social charity</Text>
							<Text id={styles.pointDesc}>
								creating women leaders is a $12 trillion economic opportunity
							</Text>
						</div>
					</Col>
					<Col xs={24} md={11}>
						<div className={styles.pointsBox}>
							<Text id={styles.pointHeading}>about male bashing</Text>
							<Text id={styles.pointDesc}>
								we need all genders to come together to make an equal world a
								reality. we are not alienating men, we are simply focusing on
								women
							</Text>
						</div>
					</Col>
				</Row>
			</div>

			<div className={styles.currentOpeningsWrapper}>
				<Row justify='space-between'>
					<Col xs={24} md={11}>
						<Title id={styles.currentOpeningsText}>
							join our mission. we combine exceptional people, hard problems and
							a fun place to work. write to us on{' '}
							<span style={{ color: 'red' }}>jobs@leap.club</span> to explore
							exciting opportunities.
						</Title>
						{width > 2500 && (
							<Button
								type='primary'
								id={styles.currentOpeningsButton}
								onClick={() => router.push('/careers')}
							>
								view current openings ???
							</Button>
						)}
					</Col>
					<Col xs={24} md={12}>
						<div className={styles.teamImage}>
							<img
								src='/assets/images/team-photo.png'
								alt='team members'
								width='100%'
								height='100%'
							/>
						</div>
					</Col>
				</Row>
				{width < 2500 && (
					<Row>
						<Col xs={24}>
							<Button
								type='primary'
								id={styles.currentOpeningsButton}
								onClick={() => router.push('/careers')}
							>
								view current openings ???
							</Button>
						</Col>
					</Row>
				)}
			</div>
		</div>
	)
}

export default About
