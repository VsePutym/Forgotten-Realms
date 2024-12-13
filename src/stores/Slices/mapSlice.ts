import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MapsTypes } from '../../type/mapsTypes.ts'

const initialValue: MapsTypes = {
	currentDistance: 0,
	minDistanceX: 0,
	maxDistanceX: 0,
	artifacts: [],
	showPortal: false
}

const mapSlice = createSlice({
	name: 'mapSlice',
	initialState: initialValue,
	reducers: {
		setCurrentDistance(state, action) {
			state.currentDistance = action.payload
		},
		setArtifacts(state, action: PayloadAction<string>) {
			state.artifacts.push(action.payload)
		},
		setShowPortal(state, action: PayloadAction<boolean>) {
			state.showPortal = action.payload
		},
		setMinDistanceX(state, action: PayloadAction<number>) {
			state.minDistanceX = action.payload
		},
		setResetArtifacts(state){
			state.artifacts = []
		}
	}
})

export const {
	setCurrentDistance,
	setArtifacts,
	setShowPortal,
	setMinDistanceX,
	setResetArtifacts
} = mapSlice.actions
export default mapSlice.reducer