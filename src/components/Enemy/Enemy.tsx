import { FC } from 'react'
import AttackEnemy from '../Animated/Attack/AttackEnemy.tsx'
import DeedEnemy from '../Animated/Deed/DeedEnemy.tsx'
import MoveEnemies from '../Animated/Move/MoveEnemies.tsx'
import { EnemiesAnimation } from '../../type/enemies.ts'

interface EnemyProps {
	isAttacking: boolean,
	moveRight: boolean,
	isDying: boolean,
	imgAttack: string,
	imgDeed: string,
	imgMove: string,
	animateAttack: number,
	animateWalk: number,
	animationDeed: number,
	Direction: number
}
const Enemy:FC<EnemyProps> = ({Direction, animateAttack, animateWalk, animationDeed, isAttacking,moveRight, isDying, imgAttack, imgDeed, imgMove }) => {
	
	const Enemy_Walk: EnemiesAnimation = {
		img: imgMove,
		width: 150,
		height: 150,
		totalFrames: animateWalk,
		animationSpeed: 100,
	}
	
	const Enemy_Attack: EnemiesAnimation = {
		img: imgAttack,
		width: 150,
		height: 150,
		totalFrames: animateAttack,
		animationSpeed: 80,
	}
	
	const Enemy_Deed: EnemiesAnimation = {
		img: imgDeed,
		width: 150,
		height: 150,
		totalFrames: animationDeed,
		animationSpeed: 150,
	}
	
	
		let AnimateController;
		
		if(isDying){
			AnimateController = <DeedEnemy Direction={Direction} {...Enemy_Deed} />
		} else if(isAttacking) {
			AnimateController = <AttackEnemy Direction={Direction} enemyAttack={Enemy_Attack} movingRight={moveRight} />
		} else {
			AnimateController = <MoveEnemies Direction={Direction} movingRight={moveRight} {...Enemy_Walk} />
		}
		
	
	return (
		<div>{AnimateController}</div>
	)
}

export default Enemy