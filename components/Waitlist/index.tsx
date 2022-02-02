import { Button, Form, Input } from 'antd'
import React from 'react'
import styles from './Waitlist.module.css'

function Waitlist() {
	const [form] = Form.useForm()

	const onFinish = (values: any) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<div className={styles.waitlistContainer}>
			<Form
				name='basic'
				layout='vertical'
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				form={form}
			>
				<Form.Item
					className={styles.inputLabel}
					label='email'
					name='email'
					rules={[{ required: true, message: 'Please enter your email' }]}
				>
					<Input className={styles.input} placeholder='gal@gadot.com' />
				</Form.Item>
				<Form.Item
					className={styles.inputLabel}
					label='linkedin profile link'
					name='linkedinProfileLink'
					rules={[
						{ required: true, message: 'Please enter your linkedin profile' },
					]}
				>
					<Input
						className={styles.input}
						placeholder='we want to know you better'
					/>
				</Form.Item>
				<Form.Item
					className={styles.inputLabel}
					label={
						<p>
							phone number <br />
							<span className={styles.spanText}>
								(this will help us contact you faster. we will never spam)
							</span>
						</p>
					}
					name='phoneNumber'
					rules={[
						{
							required: true,
							message: 'Please enter a valid phone number',
							pattern: new RegExp(/^[0-9]+$/),
						},
						() => ({
							validator(_, value) {
								if (value.length < 10 && value.length > 0) {
									return Promise.reject(
										"phone number can't be less than 10 digits"
									)
									// return "phone number can't be less than 10 digits"
								}
								if (value.length > 10) {
									return Promise.reject(
										"phone number can't be more than 10 digits"
									)
								}
								return Promise.resolve()
							},
						}),
					]}
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
					<Button type='primary' htmlType='submit' id={styles.buttonPrimary}>
						explore the membership
					</Button>
				</Form.Item>
			</Form>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
				}}
			>
				<div className={styles.bottomText}>
					we will email more info on the membership. we onboard a limited number
					of members every month and sell out fast.
				</div>
			</div>
		</div>
	)
}

export default Waitlist
