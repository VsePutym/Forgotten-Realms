import { RootState } from '../stores/store.tsx'

export const BosseSelector = {
	specialAttack1: (state: RootState) => state.bosse.specialAttack1,
	specialAttack2: (state: RootState) => state.bosse.specialAttack2
}