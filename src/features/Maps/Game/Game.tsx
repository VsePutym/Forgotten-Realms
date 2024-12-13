import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { gameSelector } from '../../../selectors/gameSelector.ts'
import { HeroSelector } from '../../../selectors/HeroSelectors.ts'
import { MapsSelectors } from '../../../selectors/mapsSelectors.ts'
import { setEndGame, setNamePlanet, setShowNewSkills } from '../../../stores/Slices/gameSlice.ts'
import { setIsDying } from '../../../stores/Slices/heroSlice';
import { setShowPortal } from '../../../stores/Slices/mapSlice'
import { levelGameType } from '../../../type/gameTypes.ts'
import BosseController from '../../BosseController/BosseController';
import EnemiesController from '../../EnemiesController/EnemiesController';
import GameController from '../../GameController/GameController';
import InterfaceController from '../../InterfaceController/InterfaceController.tsx'
import Maps from '../Maps';



const Game:FC<levelGameType> = ({frameBosse, animatedBoss, enemyAnimation, MapData, platformsImg, mapBG, ObjectsMap, platforms, artifactsDate, healthsDate, initialEnemies, heroDate, dateBosse, portalDate}) => {
	const [enemies, setEnemies] = useState(initialEnemies);
	const [heroHP, setHeroHP] = useState(heroDate.heroHP);
	const [bosse, setBosse] = useState(dateBosse);
	const [spawnBosse, setSpawnBosse] = useState(false);
	const [artifacts, setArtifacts] = useState(artifactsDate);
	const [healths, setHealth] = useState(healthsDate);
	const dispatch = useAppDispatch();
	const gameLevel = useAppSelector(gameSelector.levelGame);
	const haveArtifacts = useAppSelector(MapsSelectors.artifacts);
	const heroLevel = useAppSelector(HeroSelector.levelHero)
	
	useEffect(() => {
		if(heroLevel <= 4){
			dispatch(setShowNewSkills(true))
		}
		if(heroLevel > 4){
			dispatch(setNamePlanet(true))
			setTimeout(() => {
				dispatch(setNamePlanet(false))
			},6000)
		}
	},[heroLevel])
	
	useEffect(() => {
		if(gameLevel === 8 && bosse.isDying && spawnBosse){
			dispatch(setEndGame(true))
		}
	},[bosse.isDying])
	
	useEffect(() => {
		if (enemies.length === 0) {
			setSpawnBosse(true);
		}
		
		if (heroHP <= 0) {
			dispatch(setIsDying(true));
		}
		
		if (bosse.isDying && haveArtifacts.length === 6) {
			dispatch(setShowPortal(true));
		}
	}, [enemies, heroHP, bosse.isDying, haveArtifacts]);
	return (
		<div>
			<Maps
				frameBosse={frameBosse}
				animatedBoss={animatedBoss}
				enemyAnimation={enemyAnimation}
				key={gameLevel}
				platformsImg={platformsImg}
				MapData={MapData}
				mapBG={mapBG}
				ObjectsMap={ObjectsMap}
				healths={healths}
				portalDate={portalDate}
				heroHP={heroHP} heroDate={heroDate}
				artifacts={artifacts}
				bosse={bosse}
				spawnBosse={spawnBosse}
				platforms={platforms}
				Enemies={enemies}
			/>
			
			<GameController key='gameController'
				portalPosition={portalDate}
				maxHeroHP={heroDate.maxHeroHP}
				upDateHealth={setHealth}
				currentHPHero={heroHP}
				updateHeroHP={setHeroHP}
				healths={healths}
				onUpdateArtifacts={setArtifacts}
				platforms={platforms}
				artifacts={artifacts}
			/>
			{spawnBosse && (
				<BosseController key='bosseController'
					currentHPHero={heroHP}
					updateHeroHP={setHeroHP}
					onUpdate={setBosse}
					bosse={bosse}
				/>
			)}
			{enemies.length > 0 && (
				<EnemiesController key='enemiesController'
					currentHPHero={heroHP}
					updateHeroHP={setHeroHP}
					initialEnemies={initialEnemies}
					onUpdate={setEnemies}
				/>
			)}
			<InterfaceController />
		</div>
	);
};

export default Game;
