import { Col, Row } from 'antd'
import Jumbotron from 'components/Jumbotron'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>leap.club | more women in leadership positions</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Row>
				<Col span={12}>
					<Jumbotron></Jumbotron>
				</Col>
				<Col span={12}>waitlist</Col>
			</Row>
			<Row>company logos</Row>
			<Row> testimonials</Row>
			<Row>video sneak peak</Row>
			<Row>ad videos</Row>
			<Row>end heading</Row>
		</div>
	)
}

export default Home
