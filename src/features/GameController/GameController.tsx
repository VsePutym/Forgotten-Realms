import throttle from 'lodash/throttle';
import * as React from 'react'
import { useEffect, useRef, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import { MapsSelectors } from '../../selectors/mapsSelectors.ts';
import {
	setActiveSkillForce, setActiveSpecialAttack2, setActiveSpecialAttack3,
	setHeroPositionY, setHeroSpecialAttack2, setHeroSpecialAttack3,
	setIsRunning,
	setJump,
	setMovingRight,
	setNewLevelHero, specialSkillForce
} from '../../stores/Slices/heroSlice.ts'
import { setHistoryLevel, setNewLevelGame } from '../../stores/Slices/gameSlice.ts'
import { setArtifacts, setCurrentDistance, setResetArtifacts, setShowPortal } from '../../stores/Slices/mapSlice.ts'
import { Artifacts, healthsProps, PlatformTypes, PortalProps } from '../../type/mapsTypes.ts'


interface MapsTypes {
	platforms: PlatformTypes[];
	artifacts: Artifacts[],
	healths: healthsProps[],
	onUpdateArtifacts: (updateArtifacts: Artifacts[]) => void;
	updateHeroHP: (updatedHeroHP: number) => void;
	upDateHealth: (updatedHealth: healthsProps[]) => void;
	currentHPHero: number,
	maxHeroHP: number,
	portalPosition: PortalProps
	
}

const GameController:React.FC<MapsTypes> = ({platforms, portalPosition,maxHeroHP, upDateHealth, artifacts, onUpdateArtifacts, healths, currentHPHero, updateHeroHP }) => {
	const platformsRef = useRef<PlatformTypes[]>(platforms.map((platform) => ({
		...platform,
		platformY: platform.platformY,
		platformX: platform.platformX,
		platformWidth: platform.platformWidth,
	})))
	const currentDistance = useAppSelector(MapsSelectors.currentDistance);
	const maxDistanceX = useAppSelector(MapsSelectors.maxDistanceX); // Максимальное расстояние по X
	const minDistanceX = useAppSelector(MapsSelectors.minDistanceX); // Минимальное расстояние по X
	const showPortal = useAppSelector(MapsSelectors.showPortal)
	const isAnimating = useRef(true);
	
	
	const showPortalRef = useRef(showPortal)
	const artifactsRef = useRef<Artifacts[]>(artifacts.map((artifact:Artifacts) => ({
		...artifact,
		artifactsY: artifact.artifactsY,
		artifactsX: artifact.artifactsX,
		artifactsWidth: artifact.artifactsWidth,
		artifactsHeight: artifact.artifactsHeight,
		takeArtifact: true
	})))
	const healthsRef = useRef<healthsProps[]>(healths.map((health:healthsProps) => ({
		...health,
		positionY: health.positionY,
		positionX: health.positionX,
		health: health.health,
		takeHealth: true,
		healthWith: health.healthWith
	})))
	const dispatch = useAppDispatch(); // Получаем dispatch для изменения состояния
	const duration = useRef(0); // Хранит направление движения (влево/вправо)
	const currentDistanceRef = useRef(currentDistance); // Хранит текущее расстояние по X


	const jumpStartY = useRef(0); // Начальная позиция Y для прыжка
	const velocityY = useRef(0); // Вертикальная скорость
	const isJumping = useRef(false); // Флаг, указывающий, в прыжке ли персонаж
	const isOnPlatformRef = useRef(false); // Флаг для отслеживания состояния стояния на платформе
	const gravity = 0.7; // Ускорение свободного падения
	const jumpForce = 29; // Начальная сила прыжка
	
//функция для восстановления жизней
	const heroHPRef = useRef(currentHPHero);
	useEffect(() => {
		showPortalRef.current = showPortal
		heroHPRef.current = currentHPHero;
	}, [currentHPHero, showPortal]);
	const checkTakeHealth= () => {
		healthsRef.current.forEach((health) => {
			if(-currentDistanceRef.current >= health.positionX  && -currentDistanceRef.current <= health.positionX + health.healthWith){
				if(jumpStartY.current >= health.positionY -110 && jumpStartY.current <= health.positionY -110  + health.healthWith){
					if(heroHPRef.current < maxHeroHP - 500){
						healthsRef.current = healthsRef.current.filter(e => e !== health);
						updateHeroHP(heroHPRef.current + health.health);
						upDateHealth([...healthsRef.current])
					}
				}
			}
		})
	}
	const checkTakeArtifact = () => {
		artifactsRef.current.map((artifact) => {
			if(-currentDistanceRef.current >= artifact.artifactsX && -currentDistanceRef.current <= artifact.artifactsX + artifact.artifactsWidth){
				if(jumpStartY.current >= artifact.artifactsY -110 && jumpStartY.current <= artifact.artifactsY -110  + artifact.artifactsHeight){
					dispatch(setArtifacts(artifact.img))
					artifactsRef.current = artifactsRef.current.filter(e => e !== artifact);
					onUpdateArtifacts([...artifactsRef.current]);
				}
			}
		})
	}
	const fallToGround = () => {
		if (jumpStartY.current > 0) {
			jumpStartY.current -= 3; // Скорость падения
			dispatch(setHeroPositionY(jumpStartY.current));
			requestAnimationFrame(fallToGround);
		} else {
			// Достигли земли
			jumpStartY.current = 0; // Установите Y на 0
			isJumping.current = false; // Завершите прыжок
			velocityY.current = 0; // Сбросьте скорость
			dispatch(setHeroPositionY(0)); // Обновите позицию Y героя
		}
	};
	
	const resetSkills = () => {
		dispatch(setActiveSkillForce(false))
		dispatch(specialSkillForce(false))
		dispatch(setActiveSpecialAttack2(false))
		dispatch(setActiveSpecialAttack3(false))
		dispatch(setHeroSpecialAttack2(false))
		dispatch(setHeroSpecialAttack3(false))
	}
	const fallToPlatform = (platformY: number) => {
			if (jumpStartY.current > platformY) {
				// Обновляем вертикальную позицию
				jumpStartY.current -= 10;
				jumpStartY.current += velocityY.current;
				dispatch(setJump(true))
				dispatch(setHeroPositionY(jumpStartY.current));
				requestAnimationFrame(() => fallToPlatform(platformY));
			} else {
				// Приземлились на платформу
				dispatch(setJump(false))
				jumpStartY.current = platformY;
				isJumping.current = false;
				velocityY.current = 0;
				dispatch(setHeroPositionY(platformY)); // Устанавливаем позицию на платформе
			}
	};
	const resetMap = () => {
		resetSkills()
		dispatch(setHistoryLevel(true))
		duration.current = 0; // Останавливаем движение
		currentDistanceRef.current = 0;
		dispatch(setCurrentDistance(0))
		isAnimating.current = true;
	}
// Функция для проверки, находится ли персонаж на платформе
	const isOnPlatform = () => {
		return platformsRef.current.find((platform) =>
			jumpStartY.current >= platform.platformY &&
			-currentDistanceRef.current >= platform.platformX &&
			-currentDistanceRef.current <= platform.platformX + platform.platformWidth
		);
	};
	const checkPortalExit = () => {
		if(-currentDistanceRef.current >= portalPosition.portalX - 600  && showPortalRef.current){
			dispatch(setNewLevelGame())
			dispatch(setNewLevelHero())
			dispatch(setHeroPositionY(0))
			dispatch(setResetArtifacts())
			dispatch(setShowPortal(false))
			jumpStartY.current= 0
			isAnimating.current = false;
			resetMap()
		}
	}
	
	const checkPlatformExit = () => {
		// Проверяем, что персонаж не находится в прыжке
		if (!isJumping.current && !isOnPlatform()) {
				isOnPlatformRef.current = false; // Сбрасываем флаг стояния на платформе
				fallToGround();
		}
	};
	

	const startJump = useCallback(() => {
		if (!isJumping.current) {
			velocityY.current = jumpForce;
			isJumping.current = true;
			isOnPlatformRef.current = false; // Сбрасываем флаг при прыжке
		}
	}, []);


	// Функция анимации прыжка
	const animateJump = useCallback(() => {
		if (isJumping.current) {
			dispatch(setJump(true))
			velocityY.current -= gravity; // Применяем гравитацию
			jumpStartY.current += velocityY.current; // Обновляем высоту прыжка
			dispatch(setHeroPositionY(jumpStartY.current)); // Обновляем позицию Y героя
			
			const platform = isOnPlatform();
			if (platform && velocityY.current <= 0) {
				fallToPlatform(platform.platformY)
				dispatch(setJump(false))
			} else if (jumpStartY.current < 0) {
				// Если персонаж достиг земли
				jumpStartY.current = 0;
				isJumping.current = false;
				velocityY.current = 0;
				dispatch(setHeroPositionY(0))
				dispatch(setJump(false))
			} else {
				// Продолжайте анимацию прыжка
				requestAnimationFrame(animateJump);
			}
		}
	}, [dispatch]);
	
	
	const handleMoveMoment = useCallback((direction: number) => {
	
		const newDistance = currentDistanceRef.current + direction * 2; // Скорость
		const clampedDistance = Math.max(minDistanceX, Math.min(newDistance, maxDistanceX));
		currentDistanceRef.current = clampedDistance; // Обновляем расстояние
		dispatch(setCurrentDistance(clampedDistance)); // Обновляем в сторе
		
	}, [dispatch, maxDistanceX, minDistanceX]);
	
	// const throttledHandleMovement = throttle(moveCharacter, 1); // Ограничение частоты обновления

	const throttledHandleMovement = throttle(handleMoveMoment, 1); // Ограничение частоты обновления
	const animated = () => {
		if (!isAnimating.current) return; // Остановите, если анимация выключена
		if (duration.current !== 0) {
			throttledHandleMovement(duration.current);
		}
		requestAnimationFrame(animated); // Запускаем следующую анимацию
	};



	// Обработчик нажатия пробела для прыжка
	const keyJumpDown = (event: KeyboardEvent) => {
		if (event.key === ' ' && !isJumping.current) {
			startJump();
			requestAnimationFrame(animateJump);
		}
	};
	// Обработчик нажатия клавиш влево/вправо
	const ArrowKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'ArrowLeft') {
			if(!isJumping.current) {
				dispatch(setMovingRight(false));
				dispatch(setIsRunning(true)); // Начинаем движение влево
				duration.current = 1; // Устанавливаем направление
			} else {
				duration.current = 1; // Устанавливаем направление
			}
			// Проверяем, находитесь ли вы на платформе или за её пределами
			checkPlatformExit()
			checkTakeArtifact()
			checkTakeHealth()
		} else if (event.key === 'ArrowRight') {
			if(!isJumping.current) {
				duration.current = -1;
				dispatch(setMovingRight(true));
				dispatch(setIsRunning(true)); // Начинаем движение вправо
			} else {
				duration.current = -1; // Устанавливаем направление
			}
			// Проверяем, находитесь ли вы на платформе или за её пределами
			checkPlatformExit()
			checkTakeArtifact()
			checkTakeHealth()
			checkPortalExit()
		}
	};

	// Обработчик отпускания клавиш
	const ArrowKeyUp = () => {
		duration.current = 0; // Останавливаем движение
		dispatch(setIsRunning(false)); // Обновляем состояние
		checkTakeArtifact()
		checkTakeHealth()
	};

	// Устанавливаем обработчики событий
	useEffect(() => {
		window.addEventListener('keydown', ArrowKeyDown);
		window.addEventListener('keyup', keyJumpDown);
		window.addEventListener('keyup', ArrowKeyUp);

		requestAnimationFrame(animated); // Запускаем анимацию

		return () => {
			// Убираем обработчики при размонтировании компонента
			window.removeEventListener('keydown', ArrowKeyDown);
			window.removeEventListener('keyup', keyJumpDown);
			window.removeEventListener('keyup', ArrowKeyUp);
		};
	}, [dispatch]);

	return null; // Компонент ничего не рендерит
};

export default GameController;