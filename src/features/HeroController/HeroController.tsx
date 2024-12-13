import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import { HeroSelector } from '../../selectors/HeroSelectors.ts';
import {
	setActiveSkillForce,
	setActiveSpecialAttack2, setActiveSpecialAttack3,
	setAttacking,
	setBlock, setHeroSpecialAttack2, setHeroSpecialAttack3,
	specialSkillForce
} from '../../stores/Slices/heroSlice.ts'

const HeroController = () => {
	const dispatch = useAppDispatch();
	const block = useAppSelector(HeroSelector.block);
	const isJump = useAppSelector(HeroSelector.Jump);
	const levelHero = useAppSelector(HeroSelector.levelHero);
	const SelectorActiveSkillForce = useAppSelector(HeroSelector.activeSkillForce);
	const activeSpecialAttack2 = useAppSelector(HeroSelector.activeSpecialAttack2);
	const activeSpecialAttack3 = useAppSelector(HeroSelector.activeSpecialAttack3);
	
	useEffect(() => {
		const keyDown = (event: KeyboardEvent) => {
			if (event.key === 'q' && !isJump || event.key === 'й' && !isJump) {
				dispatch(setBlock(true));
			} else if (event.key === '1' && !block) {
				dispatch(setAttacking(true));
			} else if (event.key === 'w' && !SelectorActiveSkillForce || event.key === 'ц' && !SelectorActiveSkillForce) {
				if (levelHero >= 2) {
						dispatch(specialSkillForce(true));
						dispatch(setActiveSkillForce(true));
					}
			}
			else if (event.key === '2' && !activeSpecialAttack2) {
				if (levelHero >= 3) {
					dispatch(setHeroSpecialAttack2(true));
					dispatch(setActiveSpecialAttack2(true));
				}
			}
			else if (event.key === '3' && !activeSpecialAttack3) {
				if (levelHero >= 4) {
					dispatch(setHeroSpecialAttack3(true));
					dispatch(setActiveSpecialAttack3(true));
				}
			}
		};
		
		
		const keyUp = (event: KeyboardEvent) => {
			if (event.key === 'q' && !isJump || event.key === 'й' && !isJump) {
				dispatch(setBlock(false));
			}
		};
		
		window.addEventListener('keydown', keyDown);
		window.addEventListener('keyup', keyUp);
		
		return () => {
			window.removeEventListener('keydown', keyDown);
			window.removeEventListener('keyup', keyUp);
		};
	}, [dispatch, isJump, block, levelHero, SelectorActiveSkillForce, activeSpecialAttack2, activeSpecialAttack3]); // Зависимости
	
	return null;
};

export default HeroController;
