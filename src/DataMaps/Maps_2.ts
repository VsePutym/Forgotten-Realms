import werewolfDeed from '@Img/Enemies/Black_Werewolf/Dead.png'
import werewolfWalk from '@Img/Enemies/Black_Werewolf/walk.png'
import werewolfAttack from '@Img/Enemies/Black_Werewolf/Attack_1.png'

import bossAttack3 from '@Img/Enemies/White_Werewolf/Attack_2.png'
import bossAttack1 from '@Img/Enemies/White_Werewolf/Attack_1.png'
import bossAttack2 from '@Img/Enemies/White_Werewolf/Attack_3.png'
import bosseDeed from '@Img/Enemies/White_Werewolf/Dead.png'
import bosseHunter from '@Img/Enemies/White_Werewolf/Run.png'

import artifactImg from '@Img/objects/Artifacts/4.png'
import artifactImg2 from '@Img/objects/Artifacts/9.png'
import artifactImg3 from '@Img/objects/Artifacts/13.png'
import artifactImg4 from '@Img/objects/Artifacts/12.png'
import artifactImg5 from '@Img/objects/Artifacts/15.png'
import artifactImg6 from '@Img/objects/Artifacts/18.png'
import HPImg from '@Img/objects/HP.png'
import platformImg from '@Maps/Map2/ground/Pad_02_1.png'
import rock from "@Img/objects/rock/desert_rock1.png";
import rock2 from "@Img/objects/rock/middle_lane_rock2_1.png";
import rock3 from "@Img/objects/rock/middle_lane_rock2_2.png";
import mapBGImg from '@Maps/Map2/BG2.png'
import tree1 from '@Img/objects/tree/fir_tree_3.png'
import tree2 from "@Img/objects/tree/fir_tree_1.png";
import tree3 from '@Img/objects/tree/fir_tree_2.png'
import tree4 from '@Img/objects/tree/fir_tree_8.png'
import bush1 from '@Img/objects/Bush/Bush7_2.png'
import bush2 from '@Img/objects/Bush/Bush7_1.png'
import bush3 from '@Img/objects/Bush/Bush5_1.png'
import bush4 from '@Img/objects/Bush/Bush5_4.png'
import bush5 from '@Img/objects/Bush/Bush6_2.png'

export const mapBG = {
	img: mapBGImg
}

export const ObjectsMap = [
	{ objectY: 20, objectX: -570, objectWidth: 590, objectHeight: 470, img: tree2, zIndex: 200 },
	{ objectY: 0, objectX: -320, objectWidth: 220, objectHeight: 140, img: rock, zIndex: 200 },
	{ objectY: 20, objectX: -320, objectWidth: 590, objectHeight: 470, img: tree1, zIndex: 200 },
	{ objectY: 70, objectX: 270, objectWidth: 220, objectHeight: 170, img: bush1, zIndex: 100 },
	{ objectY: 0, objectX: 550, objectWidth: 550, objectHeight: 270, img: rock2, zIndex: 200 },
	{ objectY: 70, objectX: 1370, objectWidth: 200, objectHeight: 170, img: bush1, zIndex: 100 },
	{ objectY: 20, objectX: 1570, objectWidth: 590, objectHeight: 470, img: tree1, zIndex: 200 },
	{ objectY: -10, objectX: 1870, objectWidth: 200, objectHeight: 170, img: bush2, zIndex: 200 },
	{ objectY: 100, objectX: 1770, objectWidth: 590, objectHeight: 470, img: tree3, zIndex: 100 },
	{ objectY: 45, objectX: 2270, objectWidth: 220, objectHeight: 190, img: rock3, zIndex: 100 },
	{ objectY: -20, objectX: 2670, objectWidth: 590, objectHeight: 470, img: tree1, zIndex: 200 },
	{ objectY: 10, objectX: 2470, objectWidth: 590, objectHeight: 170, img: bush3, zIndex: 200 },
	{ objectY: 10, objectX: 2970, objectWidth: 590, objectHeight: 70, img: bush4, zIndex: 200 },
	{ objectY: 10, objectX: 3770, objectWidth: 590, objectHeight: 270, img: tree4, zIndex: 100 },
	{ objectY: -50, objectX: 4370, objectWidth: 590, objectHeight: 270, img: tree4, zIndex: 200 },
	{ objectY: -30, objectX: 5170, objectWidth: 190, objectHeight: 170, img: bush4, zIndex: 200 },
	{ objectY: 10, objectX: 5370, objectWidth: 190, objectHeight: 170, img: bush5, zIndex: 200 },
	{ objectY: 80, objectX: 4870, objectWidth: 590, objectHeight: 500, img: tree1, zIndex: 100 },
	{ objectY: 70, objectX: 5570, objectWidth: 590, objectHeight: 470, img: tree3, zIndex: 100 },
	{ objectY: 20, objectX: 5470, objectWidth: 590, objectHeight: 470, img: tree1, zIndex: 200 },
	{ objectY: 0, objectX: 6020, objectWidth: 550, objectHeight: 270, img: rock2, zIndex: 200 },
	{ objectY: 50, objectX: 6570, objectWidth: 590, objectHeight: 470, img: tree3, zIndex: 100 },
	{ objectY: 20, objectX: 6370, objectWidth: 590, objectHeight: 470, img: tree1, zIndex: 200 },
	{ objectY: 10, objectX: 6470, objectWidth: 590, objectHeight: 470, img: tree1, zIndex: 100 },
]

export const platforms = [
	{ platformY: 300, platformX: 1200, platformWidth: 400, platformHeight: 340 },
	{ platformY: 300, platformX: 2400, platformWidth: 400, platformHeight: 340 },
	{ platformY: 300, platformX: 3000, platformWidth: 400, platformHeight: 340 },
	{ platformY: 300, platformX: 4200, platformWidth: 800, platformHeight: 340 },
]

export const artifactsDate = [
	{ artifactsY: 370, artifactsX: 1300, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg },
	{ artifactsY: 70, artifactsX: 550, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg2 },
	{ artifactsY: 370, artifactsX: 3350, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg3 },
	{ artifactsY: 370, artifactsX: 4600, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg4 },
	{ artifactsY: 70, artifactsX: 5100, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg5 },
	{ artifactsY: 70, artifactsX: 5600, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg6 },
]

export const healthsDate = [
	{ health: 500, positionX: 3750, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 2070, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 3250, positionY: 390, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 3750, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 4750, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 4550, positionY: 390, takeHealth: true, img: HPImg, healthWith: 70 },
]

export const animatedBoss = {
	attack1: bossAttack1,
	attack2: bossAttack2,
	attack3: bossAttack3,
	hunter: bosseHunter,
	deed: bosseDeed
}
export const enemyAnimation = {
	walk: 11,
	attacking: 6,
	deed: 2
}

export const frameBosse = {
	attack1: 6,
	attack2: 5,
	attack3: 4,
	deed: 2,
	hunter: 9
}

export const initialEnemies = [
	 { positionX: 250, initialPositionX: 250, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 150, isDying: false, imgWalk: werewolfWalk, imgAttack: werewolfAttack, imgDeed: werewolfDeed, Direction: -1 },

	 { positionX: 1250, initialPositionX: 1300, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
	 	HP: 150, isDying: false, imgWalk: werewolfWalk, imgAttack: werewolfAttack, imgDeed: werewolfDeed, Direction: -1 },

	 { positionX: 1650, initialPositionX: 1770, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
	 	HP: 150, isDying: false, imgWalk: werewolfWalk, imgAttack: werewolfAttack, imgDeed: werewolfDeed, Direction: -1 },

	 { positionX: 2550, initialPositionX: 2530, positionY: 300, isAttacking: false, isHunter: true, moveRight: true,
		 HP: 150, isDying: false, imgWalk: werewolfWalk, imgAttack: werewolfAttack, imgDeed: werewolfDeed, Direction: -1 },

	 { positionX: 3050, initialPositionX: 3080, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
	 	HP: 150, isDying: false, imgWalk: werewolfWalk, imgAttack: werewolfAttack, imgDeed: werewolfDeed, Direction: -1 },
	 { positionX: 3550, initialPositionX: 3620, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
	 	HP: 150, isDying: false, imgWalk: werewolfWalk, imgAttack: werewolfAttack, imgDeed: werewolfDeed, Direction: -1 },

	 { positionX: 4150, initialPositionX: 4180, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
	 	HP: 150, isDying: false, imgWalk: werewolfWalk, imgAttack: werewolfAttack, imgDeed: werewolfDeed, Direction: -1 },

	 { positionX: 4550, initialPositionX: 4560, positionY: 300, isAttacking: false, isHunter: true, moveRight: true,
	 	HP: 150, isDying: false, imgWalk: werewolfWalk, imgAttack: werewolfAttack, imgDeed: werewolfDeed, Direction: -1 },

	 { positionX: 5450, initialPositionX: 5490, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
	 	HP: 150, isDying: false, imgWalk: werewolfWalk, imgAttack: werewolfAttack, imgDeed: werewolfDeed, Direction: -1 },

	 { positionX: 5850, initialPositionX: 5980, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
	 	HP: 150, isDying: false, imgWalk: werewolfWalk, imgAttack: werewolfAttack, imgDeed: werewolfDeed, Direction: -1 },
]


// Данные героя
export const heroDate = {
	heroHP: 2200,
	maxHeroHP: 2200,
	bottom: 65
};

// Данные босса
export const dateBosse = {
	positionX: 2000,
	initialPositionX: 2000,
	isAttacking: false,
	HP: 1200,
	isDying: false,
	bosseDirection: 1,
	maxHP: 1300,
	hunter: true,
	progressSpecialAttack1: 0,
	progressSpecialAttack2: 0,
	specialAttack1: false,
	specialAttack2: false,
	width: 350,
	height: 350
};

export const platformsImg = {
	img: platformImg
}
export const MapData = {
	imgGround: null,
	backGreen: null,
	minDistanceX: -6020,
	namePlanet: 'Измерение V-19: Ноксор',
	systemName: 'Система: VT-02: Пылающий узел'
}
// Портал
export const portalDate = {
	portalY: 0,
	portalX: 6300,
};

export const textDate = {
	text: `Посмотри вокруг. Сможешь ли ты найти свет среди теней? </br>
		</br> Этот мир создан из воспоминаний тех, кто осмелился пересечь границу. Это место не прощает слабости, но оно и не бессердечно. Каждый шаг пробуждает его, заставляет оживать.
	</br> Но помни: лунный свет укажет дорогу только тем, кто готов заглянуть в собственное сердце и признать правду о себе. Сможешь ли ты это сделать?
</br> Где-то в тенях таится ответ. Или новая угроза.`
}

