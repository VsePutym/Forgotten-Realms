import { combineReducers, configureStore } from '@reduxjs/toolkit'
import bosseSlice from './Slices/bosseSlice.ts'
import gameSlice from './Slices/gameSlice.ts'

import heroSlice from './Slices/heroSlice.ts'
import mapSlice from './Slices/mapSlice.ts'

const rootReducer = combineReducers({
	hero: heroSlice,
	maps: mapSlice,
	bosse: bosseSlice,
	game: gameSlice
});

export const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch