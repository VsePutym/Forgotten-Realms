import * as React from 'react'
import { useEffect, useState } from 'react'
import { EnemiesAnimation } from '../../../type/enemies.ts'
import style from '@Styles/Enemy.module.scss';
import kritImg from '@Img/objects/krit.webp'

interface AttackProps {
	bosseDirection: number
	attackBoss: EnemiesAnimation,
	indicator: boolean
}
const AttackBosse: React.FC<AttackProps> = ({ attackBoss, bosseDirection, indicator} ) => {
	const [frames, setFrame] = useState<number>(0);
	
	useEffect(() => {
		const interval = setInterval(() => {
			setFrame((prevFrame) => (prevFrame + 1) % attackBoss.totalFrames);
		}, attackBoss.animationSpeed);
		
		return () => clearInterval(interval);
	}, []); // Пустой массив зависимостей для запуска анимации при монтировании
	
	
	const offsetX = -frames * attackBoss.width;
	
	return (
		<div
			style={{
				backgroundImage: `url(${attackBoss.img})`,
				backgroundSize: `${attackBoss.width * attackBoss.totalFrames}px auto`,
				backgroundPositionX: `${offsetX}px`,
				backgroundRepeat: 'no-repeat',
				width: `${attackBoss.width}px`,
				height: `${attackBoss.height}px`,
				transform: `scaleX(${bosseDirection})`,
			}}
			className={style.BosseAttack}
		>
			{indicator && (
				<div className={style.indicatorKrit}>
					<img src={kritImg} alt='kritImg'/>
				</div>
			)}
		</div>
	);
};

export default AttackBosse;