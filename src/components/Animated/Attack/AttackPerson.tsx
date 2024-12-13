import * as React from 'react'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks.ts'
import { HeroSelector } from '../../../selectors/HeroSelectors.ts'
import { setAttacking, setHeroSpecialAttack2, setHeroSpecialAttack3 } from '../../../stores/Slices/heroSlice.ts'
import { animatePerson } from '../../../type/typesHero.ts'
const AttackPerson: React.FC<animatePerson> = ({img, width, height, totalFrames, animationSpeed}) => {
	const [frames, setFrame] = useState<number>(0)
	const [animating, setAnimating] = useState<boolean>(true);
	const dispatch = useAppDispatch();
	const movingRight = useAppSelector(HeroSelector.movingRight)
	
	useEffect(() => {
		if (!animating) return
		setAnimating(true)
		
		const interval = setInterval(() => {
			setFrame((prevState) => {
				if (prevState + 1 >= totalFrames) {
					clearInterval(interval)
					setAnimating(false)
					return 0
				}
				return prevState + 1
			})
		}, animationSpeed)
		

	}, [])
	
	useEffect(() => {
		if (!animating){
			dispatch(setAttacking(false))
			dispatch(setHeroSpecialAttack2(false));
			dispatch(setHeroSpecialAttack3(false));
		}
	},[dispatch, animating])
	
	const offsetX = -frames * width
	
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

export default AttackPerson