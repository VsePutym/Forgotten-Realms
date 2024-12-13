import enemyAttack from '@Img/Enemies/Samurai/Attack_1.png'
import enemyDeed from '@Img/Enemies/Samurai/Dead.png'
import enemyWalk from '@Img/Enemies/Samurai/Walk.png'

import bossAttack1 from '@Img/Hero/Attack_1.png'
import bossAttack2 from '@Img/Hero/Attack_2.png'
import bossAttack3 from '@Img/Hero/Attack_3.png'
import bosseDeed from '@Img/Hero/Dead.png'
import bosseHunter from '@Img/Hero/Run.png'
import artifactImg6 from '@Img/objects/Artifacts/5.png'

import HPImg from '@Img/objects/HP.png'

import grom from '@Img/objects/grom.gif'
import raine from '@Img/objects/raine.gif'
import grom2 from '@Img/objects/grom2.gif'

import tree1 from '@Img/objects/tree/fir_tree_8.png'
import tree2 from '@Img/objects/tree/fir_tree_3.png'
import tree3 from '@Img/objects/tree/fir_tree_2.png'
import bush1 from '@Img/objects/Bush/Bush3_1.png'
import platformImg from '@Maps/Map8/ground/Pad_jump_1.png'
import mapBGImg from '@Maps/Map8/BG2.png'

export const mapBG = {
	img: mapBGImg
}
export const ObjectsMap = [
	{ objectY: 500, objectX: 150, objectWidth: 370, objectHeight: 200, img: grom, zIndex: 10 },
	{ objectY: 10, objectX: 950, objectWidth: 570, objectHeight: 200, img: tree1, zIndex: 200 },
	{ objectY: 10, objectX: -250, objectWidth: 570, objectHeight: 400, img: tree2, zIndex: 200 },
	{ objectY: 30, objectX: -450, objectWidth: 570, objectHeight: 340, img: tree3, zIndex: 200 },
	{ objectY: 20, objectX: -550, objectWidth: 570, objectHeight: 440, img: tree2, zIndex: 200 },
	{ objectY: 23, objectX: -380, objectWidth: 570, objectHeight: 440, img: tree3, zIndex: 200 },
	{ objectY: 23, objectX: -380, objectWidth: 570, objectHeight: 140, img: bush1, zIndex: 200 },
	{ objectY: 70, objectX: -380, objectWidth: 1270, objectHeight: 140, img: bush1, zIndex: 100 },
	{ objectY: 320, objectX: 830, objectWidth: 370, objectHeight: 320, img: grom, zIndex: 10 },
	{ objectY: 400, objectX: -100, objectWidth: 370, objectHeight: 200, img: grom, zIndex: 10 },
	{ objectY: 220, objectX: 600, objectWidth: 370, objectHeight: 200, img: grom, zIndex: 10 },
	{ objectY: 100, objectX: 350, objectWidth: 370, objectHeight: 200, img: grom2, zIndex: 10 },
	{ objectY: 100, objectX: 260, objectWidth: 570, objectHeight: 900, img: grom2, zIndex: 10 },
	{ objectY: 100, objectX: 850, objectWidth: 570, objectHeight: 900, img: grom2, zIndex: 10 },
	{ objectY: 100, objectX: 1350, objectWidth: 570, objectHeight: 900, img: grom2, zIndex: 10 },
	{ objectY: 100, objectX: 250, objectWidth: 1570, objectHeight: 900, img: raine, zIndex: 10 },
	{ objectY: 100, objectX: 850, objectWidth: 1570, objectHeight: 900, img: raine, zIndex: 10 },
	{ objectY: 100, objectX: -350, objectWidth: 370, objectHeight: 900, img: grom2, zIndex: 10 },
	{ objectY: 100, objectX: 650, objectWidth: 370, objectHeight: 200, img: grom2, zIndex: 10 },
	{ objectY: 100, objectX: -450, objectWidth: 1670, objectHeight: 900, img: raine, zIndex: 10 },
	{ objectY: 10, objectX: 1250, objectWidth: 570, objectHeight: 400, img: tree2, zIndex: 200 },
	{ objectY: 30, objectX: 1350, objectWidth: 570, objectHeight: 340, img: tree3, zIndex: 200 },
	{ objectY: 20, objectX: 1450, objectWidth: 570, objectHeight: 440, img: tree2, zIndex: 200 },
	{ objectY: 30, objectX: 1650, objectWidth: 570, objectHeight: 440, img: tree2, zIndex: 200 },
	{ objectY: 23, objectX: 1580, objectWidth: 570, objectHeight: 440, img: tree3, zIndex: 200 },
	{ objectY: 23, objectX: 1780, objectWidth: 570, objectHeight: 440, img: tree3, zIndex: 200 },
]

export const platforms = [
	{ platformY: 300, platformX: 100, platformWidth: 500, platformHeight: 340 },
]

export const artifactsDate = [
	{ artifactsY: 70, artifactsX: 870, artifactsWidth: 170, artifactsHeight: 170, takeArtifact: true, img: artifactImg6 }
]

export const healthsDate = [
	{ health: 500, positionX: 500, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 200, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 200, positionY: 390, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 350, positionY: 390, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 470, positionY: 390, takeHealth: true, img: HPImg, healthWith: 70 },

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
	attack1: 6,
	attack2: 4,
	attack3: 3,
	deed: 3,
	hunter: 8
}

export const initialEnemies = [
	{ positionX: 450, initialPositionX: 400, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 450, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 1050, initialPositionX: 680, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 450, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },
]


export const heroDate = {
	heroHP: 2800,
	maxHeroHP: 2800,
	bottom: 65
};

// Данные босса
export const dateBosse = {
	positionX: 1200,
	initialPositionX: 1200,
	isAttacking: false,
	HP: 4300,
	isDying: false,
	bosseDirection: -1,
	maxHP: 4300,
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
	minDistanceX: -1020,
	namePlanet: 'Измерение V-18: Ноксор',
	systemName: 'Система: VT-02: Пылающий узел'
}
// Портал
export const portalDate = {
	portalY: 0,
	portalX: 1920,
};


export const textDate = {
	text: `Ты почти у цели. Все миры, что ты пробудил, снова дышат. Их энергия струится к тебе, напоминая о том, что ты был частью чего-то великого.
</br> «Хранитель миров…» — эти слова звучат эхом в твоём сознании. Когда-то ты стоял на страже баланса, связующий звено между хаосом и порядком.
 Но затем миры начали рушиться. </br> Ты вспоминаешь момент, когда сделал свой выбор. Чтобы сохранить равновесие, ты разделил себя на две
  части: свет, несущий жизнь, и тьму, обуздывающую хаос. Ты надеялся, что обе стороны останутся верны общей цели. </br> Но тьма предала тебя.
   Она вырвалась из-под контроля, разрушая всё, что ты охранял. Ты потерял себя, потерял память, потерял миры… </br> Теперь ты стоишь на пороге,
   где твои пути пересекаются вновь. Ты восстановил связь, но готов ли ты столкнуться с тем, что сам сотворил?`
}

