import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import styles from './Waitlist.module.css'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { joinWaitlist, openSkipWaitlistModal } from './WaitlistSlice'

function Waitlist() {
	const [form] = Form.useForm()
	const dispatch = useAppDispatch()
	const state = useAppSelector((state) => state)
	const [loading, setLoading] = useState(false)

	const validateEmail = (email: string) => {
		const regex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return regex.test(email)
	}

	const onFinish = async (values: any) => {
		console.log('Success:', values)
		try {
			setLoading(true)
			const data = await dispatch(
				joinWaitlist({
					email: values.email,
					linkedinUrl: values.linkedinProfileLink,
					phoneNumber: values.phoneNumber,
				})
			)
			console.log('data', data)
			setLoading(false)
			await dispatch(openSkipWaitlistModal({ payload: data.payload }))
		} catch (error) {
			console.error(error)
			setLoading(false)
		}
	}

	console.log('state', state)
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
					rules={[
						{
							required: true,
							message: 'please enter your email',
						},
						() => ({
							validator(_, value) {
								if (!value) {
									return Promise.reject()
								}
								if (!validateEmail(value.toLowerCase())) {
									return Promise.reject('please enter a valid email')
								}
								return Promise.resolve()
							},
						}),
					]}
				>
					<Input className={styles.input} placeholder='gal@gadot.com' />
				</Form.Item>
				<Form.Item
					className={styles.inputLabel}
					label='linkedin profile link'
					name='linkedinProfileLink'
					rules={[
						{ required: true, message: 'please enter your linkedin profile' },
					]}
				>
					<Input
						className={styles.input}
						placeholder='we want to know you better'
					/>
				</Form.Item>
				<Form.Item
					className={styles.phoneInputLabel}
					label={
						<div>
							phone number <br />
							<span className={styles.spanText}>
								(this will help us contact you faster. we will never spam)
							</span>
						</div>
					}
					// {/* <span className={styles.spanText}>
					// 			(this will help us contact you faster. we will never spam)
					// 		</span> */}
					name='phoneNumber'
					rules={[
						{
							required: true,
							message: 'please enter your phone number',
							// pattern: new RegExp(/^[0-9]+$/),
						},
						() => ({
							validator(_, value) {
								if (!value) {
									return Promise.reject()
								}
								if (isNaN(value)) {
									return Promise.reject('please enter a valid phone number')
								}
								if (value.length < 10) {
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
					{/* <label>
						<span className={styles.spanText}>
							(this will help us contact you faster. we will never spam)
						</span>
					</label> */}
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
					<Button
						type='primary'
						htmlType='submit'
						id={styles.buttonPrimary}
						loading={loading}
					>
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
