import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BosseSpecialAttack } from '../../type/enemies.ts'


const initialValue: BosseSpecialAttack = {
	specialAttack1: false,
	specialAttack2: false,
}


const bosseSlice = createSlice({
	name: 'bosse',
	initialState: initialValue,
	reducers: {
		setSpecialAttack1(state, action: PayloadAction<boolean>) {
			state.specialAttack1 = action.payload;
		},
		setSpecialAttack2(state, action: PayloadAction<boolean>) {
			state.specialAttack2 = action.payload
		},
	}
});

export default bosseSlice.reducer;
export const {
	setSpecialAttack1,
	setSpecialAttack2
} = bosseSlice.actions