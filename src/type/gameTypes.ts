import {  BosseEnemy, enemyAnimationType, EnemyType, frameBosseType } from './enemies.ts'
import { Artifacts, healthsProps, ObjectsProps, platformsImgType, PlatformTypes, PortalProps } from './mapsTypes.ts'
import { heroDataTypeHP } from './typesHero.ts'

export type TextDateType = {
	text: string; // Строка с HTML-контентом
};

export type mapBgType = {
	img: string;
};

export type MapDataType = {
	imgGround: string | null,
	backGreen: string | null,
	minDistanceX: number,
	namePlanet: string,
	systemName: string
}

export type animatedBossType = {
	attack1: string,
	attack2: string,
	attack3: string,
	hunter: string,
	deed: string
}
export interface levelGameType {
	ObjectsMap: ObjectsProps[],
	portalDate: PortalProps,
	artifactsDate: Artifacts[],
	platforms: PlatformTypes[],
	healthsDate: healthsProps[],
	initialEnemies: EnemyType[],
	dateBosse: BosseEnemy,
	heroDate: heroDataTypeHP,
	textDate?: TextDateType,
	mapBG: mapBgType,
	platformsImg: platformsImgType,
	MapData: MapDataType,
	enemyAnimation: enemyAnimationType,
	animatedBoss: animatedBossType,
	frameBosse: frameBosseType
}
export interface GameTypes{
	levelGame: number,
	Instructions: boolean,
	GameOver: boolean,
	showNewSkills: boolean,
	namePlanet: boolean,
	endGame: boolean,
	titre: boolean,
	historyLevel: boolean
}

