import styled from '@Styles/Maps.module.scss'
import { useEffect, useRef } from 'react'
import * as React from 'react'
import teleportImg from '@Img/objects/teleport.gif'
import specialForceImg from '@Img/Skills/purple-fire.gif'
import Bosse from '../../components/Bosse/Bosse.tsx'
import Enemy from '../../components/Enemy/Enemy.tsx'
import Hero from '../../components/Hero/Hero.tsx'
import portal from '@Img/objects/portal.gif'
import ProgressHP from '../../components/ProgressHP/ProgressHP.tsx'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts'
import { gameSelector } from '../../selectors/gameSelector.ts'
import { HeroSelector } from '../../selectors/HeroSelectors.ts'
import { MapsSelectors } from '../../selectors/mapsSelectors.ts'
import { setNamePlanet } from '../../stores/Slices/gameSlice.ts'
import { BosseEnemy, enemyAnimationType, EnemyType, frameBosseType } from '../../type/enemies.ts'
import { animatedBossType, mapBgType, MapDataType } from '../../type/gameTypes.ts'
import {
	Artifacts,
	healthsProps,
	ObjectsProps,
	platformsImgType,
	PlatformTypes,
	PortalProps
} from '../../type/mapsTypes.ts'
import { heroDataTypeHP } from '../../type/typesHero.ts'

interface MapsTypes {
	platforms: PlatformTypes[];
	Enemies: EnemyType[];
	bosse: BosseEnemy
	spawnBosse: boolean,
	artifacts: Artifacts[],
	heroDate: heroDataTypeHP,
	heroHP: number,
	portalDate: PortalProps,
	healths: healthsProps[],
	ObjectsMap: ObjectsProps[],
	mapBG: mapBgType,
	MapData: MapDataType,
	platformsImg: platformsImgType,
	enemyAnimation: enemyAnimationType,
	animatedBoss: animatedBossType,
	frameBosse: frameBosseType
}

const Maps: React.FC<MapsTypes> = ({
	                                   frameBosse,
	                                   animatedBoss,
	                                   MapData,
	                                   enemyAnimation,
	                                   platformsImg,
	                                   mapBG,
	                                   heroHP,
	                                   ObjectsMap,
	                                   heroDate,
	                                   bosse,
	                                   platforms,
	                                   Enemies,
	                                   spawnBosse,
	                                   artifacts,
	                                   healths,
	                                   portalDate
                                   }) => {
	const currentDistance = useAppSelector(MapsSelectors.currentDistance)
	const heroPositionY = useAppSelector(HeroSelector.heroPositionY)
	const showPortal = useAppSelector(MapsSelectors.showPortal)
	const SelectorSpecialSkillForce = useAppSelector(HeroSelector.specialSkillForce)
	const dispatch = useAppDispatch()
	const textSpawnBosse = useRef(false)
	const noneTextBosse = useRef(true)
	const namePlanet = useAppSelector(gameSelector.namePlanet)
	const showNewSkills = useAppSelector(gameSelector.showNewSkills)
	const bosseDeed =  useRef(false)
	
	useEffect(() => {
		 bosseDeed.current = true
			setTimeout(() => {
				 bosseDeed.current = false
			}, 6000)
	}, [!bosse.isDying])
	
	useEffect(() => {
		if (namePlanet) {
			setTimeout(() => {
				dispatch(setNamePlanet(false))
			}, 6000)
		}
	}, [!showNewSkills])
	
	if (spawnBosse && noneTextBosse.current) {
		textSpawnBosse.current = true
		noneTextBosse.current = false
		setInterval(() => {
			textSpawnBosse.current = false
		}, 3000)
	}
	
	return (
		<div
			className={styled.mapContainer}
			style={{
				backgroundImage: `url(${mapBG.img})`,
				backgroundPositionX: `${currentDistance}px`
			}}
		>
			{bosse.isDying && bosseDeed.current &&(
				<div className={styled.textPlanet}><p>Собери все артефакты <br/> и проникни в портал</p></div>
			)}
			{namePlanet && (<div className={styled.textPlanet}>
				<div><p>{MapData.namePlanet}</p></div>
				<div>{MapData.systemName}</div>
			</div>)}
			<div className={textSpawnBosse.current ? styled.textRespawnBosse : styled.noneTextBosse}>Убей босса!</div>
			<div>
				{ObjectsMap.map((object, index) => (
					<div key={index}>
						<div className={styled.object} style={{
							backgroundImage: `url(${object.img})`,
							left: `${object.objectX + 450 + currentDistance}px`,
							bottom: `${object.objectY}px`,
							width: `${object.objectWidth}px`,
							height: `${object.objectHeight}px`,
							zIndex: object.zIndex
						}} />
					</div>
				))}
			</div>
			{showPortal && (
			<div
				style={{
					backgroundImage: `url(${teleportImg})`,
					left: `${portalDate.portalX + currentDistance}px`,
					bottom: `${portalDate.portalY + heroDate.bottom}px`
				}}
				className={styled.teleport}
			/>
			)}
			<div>
				{artifacts.map((artifact, index) => (
					<div key={index}>
						{artifact.takeArtifact && (
							<div className={styled.artifacts} style={{
								backgroundImage: `url(${artifact.img})`,
								left: `${artifact.artifactsX + 450 + currentDistance}px`,
								bottom: `${artifact.artifactsY}px`,
								width: `${artifact.artifactsWidth}px`,
								height: `${artifact.artifactsHeight}px`
							}}>
							</div>
						)}
					</div>
				))}
			</div>
			<div>
				{healths.map((health, index) => (
					<div key={index}>
						{health.takeHealth && (
							<div className={styled.health} style={{
								backgroundImage: `url(${health.img})`,
								left: `${health.positionX + 450 + currentDistance}px`,
								bottom: `${health.positionY}px`
							}}>
							</div>
						)}
					</div>
				))}
			</div>
			{platforms.map((platform, index) => (
				<div
					key={index}
					style={{
						backgroundImage: `url(${platformsImg.img})`,
						left: `${platform.platformX - -currentDistance + 480}px`,
						bottom: `${platform.platformY - heroDate.bottom - 80}px`,
						width: `${platform.platformWidth}px`
					}}
					className={styled.platform}
				></div>
			))}
			<div
				className={styled.positionPerson}
				style={{
					transform: `translateX(${400
					}px) translateY(${-heroPositionY}px)`,
					bottom: `${heroDate.bottom}px`
				}}
			
			>
				<ProgressHP maxHP={heroDate.maxHeroHP} currentHP={heroHP} />
				<Hero />
				{SelectorSpecialSkillForce && (
					<div className={styled.WrapperSkill}>
						<div className={styled.SpecialForce}>
							<img src={specialForceImg} alt='skillSpecial' />
						</div>
					</div>
				)}
			</div>
			
			{Enemies.map((enemy, index) => (
				<div
					key={index}
					className={styled.enemies}
					style={{
						left: `${enemy.positionX + 400 + currentDistance}px`,
						bottom: `${enemy.positionY + heroDate.bottom}px`
					}}
				>
					<Enemy animateAttack={enemyAnimation.attacking} Direction={enemy.Direction} animateWalk={enemyAnimation.walk}
					       animationDeed={enemyAnimation.deed} imgAttack={enemy.imgAttack} imgDeed={enemy.imgDeed}
					       imgMove={enemy.imgWalk} isDying={enemy.isDying} moveRight={enemy.moveRight}
					       isAttacking={enemy.isAttacking} />
				</div>))}
			
			{spawnBosse &&
				<div
					className={styled.postionBosse}
					style={{
						transform: `translateX(${bosse.positionX + 400 + currentDistance}px`,
						bottom: `${heroDate.bottom}px`
					}}>
					<ProgressHP maxHP={bosse.maxHP} currentHP={bosse.HP} />
					<Bosse frameBosse={frameBosse} animatedBoss={animatedBoss} specialAttack1={bosse.specialAttack1}
					       specialAttack2={bosse.specialAttack2} hunter={bosse.hunter} isDying={bosse.isDying}
					       bosseDirection={bosse.bosseDirection} isAttacking={bosse.isAttacking} widthBoss={bosse.width} heightBosse={bosse.height} />
				</div>
			}
			{MapData.imgGround && (
				<div style={{
					backgroundImage: `url(${MapData.imgGround})`,
					backgroundPositionX: `${currentDistance}px`
				}}
				     className={styled.Ground}
				/>
			)}
			{MapData.namePlanet === 'Измерение V-18: Ноксор' && (
				<div style={{
					backgroundImage: `url(${portal})`,
					left: `${10 + 550 + currentDistance}px`,
					bottom: `${300}px`,
					width: `${500}px`,
					height: `${500}px`,
					zIndex: 0
				}} className={styled.portal} />
			)}
			
			{MapData.backGreen && (
				<div style={{
					backgroundImage: `url(${MapData.backGreen})`,
					backgroundPositionX: `${currentDistance}px`
				}}
				     className={styled.green}>
				</div>)}
		
		</div>
	)
}

export default Maps
