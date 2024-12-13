
export interface EnemiesAnimation {
	img: string,
	width: number,
	height: number,
	totalFrames: number;
	animationSpeed: number;
}

export interface frameBosseType {
	attack1: number,
	attack2: number,
	attack3: number,
	deed: number,
	hunter: number
}
export interface EnemyType {
	initialPositionX: number;
	positionX: number;
	isAttacking: boolean;
	isHunter: boolean;
	moveRight: boolean,
	HP: number,
	positionY: number
	isDying: boolean,
	imgWalk: string,
	imgAttack: string,
	imgDeed: string,
	Direction: number
}

export interface enemyAnimationType {
	walk: number,
	attacking: number,
	deed: number
}
export interface BosseEnemy{
	specialAttack1: boolean,
	specialAttack2: boolean,
	bosseDirection: number,
	hunter: boolean,
	progressSpecialAttack1: number,
	progressSpecialAttack2: number,
	maxHP: number,
	initialPositionX: number;
	positionX: number;
	isAttacking: boolean;
	HP: number,
	isDying: boolean,
	width: number,
	height: number
}

export type sizeBosseType = {
	width: number,
	height: number
}

export interface BosseSpecialAttack{
	specialAttack1: boolean,
	specialAttack2: boolean
}