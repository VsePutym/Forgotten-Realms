import React, { useEffect, useState } from 'react'
import { animatePerson } from '../../../type/typesHero.ts'
const Move:React.FC<animatePerson> = ({img, width, height, totalFrames, animationSpeed, movingRight}) => {
	
	const [currentFrame, setCurrentFrame] = useState<number>(0);
	
	
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentFrame((prevFrame) => (prevFrame + 1) % totalFrames);
		}, animationSpeed);
		return () => clearInterval(interval);
		
	}, []);
	
	const offsetX = -currentFrame * width;
	
	return (
		<div style={{
			backgroundImage: `url(${img})`,
			backgroundPositionX: `${offsetX}px`,
			transform: movingRight ? 'scaleX(1)' : 'scaleX(-1)',
			backgroundSize: `${width * totalFrames}px auto`,
			backgroundRepeat: 'no-repeat',
			width: `${width}px`,
			height: `${height}px`,
		}} />
	)
}

export default Move