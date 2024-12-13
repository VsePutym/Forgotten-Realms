export interface IControlHero {
	isAttacking: boolean,
	isJump: boolean,
	isRunLeft: boolean,
	isRunRight: boolean,
	isRun: boolean,
	isBlock: boolean,
	movingRight: boolean,
	isDying: boolean,
	levelHero: number,
	specialSkillForce: boolean,
	activeSkillForce: boolean,
	heroSpecialAttack2: boolean,
	activeSpecialAttack2: boolean
	heroSpecialAttack3: boolean,
	activeSpecialAttack3: boolean
}

export interface positionHero  {
	HeroPositionX: number,
	HeroPositionY: number
}

export interface animatePerson {
	img: string,
	width: number,
	height: number,
	totalFrames: number;
	animationSpeed: number;
	movingRight?: boolean,
	Direction?: number
}

export interface heroDataTypeHP {
	heroHP: number,
	maxHeroHP: number,
	bottom: number
}