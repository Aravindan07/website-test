/* eslint-disable @next/next/next-script-for-ga */
import { Col, Row } from 'antd'
import AdVideos from 'components/AdVideos'
import CongratsModal from 'components/CongratsModal'
import EndSection from 'components/EndSection'
import Jumbotron from 'components/Jumbotron'
import MembersCompanies from 'components/MembersCompanies'
import SkipWaitlistModal from 'components/SkipWaitlistModal'
import SneakPeak from 'components/SneakPeak'
import Testimonials from 'components/Testimonials'
import Waitlist from 'components/Waitlist'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	const onClickHandler = () => {
		document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div>
			<Head>
				<title>leap.club | more women in leadership positions</title>
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
				<link rel='shortcut icon' href='/favicon32.ico' />
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
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/leap-new-logo.png'
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
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/leap-new-logo.png'
				/>
				<meta
					name='twitter:description'
					content='a community led professional network for women. make new connections, join communities, and access exclusive experiences.'
				/>
				<meta
					property='twitter:card'
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/leap-new-logo.png'
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
					content='https://s3.ap-south-1.amazonaws.com/leap.club/assets/leap-new-logo.png'
				/>
				<link rel='preconnect' href='https://fonts.gstatic.com' />
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

			{/* Loading Modals */}
			<SkipWaitlistModal />
			<CongratsModal />
			{/*End of Loading Modals */}

			<Row className={styles.mainSectionWrapper}>
				<Col xs={24} md={12} xxl={9}>
					<Jumbotron />
				</Col>
				<Col xs={24} md={11} id='waitlist'>
					<Waitlist />
				</Col>
			</Row>
			<Row className={styles.membersCompaniesWrapper}>
				<Col span={24}>
					<MembersCompanies />
				</Col>
			</Row>
			<Row className={styles.testimonialsContainer}>
				<Col span={24}>
					<Testimonials />
				</Col>
			</Row>
			<Row className={styles.sneakPeakWrapper}>
				<Col span={24}>
					<SneakPeak />
				</Col>
			</Row>
			<Row className={styles.adVideosContainer}>
				<Col span={24}>
					<AdVideos />
				</Col>
			</Row>
			<Row className={styles.endSectionContainer}>
				<Col span={24}>
					<EndSection onClickHandler={onClickHandler} />
				</Col>
			</Row>
		</div>
	)
}

export default Home
