import { Action, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { joinWaitlistApi, skipWaitlistApi } from './WaitlistAPI'

export type SuccessObjectType = {
	email: string
	linkedinUrl: string
	phoneNumber: string
}

export type SuccessObjectTypeForSkipWaitlist = {
	id: string
	name: string
}

export const joinWaitlist = createAsyncThunk(
	'users/joinWaitlist',
	async (
		{ email, linkedinUrl, phoneNumber }: SuccessObjectType,
		{ rejectWithValue }
	) => {
		try {
			const response = await joinWaitlistApi(email, linkedinUrl, phoneNumber)
			console.log('response', response.data)

			return response.data
		} catch (error: any) {
			console.error(error)
			return rejectWithValue({ message: error.response.data })
		}
	}
)

export const skipWaitlist = createAsyncThunk(
	'users/skipWaitlist',
	async (
		{ id, name }: SuccessObjectTypeForSkipWaitlist,
		{ rejectWithValue }
	) => {
		try {
			const response = await skipWaitlistApi(id, name)
			console.log('response', response.data)

			return response.data
		} catch (error: any) {
			console.error(error)
			return rejectWithValue({ message: error.response.data })
		}
	}
)

const initialState = {
	status: 'idle',
	waitlist: null,
	message: null,
	skipWaitlistModal: {
		isOpen: false,
		data: {
			payload: {
				id: '',
				email: '',
				phoneNumber: '',
				linkedinUrl: '',
			},
		},
	},
	congratsModal: {
		isOpen: false,
		data: {
			referralName: '',
			payload: {
				payload: {
					id: '',
					email: '',
					phoneNumber: '',
					linkedinUrl: '',
				},
			},
		},
	},
}

export interface ActionWithPayload<T> extends Action {
	payload: T
}

export const userSlice = createSlice({
	name: 'waitlist',
	initialState,
	reducers: {
		openSkipWaitlistModal: (state, action) => {
			state.status = 'success'
			state.skipWaitlistModal = {
				...state.skipWaitlistModal,
				isOpen: true,
				data: action.payload,
			}
		},
		openCongratsModal: (state, action: any) => {
			state.status = 'success'
			state.skipWaitlistModal = {
				...state.skipWaitlistModal,
				isOpen: false,
			}
			state.congratsModal = {
				...state.congratsModal,
				isOpen: true,
				data: action.payload,
			}
		},
		closeModal: (state) => {
			state.status = 'success'
			state.skipWaitlistModal = {
				...state.skipWaitlistModal,
				isOpen: false,
				data: {
					payload: {
						id: '',
						email: '',
						phoneNumber: '',
						linkedinUrl: '',
					},
				},
			}
			state.congratsModal = {
				...state.congratsModal,
				isOpen: false,
				data: {
					referralName: '',
					payload: {
						payload: {
							id: '',
							email: '',
							phoneNumber: '',
							linkedinUrl: '',
						},
					},
				},
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(joinWaitlist.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(joinWaitlist.fulfilled, (state, action) => {
				state.waitlist = action.payload
				state.message = action.payload.message
			})
			.addCase(joinWaitlist.rejected, (state, action: any) => {
				state.status = 'error'
				state.message = action.payload.message
			})
			.addCase(skipWaitlist.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(skipWaitlist.fulfilled, (state, action) => {
				state.waitlist = action.payload
				state.message = action.payload.message
			})
			.addCase(skipWaitlist.rejected, (state, action: any) => {
				state.status = 'error'
				state.message = action.payload.message
			})
	},
})

export const { openSkipWaitlistModal, openCongratsModal, closeModal } =
	userSlice.actions

export default userSlice.reducer
