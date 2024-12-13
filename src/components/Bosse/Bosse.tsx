import { FC, useRef } from 'react'
import { useAppSelector } from '../../hooks/hooks.ts'
import { BosseSelector } from '../../selectors/BosseSelector.ts'
import { EnemiesAnimation, frameBosseType } from '../../type/enemies.ts'
import { animatedBossType } from '../../type/gameTypes.ts'
import AttackBosse from '../Animated/Attack/AttackBosse.tsx'
import DeedEnemy from '../Animated/Deed/DeedEnemy.tsx'
import MoveBosse from '../Animated/Move/MoveBosse.tsx'

interface BosseProps {
	isAttacking: boolean,
	bosseDirection: number,
	isDying: boolean,
	hunter: boolean,
	specialAttack1: boolean,
	specialAttack2: boolean,
	animatedBoss: animatedBossType,
	frameBosse: frameBosseType,
	widthBoss: number,
	heightBosse: number
}

const Bosse:FC<BosseProps> = ({bosseDirection, widthBoss, heightBosse, frameBosse, isDying, hunter, animatedBoss}) => {
	const specialAttack1 = useAppSelector(BosseSelector.specialAttack1)
	const specialAttack2 = useAppSelector(BosseSelector.specialAttack2);
	const specialIndicator = useRef<boolean>(false)
	
	
	const bosse_dead: EnemiesAnimation = {
		img: animatedBoss.deed,
		totalFrames: frameBosse.deed,
		animationSpeed: 80,
		width: widthBoss,
		height: heightBosse
	}
	
	const bosseHunter: EnemiesAnimation = {
		img: animatedBoss.hunter,
		width: widthBoss,
		height: heightBosse,
		totalFrames: frameBosse.hunter,
		animationSpeed: 100,
	}
	
	const bosseAttack1: EnemiesAnimation = {
		img: animatedBoss.attack1,
		width: widthBoss,
		height: heightBosse,
		totalFrames: frameBosse.attack1,
		animationSpeed: 80,
	}
	
	const bosseAttack2: EnemiesAnimation = {
		img: animatedBoss.attack2,
		width: widthBoss,
		height: heightBosse,
		totalFrames: frameBosse.attack2,
		animationSpeed: 100,
	}
	
	const bosseAttack3: EnemiesAnimation = {
		img: animatedBoss.attack3,
		width: widthBoss,
		height: heightBosse,
		totalFrames: frameBosse.attack3,
		animationSpeed: 90,
	}
	
	let AnimateController
	
	if(hunter) {
		AnimateController = <MoveBosse
			bosseDirection={bosseDirection}
			{...bosseHunter} key='hunter' />
	} else if(isDying) {
		AnimateController = <DeedEnemy Direction={bosseDirection}
			{...bosse_dead} key='dead' />
	} else if (specialAttack1) {
		specialIndicator.current = true
		AnimateController = <AttackBosse
			indicator={specialIndicator.current}
			key="special1-attack1"
			bosseDirection={bosseDirection}
			attackBoss={bosseAttack2}
		/>
	} else if (specialAttack2){
		specialIndicator.current = true
		AnimateController = <AttackBosse
			indicator={specialIndicator.current}
			key="special1-attack2"
			bosseDirection={bosseDirection}
			attackBoss={bosseAttack3}
		/>
	}else {
		specialIndicator.current = false
		AnimateController = <AttackBosse
			indicator={specialIndicator.current}
			key="attack"
			bosseDirection={bosseDirection}
			attackBoss={bosseAttack1}
		/>
	}
	return (
		<div>{AnimateController}</div>
	)
}

export default Bosse