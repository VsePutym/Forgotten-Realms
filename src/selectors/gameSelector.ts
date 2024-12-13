import { RootState } from '../stores/store.tsx'

export const gameSelector = {
	levelGame: (state: RootState) => state.game.levelGame,
	Instructions: (state: RootState) => state.game.Instructions,
	showNewSkills: (state: RootState) => state.game.showNewSkills,
	namePlanet: (state: RootState) => state.game.namePlanet,
	endGame: (state: RootState) => state.game.endGame,
	titre: (state: RootState) => state.game.titre,
	historyLevel: (state: RootState) => state.game.historyLevel
}