import { Button, Form, Input } from 'antd'
import React from 'react'
import styles from './Waitlist.module.css'

function Waitlist() {
	const [form] = Form.useForm()

	return (
		<div className={styles.waitlistContainer}>
			<Form layout='vertical' form={form}>
				<Form.Item
					className={styles.inputLabel}
					style={{ marginBottom: '66px' }}
					label='email'
				>
					<Input className={styles.input} placeholder='gal@gadot.com' />
				</Form.Item>
				<Form.Item
					className={styles.inputLabel}
					style={{ marginBottom: '49px' }}
					label='linkedin profile link'
				>
					<Input
						className={styles.input}
						placeholder='we want to know you better'
					/>
				</Form.Item>
				<Form.Item
					className={styles.inputLabel}
					style={{ marginBottom: '38px' }}
					label={
						<p>
							phone number <br />
							<span className={styles.spanText}>
								(this will help us contact you faster. we will never spam)
							</span>
						</p>
					}
				>
					<Input
						className={styles.input}
						placeholder='we want to know you better'
					/>
				</Form.Item>
				<Form.Item
					style={{
						marginBottom: '12px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Button type='primary' id={styles.buttonPrimary}>
						explore the membership
					</Button>
				</Form.Item>
			</Form>
			<p className={styles.bottomText}>
				we will email more info on the membership. we onboard a limited number
				of members every month and sell out fast.
			</p>
		</div>
	)
}

export default Waitlist
