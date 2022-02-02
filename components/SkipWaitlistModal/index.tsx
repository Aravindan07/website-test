import { Button, Input, Modal } from 'antd'
import Text from 'antd/lib/typography/Text'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import {
	closeModal,
	openCongratsModal,
	skipWaitlist,
} from 'components/Waitlist/WaitlistSlice'
import React, { useState } from 'react'
import styles from './SkipWaitlistModal.module.css'

function SkipWaitlistModal() {
	const [confirmLoading, setConfirmLoading] = useState(false)
	const [referralName, setReferralName] = useState('')
	const [errorMsg, setErrorMsg] = useState('')

	const dispatch = useAppDispatch()
	const waitlist = useAppSelector((state) => state.waitlist)

	const onChangeHandler = (e: any) => {
		if (e.target.value.length > 0) {
			setErrorMsg('')
		}
		setReferralName(e.target.value)
	}

	const onSubmit = async () => {
		if (!referralName) {
			return setErrorMsg('please enter a referral name')
		}
		try {
			setConfirmLoading(true)
			const data = await dispatch(
				skipWaitlist({
					id: waitlist.skipWaitlistModal.data?.payload.id!,
					name: referralName,
				})
			)
			console.log('data', data)
			setConfirmLoading(false)
			await dispatch(
				openCongratsModal({
					payload: waitlist.skipWaitlistModal.data,
					referralName,
				})
			)
		} catch (error) {
			console.error(error)
			setConfirmLoading(false)
		}
	}

	const renderFooter = (
		<div
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'flex-start',
				paddingLeft: '2rem',
				paddingRight: '2rem',
			}}
		>
			<Button
				key='submit'
				type='primary'
				id={styles.buttonPrimary}
				htmlType='submit'
				// loading={loading}
				onClick={onSubmit}
			>
				Submit
			</Button>
		</div>
	)

	return (
		<Modal
			// title='Title'
			centered
			visible={waitlist.skipWaitlistModal.isOpen}
			confirmLoading={confirmLoading}
			onCancel={() => dispatch(closeModal())}
			bodyStyle={{
				paddingBottom: '0rem',
				paddingRight: '3rem',
				paddingLeft: '3rem',
			}}
			footer={renderFooter}
			className={styles.modalContainer}
		>
			<div
				style={{
					marginTop: '1.5rem',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Text id={styles.headingText}>
					thank you! 13,000+ women are ahead of you on the waitlist.{' '}
					<b>
						there is a hack to jump straight to the top and become a member now
						😉
					</b>
				</Text>
				<Text id={styles.subText}>
					know a member? tell us who. our machines will then take a few seconds
					to calculate if you are eligible to skip the waitlist queue, the
					onboarding call and directly become a member.
				</Text>
				<Input
					className={styles.input}
					placeholder='enter member name'
					onChange={onChangeHandler}
				/>
				<Text style={{ color: 'red' }}>{errorMsg}</Text>
			</div>
		</Modal>
	)
}

export default SkipWaitlistModal
