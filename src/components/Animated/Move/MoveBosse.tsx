import { FC, useEffect, useState } from 'react'
import { EnemiesAnimation } from '../../../type/enemies.ts'
import style from '@Styles/Enemy.module.scss'

interface MoveBosseProps extends EnemiesAnimation {
	bosseDirection: number
}
const MoveBosse:FC<MoveBosseProps> = ({img, width, height, totalFrames, animationSpeed, bosseDirection}) => {
	const [currentFrame, setCurrentFrame] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentFrame((prevFrame) => (prevFrame + 1) % totalFrames);
		}, animationSpeed);
		return () => clearInterval(interval);
		
	}, []);
	
	const offsetX = -currentFrame * width;
	
	return (
		<div className={style.bosse} style={{
			backgroundImage: `url(${img})`,
			backgroundPositionX: `${offsetX}px`,
			transform: `scaleX(${bosseDirection})`,
			backgroundSize: `${width * totalFrames}px auto`,
			backgroundRepeat: 'no-repeat',
			width: `${width}px`,
			height: `${height}px`,
		}} />
	)
}

export default MoveBosse