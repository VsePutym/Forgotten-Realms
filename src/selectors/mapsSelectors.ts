import { RootState } from '../stores/store.tsx'

export const MapsSelectors = {
	currentDistance: (state: RootState) => state.maps.currentDistance,
	minDistanceX: (state: RootState) => state.maps.minDistanceX,
	maxDistanceX: (state: RootState) => state.maps.maxDistanceX,
	artifacts: (state: RootState) => state.maps.artifacts,
	showPortal: (state: RootState) => state.maps.showPortal
}