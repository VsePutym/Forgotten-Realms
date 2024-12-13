import enemyAttack from '@Img/Enemies/Yurei/Attack_3.png'
import enemyDeed from '@Img/Enemies/Yurei/Dead.png'
import enemyWalk from '@Img/Enemies/Yurei/walk.png'

import bossAttack1 from '@Img/Enemies/Skeleton_Warrior/Attack_1.png'
import bossAttack2 from '@Img/Enemies/Skeleton_Warrior/Attack_2.png'
import bossAttack3 from '@Img/Enemies/Skeleton_Warrior/Attack_3.png'
import bosseDeed from '@Img/Enemies/Skeleton_Warrior/Dead.png'
import bosseHunter from '@Img/Enemies/Skeleton_Warrior/Run.png'

import artifactImg4 from '@Img/objects/Artifacts/20.png'
import artifactImg3 from '@Img/objects/Artifacts/13.png'
import artifactImg5 from '@Img/objects/Artifacts/19.png'
import artifactImg6 from '@Img/objects/Artifacts/16.png'
import artifactImg from '@Img/objects/Artifacts/4.png'
import artifactImg2 from '@Img/objects/Artifacts/9.png'
import HPImg from '@Img/objects/HP.png'
import rock1 from '@Img/objects/rock/cave_rock1.png'
import tree1 from '@Img/objects/tree/jungle_tree_5.png'
import tree2 from '@Img/objects/tree/jungle_tree_6.png'
import tree3 from '@Img/objects/tree/jungle_tree_7.png'
import rock2 from '@Img/objects/rock/cave_rock2.png'
import bush1 from '@Img/objects/Bush/Bush7_1.png'
import bush2 from '@Img/objects/Bush/Bush2_1.png'
import bush3 from '@Img/objects/Bush/Bush2_2.png'
import bush4 from '@Img/objects/Bush/Bush4_1.png'
import platformImg from '@Maps/Map4/ground/Pad_3_3.png'
import mapBGImg from '@Maps/Map4/BG4.png'

export const mapBG = {
	img: mapBGImg
}
export const ObjectsMap = [
	{ objectY: 70, objectX: -570, objectWidth: 590, objectHeight: 350, img: rock1, zIndex: 200 },
	{ objectY: 70, objectX: 570, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 100 },
	{ objectY: 70, objectX: 370, objectWidth: 590, objectHeight: 300, img: tree2, zIndex: 100 },
	{ objectY: 50, objectX: 310, objectWidth: 590, objectHeight: 100, img: bush2, zIndex: 200 },
	{ objectY: 50, objectX: 810, objectWidth: 590, objectHeight: 100, img: bush4, zIndex: 200 },
	{ objectY: 70, objectX: 710, objectWidth: 590, objectHeight: 100, img: bush4, zIndex: 100 },
	{ objectY: 50, objectX: 1570, objectWidth: 590, objectHeight: 300, img: tree3, zIndex: 200 },
	{ objectY: 50, objectX: 1770, objectWidth: 590, objectHeight: 300, img: tree3, zIndex: 200 },
	{ objectY: 70, objectX: 1970, objectWidth: 590, objectHeight: 300, img: tree2, zIndex: 100 },
	{ objectY: 50, objectX: 2170, objectWidth: 590, objectHeight: 150, img: bush1, zIndex: 200 },
	{ objectY: 70, objectX: 2570, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 100 },
	{ objectY: 70, objectX: 2670, objectWidth: 590, objectHeight: 150, img: bush2, zIndex: 100 },
	{ objectY: 50, objectX: 2970, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 210 },
	{ objectY: 50, objectX: 3370, objectWidth: 590, objectHeight: 350, img: tree1, zIndex: 210 },
	{ objectY: 70, objectX: 3770, objectWidth: 590, objectHeight: 150, img: bush4, zIndex: 100 },
	{ objectY: 70, objectX: 4070, objectWidth: 590, objectHeight: 350, img: tree2, zIndex: 100 },
	{ objectY: 70, objectX: 4370, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 100 },
	{ objectY: 70, objectX: 4570, objectWidth: 590, objectHeight: 350, img: tree3, zIndex: 100 },
	{ objectY: 70, objectX: 4770, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 100 },
	{ objectY: 50, objectX: 4870, objectWidth: 590, objectHeight: 350, img: tree3, zIndex: 200 },
	{ objectY: 70, objectX: 5270, objectWidth: 590, objectHeight: 300, img: rock2, zIndex: 100 },
	{ objectY: 70, objectX: 6070, objectWidth: 590, objectHeight: 150, img: bush1, zIndex: 100 },
	{ objectY: 70, objectX: 6370, objectWidth: 590, objectHeight: 300, img: tree1, zIndex: 100 },
	{ objectY: 70, objectX: 6470, objectWidth: 590, objectHeight: 300, img: tree1, zIndex: 100 },
	{ objectY: 70, objectX: 6400, objectWidth: 590, objectHeight: 300, img: tree1, zIndex: 100 },
	{ objectY: 70, objectX: 6670, objectWidth: 590, objectHeight: 300, img: tree1, zIndex: 100 },
	{ objectY: 70, objectX: 6970, objectWidth: 590, objectHeight: 150, img: bush1, zIndex: 100 },
	{ objectY: 70, objectX: 7270, objectWidth: 590, objectHeight: 300, img: tree2, zIndex: 100 },
	{ objectY: 70, objectX: 7470, objectWidth: 590, objectHeight: 300, img: tree3, zIndex: 100 },
	{ objectY: 70, objectX: 7170, objectWidth: 590, objectHeight: 300, img: tree1, zIndex: 100 },
	{ objectY: 70, objectX: 6870, objectWidth: 590, objectHeight: 300, img: tree2, zIndex: 100 },
]

export const platforms = [
	{ platformY: 300, platformX: 1200, platformWidth: 400, platformHeight: 340 },
	{ platformY: 300, platformX: 2300, platformWidth: 400, platformHeight: 340 },
	{ platformY: 400, platformX: 2800, platformWidth: 400, platformHeight: 340 },
	{ platformY: 500, platformX: 3300, platformWidth: 600, platformHeight: 340 },
	{ platformY: 500, platformX: 4000, platformWidth: 600, platformHeight: 340 },
]

export const artifactsDate = [
	{ artifactsY: 360, artifactsX: 1400, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg4 },
	{ artifactsY: 70, artifactsX: 5900, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg2 },
	{ artifactsY: 370, artifactsX: 2500, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg3 },
	{ artifactsY: 570, artifactsX: 3500, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg5 },
	{ artifactsY: 570, artifactsX: 4250, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg },
	{ artifactsY: 70, artifactsX: 4700, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg6 },
]

export const healthsDate = [
	{ health: 500, positionX: 3750, positionY: 590, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 4900, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 3300, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 6200, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 2100, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
]

export const animatedBoss = {
	attack1: bossAttack1,
	attack2: bossAttack2,
	attack3: bossAttack3,
	hunter: bosseHunter,
	deed: bosseDeed
}
export const enemyAnimation = {
	walk: 5,
	attacking: 7,
	deed: 4
}

export const frameBosse = {
	attack1: 5,
	attack2: 6,
	attack3: 4,
	deed: 4,
	hunter: 8
}

export const initialEnemies = [
	{ positionX: 450, initialPositionX: 400, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 190, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 750, initialPositionX: 800, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 190, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 1250, initialPositionX: 1320, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 190, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 2570, initialPositionX: 2420, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 190, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 2970, initialPositionX: 3120, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 190, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 2970, initialPositionX: 3030, positionY: 400, isAttacking: false, isHunter: true, moveRight: true,
		HP: 190, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 3670, initialPositionX: 3560, positionY: 500, isAttacking: false, isHunter: true, moveRight: true,
		HP: 190, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 3470, initialPositionX: 3660, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 190, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 3820, initialPositionX: 3910, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 190, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },

	{ positionX: 5420, initialPositionX: 5540, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 190, isDying: false, imgWalk: enemyWalk, imgAttack: enemyAttack, imgDeed: enemyDeed, Direction: -1 },
]


export const heroDate = {
	heroHP: 2500,
	maxHeroHP: 2500,
	bottom: 65
};

// Данные босса
export const dateBosse = {
	positionX: 2100,
	initialPositionX: 2100,
	isAttacking: false,
	HP: 2500,
	isDying: false,
	bosseDirection: 1,
	maxHP: 2500,
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
	minDistanceX: -6600,
	namePlanet: 'Измерение T-88: Ардория',
	systemName: 'Система: TR-05: Терафион'
}
// Портал
export const portalDate = {
	portalY: 0,
	portalX: 6900,
};
export const textDate = {
	text: `Свет всё ещё с тобой, но его пульсирующий ритм напоминает отчёт времени. Здесь время словно сломано: тени становятся длиннее, а звуки затихают, как будто даже само пространство устало существовать.
</br> Мир перед тобой — руины, в которых застыли сцены прошлого. Ты видишь тени людей, их жизни, их ошибки. И все они связаны с тобой.
</br> Голос звучит яснее: «Всё это было построено тобой. И разрушено тобой. Разве ты не помнишь?»
</br> Проходя через эти руины, ты ощущаешь их боль, но понимаешь, что с каждым шагом оживляешь мир. И с каждым шагом оживает нечто ещё.
</br> На горизонте мелькает фигура, и она смотрит прямо на тебя. Знакомое лицо. Твои черты. Но глаза полны тьмы.
</br> «Ты пробуждаешь не только свет, но и то, что ты похоронил. И теперь оно жаждет встретиться с тобой.»
</br> Ты чувствуешь холод. Ты готов встретить свою тень?

`
}