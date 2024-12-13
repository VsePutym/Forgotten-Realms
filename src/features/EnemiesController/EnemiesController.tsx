import React, { useEffect, useRef } from 'react'
import { useAppSelector } from '../../hooks/hooks.ts'
import { HeroSelector } from '../../selectors/HeroSelectors.ts'
import { MapsSelectors } from '../../selectors/mapsSelectors.ts'
import { EnemyType } from '../../type/enemies.ts'

interface EnemiesProps {
	initialEnemies: EnemyType[];
	onUpdate: (updatedEnemies: EnemyType[]) => void;
	updateHeroHP: (updatedHeroHP: number) => void;
	currentHPHero: number
}

const EnemiesController: React.FC<EnemiesProps> = ({ initialEnemies, onUpdate, updateHeroHP, currentHPHero }) => {
	const enemiesRef = useRef<EnemyType[]>(initialEnemies.map((enemy) => ({
		...enemy,
		positionX: enemy.positionX,
		positionY: enemy.positionY,
		moveRight: true,
		isHunter: true,
		isAttacking: false,
		isDying: false
	})))
	
	const currentDistance = useAppSelector(MapsSelectors.currentDistance)
	const isHeroAttacking = useAppSelector(HeroSelector.attacking)
	const isBlock = useAppSelector(HeroSelector.block);
	const heroPositionY = useAppSelector(HeroSelector.heroPositionY);
	const heroSpecialAttack2 = useAppSelector(HeroSelector.heroSpecialAttack2);
	const heroSpecialAttack3 = useAppSelector(HeroSelector.heroSpecialAttack3);
	const specialSkillForce = useAppSelector(HeroSelector.specialSkillForce);
	
	const currentDistanceRef = useRef(currentDistance) // Создаем реф для currentDistance
	const isHeroAttackingRef = useRef(isHeroAttacking) // Создаем реф для isHeroAttacking
	const heroSpecialAttack2Ref = useRef(heroSpecialAttack2)
	const heroSpecialAttack3Ref = useRef(heroSpecialAttack3)
	const heroSpecialForceRef = useRef(specialSkillForce)
	const heroPositionYRef = useRef(heroPositionY) // Создаем реф для isHeroAttacking
	
	const animationFrameId = useRef<number | null>(null)
	const isBlockRef = useRef(isBlock) // Создаем реф для isHeroAttacking
	
	const heroHPRef = useRef(currentHPHero);
	
	// Обновляем currentDistanceRef при каждом рендере
	useEffect(() => {
		heroSpecialAttack2Ref.current = heroSpecialAttack2
		heroSpecialForceRef.current = specialSkillForce
		heroSpecialAttack3Ref.current = heroSpecialAttack3
		heroHPRef.current = currentHPHero;
		currentDistanceRef.current = currentDistance
		isHeroAttackingRef.current = isHeroAttacking
		heroPositionYRef.current = heroPositionY
		isBlockRef.current = isBlock
	}, [currentDistance, isHeroAttacking, heroPositionYRef, isBlockRef, currentHPHero, heroSpecialAttack2, specialSkillForce, heroSpecialAttack3])

	// Функция для анимации врагов
	const animateEnemies = () => {
		enemiesRef.current = enemiesRef.current.map((enemy) => {
			// Используем значение из currentDistanceRef для проверки расстояния
			const isWithinAttackRange = -currentDistanceRef.current >= enemy.positionX - 130 && heroPositionYRef.current === enemy.positionY
				&& -currentDistanceRef.current <= enemy.positionX + 130
			
			const hunterRight = () => {
				enemy.positionX += 1
				enemy.moveRight = true
			}
			
			const hunterLeft = () => {
				enemy.positionX -= 1
				enemy.moveRight = false
			}
			
			const testEnemyHP = () => {
				if (enemy.HP <= 0) {
					enemy.isDying = true
					setTimeout(() => {
						enemiesRef.current = enemiesRef.current.filter(e => e !== enemy);
						onUpdate([...enemiesRef.current]);  // Обновляем состояние для удаления врага после анимации
					}, 1000); // Укажите время в миллисекундах, равное длительности анимации смерти
				}
			}
			const goHunter = () => {
				if (enemy.moveRight && enemy.positionX >= enemy.initialPositionX + 100) {
					enemy.moveRight = false
				} else if (!enemy.moveRight && enemy.positionX <= enemy.initialPositionX - 100) {
					enemy.moveRight = true
				}
				
				if (enemy.moveRight) {
					hunterRight()
				} else {
					hunterLeft()
				}
			}
			
			
			if (isWithinAttackRange) {
				enemy.Direction = enemy.positionX < -currentDistanceRef.current ? 1 : -1; //Направление атаки
				enemy.isAttacking = true
				enemy.isHunter = false
	
				if (!isBlockRef.current){
					//уменьшаем HP героя обычная атака
					heroHPRef.current -= 1
					updateHeroHP(heroHPRef.current)
				}
				if (isHeroAttackingRef.current) {
					enemy.HP -= 1
					testEnemyHP()
				if(heroSpecialForceRef.current && isHeroAttackingRef.current) {
					enemy.HP -= 0.9
					testEnemyHP()
					}
				}if(heroSpecialAttack2Ref.current){
					enemy.HP -= 6
					testEnemyHP()
				}if(heroSpecialForceRef.current && heroSpecialAttack2Ref.current){
					enemy.HP -= 8
					testEnemyHP()
				}if(heroSpecialAttack3Ref.current) {
					enemy.HP -= 26
					console.log(enemy.HP)
					testEnemyHP()
				}if(heroSpecialForceRef.current && heroSpecialAttack3Ref.current) {
					enemy.HP -= 8
					console.log(enemy.HP)
					testEnemyHP()
				}
				
			} else {
				enemy.isHunter = true
				enemy.isAttacking = false
				goHunter()
			}
			
			return enemy
		})
		// Обновляем состояние врагов через коллбэк
		onUpdate([...enemiesRef.current])
		
		// Запуск следующего кадра
		animationFrameId.current = requestAnimationFrame(animateEnemies)
	}
	
	useEffect(() => {
		// Запуск анимации один раз при монтировании компонента
		if (animationFrameId.current === null) {
			animationFrameId.current = requestAnimationFrame(animateEnemies)
		}
		return () => {
			if (animationFrameId.current !== null) {
				cancelAnimationFrame(animationFrameId.current)
				animationFrameId.current = null
			}
		}
	}, []) // Пустой массив зависимостей
	
	return null
}

export default EnemiesController
