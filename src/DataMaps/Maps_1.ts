import bossAttack1 from '@Img/Enemies/Karasu_tengu/Attack_1.png'
import bossAttack2 from '@Img/Enemies/Karasu_tengu/Attack_2.png'
import bossAttack3 from '@Img/Enemies/Karasu_tengu/Attack_3.png'
import bosseDeed from '@Img/Enemies/Karasu_tengu/Dead.png'
import bosseHunter from '@Img/Enemies/Karasu_tengu/Run.png'
import artifactImg from '@Img/objects/Artifacts/4.png';
import artifactImg2 from '@Img/objects/Artifacts/5.png';
import artifactImg3 from '@Img/objects/Artifacts/8.png';
import HPImg from '@Img/objects/HP.png';
import mount from "@Img/objects/rock/middle_lane_rock1_12.png";
import mount2 from "@Img/objects/rock/middle_lane_rock2_1.png";
import rock2 from "@Img/objects/rock/rock5.png";
import rock3 from "@Img/objects/rock/middle_lane_rock1_4.png";
import bush from '@Img/objects/bush/Bush1_3.png';
import bush2 from '@Img/objects/bush/Bush5_4.png';
import bush3 from '@Img/objects/bush/Bush6_2.png';
import bush4 from '@Img/objects/bush/Bush6_1.png';
import tree from '@Img/objects/tree/middle_lane_tree2.png';
import tree2 from '@Img/objects/bush/Bush3_1.png';
import tree1 from '@Img/objects/tree/middle_lane_tree1.png';
import tree3 from '@Img/objects/bush/Bush5_1.png';
import mapBGImg from '@Img/Maps/Map1/BG.png'
import tree4 from '@Img/objects/tree/middle_lane_tree3.png';
import gorgon_1_walk from '@Img/Enemies/Gorgon_1/Walk.png'
import gorgon_1_Attack_1 from '@Img/Enemies/Gorgon_1/Attack_1.png'
import gorgon_1_Deed_img from '@Img/Enemies/Gorgon_1/Dead.png';
import groundImg from '@Img/Maps/Map1/ground/Ground.png';
import platformImg  from '@Img/Maps/Map1/ground/Pad_jump_1.png'


export const mapBG = {
	img: mapBGImg
}
// Карты объектов
export const ObjectsMap = [
	{ objectY: 20, objectX: -350, objectWidth: 370, objectHeight: 300, img: mount, zIndex: 10 },
	{ objectY: 20, objectX: 850, objectWidth: 120, objectHeight: 90, img: bush, zIndex: 200 },
	{ objectY: 20, objectX: 350, objectWidth: 320, objectHeight: 400, img: tree4, zIndex: 200 },
	{ objectY: 20, objectX: 550, objectWidth: 120, objectHeight: 60, img: bush2, zIndex: 120 },
	{ objectY: 20, objectX: 1100, objectWidth: 90, objectHeight: 50, img: rock2, zIndex: 10 },
	{ objectY: 70, objectX: 1550, objectWidth: 500, objectHeight: 190, img: tree1, zIndex: 100 },
	{ objectY: 20, objectX: 2450, objectWidth: 100, objectHeight: 65, img: rock3, zIndex: 120 },
	{ objectY: 450, objectX: 1850, objectWidth: 120, objectHeight: 155, img: bush3, zIndex: 100 },
	{ objectY: 70, objectX: 2250, objectWidth: 350, objectHeight: 450, img: tree, zIndex: 100 },
	{ objectY: 20, objectX: 2950, objectWidth: 200, objectHeight: 200, img: tree2, zIndex: 200 },
	{ objectY: 70, objectX: 3650, objectWidth: 200, objectHeight: 140, img: tree3, zIndex: 100 },
	{ objectY: 520, objectX: 3750, objectWidth: 170, objectHeight: 140, img: bush3, zIndex: 120 },
	{ objectY: 20, objectX: 4050, objectWidth: 280, objectHeight: 400, img: tree4, zIndex: 120 },
	{ objectY: 70, objectX: 4450, objectWidth: 280, objectHeight: 130, img: bush4, zIndex: 10 },
	{ objectY: 20, objectX: 4900, objectWidth: 480, objectHeight: 220, img: mount2, zIndex: 120 },
	{ objectY: 20, objectX: 5500, objectWidth: 480, objectHeight: 420, img: tree4, zIndex: 120 },
	{ objectY: 20, objectX: 5800, objectWidth: 480, objectHeight: 420, img: tree, zIndex: 120 },
	{ objectY: 20, objectX: 5300, objectWidth: 480, objectHeight: 420, img: tree, zIndex: 120 },
];

// Платформы
export const platforms = [
	{ platformY: 300, platformX: 1200, platformWidth: 400, platformHeight: 340 },
	{ platformY: 400, platformX: 1700, platformWidth: 400, platformHeight: 340},
	{ platformY: 200, platformX: 2500, platformWidth: 300, platformHeight: 340},
	{ platformY: 250, platformX: 3300, platformWidth: 300, platformHeight: 340},
	{ platformY: 460, platformX: 3700, platformWidth: 450, platformHeight: 340},
	{ platformY: 260, platformX: 4500, platformWidth: 550, platformHeight: 340},
];

// Артефакты
export const artifactsDate = [
	{ artifactsY: 470, artifactsX: 1800, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg },
	{ artifactsY: 70, artifactsX: 600, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg2 },
	{ artifactsY: 70, artifactsX: 2200, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg3 },
	{ artifactsY: 320, artifactsX: 3500, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg },
	{ artifactsY: 520, artifactsX: 3950, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg2 },
	{ artifactsY: 70, artifactsX: 4300, artifactsWidth: 70, artifactsHeight: 70, takeArtifact: true, img: artifactImg3 },
];

// Здоровье
export const healthsDate = [
	{ health: 500, positionX: 3750, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 4900, positionY: 90, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 2000, positionY: 480, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 4800, positionY: 350, takeHealth: true, img: HPImg, healthWith: 70 },
	{ health: 500, positionX: 2700, positionY: 290, takeHealth: true, img: HPImg, healthWith: 70 },
];

// Начальные враги
export const initialEnemies = [
	{ positionX: 250, initialPositionX: 250, positionY: 0, isAttacking: false, isHunter: true, moveRight: true, HP: 100,
		isDying: false, imgWalk: gorgon_1_walk, imgAttack: gorgon_1_Attack_1, imgDeed: gorgon_1_Deed_img, Direction: -1 },

	{ positionX: 1250, initialPositionX: 1350, positionY: 0, isAttacking: false, isHunter: true, moveRight: true, HP: 100,
		isDying: false, imgWalk: gorgon_1_walk, imgAttack: gorgon_1_Attack_1, imgDeed: gorgon_1_Deed_img, Direction: -1 },

	{ positionX: 1950, initialPositionX: 1850, positionY: 400, isAttacking: false, isHunter: true, moveRight: true, HP: 100,
		isDying: false, imgWalk: gorgon_1_walk, imgAttack: gorgon_1_Attack_1, imgDeed: gorgon_1_Deed_img, Direction: -1 },

	{ positionX: 2200, initialPositionX: 2200, positionY: 0, isAttacking: false, isHunter: true, moveRight: true, HP: 100,
		isDying: false, imgWalk: gorgon_1_walk, imgAttack: gorgon_1_Attack_1, imgDeed: gorgon_1_Deed_img, Direction: -1 },

	{ positionX: 2700, initialPositionX: 2730, positionY: 0, isAttacking: false, isHunter: true, moveRight: true, HP: 100,
		isDying: false, imgWalk: gorgon_1_walk, imgAttack: gorgon_1_Attack_1, imgDeed: gorgon_1_Deed_img, Direction: -1 },

	{ positionX: 3000, initialPositionX: 3150, positionY: 0, isAttacking: false, isHunter: true, moveRight: true, HP: 100,
		isDying: false, imgWalk: gorgon_1_walk, imgAttack: gorgon_1_Attack_1, imgDeed: gorgon_1_Deed_img, Direction: -1 },

	{ positionX: 3400, initialPositionX: 3520, positionY: 0, isAttacking: false, isHunter: true, moveRight: true, HP: 100,
		isDying: false, imgWalk: gorgon_1_walk, imgAttack: gorgon_1_Attack_1, imgDeed: gorgon_1_Deed_img, Direction: -1 },

	{ positionX: 3400, initialPositionX: 3420, positionY: 250, isAttacking: false, isHunter: true, moveRight: true, HP: 100,
		isDying: false, imgWalk: gorgon_1_walk, imgAttack: gorgon_1_Attack_1, imgDeed: gorgon_1_Deed_img, Direction: -1 },

	{ positionX: 3900, initialPositionX: 3950, positionY: 0, isAttacking: false, isHunter: true, moveRight: true, HP: 100,
		isDying: false, imgWalk: gorgon_1_walk, imgAttack: gorgon_1_Attack_1, imgDeed: gorgon_1_Deed_img, Direction: -1 },
];

export const enemyAnimation = {
	walk: 13,
	attacking: 16,
	deed: 3
}

export const frameBosse = {
	attack1: 6,
	attack2: 4,
	attack3: 3,
	deed: 6,
	hunter: 8
}
// Данные героя
export const heroDate = {
	heroHP: 2000,
	maxHeroHP: 2000,
	bottom: 65
};

// Данные босса
export const dateBosse = {
	positionX: 1000,
	initialPositionX: 1000,
	isAttacking: false,
	HP: 1100,
	isDying: false,
	bosseDirection: 1,
	maxHP: 1100,
	hunter: true,
	progressSpecialAttack1: 0,
	progressSpecialAttack2: 0,
	specialAttack1: false,
	specialAttack2: false,
	width: 350,
	height: 350
};

export const animatedBoss = {
	attack1: bossAttack1,
	attack2: bossAttack2,
	attack3: bossAttack3,
	hunter: bosseHunter,
	deed: bosseDeed
}

export const platformsImg = {
	img: platformImg
}
export const MapData = {
	imgGround: platformImg,
	backGreen: groundImg,
	minDistanceX: -4920,
	namePlanet: 'Измерение F-71: Гелидия II',
	systemName: 'Система: LX-09: Ледариум'
}
// Портал
export const portalDate = {
	portalY: 0,
	portalX: 5300,
};

export const textDate = {
	text: `Тишина...</br>
Но это не спокойствие. Это пустота, гнетущая и безжизненная. Ты открываешь глаза, и перед тобой раскинулся мир, который кажется одновременно знакомым и чужим.
</br> Вокруг — туман, обволакивающий землю, словно старается скрыть правду, которую ты не готов увидеть.
</br> Вопросы наполняют твою голову: *Кто я? Почему я здесь?* Они не дают покоя, как эхо, которое не смолкает.
</br> Под ногами — что-то холодное. Ты поднимаешь его: осколок, пульсирующий мягким светом. Свет этот не греет, но зовёт, будто пытается сказать что-то важное.
</br> И тогда приходит первое видение: руины, скрытые в тени. Голоса, размытые, как отражение в воде. Крики и шёпоты, несущиеся издалека. А ещё… тьма. Она следит за тобой, наблюдая, ожидая.
</br> Голос шепчет: «Собери всё… и узнаешь правду.»
</br> Но правда всегда ли лучше забвения? Ты готов узнать? Путь начался.`
}

