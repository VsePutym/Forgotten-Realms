import { FC, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts'
import { HeroSelector } from '../../selectors/HeroSelectors.ts';
import { MapsSelectors } from '../../selectors/mapsSelectors.ts';
import { setSpecialAttack1, setSpecialAttack2 } from '../../stores/Slices/bosseSlice.ts'
import { BosseEnemy } from '../../type/enemies.ts'

interface BosseProps {
	bosse: BosseEnemy;
	onUpdate: (updatedBosse: BosseEnemy) => void;
	updateHeroHP: (updatedHeroHP: number) => void;
	currentHPHero: number
}

const BosseController: FC<BosseProps> = ({ bosse, onUpdate, updateHeroHP, currentHPHero }) => {
	const [moveBosse, setMoveBosse] = useState(true);
	const animationFrameId = useRef<number | null>(null);
	const dispatch = useAppDispatch()
	
	const currentDistance = useAppSelector(MapsSelectors.currentDistance);
	const heroPositionY = useAppSelector(HeroSelector.heroPositionY);
	const isHeroAttacking = useAppSelector(HeroSelector.attacking);
	const isBlock = useAppSelector(HeroSelector.block);
	const heroSpecialAttack2 = useAppSelector(HeroSelector.heroSpecialAttack2);
	const heroSpecialAttack3 = useAppSelector(HeroSelector.heroSpecialAttack3);
	const specialSkillForce = useAppSelector(HeroSelector.specialSkillForce);

	
	const bosseRef = useRef<BosseEnemy>(bosse);
	const heroHPRef = useRef(currentHPHero);
	
	const heroSpecialForceRef = useRef(specialSkillForce)
	const heroSpecialAttack2Ref = useRef(heroSpecialAttack2)
	const heroSpecialAttack3Ref = useRef(heroSpecialAttack3)
	const currentDistanceRef = useRef(currentDistance) // Создаем реф для currentDistance
	const heroPositionYRef = useRef(heroPositionY) // Создаем реф для isHeroAttacking
	const isHeroAttackingRef = useRef(isHeroAttacking) // Создаем реф для isHeroAttacking
	const isBlockRef = useRef(isBlock) // Создаем реф для isHeroAttacking
	
	const progressSpecialRef = useRef(false); // Флаг для отслеживания активного выполнения special атаки
	const progressSpecialRef2 = useRef(false); // Флаг для отслеживания активного выполнения special атаки
	
	const specialAttack1Ref = useRef(false);
	const specialAttack2Ref = useRef(false);
	
	useEffect(() => {
		heroSpecialForceRef.current = specialSkillForce
		heroSpecialAttack2Ref.current = heroSpecialAttack2
		heroSpecialAttack3Ref.current = heroSpecialAttack3
		bosseRef.current = bosse;
		heroHPRef.current = currentHPHero;
		currentDistanceRef.current = currentDistance
		heroPositionYRef.current = heroPositionY
		isBlockRef.current = isBlock
		isHeroAttackingRef.current = isHeroAttacking
	}, [bosse, currentDistanceRef, heroPositionYRef, isHeroAttackingRef, isBlockRef, currentHPHero, heroSpecialAttack2, specialSkillForce, heroSpecialAttack3]);

	const animateBosse = () => {
		const currentBosse = bosseRef.current;
		
		const progressSpecialStart2 = () => {
			if (progressSpecialRef2.current) return; // Если уже выполняется, ничего не делаем
			progressSpecialRef2.current = true; // Устанавливаем флаг
			specialAttack2Ref.current = false
			const updateProgress = () => {
				currentBosse.progressSpecialAttack2 += 0.2;
				// Проверяем, достигли ли мы 100% прогресса
				if (currentBosse.progressSpecialAttack2 >= 100) {
					currentBosse.progressSpecialAttack2 = 0; // Сбрасываем прогресс
					dispatch(setSpecialAttack2(true))
					currentBosse.isAttacking = false;
					specialAttack2Ref.current = true
					// Запускаем сброс через 2 секунды
					setTimeout(() => {
						dispatch(setSpecialAttack2(false))
						progressSpecialRef2.current = false; // Сбрасываем флаг
					}, 2000);
				} else {
					// Продолжаем выполнение через requestAnimationFrame
					requestAnimationFrame(updateProgress);
				}
			};
			
			// Начинаем прогресс
			requestAnimationFrame(updateProgress);
		};
		const progressSpecialStart1 = () => {
			if (progressSpecialRef.current) return; // Если уже выполняется, ничего не делаем
			progressSpecialRef.current = true; // Устанавливаем флаг
			specialAttack1Ref.current = false
			const updateProgress = () => {
				currentBosse.progressSpecialAttack1 += 0.1;
				// Проверяем, достигли ли мы 100% прогресса
				if (currentBosse.progressSpecialAttack1 >= 100) {
					currentBosse.progressSpecialAttack1 = 0; // Сбрасываем прогресс
					dispatch(setSpecialAttack1(true))
					currentBosse.isAttacking = false;
					specialAttack1Ref.current = true
					// Запускаем сброс через 2 секунды
					setTimeout(() => {
						dispatch(setSpecialAttack1(false))
						progressSpecialRef.current = false; // Сбрасываем флаг
					}, 2000);
				} else {
					// Продолжаем выполнение через requestAnimationFrame
					requestAnimationFrame(updateProgress);
				}
			};
			
			// Начинаем прогресс
			requestAnimationFrame(updateProgress);
		};

// Инициализируем процесс, если specialAttack1 не активен
		if (!currentBosse.specialAttack1) {
			progressSpecialStart1();
		}
		
		if (!currentBosse.specialAttack2) {
			progressSpecialStart2();
		}
		
		const testBosseHP = () => {
			if (currentBosse.HP <= 0) {
				currentBosse.isDying = true;
			}
		}
		// Логика для сближения с героем
		const heroPositionX = -currentDistanceRef.current; // Переводим текущую дистанцию в позицию героя
		
		const bosseGO = () => {
			if (!currentBosse.isDying) {
				bosseRef.current.hunter = true
				if (heroPositionX > currentBosse.positionX && moveBosse) {
					currentBosse.positionX += 1.5; // Босс движется вправо
				} else if (heroPositionX < currentBosse.positionX && moveBosse) {
					currentBosse.positionX -= 1.5; // Босс движется влево
				}
			}
		}
		// Проверка атаки
		const isWithinAttackRange = heroPositionX >= currentBosse.positionX - 60 && heroPositionYRef.current === 0
			&& heroPositionX <= currentBosse.positionX + 190;
		if (isWithinAttackRange && !currentBosse.isDying) {

			//specialAttack1 уменьшает HP героя
			if(specialAttack1Ref.current && !isBlockRef.current){
				heroHPRef.current -= 1.8
				updateHeroHP(heroHPRef.current)
			}
			if (specialAttack2Ref.current && !isBlockRef.current){
				heroHPRef.current -= 1.3
			}
			if (!isBlockRef.current){
				//уменьшаем HP героя обычная атака
				heroHPRef.current -= 1
				updateHeroHP(heroHPRef.current)
			}
			
			bosseRef.current.hunter = false
			currentBosse.isAttacking = true;
			setMoveBosse(false);
			currentBosse.bosseDirection = currentBosse.positionX < heroPositionX ? 1 : -1; //Направление атаки
			// Уменьшение здоровья босса, если герой атакует
			if (isHeroAttackingRef.current) {
				currentBosse.HP -= 1;
				testBosseHP()
			}
			if(heroSpecialForceRef.current && isHeroAttackingRef.current){
				currentBosse.HP -= 0.9;
				testBosseHP()
			}
			if(heroSpecialAttack2Ref.current){
				currentBosse.HP -= 6;
				testBosseHP()
			}
			if(heroSpecialForceRef.current && heroSpecialAttack2Ref.current){
				currentBosse.HP -= 8;
				testBosseHP()
			}
			if(heroSpecialAttack3Ref.current){
				currentBosse.HP -= 26;
				testBosseHP()
			}
			if(heroSpecialForceRef.current && heroSpecialAttack3Ref.current){
				currentBosse.HP -= 8;
				testBosseHP()
			}
		} else {
			currentBosse.isAttacking = false;
			bosseRef.current.hunter = false
			setMoveBosse(true)
			bosseGO()
		}
		
		// Обновление состояния босса
		onUpdate({ ...currentBosse });
		
		// Следующий кадр анимации
		animationFrameId.current = requestAnimationFrame(animateBosse);
	};
	
	useEffect(() => {
		if (animationFrameId.current === null) {
			animationFrameId.current = requestAnimationFrame(animateBosse);
		}
		
		return () => {
			if (animationFrameId.current !== null) {
				cancelAnimationFrame(animationFrameId.current);
				animationFrameId.current = null;
			}
		};
	}, []);
	
	return null;
};

export default BosseController;
