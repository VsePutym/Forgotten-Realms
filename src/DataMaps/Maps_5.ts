import enemyAttack from '@Img/Enemies/few/Attack2.png'
import enemyDeed from '@Img/Enemies/few/Death.png'
import enemyWalk from '@Img/Enemies/few/Walk.png'

import bossAttack1 from '@Img/Enemies/few2/Attack1.png'
import bossAttack2 from '@Img/Enemies/few2/Attack2.png'
import bossAttack3 from '@Img/Enemies/few2/SquatAttack.png'
import bosseDeed from '@Img/Enemies/few2/Death.png'
import bosseHunter from '@Img/Enemies/few2/Run.png'

import artifactImg4 from '@Img/objects/Artifacts/20.png'
import artifactImg3 from '@Img/objects/Artifacts/13.png'
import artifactImg5 from '@Img/objects/Artifacts/19.png'
import artifactImg from '@Img/objects/Artifacts/15.png'
import artifactImg2 from '@Img/objects/Artifacts/9.png'
import HPImg from '@Img/objects/HP.png'
import rock1 from '@Img/objects/rock/ice_rock1.png'
import rock2 from '@Img/objects/rock/ice_rock2.png'
import tree1 from '@Img/objects/tree/winter_conifer_tree_1.png'
import tree2 from '@Img/objects/tree/winter_conifer_tree_2.png'
import tree3 from '@Img/objects/tree/winter_conifer_tree_3.png'
import tree4 from '@Img/objects/tree/winter_conifer_tree_4.png'
import tree5 from '@Img/objects/tree/winter_conifer_tree_5.png'
import tree6 from '@Img/objects/tree/winter_tree_7.png'
import tree7 from '@Img/objects/tree/winter_tree_8.png'
import tree8 from '@Img/objects/tree/winter_tree_9.png'
import tree9 from '@Img/objects/tree/winter_tree_10.png'
import bush3 from '@Img/objects/Bush/Bush4_1.png'
import platformImg from '@Maps/Map5/ground/Pad_03_1.png'
import mapBGImg from '@Maps/Map5/background344.png'

export const mapBG = {
	img: mapBGImg
}
export const ObjectsMap = [
	{ objectY: 20, objectX: -570, objectWidth: 590, objectHeight: 350, img: rock1, zIndex: 200 },
	{ objectY: 20, objectX: 570, objectWidth: 590, objectHeight: 350, img: tree5, zIndex: 200 },
	{ objectY: 0, objectX: 370, objectWidth: 590, objectHeight: 350, img: tree5, zIndex: 200 },
	{ objectY: 60, objectX: 470, objectWidth: 590, objectHeight: 350, img: tree4, zIndex: 100 },
	{ objectY: 60, objectX: 870, objectWidth: 590, objectHeight: 350, img: tree3, zIndex: 100 },
	{ objectY: 60, objectX: 770, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 100 },
	{ objectY: 20, objectX: 1270, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 200 },
	{ objectY: 60, objectX: 1300, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 100 },
	{ objectY: 60, objectX: 1470, objectWidth: 590, objectHeight: 350, img: tree2, zIndex: 100 },
	{ objectY: 60, objectX: 1470, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 100 },
	{ objectY: 60, objectX: 1670, objectWidth: 590, objectHeight: 350, img: tree4, zIndex: 100 },
	{ objectY: 60, objectX: 1770, objectWidth: 590, objectHeight: 350, img: tree7, zIndex: 100 },
	{ objectY: 20, objectX: 1850, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 200 },
	{ objectY: 20, objectX: 1972, objectWidth: 590, objectHeight: 350, img: tree7, zIndex: 200 },
	{ objectY: 20, objectX: 2372, objectWidth: 590, objectHeight: 350, img: tree6, zIndex: 200 },
	{ objectY: 20, objectX: 2270, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 200 },
	{ objectY: 60, objectX: 2672, objectWidth: 590, objectHeight: 350, img: tree8, zIndex: 100 },
	{ objectY: 60, objectX: 2770, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 100 },
	{ objectY: 20, objectX: 2872, objectWidth: 590, objectHeight: 350, img: tree5, zIndex: 200 },
	{ objectY: 40, objectX: 3072, objectWidth: 590, objectHeight: 350, img: tree5, zIndex: 200 },
	{ objectY: 60, objectX: 3770, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 100 },
	{ objectY: -100, objectX: 3372, objectWidth: 590, objectHeight: 350, img: tree9, zIndex: 200 },
	{ objectY: 20, objectX: 3672, objectWidth: 590, objectHeight: 350, img: tree2, zIndex: 200 },
	{ objectY: 60, objectX: 3872, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 100 },
	{ objectY: 0, objectX: 4672, objectWidth: 290, objectHeight: 250, img: rock2, zIndex: 100 },
	{ objectY: -100, objectX: 4772, objectWidth: 590, objectHeight: 350, img: tree9, zIndex: 200 },
	{ objectY: 60, objectX: 4172, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 100 },
	{ objectY: 30, objectX: 4272, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 200 },
	{ objectY: 30, objectX: 5172, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 200 },
	{ objectY: 20, objectX: 5270, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 200 },
	{ objectY: 60, objectX: 5472, objectWidth: 590, objectHeight: 350, img: tree2, zIndex: 100 },
	{ objectY: 20, objectX: 5672, objectWidth: 590, objectHeight: 350, img: tree5, zIndex: 200 },
	{ objectY: 60, objectX: 6072, objectWidth: 590, objectHeight: 350, img: tree3, zIndex: 100 },
]

export const platforms = [
	{ platformY: 300, platformX: 1200, platformWidth: 400, platformHeight: 340 },
	{ platformY: 400, platformX: 550, platformWidth: 450, platformHeight: 340 },
	{ platformY: 500, platformX: 0, platformWidth: 450, platformHeight: 340 },
	{ platformY: 300, platformX: 2300, platformWidth: 400, platformHeight: 340 },
	{ platformY: 400, platformX: 2800, platformWidth: 400, platformHeight: 340 },
	{ platformY: 500, platformX: 3300, platformWidth: 600, platformHeight: 340 },
	{ platformY: 300, platformX: 5000, platformWidth: 600, platformHeight: 340 },
	{ platformY: 520, platformX: 5700, platformWidth: 600, platformHeight: 340 },
]

export const artifactsDate = [
	{ artifactsY: 360, artifactsX: 1400, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg4 },
	{ artifactsY: 580, artifactsX: 5900, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg2 },
	{ artifactsY: 370, artifactsX: 2500, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg3 },
	{ artifactsY: 570, artifactsX: 3500, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg5 },
	{ artifactsY: 370, artifactsX: 5250, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg },
	{ artifactsY: 570, artifactsX: 150, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg },
]

export const healthsDate = [
	{ health: 500, positionX: 3750, positionY: 590, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 4900, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 3300, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 6200, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 2100, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 780, positionY: 490, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 5380, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 5980, positionY: 590, takeHealth: true, img: HPImg, healthWith: 70 },
]

export const animatedBoss = {
	attack1: bossAttack1,
	attack2: bossAttack2,
	attack3: bossAttack3,
	hunter: bosseHunter,
	deed: bosseDeed
}
export const enemyAnimation = {
	walk: 6,
	attacking: 6,
	deed: 8
}

export const frameBosse = {
	attack1: 6,
	attack2: 6,
	attack3: 6,
	deed: 8,
	hunter: 6
}

export const initialEnemies = [
	{ positionX: 450, initialPositionX: 400, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 210, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 250, initialPositionX: 310, positionY: 500, isAttacking: false, isHunter: true, moveRight: true,
		HP: 210, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 550, initialPositionX: 610, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 210, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 1350, initialPositionX: 1210, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 210, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 1610, initialPositionX: 1570, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 210, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 1250, initialPositionX: 1870, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 210, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 2620, initialPositionX: 2333, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 210, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 3120, initialPositionX: 3333, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 210, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 3120, initialPositionX: 3033, positionY: 400, isAttacking: false, isHunter: true, moveRight: true,
		HP: 210, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 4220, initialPositionX: 4033, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 210, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 4420, initialPositionX: 4733, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 210, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 5520, initialPositionX: 5733, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 210, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 5820, initialPositionX: 5933, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 210, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },
]


export const heroDate = {
	heroHP: 2600,
	maxHeroHP: 2600,
	bottom: 65
};

// Данные босса
export const dateBosse = {
	positionX: 2000,
	initialPositionX: 2000,
	isAttacking: false,
	HP: 3000,
	isDying: false,
	bosseDirection: 1,
	maxHP: 3000,
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
	minDistanceX: -6600,
	namePlanet: 'Измерение B-89: Флория',
	systemName: 'Система: FN-33: Люмисфера'
}
// Портал
export const portalDate = {
	portalY: 0,
	portalX: 6900,
};
export const textDate = {
	text: `Этот мир кажется живым, слишком живым. Каждый твой шаг отзывается шёпотами в земле, деревьях, даже в небе. Это мир, где каждая часть знает тебя, и кажется, что всё вокруг дышит в унисон с твоим сердцем.
</br> Но вместе с этим ощущением единства приходит страх. Голоса здесь больше не шёпчут. Они кричат, зовут, обвиняют: «Ты бросил нас!»
</br> Ты находишь артефакт, и память возвращается с невыносимой ясностью. Это был мир, который ты должен был защитить. Но вместо этого ты оставил его на грани уничтожения.
</br> Голос звучит громче, чем когда-либо: «Ты был нашим спасителем. Ты стал нашей погибелью. Что ты сделаешь теперь, когда узнаешь правду?»
</br> С каждым новым воспоминанием твоё бремя становится тяжелее. И всё же ты знаешь, что не можешь остановиться.
</br> Но чего стоит истина, если она лишь тянет тебя ко дну?

`
}