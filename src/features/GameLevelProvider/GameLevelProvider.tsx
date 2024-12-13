import { useEffect, useState } from 'react';
import StartTextMap from '../../components/StartTextMap/StartTextMap.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import { gameSelector } from '../../selectors/gameSelector.ts';
import { setMinDistanceX } from '../../stores/Slices/mapSlice.ts';
import Game from '../Maps/Game/Game.tsx';
import * as levelGame1 from '../../DataMaps/Maps_1.ts';
import * as levelGame2 from '../../DataMaps/Maps_2.ts';
import * as levelGame3 from '../../DataMaps/Maps_3.ts';
import * as levelGame4 from '../../DataMaps/Maps_4.ts';
import * as levelGame5 from '../../DataMaps/Maps_5.ts';
import * as levelGame6 from '../../DataMaps/Maps_6.ts';
import * as levelGame7 from '../../DataMaps/Maps_7.ts';
import * as levelGame8 from '../../DataMaps/Maps_8.ts';

const textLevelMap1 = levelGame1.textDate.text;
const textLevelMap2 = levelGame2.textDate.text;
const textLevelMap3 = levelGame3.textDate.text;
const textLevelMap4 = levelGame4.textDate.text;
const textLevelMap5 = levelGame5.textDate.text;
const textLevelMap6 = levelGame6.textDate.text;
const textLevelMap7 = levelGame7.textDate.text;
const textLevelMap8 = levelGame8.textDate.text;

const GameLevelProvider = () => {
	const gameLevel = useAppSelector(gameSelector.levelGame);
	const dispatch = useAppDispatch();
	const historyLevel = useAppSelector(gameSelector.historyLevel);
	const [isReady, setIsReady] = useState(false);
	
	// Логика для обновления перед отображением Game
	useEffect(() => {
		if (!historyLevel) {
			setIsReady(false); // Ожидаем настройки перед отображением Game
			if (gameLevel === 1) {
				dispatch(setMinDistanceX(levelGame1.MapData.minDistanceX));
			} else if (gameLevel === 2) {
				dispatch(setMinDistanceX(levelGame2.MapData.minDistanceX));
			} else if (gameLevel === 3) {
				dispatch(setMinDistanceX(levelGame3.MapData.minDistanceX));
			} else if (gameLevel === 4) {
				dispatch(setMinDistanceX(levelGame4.MapData.minDistanceX));
			} else if (gameLevel === 5) {
				dispatch(setMinDistanceX(levelGame5.MapData.minDistanceX));
			} else if (gameLevel === 6) {
				dispatch(setMinDistanceX(levelGame6.MapData.minDistanceX));
			} else if (gameLevel === 7) {
				dispatch(setMinDistanceX(levelGame7.MapData.minDistanceX));
			} else if (gameLevel === 8) {
				dispatch(setMinDistanceX(levelGame8.MapData.minDistanceX));
			}
		
			// Задержка, чтобы гарантировать, что данные установлены
			setTimeout(() => setIsReady(true), 0); // Мгновенно после диспетча
		}
	}, [gameLevel,historyLevel, dispatch]);
	
	// Логика для отображения контента
	const getGameContent = () => {
		if (gameLevel === 1) {
			return historyLevel ? (
				<StartTextMap  text={textLevelMap1} />
			) : (
				isReady && <Game key="1" {...levelGame1} />
			);
		}
		if (gameLevel === 2) {
			return historyLevel ? (
				<StartTextMap  text={textLevelMap2} />
			) : (
				isReady && <Game key="2" {...levelGame2} />
			);
		}
		if (gameLevel === 3) {
			return historyLevel ? (
				<StartTextMap  text={textLevelMap3} />
			) : (
				isReady && <Game key="3" {...levelGame3} />
			);
		}
		if (gameLevel === 4) {
			return historyLevel ? (
				<StartTextMap  text={textLevelMap4} />
			) : (
				isReady && <Game key="4" {...levelGame4} />
			);
		}
		if (gameLevel === 5) {
			return historyLevel ? (
				<StartTextMap  text={textLevelMap5} />
			) : (
				isReady && <Game key="5" {...levelGame5} />
			);
		}
		if (gameLevel === 6) {
			return historyLevel ? (
				<StartTextMap  text={textLevelMap6} />
			) : (
				isReady && <Game key="6" {...levelGame6} />
			);
		}
		if (gameLevel === 7) {
			return historyLevel ? (
				<StartTextMap  text={textLevelMap7} />
			) : (
				isReady && <Game key="7" {...levelGame7} />
			);
		}
			if (gameLevel === 8) {
				return historyLevel ? (
					<StartTextMap text={textLevelMap8} />
				) : (
					isReady && <Game key="8" {...levelGame8} />
				);
		}
		return <p>Уровень игры не определён!</p>;
	};
	
	return <div>{getGameContent()}</div>;
};

export default GameLevelProvider;
