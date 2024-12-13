import AttackPerson from '../Animated/Attack/AttackPerson.tsx'
import DeedEnemy from '../Animated/Deed/DeedEnemy.tsx'
import JumpHero from '../Animated/Move/JumpHero.tsx'
import MoveHero from '../Animated/Move/MoveHero.tsx'
import personIdle from '@AnimatedPerson/Idle.png';
import personRun from '@AnimatedPerson/Run.png';
import { useAppSelector } from '../../hooks/hooks.ts'
import { HeroSelector } from '../../selectors/HeroSelectors.ts'
import { animatePerson } from '../../type/typesHero.ts';
import heroJump from '@Img/Hero/Jump.png'
import blockImg from '@Img/Hero/Shield.png';
import heroDeedImg from '@Img/Hero/Dead.png'
import heroAttackSimpleImg from '@Img/Hero/Attack_1.png'
import heroAttackSpecial2 from '@Img/Hero/Attack_2.png'
import heroAttackSpecial3 from '@Img/Hero/Attack_3.png'

const PersonIdle: animatePerson = {
	img: personIdle,
	width: 150,
	height: 150,
	totalFrames: 6,
	animationSpeed: 90,
}

const PersonRun: animatePerson = {
	img: personRun,
	width: 150,
	height: 150,
	totalFrames: 8,
	animationSpeed: 100,
}

const PersonJump: animatePerson = {
	img: heroJump,
	width: 150,
	height: 150,
	totalFrames: 12,
	animationSpeed: 90,
}

const HeroBlock: animatePerson = {
	img: blockImg,
	width: 150,
	height: 150,
	totalFrames: 2,
	animationSpeed: 200,
}

const HeroDeed: animatePerson = {
	img: heroDeedImg,
	width: 150,
	height: 150,
	totalFrames: 3,
	animationSpeed: 90,
}

const HeroAttackSimple: animatePerson = {
	img: heroAttackSimpleImg,
	width: 150,
	height: 150,
	totalFrames: 6,
	animationSpeed: 110,
}

const HeroAttackSpecial2: animatePerson = {
	img: heroAttackSpecial2,
	width: 150,
	height: 150,
	totalFrames: 4,
	animationSpeed: 160,
}

const HeroAttackSpecial3: animatePerson = {
	img: heroAttackSpecial3,
	width: 150,
	height: 150,
	totalFrames: 3,
	animationSpeed: 160,
}

const Hero = () => {
	const isAttack = useAppSelector(HeroSelector.attacking);
	const isRun = useAppSelector(HeroSelector.isRun);
	const isJump = useAppSelector(HeroSelector.Jump);
	const isBlock = useAppSelector(HeroSelector.block);
	const isDying = useAppSelector(HeroSelector.isDying);
	const heroSpecialAttack2 = useAppSelector(HeroSelector.heroSpecialAttack2);
	const heroSpecialAttack3 = useAppSelector(HeroSelector.heroSpecialAttack3);
	let AnimateController
	
	
	if (isAttack) {
		AnimateController = <AttackPerson key="attack" {...HeroAttackSimple} />;
	} else if (heroSpecialAttack2) {
		AnimateController = <AttackPerson key="attack" {...HeroAttackSpecial2} />;
	} else if (heroSpecialAttack3) {
		AnimateController = <AttackPerson key="attack" {...HeroAttackSpecial3} />;
	} else if (isRun) {
		AnimateController = <MoveHero key="run" {...PersonRun} />;
	} else if (isJump) {
		AnimateController = <JumpHero key="jump" {...PersonJump} />;
	} else if (isBlock) {
		AnimateController = <MoveHero key="block" {...HeroBlock} />;
	} else if (isDying) {
		AnimateController = <DeedEnemy key="dead" {...HeroDeed} />;
	} else {
		AnimateController = <MoveHero key="idle" {...PersonIdle} />;
	}


	
	return (
	<div>
		{AnimateController}
	</div>
	)
}

export default Hero;