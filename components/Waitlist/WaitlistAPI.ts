import axios from 'axios'

export const joinWaitlistApi = (
	email: string,
	linkedinUrl: string,
	phoneNumber: string
) => {
	return axios.post(
		'https://e0fza830j9.execute-api.ap-south-1.amazonaws.com/Prod/newwaitlist',
		{
			email: email.toLowerCase().trim(),
			linkedinUrl: linkedinUrl.trim(),
			phoneNumber: phoneNumber.trim(),
		}
	)
}

export const skipWaitlistApi = (id: string, name: string) => {
	return axios.patch(
		'https://e0fza830j9.execute-api.ap-south-1.amazonaws.com/Prod/newwaitlist',
		{
			id: id,
			referralName: name.trim(),
		}
	)
}
