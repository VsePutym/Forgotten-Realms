import GotokuAttack from '@Img/Enemies/Gotoku/Attack_1.png'
import GotokuDeed from '@Img/Enemies/Gotoku/Dead.png'
import GotokufWalk from '@Img/Enemies/Gotoku/walk.png'
import bossAttack3 from '@Img/Enemies/Yamabushi_tengu/Attack_1.png'
import bossAttack1 from '@Img/Enemies/Yamabushi_tengu/Attack_2.png'
import bossAttack2 from '@Img/Enemies/Yamabushi_tengu/Attack_3.png'
import bosseDeed from '@Img/Enemies/Yamabushi_tengu/Dead.png'
import bosseHunter from '@Img/Enemies/Yamabushi_tengu/Walk.png'
import artifactImg4 from '@Img/objects/Artifacts/20.png'
import artifactImg3 from '@Img/objects/Artifacts/13.png'
import artifactImg5 from '@Img/objects/Artifacts/19.png'
import artifactImg6 from '@Img/objects/Artifacts/16.png'
import artifactImg from '@Img/objects/Artifacts/4.png'
import artifactImg2 from '@Img/objects/Artifacts/9.png'
import HPImg from '@Img/objects/HP.png'
import rock1 from '@Img/objects/rock/canyon_rock1.png'
import rock2 from '@Img/objects/rock/canyon_rock2.png'
import rock3 from '@Img/objects/rock/desert_rock1.png'
import bush1 from '@Img/objects/Bush/Bush3_1.png'
import bush2 from '@Img/objects/Bush/Bush4_1.png'
import bush3 from '@Img/objects/Bush/Bush10_2.png'
import platformImg from '@Maps/Map3/ground/Pad_01_1.png'
import mapBGImg from '@Maps/Map3/BG3.png'

export const mapBG = {
	img: mapBGImg
}
export const ObjectsMap = [
	{ objectY: 20, objectX: -470, objectWidth: 590, objectHeight: 350, img: rock1, zIndex: 200 },
	{ objectY: 20, objectX: 370, objectWidth: 490, objectHeight: 100, img: bush1, zIndex: 200 },
	{ objectY: 20, objectX: 600, objectWidth: 590, objectHeight: 250, img: rock2, zIndex: 200 },
	{ objectY: 60, objectX: 800, objectWidth: 590, objectHeight: 100, img: bush2, zIndex: 100 },
	{ objectY: 10, objectX: 1100, objectWidth: 590, objectHeight: 100, img: bush2, zIndex: 200 },
	{ objectY: 0, objectX: 1500, objectWidth: 590, objectHeight: 150, img: rock3, zIndex: 200 },
	{ objectY: 20, objectX: 2100, objectWidth: 590, objectHeight: 100, img: bush1, zIndex: 200 },
	{ objectY: 60, objectX: 2300, objectWidth: 590, objectHeight: 100, img: bush2, zIndex: 100 },
	{ objectY: 10, objectX: 3650, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 200 },
	{ objectY: 20, objectX: 2400, objectWidth: 590, objectHeight: 100, img: bush2, zIndex: 200 },
	{ objectY: 60, objectX: 2800, objectWidth: 590, objectHeight: 100, img: bush2, zIndex: 100 },
	{ objectY: 10, objectX: 3100, objectWidth: 590, objectHeight: 100, img: bush2, zIndex: 200 },
	{ objectY: 40, objectX: 3700, objectWidth: 590, objectHeight: 100, img: bush2, zIndex: 100 },
	{ objectY: 10, objectX: 4000, objectWidth: 590, objectHeight: 250, img: rock1, zIndex: 200 },
	{ objectY: 630, objectX: 3600, objectWidth: 590, objectHeight: 100, img: bush1, zIndex: 100 },
	{ objectY: 400, objectX: 4500, objectWidth: 590, objectHeight: 100, img: bush1, zIndex: 200 },
	{ objectY: 10, objectX: 4400, objectWidth: 590, objectHeight: 100, img: bush1, zIndex: 200 },
	{ objectY: 10, objectX: 4800, objectWidth: 590, objectHeight: 100, img: bush2, zIndex: 200 },
	{ objectY: 10, objectX: 5200, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 200 },
	{ objectY: 350, objectX: 5800, objectWidth: 590, objectHeight: 100, img: bush3, zIndex: 200 },
	{ objectY: 20, objectX: 6600, objectWidth: 590, objectHeight: 200, img: rock3, zIndex: 200 },
	{ objectY: 10, objectX: 5900, objectWidth: 590, objectHeight: 100, img: bush2, zIndex: 200 },
	{ objectY: 10, objectX: 6000, objectWidth: 590, objectHeight: 100, img: bush2, zIndex: 200 },
]

export const platforms = [
	{ platformY: 300, platformX: 1200, platformWidth: 400, platformHeight: 340 },
	{ platformY: 450, platformX: 1800, platformWidth: 400, platformHeight: 340},
	{ platformY: 350, platformX: 3300, platformWidth: 300, platformHeight: 340},
	{ platformY: 560, platformX: 3700, platformWidth: 450, platformHeight: 340},
	{ platformY: 360, platformX: 4500, platformWidth: 550, platformHeight: 340},
	{ platformY: 300, platformX: 5700, platformWidth: 600, platformHeight: 340},
]

export const artifactsDate = [
	{ artifactsY: 530, artifactsX: 1900, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg4 },
	{ artifactsY: 70, artifactsX: 700, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg2 },
	{ artifactsY: 70, artifactsX: 2200, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg3 },
	{ artifactsY: 420, artifactsX: 3500, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg5 },
	{ artifactsY: 620, artifactsX: 3950, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg },
	{ artifactsY: 70, artifactsX: 4300, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg6 },
]

export const healthsDate = [
	{ health: 500, positionX: 3750, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 4900, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 2100, positionY: 540, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 6000, positionY: 350, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 2700, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
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
	attacking: 4,
	deed: 5
}

export const frameBosse = {
	attack1: 6,
	attack2: 4,
	attack3: 3,
	deed: 6,
	hunter: 8
}

export const initialEnemies = [
	{ positionX: 450, initialPositionX: 400, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 150, isDying: false, imgWalk: GotokufWalk, imgAttack: GotokuAttack, imgDeed: GotokuDeed, Direction: -1 },

	{ positionX: 1050, initialPositionX: 1220, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 150, isDying: false, imgWalk: GotokufWalk, imgAttack: GotokuAttack, imgDeed: GotokuDeed, Direction: -1 },

	{ positionX: 1230, initialPositionX: 1320, positionY: 300, isAttacking: false, isHunter: true, moveRight: true,
		HP: 150, isDying: false, imgWalk: GotokufWalk, imgAttack: GotokuAttack, imgDeed: GotokuDeed, Direction: -1 },

	{ positionX: 2030, initialPositionX: 2380, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 170, isDying: false, imgWalk: GotokufWalk, imgAttack: GotokuAttack, imgDeed: GotokuDeed, Direction: -1 },

	{ positionX: 2525, initialPositionX: 2650, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 170, isDying: false, imgWalk: GotokufWalk, imgAttack: GotokuAttack, imgDeed: GotokuDeed, Direction: -1 },

	{ positionX: 2825, initialPositionX: 2922, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 170, isDying: false, imgWalk: GotokufWalk, imgAttack: GotokuAttack, imgDeed: GotokuDeed, Direction: -1 },

	{ positionX: 3410, initialPositionX: 3300, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 170, isDying: false, imgWalk: GotokufWalk, imgAttack: GotokuAttack, imgDeed: GotokuDeed, Direction: -1 },

	{ positionX: 3820, initialPositionX: 4000, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 170, isDying: false, imgWalk: GotokufWalk, imgAttack: GotokuAttack, imgDeed: GotokuDeed, Direction: -1 },

	{ positionX: 4630, initialPositionX: 4750, positionY: 360, isAttacking: false, isHunter: true, moveRight: true,
		HP: 170, isDying: false, imgWalk: GotokufWalk, imgAttack: GotokuAttack, imgDeed: GotokuDeed, Direction: -1 },

	{ positionX: 5900, initialPositionX: 5870, positionY: 0, isAttacking: false, isHunter: true, moveRight: true,
		HP: 170, isDying: false, imgWalk: GotokufWalk, imgAttack: GotokuAttack, imgDeed: GotokuDeed, Direction: -1 },
]

export const heroDate = {
	heroHP: 2400,
	maxHeroHP: 2400,
	bottom: 55
};

// Данные босса
export const dateBosse = {
	positionX: 2000,
	initialPositionX: 2000,
	isAttacking: false,
	HP: 1500,
	isDying: false,
	bosseDirection: 1,
	maxHP: 1500,
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
	namePlanet: 'Измерение Q-7: Ликсилия',
	systemName: 'Система: HG-22: Гелион'
}
// Портал
export const portalDate = {
	portalY: 0,
	portalX: 6900,
};
export const textDate = {
	text: `Свет… он кажется ярче. Но с ним приходит тревога. Каждый шаг вперёд словно открывает перед тобой занавес, скрывающий неизведанное. </br>
</br> Ты пересекаешь порог нового мира, но тут всё иначе. Ветры, что веют над тобой, наполнены шёпотами, непохожими на те, что ты слышал прежде.
Они зовут тебя, но не именем, а чем-то… древним.
</br> Образы снова вспыхивают в сознании: поля сражений, золотые врата, которые однажды защищал ты сам. Всё становится яснее: ты не просто странник.
 Ты был хранителем, защитником… предателем?
</br> Голос звучит вновь, но теперь в нём слышится не только мольба: «Помни. В каждом пробуждённом мире скрыта часть истины. Но с каждым шагом ты всё
ближе к выбору, от которого не уйти.»
</br> Этот мир не просто опасен. Он чувствует твои сомнения и питается ими. Ты готов идти дальше?
`
}