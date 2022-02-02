import { Button, Collapse, Typography } from 'antd'
import React from 'react'
import styles from './Jobs.module.css'

const { Panel } = Collapse
const { Text } = Typography

function Jobs() {
	return (
		<Collapse bordered={false} expandIconPosition='right' ghost>
			<Panel
				header={'graphic designer'}
				className={styles.panelContainer}
				key={'1'}
			>
				<div className={styles.jobsPanel}>
					<Text id={styles.jobDescription}>
						this is for you if you have a passion to translate ideas into
						innovative designs. you establish, evolve and execute all our
						designs and social media campaigns. 4-6 years prior experience in
						social media content creation (gifs, short/ long form video editing,
						animation) is a must along with an in-depth knowledge of photoshop/
						illustrator/ premier pro++.
					</Text>
					<div>
						<Button
							id={styles.sendmailButton}
							onClick={() => (window.location.href = 'mailto:jobs@leap.club')}
						>
							Send a mail
						</Button>
					</div>
				</div>
			</Panel>

			<Panel
				header={'manager, content and communication'}
				className={styles.panelContainer}
				key={'2'}
			>
				<div className={styles.jobsPanel}>
					<Text id={styles.jobDescription}>
						you&apos;ll be entrusted with the (very important) responsibility of
						being leap&apos;s voice (!) in addition to ensuring the right
						positioning and communication of the product. this means bringing
						your creative a-game to writing copy across the board and working
						closely with our community & business teams; and owning the
						communication calendar & engagement roadmap for members.
						<br />
						you are data oriented, believe that everything can be measured, and
						have a good understanding of funnels, sprint & agile ways of
						working. 4-6 years of content writing experience is a big plus. if
						you spot an error on the above copy - extra brownie points!
					</Text>
					<div>
						<Button
							id={styles.sendmailButton}
							onClick={() => (window.location.href = 'mailto:jobs@leap.club')}
						>
							Send a mail
						</Button>
					</div>
				</div>
			</Panel>

			<Panel
				header={'community intern'}
				className={styles.panelContainer}
				key={'3'}
			>
				<div className={styles.jobsPanel}>
					<Text id={styles.jobDescription}>
						this is for you if you have an eye for detail, great with data and
						willingness to get your hands dirty in building our mission. you
						play a pivotal role in supporting the ops for our engagement
						initiatives and will closely work with the business owners to ensure
						everything runs on track. freshers preferred - this is a full-time
						paid internship for a duration of 6 months.
					</Text>
					<div>
						<Button
							id={styles.sendmailButton}
							onClick={() => (window.location.href = 'mailto:jobs@leap.club')}
						>
							Send a mail
						</Button>
					</div>
				</div>
			</Panel>

			<Panel
				header={'talent acquisition manager'}
				className={styles.panelContainer}
				key={'4'}
			>
				<div className={styles.jobsPanel}>
					<Text id={styles.jobDescription}>
						you will be responsible for end to end lateral, campus and
						leadership hiring process at leap. you will ideate and execute our
						hiring strategies and closely work with multiple stakeholders
						[internal and external]. you will independently own hiring targets
						and build our founding team of a1 players. 4-5 years of relevant
						experience in fast growing start ups is a plus.
					</Text>
					<div>
						<Button
							id={styles.sendmailButton}
							onClick={() => (window.location.href = 'mailto:jobs@leap.club')}
						>
							Send a mail
						</Button>
					</div>
				</div>
			</Panel>

			<Panel
				header={'vp, talent & culture'}
				className={styles.panelContainer}
				key={'5'}
			>
				<div className={styles.jobsPanel}>
					<Text id={styles.jobDescription}>
						you lead our human p&l and drive a high performance culture. we are
						35 in the team today and will be ~80 in this year. you will lead
						employee nps, growth opportunities for the team, recruitment
						(inbound, outbound, campus), employee engagement + everything else
						that fuels our team to give their 100% everyday. this will be a 3
						member team to start with and will scale as the org grows. you will
						directly own leadership hiring. 10+ years of experience in a fast
						paced startup is a huge plus. previous hr experience is not a must.
					</Text>
					<div>
						<Button
							id={styles.sendmailButton}
							onClick={() => (window.location.href = 'mailto:jobs@leap.club')}
						>
							Send a mail
						</Button>
					</div>
				</div>
			</Panel>

			<Panel
				header={'react native app developer'}
				className={styles.panelContainer}
				key={'6'}
			>
				<div className={styles.jobsPanel}>
					<Text id={styles.jobDescription}>
						you own the front end development and maintenance of our mobile
						apps. you work closely with our product and backend engineering
						teams and continuously improve the performance on both code and
						ux/ui level. strong knowledge of react native, programming languages
						and latest technologies with 2+ years experience in app development,
						product design and architecture.
					</Text>
					<div>
						<Button
							id={styles.sendmailButton}
							onClick={() => (window.location.href = 'mailto:jobs@leap.club')}
						>
							Send a mail
						</Button>
					</div>
				</div>
			</Panel>

			<Panel
				header={'senior backend developer'}
				className={styles.panelContainer}
				key={'7'}
			>
				<div className={styles.jobsPanel}>
					<Text id={styles.jobDescription}>
						you will work on a disruptive product that’s in its early stages and
						will be responsible to drive innovation. you&apos;re someone with
						experience in building products that have significant user
						base/revenue, robust backend systems running in production and
						catering to real world users. 3+ years of professional engineering
						with applied knowledge of restful api design principles and best
						practises are a must. you also have experience building & deploying
						cloud based backend systems, operate the backend at low latency,
						high availability, and quality.
					</Text>
					<div>
						<Button
							id={styles.sendmailButton}
							onClick={() => (window.location.href = 'mailto:jobs@leap.club')}
						>
							Send a mail
						</Button>
					</div>
				</div>
			</Panel>

			<Panel
				header={'community manager'}
				className={styles.panelContainer}
				key={'8'}
			>
				<div className={styles.jobsPanel}>
					<Text id={styles.jobDescription}>
						this role is for you if you love (and ace at) building relationships
						and driving success metrics. you are the face of leap and are
						responsible for leading a smooth post onboarding experience for our
						members along with analysing data to improve member experience and
						community engagement. you have an action oriented bent of mind, take
						end to end ownership and possess solid interpersonal skills. 1-3
						years of community manager experience is a plus.
					</Text>
					<div>
						<Button
							id={styles.sendmailButton}
							onClick={() => (window.location.href = 'mailto:jobs@leap.club')}
						>
							Send a mail
						</Button>
					</div>
				</div>
			</Panel>

			<Panel
				header={'business development intern'}
				className={styles.panelContainer}
				key={'9'}
			>
				<div className={styles.jobsPanel}>
					<Text id={styles.jobDescription}>
						this is for you if you have an eye for detail and are willing to
						invest the time in building our mission. you would help us identify
						and reach out to women who are the right fit for the leap.club
						membership via social channels. freshers preferred- this is a
						full-time paid internship.
					</Text>
					<div>
						<Button
							id={styles.sendmailButton}
							onClick={() => (window.location.href = 'mailto:jobs@leap.club')}
						>
							Send a mail
						</Button>
					</div>
				</div>
			</Panel>

			<Panel
				header={'data analyst'}
				className={styles.panelContainer}
				key={'10'}
			>
				<div className={styles.jobsPanel}>
					<Text id={styles.jobDescription}>
						this role is for you if you breathe data and have exceptional
						analytical, problem solving, and research skills. you will be
						working with the marketing and community team to lead day to day
						data analysis requirements, be on top of data to help develop
						actionable insights and solve real problems. 1-3 years of experience
						as an analyst in a high growth startup or a management consulting is
						a huge plus.
					</Text>
					<div>
						<Button
							id={styles.sendmailButton}
							onClick={() => (window.location.href = 'mailto:jobs@leap.club')}
						>
							Send a mail
						</Button>
					</div>
				</div>
			</Panel>

			<Panel
				header={'member onboarding manager'}
				className={styles.panelContainer}
				key={'11'}
			>
				<div className={styles.jobsPanel}>
					<Text id={styles.jobDescription}>
						you are responsible for onboarding new members and comfortable with
						owning targets. the ideal candidate will have 3-5 years of sales
						experience in a fast-growing startup. female candidates preferred
						since we are building a network for women.
					</Text>
					<div>
						<Button
							id={styles.sendmailButton}
							onClick={() => (window.location.href = 'mailto:jobs@leap.club')}
						>
							Send a mail
						</Button>
					</div>
				</div>
			</Panel>

			<Panel
				header={'vp, product'}
				className={styles.panelContainer}
				key={'12'}
			>
				<div className={styles.jobsPanel}>
					<Text id={styles.jobDescription}>
						our 0-1 journey is done (🤞) and we are now ready to scale. you will
						lead this product-led journey for us - including our product
						strategy, vision and roadmap, and obsess about building the best
						product in town (read: world). you’re technically adept in ui & ux,
						love data and back your gut. you agree that speed-to-execution is
						our biggest moat and work with multiple stakeholders. 8+ years of
						experience in building world class consumer tech products
						(preferably in a fast growing start up).
					</Text>
					<div>
						<Button
							id={styles.sendmailButton}
							onClick={() => (window.location.href = 'mailto:jobs@leap.club')}
						>
							Send a mail
						</Button>
					</div>
				</div>
			</Panel>
		</Collapse>
	)
}

export default Jobs
