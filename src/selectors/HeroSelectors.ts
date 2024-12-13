import { RootState } from '../stores/store.tsx'

export const HeroSelector = {
	attacking: (state:RootState) => state.hero.isAttacking,
	Jump: (state: RootState) => state.hero.isJump,
	isDying: (state: RootState) => state.hero.isDying,
	heroPositionY: (state: RootState) => state.hero.HeroPositionY,
	isRun: (state: RootState) => state.hero.isRun,
	movingRight: (state: RootState) => state.hero.movingRight,
	block: (state: RootState) => state.hero.isBlock,
	levelHero: (state: RootState) => state.hero.levelHero,
	specialSkillForce: (state: RootState) => state.hero.specialSkillForce,
	activeSkillForce: (state: RootState) => state.hero.activeSkillForce,
	heroSpecialAttack2: (state: RootState) => state.hero.heroSpecialAttack2,
	activeSpecialAttack2: (state: RootState) => state.hero.activeSpecialAttack2,
	heroSpecialAttack3: (state: RootState) => state.hero.heroSpecialAttack3,
	activeSpecialAttack3: (state: RootState) => state.hero.activeSpecialAttack3,
}