import style from '@Styles/NewSkills.module.scss'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts'
import { HeroSelector } from '../../selectors/HeroSelectors.ts'
import { setNamePlanet, setShowNewSkills } from '../../stores/Slices/gameSlice.ts'
import skillQ from '@Img/Skills/blockSkill.png'
import skill2 from '@Img/Skills/active5.png'
import skill3 from '@Img/Skills/active3.png'
import skillW from '@Img/Skills/passive2.png'
import skill from '@Img/Skills/active1.png'
const NewSkills: FC = () => {
	const dispatch = useAppDispatch();
	const heroLevel = useAppSelector(HeroSelector.levelHero)
	const handleClose = () => {
		dispatch(setShowNewSkills(false))
		dispatch(setNamePlanet(true))
	}
	
	return (
		<div className={style.container}>
			{heroLevel === 1 && (
				<div>
				<div className={style.section}>
					<img src={skill} alt='skill1'/>
					<p>
						<strong>Стандартная атака: "Резня Тьмы"</strong><br />
						Идеально подходит для уничтожения врагов.<br />
						Открыта с первого уровня.<br/>
						Перезарядка: 0 секунд.
					</p>
				</div>
					
					<div className={style.section}>
					<img src={skillQ} alt="block" />
					<p>
						<strong>Блок: "Железная Завеса"</strong><br />
						Пока вы удерживаете блок, вы в безопасности.<br />
						Открыт с первого уровня.
						Перезарядка: 0 секунд.
					</p>
				</div>
				</div>
			)}
			
			{heroLevel === 2 && (
				<div className={style.section}>
					<img src={skillW} alt="empower" />
					<p>
						<strong>Усиление: "Берсерк"</strong><br />
						Увеличивает урон всех атак.<br />
						Открыто со второго уровня.
					</p>
				</div>
			)}
			
			{heroLevel === 3 && (
				<div className={style.section}>
					<img src={skill2} alt="special attack 2" />
					<p>
						<strong>"Раскол Костей"</strong><br />
						Наносит критический урон.<br />
						Перезарядка: 3 секунд.<br />
						Открыт с третьего уровня.
					</p>
				</div>
			)}
			
			{heroLevel === 4 && (
				<div className={style.section}>
					<img src={skill3} alt="world breaker" />
					<p>
						<strong>Разрушитель миров</strong><br />
						Мощная атака, наносит огромный урон врагам.<br />
						Совместно с усилением уничтожает любого врага.<br />
						Перезарядка: 20 секунд.<br />
						Открыт с четвертого уровня.
					</p>
				</div>
			)}
			<div className={style.btn} onClick={handleClose}>Закрыть</div>
		</div>
	)
}

export default NewSkills;