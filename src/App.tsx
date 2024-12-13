import GameOver from './components/GameOver/GameOver.tsx'
import Instructions from './components/Instructions/Instructions.tsx'
import NewSkills from './components/NewSkills/NewSkills.tsx'
import GameLevelProvider from './features/GameLevelProvider/GameLevelProvider.tsx'
import HeroController from './features/HeroController/HeroController.tsx'
import { useAppSelector } from './hooks/hooks.ts'
import { gameSelector } from './selectors/gameSelector.ts'
import * as theEnd from './DataMaps/endGameText.ts'
import { HeroSelector } from './selectors/HeroSelectors.ts'
import Titre from './Titre/Titre.tsx'

function App() {
	const InstructionsSelect = useAppSelector(gameSelector.Instructions)
	const showNewSkills = useAppSelector(gameSelector.showNewSkills)
	const endGame = useAppSelector(gameSelector.endGame);
	const gameOver = useAppSelector(HeroSelector.isDying)
	console.log(gameOver)
	return (
		<div>
			{gameOver && (<GameOver />)}
			{endGame ? (<Titre text={theEnd.titre.text} />) : (
				<div>
					{InstructionsSelect  ? <Instructions /> : (
						<div>
							<GameLevelProvider />
							<HeroController />
							{showNewSkills && <NewSkills />}
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default App
