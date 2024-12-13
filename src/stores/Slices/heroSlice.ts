import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IControlHero, positionHero } from '../../type/typesHero.ts'

interface initialStateHeroControl extends  IControlHero, positionHero {}

const initialValue: initialStateHeroControl = {
	movingRight: false,
	isAttacking: false,
	isRun: false,
	isJump: false,
	isRunLeft: false,
	isRunRight: false,
	isBlock: false,
	HeroPositionX: 0,
	HeroPositionY: 0,
	isDying: false,
	levelHero: 1,
	specialSkillForce: false,
	activeSkillForce: false,
	heroSpecialAttack2: false,
	activeSpecialAttack2: false,
	heroSpecialAttack3: false,
	activeSpecialAttack3: false
}

const heroSlice = createSlice({
	name: 'personSlice',
	initialState: initialValue,
	reducers: {
		setAttacking(state,action: PayloadAction<boolean>) {
			state.isAttacking = action.payload
		},
		setJump(state,action: PayloadAction<boolean>) {
			state.isJump = action.payload
		},
		setHeroPositionY(state,action: PayloadAction<number>) {
			state.HeroPositionY = action.payload
		},
		setIsRunning(state,action: PayloadAction<boolean>) {
			state.isRun = action.payload
		},
		setMovingRight(state,action: PayloadAction<boolean>) {
			state.movingRight = action.payload
		},
		setBlock(state,action: PayloadAction<boolean>) {
			state.isBlock = action.payload
		},
		setIsDying(state,action: PayloadAction<boolean>) {
			state.isDying = action.payload
		},
		setNewLevelHero(state) {
			state.levelHero += 1
		},
		specialSkillForce(state,action: PayloadAction<boolean>) {
			state.specialSkillForce = action.payload
		},
		setActiveSkillForce(state,action: PayloadAction<boolean>) {
			state.activeSkillForce = action.payload
		},
		setActiveSpecialAttack2(state,action: PayloadAction<boolean>) {
			state.activeSpecialAttack2 = action.payload
		},
		setHeroSpecialAttack2(state,action: PayloadAction<boolean>) {
			state.heroSpecialAttack2 = action.payload
		},
		setActiveSpecialAttack3(state,action: PayloadAction<boolean>) {
			state.activeSpecialAttack3 = action.payload
		},
		setHeroSpecialAttack3(state,action: PayloadAction<boolean>) {
			state.heroSpecialAttack3 = action.payload
		}
	}
})

export const {
	setAttacking,
	setJump,
	setHeroPositionY,
	setIsRunning,
	setMovingRight,
	setBlock,
	setIsDying,
	setNewLevelHero,
	specialSkillForce,
	setActiveSkillForce,
	setActiveSpecialAttack2,
	setHeroSpecialAttack2,
	setActiveSpecialAttack3,
	setHeroSpecialAttack3
} = heroSlice.actions
export default heroSlice.reducer