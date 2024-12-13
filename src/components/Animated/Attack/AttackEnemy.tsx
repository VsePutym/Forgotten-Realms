import * as React from 'react'
import { useEffect, useState } from 'react'
import { EnemiesAnimation } from '../../../type/enemies.ts'

interface AttackProps {
	movingRight: boolean,
	enemyAttack: EnemiesAnimation,
	Direction: number
}
const AttackPerson: React.FC<AttackProps> = ({Direction,  enemyAttack} ) => {
	const [frames, setFrame] = useState<number>(0);
	
	
	useEffect(() => {
		const interval = setInterval(() => {
			setFrame((prevFrame) => (prevFrame + 1) % enemyAttack.totalFrames);
		}, enemyAttack.animationSpeed);
		
		return () => clearInterval(interval);
	}, []); // Пустой массив зависимостей для запуска анимации при монтировании
	
	
	const offsetX = -frames * 150
	
	return (
		<div style={{
			backgroundImage: `url(${enemyAttack.img})`,
			backgroundSize: `${enemyAttack.width * enemyAttack.totalFrames}px auto`,
			backgroundPositionX: `${offsetX}px`,
			backgroundRepeat: 'no-repeat',
			transform: `scaleX(${Direction})`,
			width: `${enemyAttack.width}px`,
			height: `${enemyAttack.height}px`,
		}}/>
	)
}

export default AttackPerson