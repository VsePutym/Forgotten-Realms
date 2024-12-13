import { FC, useEffect, useRef, useState } from 'react';
import style from '@Styles/InterfaceController.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import { HeroSelector } from '../../selectors/HeroSelectors.ts';
import { MapsSelectors } from '../../selectors/mapsSelectors.ts';
import skill1 from '@Img/Skills/active1.png';
import blockSkill from '@Img/Skills/blockSkill.png';
import skill2 from '@Img/Skills/passive2.png';
import skill3 from '@Img/Skills/active5.png';
import skill4 from '@Img/Skills/active3.png';

import {
	setActiveSkillForce,
	setActiveSpecialAttack2, setActiveSpecialAttack3,
	specialSkillForce
} from '../../stores/Slices/heroSlice.ts'

const SKILL_DURATIONFORCE = 5000; // 5 секунд действия умения
const COOLDOWN_TIMEFORCE = 10000; // 10 секунд отката

const COOLDOWN_TIMEFORCE_SPECIAL2 = 3000; // 10 секунд отката
const COOLDOWN_TIMEFORCE_SPECIAL3 = 20000; // 10 секунд отката

const InterfaceController: FC = () => {
	const dispatch = useAppDispatch();
	const artifacts = useAppSelector(MapsSelectors.artifacts);
	const attack1 = useAppSelector(HeroSelector.attacking);
	const block = useAppSelector(HeroSelector.block);
	const levelHero = useAppSelector(HeroSelector.levelHero);
	const SelectorSpecialSkillForce = useAppSelector(HeroSelector.specialSkillForce);
	const SelectorHeroSpecialAttack2 = useAppSelector(HeroSelector.heroSpecialAttack2);
	const SelectorHeroSpecialAttack3 = useAppSelector(HeroSelector.heroSpecialAttack3);
	
	const isWActiveForce = useRef(false); // Ref для состояния активности умения
	const isWActiveSpecial2 = useRef(false); // Ref для состояния активности умения
	const isWActiveSpecial3 = useRef(false); // Ref для состояния активности умения
	
	const isWOnCoolDownForce = useRef(false); // Ref для кулдауна
	const isWOnCoolDownSpecial2 = useRef(false); // Ref для кулдауна
	const isWOnCoolDownSpecial3 = useRef(false); // Ref для кулдауна
	
	const [coolDownTimeLeftForce, setCoolDownTimeLeftForce] = useState<number>(0); // Отображение оставшегося времени
	const [coolDownTimeLeftSpecial2, setCoolDownTimeLeftSpecial2] = useState<number>(0); // Отображение оставшегося времени
	const [coolDownTimeLeftSpecial3, setCoolDownTimeLeftSpecial3] = useState<number>(0); // Отображение оставшегося времени
	
	useEffect(() => {
		if (!SelectorHeroSpecialAttack3 || isWActiveSpecial3.current || isWOnCoolDownSpecial3.current) return;
		isWActiveSpecial3.current = true; // Умение активно
		// Таймер для завершения действия умения
		
		isWActiveSpecial3.current = false;
		isWOnCoolDownSpecial3.current = true; // Устанавливаем кулдаун
		setCoolDownTimeLeftSpecial3(COOLDOWN_TIMEFORCE_SPECIAL3);
		// Таймер для завершения кулдауна
		const coolDownTimer = setInterval(() => {
			setCoolDownTimeLeftSpecial3((prev) => {
				const newTime = prev - 1000; // Уменьшаем на 1 секунду
				if (newTime <= 0) {
					clearInterval(coolDownTimer); // Очищаем интервал
					isWOnCoolDownSpecial3.current = false; // Кулдаун завершён
					dispatch(setActiveSpecialAttack3(false));
				}
				return Math.max(newTime, 0);
			});
		}, 1000);
	}, [SelectorHeroSpecialAttack3, dispatch]);
	
	useEffect(() => {
		if (!SelectorHeroSpecialAttack2 || isWActiveSpecial2.current || isWOnCoolDownSpecial2.current) return;
		isWActiveSpecial2.current = true; // Умение активно
		// Таймер для завершения действия умения

			isWActiveSpecial2.current = false;
			isWOnCoolDownSpecial2.current = true; // Устанавливаем кулдаун
			setCoolDownTimeLeftSpecial2(COOLDOWN_TIMEFORCE_SPECIAL2);
			// Таймер для завершения кулдауна
			const coolDownTimer = setInterval(() => {
				setCoolDownTimeLeftSpecial2((prev) => {
					const newTime = prev - 1000; // Уменьшаем на 1 секунду
					if (newTime <= 0) {
						clearInterval(coolDownTimer); // Очищаем интервал
						isWOnCoolDownSpecial2.current = false; // Кулдаун завершён
						dispatch(setActiveSpecialAttack2(false));
					}
					return Math.max(newTime, 0);
				});
			}, 1000);
	}, [SelectorHeroSpecialAttack2, dispatch]);
	
	useEffect(() => {
		if (!SelectorSpecialSkillForce || isWActiveForce.current || isWOnCoolDownForce.current) return;
		isWActiveForce.current = true; // Умение активно
		// Таймер для завершения действия умения
		const skillTimer = setTimeout(() => {
			isWActiveForce.current = false;
			dispatch(specialSkillForce(false));
			isWOnCoolDownForce.current = true; // Устанавливаем кулдаун
			setCoolDownTimeLeftForce(COOLDOWN_TIMEFORCE);
			// Таймер для завершения кулдауна
			const coolDownTimer = setInterval(() => {
				setCoolDownTimeLeftForce((prev) => {
					const newTime = prev - 1000; // Уменьшаем на 1 секунду
					if (newTime <= 0) {
						clearInterval(coolDownTimer); // Очищаем интервал
						isWOnCoolDownForce.current = false; // Кулдаун завершён
						dispatch(setActiveSkillForce(false));
					}
					return Math.max(newTime, 0);
				});
			}, 1000);
		}, SKILL_DURATIONFORCE);
		return () => {
			clearTimeout(skillTimer); // Очищаем таймер действия умения
		};
	}, [SelectorSpecialSkillForce, dispatch]);
	
	return (
		<div className={style.container}>
			<ul className={style.Skills}>
				{/* Умение 1 */}
				<div className={attack1 ? style.skillActive : style.Skill}>
					<img src={skill1} alt="skill1" />
					<p className={style.key}>1</p>
				</div>
				
				{/* Блок */}
				<div className={block ? style.skillActive : style.Skill}>
					<img src={blockSkill} alt="blockSkill" />
					<p className={style.key}>Q</p>
				</div>
				
				{/* Умение W */}
				{levelHero >= 2 && (
					<div
						className={`${isWActiveForce.current ? style.skillActive : style.Skill} ${
							isWOnCoolDownForce.current ? style.skillCooldown : ''
						}`}
					>
						<img src={skill2} alt="skill2" />
						<p className={style.key}>W</p>
						{isWOnCoolDownForce.current && (
							<div className={style.cooldownOverlay}>
								<span>{(coolDownTimeLeftForce / 1000).toFixed(0)}s</span>
							</div>
						)}
					</div>
				)}
				
				{levelHero >= 3 && (
					<div
						className={`${isWActiveSpecial2.current ? style.skillActive : style.Skill} ${
							isWOnCoolDownSpecial2.current ? style.skillCooldown : ''
						}`}
					>
						<img src={skill3} alt="skill2" />
						<p className={style.key}>2</p>
						{isWOnCoolDownSpecial2.current && (
							<div className={style.cooldownOverlay}>
								<span>{(coolDownTimeLeftSpecial2 / 1000).toFixed(0)}s</span>
							</div>
						)}
					</div>
				)}
				{levelHero >= 4 && (
					<div
						className={`${isWActiveSpecial3.current ? style.skillActive : style.Skill} ${
							isWOnCoolDownSpecial3.current ? style.skillCooldown : ''
						}`}
					>
						<img src={skill4} alt="skill2" />
						<p className={style.key}>3</p>
						{isWOnCoolDownSpecial3.current && (
							<div className={style.cooldownOverlay}>
								<span>{(coolDownTimeLeftSpecial3 / 1000).toFixed(0)}s</span>
							</div>
						)}
					</div>
				)}
			</ul>
			
			<ul className={style.artifactsList}>
				{artifacts.map((artifact, index) => (
					<div className={style.artifact} key={index}>
						<img src={artifact} alt="" />
					</div>
				))}
				<div className={style.ArtifactsCount}><p>{artifacts.length} / 6</p></div>
			</ul>
		</div>
	);
};

export default InterfaceController;
