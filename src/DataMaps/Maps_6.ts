import enemyAttack from '@Img/Enemies/Onre/Attack_1.png'
import enemyDeed from '@Img/Enemies/Onre/Dead.png'
import enemyWalk from '@Img/Enemies/Onre/Walk.png'

import bossAttack1 from '@Img/Enemies/Gorgon_2/Attack_1.png'
import bossAttack2 from '@Img/Enemies/Gorgon_2/Attack_2.png'
import bossAttack3 from '@Img/Enemies/Gorgon_2/Attack_3.png'
import bosseDeed from '@Img/Enemies/Gorgon_2/Dead.png'
import bosseHunter from '@Img/Enemies/Gorgon_2/Run.png'

import artifactImg4 from '@Img/objects/Artifacts/20.png'
import artifactImg3 from '@Img/objects/Artifacts/13.png'
import artifactImg5 from '@Img/objects/Artifacts/12.png'

import artifactImg from '@Img/objects/Artifacts/15.png'
import artifactImg2 from '@Img/objects/Artifacts/9.png'
import HPImg from '@Img/objects/HP.png'
import rock1 from '@Img/objects/rock/cave_rock1.png'
import tree1 from '@Img/objects/tree/jungle_tree_5.png'
import tree2 from '@Img/objects/tree/jungle_tree_6.png'
import bush3 from '@Img/objects/Bush/Bush4_1.png'
import platformImg from '@Maps/Map6/ground/Pad_3_3.png'
import mapBGImg from '@Maps/Map6/3_game_backgrounddwa.png'

export const mapBG = {
	img: mapBGImg
}
export const ObjectsMap = [
	{ objectY: 20, objectX: -570, objectWidth: 590, objectHeight: 300, img: rock1, zIndex: 200 },
	{ objectY: 20, objectX: 270, objectWidth: 590, objectHeight: 300, img: tree1, zIndex: 200 },
	{ objectY: 20, objectX: 170, objectWidth: 590, objectHeight: 300, img: tree1, zIndex: 200 },
	{ objectY: 20, objectX: 570, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 200 },
	{ objectY: 70, objectX: 670, objectWidth: 590, objectHeight: 300, img: tree2, zIndex: 100 },
	{ objectY: 70, objectX: 1270, objectWidth: 590, objectHeight: 300, img: tree2, zIndex: 100 },
	{ objectY: 20, objectX: 1570, objectWidth: 590, objectHeight: 300, img: tree2, zIndex: 200 },
	{ objectY: 20, objectX: 1470, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 200 },
	{ objectY: 70, objectX: 1897, objectWidth: 1290, objectHeight: 100, img: bush3, zIndex: 100 },
	{ objectY: 20, objectX: 2370, objectWidth: 590, objectHeight: 300, img: tree1, zIndex: 200 },
	{ objectY: 70, objectX: 2170, objectWidth: 590, objectHeight: 300, img: tree1, zIndex: 100 },
	{ objectY: 20, objectX: 2397, objectWidth: 1290, objectHeight: 100, img: bush3, zIndex: 200 },
	{ objectY: 20, objectX: 2597, objectWidth: 1290, objectHeight: 300, img: tree1, zIndex: 200 },
	{ objectY: 70, objectX: 2897, objectWidth: 1290, objectHeight: 300, img: tree1, zIndex: 100 },
	{ objectY: 20, objectX: 2797, objectWidth: 1290, objectHeight: 100, img: bush3, zIndex: 200 },
	{ objectY: 70, objectX: 3097, objectWidth: 1290, objectHeight: 100, img: bush3, zIndex: 100 },
	{ objectY: 70, objectX: 3397, objectWidth: 1290, objectHeight: 300, img: tree1, zIndex: 100 },
	{ objectY: 10, objectX: 3297, objectWidth: 1290, objectHeight: 300, img: tree1, zIndex: 200 },
]

export const platforms = [
	{ platformY: 300, platformX: 1200, platformWidth: 400, platformHeight: 340 },
	{ platformY: 500, platformX: 1700, platformWidth: 400, platformHeight: 340},
	{ platformY: 300, platformX: 2500, platformWidth: 300, platformHeight: 340},
	{ platformY: 350, platformX: 3300, platformWidth: 300, platformHeight: 340},
	{ platformY: 560, platformX: 3700, platformWidth: 450, platformHeight: 340},
]

export const artifactsDate = [
	{ artifactsY: 570, artifactsX: 1800, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg },
	{ artifactsY: 70, artifactsX: 600, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg5 },
	{ artifactsY: 70, artifactsX: 2200, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg3 },
	{ artifactsY: 430, artifactsX: 3500, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg4 },
	{ artifactsY: 630, artifactsX: 3950, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg2 },
	{ artifactsY: 70, artifactsX: 4300, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg3 },
]

export const healthsDate = [
	{ health: 500, positionX: 3900, positionY: 640, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 2650, positionY: 390, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 3300, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 2100, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 1180, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 4180, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
]

export const animatedBoss = {
	attack1: bossAttack1,
	attack2: bossAttack2,
	attack3: bossAttack3,
	hunter: bosseHunter,
	deed: bosseDeed
}
export const enemyAnimation = {
	walk: 7,
	attacking: 5,
	deed: 6
}

export const frameBosse = {
	attack1: 16,
	attack2: 7,
	attack3: 10,
	deed: 3,
	hunter: 7
}

export const initialEnemies = [
	{ positionX: 450, initialPositionX: 400, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 230, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 850, initialPositionX: 680, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 230, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 1310, initialPositionX: 1280, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 230, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 1425, initialPositionX: 1680, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 230, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 1725, initialPositionX: 1870, positionY: 500, isAttacking: false, isHunter: true, moveRight: true,
		HP: 230, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 2425, initialPositionX: 2345, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 230, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 2885, initialPositionX: 2745, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 230, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 3985, initialPositionX: 3745, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 230, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 3285, initialPositionX: 4245, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 230, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },
]


export const heroDate = {
	heroHP: 2700,
	maxHeroHP: 2700,
	bottom: 65
};

// Данные босса
export const dateBosse = {
	positionX: 2000,
	initialPositionX: 2000,
	isAttacking: false,
	HP: 3500,
	isDying: false,
	bosseDirection: 1,
	maxHP: 3500,
	hunter: true,
	progressSpecialAttack1: 0,
	progressSpecialAttack2: 0,
	specialAttack1: false,
	specialAttack2: false,
	width: 300,
	height: 300
};

export const platformsImg = {
	img: platformImg
}
export const MapData = {
	imgGround: null,
	backGreen: null,
	minDistanceX: -4500,
	namePlanet: 'Измерение Y-60: Эолирия',
	systemName: 'Система: YL-10: Ветарис'
}
// Портал
export const portalDate = {
	portalY: 0,
	portalX: 4800,
};
export const textDate = {
	text: `Здесь всё замерло. Даже воздух кажется неподвижным. Ты понимаешь: это место ждёт чего-то. Оно ждёт тебя.
</br> Артефакт светится ярче, и с ним приходит очередное видение. Ты видишь миры, которые ты покинул. В каждом из них твои действия привели к последствиям, о которых ты не знал. Ты видишь боль, хаос, и... силу, которую они обрели без тебя.
</br> Голос теперь полон гнева: «Ты называл себя защитником. Но что ты защитил? Они выжили без тебя. Они не нуждаются в тебе. Разве ты не видишь?»
</br> Но ты знаешь, что это неправда. Эти миры связаны друг с другом, и связь разрушена. Ты чувствуешь, как силы покидают тебя, но одновременно понимаешь, что ты должен завершить начатое.
</br> Ты замечаешь, что за тобой снова следит та тёмная фигура. Она всё ближе.
</br> «Свет или тьма. Истина или забвение. Твой выбор скоро станет окончательным.»

`
}