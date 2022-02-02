import { Button, Modal } from 'antd'
import Text from 'antd/lib/typography/Text'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { closeModal } from 'components/Waitlist/WaitlistSlice'
import styles from 'components/SkipWaitlistModal/SkipWaitlistModal.module.css'
import axios from 'axios'

function CongratsModal() {
	const dispatch = useAppDispatch()
	const waitlist = useAppSelector((state) => state.waitlist)

	const onOpenNewTab = () => {
		let a = document.createElement('a')
		a.href = `https://members.leap.club/payment?email=${waitlist.congratsModal.data?.payload.payload.email}&phonenumber=${waitlist.congratsModal.data?.payload.payload.phoneNumber}&waitlistId=${waitlist.congratsModal.data?.payload.payload.id}`
		a.setAttribute('target', '_blank')
		a.click()
		dispatch(closeModal())
	}

	const onSubmit = async () => {
		try {
			const response = await axios.patch(
				'https://e0fza830j9.execute-api.ap-south-1.amazonaws.com/Prod/payment-visited',
				{ id: waitlist.congratsModal.data?.payload.payload.id }
			)
			console.log(response)
		} catch (error: any) {
			console.error(error)
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
				onClick={() => {
					onSubmit()
					onOpenNewTab()
				}}
			>
				let&apos;s do it
			</Button>
		</div>
	)

	return (
		<Modal
			// title='Title'
			centered
			visible={waitlist.congratsModal.isOpen}
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
					woohoo! we love {waitlist.congratsModal.data?.referralName} and are
					thrilled to bump you up the waitlist. it&apos;s your time to join
					thousands of women leaders in challenging the status quo.
				</Text>
				<br></br>
				<Text id={styles.headingText} style={{ fontWeight: 'bold' }}>
					please make the payment now. the payment option will only be valid for
					the next 72 hours. in case you choose not to pay, you go back on the
					waiting list and we will get in touch with you as soon as we can.
				</Text>
			</div>
		</Modal>
	)
}

export default CongratsModal
