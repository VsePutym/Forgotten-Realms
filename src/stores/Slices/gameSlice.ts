import { createSlice } from '@reduxjs/toolkit'
import { GameTypes } from '../../type/gameTypes.ts'

const initialState: GameTypes = {
	levelGame: 1,
	Instructions: true,
	GameOver: false,
	showNewSkills: false,
	namePlanet: false,
	endGame: false,
	titre: false,
	historyLevel: true
}

const gameSlice = createSlice({
	name: 'gameSlice',
	initialState: initialState,
	reducers: {
		setInstructions: (state, action) => {
			state.Instructions = action.payload
		},
		setNewLevelGame: (state) => {
			state.levelGame = state.levelGame + 1
		},
		setShowNewSkills: (state, action) => {
			state.showNewSkills = action.payload
		},
		setNamePlanet: (state, action) => {
			state.namePlanet = action.payload
		},
		setEndGame: (state, action) => {
			state.endGame = action.payload
		},
		setTitre: (state, action) => {
			state.titre = action.payload
		},
		setHistoryLevel: (state, action) => {
			state.historyLevel = action.payload
		}
	}
})

export const {setInstructions, setHistoryLevel, setTitre, setEndGame, setNewLevelGame, setNamePlanet, setShowNewSkills} = gameSlice.actions
export default gameSlice.reducer