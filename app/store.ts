import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import sidebarReducer from 'components/Layout/LayoutSlice'
import waitlistReducer from 'components/Waitlist/WaitlistSlice'

export function makeStore() {
	return configureStore({
		reducer: { sidebar: sidebarReducer, waitlist: waitlistReducer },
	})
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>

export default store
