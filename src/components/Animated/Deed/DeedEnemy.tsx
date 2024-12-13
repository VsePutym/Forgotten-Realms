import React, { useEffect, useState } from 'react'
import { animatePerson } from '../../../type/typesHero.ts'
const DeedEnemy:React.FC<animatePerson> = ({Direction, img, width, height, totalFrames, animationSpeed}) => {
	
	const [currentFrame, setCurrentFrame] = useState<number>(0);
	
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentFrame((prevFrame) => {
				if (prevFrame + 1 >= totalFrames) {
					clearInterval(interval);
					return totalFrames - 1;
				}
				return prevFrame + 1;
			});
		}, animationSpeed);
		return () => clearInterval(interval);
		
	}, []);
	
	const offsetX = -currentFrame * width;
	
	return (
		<div style={{
			backgroundImage: `url(${img})`,
			backgroundPositionX: `${offsetX}px`,
			transform: `${Direction}`,
			backgroundSize: `${width * totalFrames}px auto`,
			backgroundRepeat: 'no-repeat',
			width: `${width}px`,
			height: `${height}px`,
		}} />
	)
}

export default DeedEnemy