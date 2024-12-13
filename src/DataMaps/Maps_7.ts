import enemyAttack from '@Img/Enemies/Samurai/Attack_1.png'
import enemyDeed from '@Img/Enemies/Samurai/Dead.png'
import enemyWalk from '@Img/Enemies/Samurai/Walk.png'

import bossAttack1 from '@Img/Enemies/Shinobi/Attack_1.png'
import bossAttack2 from '@Img/Enemies/Shinobi/Attack_2.png'
import bossAttack3 from '@Img/Enemies/Shinobi/Attack_3.png'
import bosseDeed from '@Img/Enemies/Shinobi/Dead.png'
import bosseHunter from '@Img/Enemies/Shinobi/Run.png'

import artifactImg4 from '@Img/objects/Artifacts/20.png'
import artifactImg3 from '@Img/objects/Artifacts/13.png'
import artifactImg5 from '@Img/objects/Artifacts/18.png'
import artifactImg6 from '@Img/objects/Artifacts/5.png'

import artifactImg from '@Img/objects/Artifacts/16.png'
import artifactImg2 from '@Img/objects/Artifacts/15.png'
import HPImg from '@Img/objects/HP.png'
import rock1 from '@Img/objects/rock/middle_lane_rock1_12.png'
import tree1 from '@Img/objects/tree/middle_lane_tree3.png'
import tree2 from '@Img/objects/tree/middle_lane_tree2.png'
import bush1 from '@Img/objects/Bush/Bush9_1.png'
import platformImg from '@Maps/Map7/ground/Pad_02_1.png'
import mapBGImg from '@Maps/Map7/background334.png'

export const mapBG = {
	img: mapBGImg
}
export const ObjectsMap = [
	{ objectY: 20, objectX: -570, objectWidth: 590, objectHeight: 200, img: rock1, zIndex: 200 },
	{ objectY: 70, objectX: 470, objectWidth: 590, objectHeight: 350, img: tree2, zIndex: 100 },
	{ objectY: 70, objectX: 480, objectWidth: 590, objectHeight: 100, img: bush1, zIndex: 100 },
	{ objectY: 70, objectX: 170, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 100 },
	{ objectY: 70, objectX: 30, objectWidth: 590, objectHeight: 100, img: bush1, zIndex: 100 },
	{ objectY: 30, objectX: 610, objectWidth: 590, objectHeight: 100, img: bush1, zIndex: 200 },
	{ objectY: 20, objectX: 770, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 200 },
	{ objectY: 30, objectX: 1010, objectWidth: 590, objectHeight: 100, img: bush1, zIndex: 200 },
	{ objectY: 20, objectX: 1270, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 200 },
	{ objectY: 30, objectX: 1510, objectWidth: 590, objectHeight: 100, img: bush1, zIndex: 200 },
	{ objectY: 70, objectX: 1770, objectWidth: 590, objectHeight: 350, img: tree2, zIndex: 100 },
	{ objectY: 20, objectX: 1970, objectWidth: 590, objectHeight: 350, img: tree2, zIndex: 200 },
	{ objectY: 70, objectX: 2110, objectWidth: 590, objectHeight: 100, img: bush1, zIndex: 100 },
	{ objectY: 20, objectX: 2370, objectWidth: 590, objectHeight: 350, img: tree2, zIndex: 200 },
	{ objectY: 20, objectX: 2770, objectWidth: 590, objectHeight: 150, img: bush1, zIndex: 200 },
	{ objectY: 70, objectX: 2670, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 100 },
	{ objectY: 70, objectX: 3770, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 100 },
	{ objectY: 70, objectX: 3570, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 100 },
	{ objectY: 70, objectX: 3370, objectWidth: 590, objectHeight: 350, img: tree2, zIndex: 100 },
	{ objectY: 20, objectX: 3470, objectWidth: 590, objectHeight: 350, img: tree2, zIndex: 200 },
	{ objectY: 70, objectX: 3270, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 100 },
	{ objectY: 20, objectX: 3670, objectWidth: 590, objectHeight: 350, img: tree2, zIndex: 100 },
]

export const platforms = [
	{ platformY: 300, platformX: 1300, platformWidth: 400, platformHeight: 340 },
	{ platformY: 400, platformX: 1800, platformWidth: 400, platformHeight: 340 },
	{ platformY: 500, platformX: 2300, platformWidth: 600, platformHeight: 340 },
]

export const artifactsDate = [
	{ artifactsY: 70, artifactsX: 870, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg },
	{ artifactsY: 70, artifactsX: 200, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg5 },
	{ artifactsY: 470, artifactsX: 2000, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg6 },
	{ artifactsY: 570, artifactsX: 2800, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg4 },
	{ artifactsY: 70, artifactsX: 3150, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg2 },
	{ artifactsY: 70, artifactsX: 2500, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg3 },
]

export const healthsDate = [
	{ health: 500, positionX: 2650, positionY: 590, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 3300, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 2100, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 1180, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 2780, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
]

export const animatedBoss = {
	attack1: bossAttack1,
	attack2: bossAttack2,
	attack3: bossAttack3,
	hunter: bosseHunter,
	deed: bosseDeed
}
export const enemyAnimation = {
	walk: 9,
	attacking: 4,
	deed: 6
}

export const frameBosse = {
	attack1: 5,
	attack2: 3,
	attack3: 4,
	deed: 4,
	hunter: 8
}

export const initialEnemies = [
	{ positionX: 420, initialPositionX: 535, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 280, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 850, initialPositionX: 680, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 280, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 1310, initialPositionX: 1280, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 280, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 1425, initialPositionX: 1680, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 280, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 2525, initialPositionX: 2470, positionY: 500, isAttacking: false, isHunter: true, moveRight: true,
		HP: 280, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 2425, initialPositionX: 2345, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 280, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 2885, initialPositionX: 2745, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 280, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },
]


export const heroDate = {
	heroHP: 2800,
	maxHeroHP: 2800,
	bottom: 65
};

// Данные босса
export const dateBosse = {
	positionX: 2000,
	initialPositionX: 2000,
	isAttacking: false,
	HP: 3700,
	isDying: false,
	bosseDirection: 1,
	maxHP: 3700,
	hunter: true,
	progressSpecialAttack1: 0,
	progressSpecialAttack2: 0,
	specialAttack1: false,
	specialAttack2: false,
	width: 150,
	height: 150
};

export const platformsImg = {
	img: platformImg
}
export const MapData = {
	imgGround: null,
	backGreen: null,
	minDistanceX: -3500,
	namePlanet: 'Измерение Q-18: Иридион',
	systemName: 'Система: QL-09: Хромос'
}
// Портал
export const portalDate = {
	portalY: 0,
	portalX: 3800,
};
export const textDate = {
	text: `Тьма становится гуще. Ты ощущаешь её, словно она живая, обвивающая тебя, как змей. </br>
</br> Ты видишь силуэты — призраки прошлого, которые ты создал или уничтожил. Они не говорят, но их присутствие невыносимо. Ты ощущаешь их гнев, их боль и их отчаяние.
</br> Но среди хаоса вспыхивает свет. Артефакт начинает светиться, излучая тепло, которого тебе так не хватало. </br>
Ты слышишь новый голос, глубокий и древний: «Свет умирает, но его искра живёт в тебе. Каждый выбор, каждая жертва приближает тебя к истине. Ты готов встретиться с тем, кто ждёт тебя за пределами этого мира?»
</br> Ты замечаешь, что тёмная фигура уже не просто наблюдает. Она двигается. Идёт к тебе. И ты понимаешь: столкновение неизбежно.
</br> Туман перед тобой рассеивается, открывая путь к последнему испытанию. Ты чувствуешь, что за каждым шагом тьма становится сильнее. Но в тебе пробуждается нечто большее. Что это — надежда или обречённость?`

}