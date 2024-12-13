import { useAppDispatch } from '../../hooks/hooks.ts';
import { setInstructions } from '../../stores/Slices/gameSlice.ts';
import style from './Instructions.module.scss';
import btnStart from '@Img/objects/start.png';
import bosseSpecial from '@Img/objects/krit.webp';
import artifact from '@Img/objects/Artifacts/5.png';
import portal from '@Img/objects/teleport.gif';
import health from '@Img/objects/HP.png';
import skillQ from '@Img/Skills/blockSkill.png';
import skill2 from '@Img/Skills/active5.png';
import skill3 from '@Img/Skills/active3.png';
import skillW from '@Img/Skills/passive2.png';
import skill from '@Img/Skills/active1.png';

const Instructions = () => {
	const dispatch = useAppDispatch();
	
	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<div className={style.section}>
					<img src={artifact} alt="artifact" />
					<p>
						<strong>Поиск артефактов</strong><br />
						Каждый найденный артефакт возвращает герою часть его памяти и пробуждает древнюю магию, скрытую в мире.<br />,
						Чтобы пройти уровень собери все артефакты на карте.
					</p>
				</div>
				
				<div className={style.section}>
					<img src={portal} alt="portal" />
					<p>
						<strong>Портал</strong><br />
						Каждый портал открывает путь в уникальный мир.<br />
						Для его активации нужно собрать 6 артефактов и победить босса.<br />
						Пройдя через портал, вы восстановите часть утерянной памяти героя. <br/>
						на каждом новом уровне вы получаете прибавку к жизням.
					</p>
				</div>
				
				<div className={style.section}>
					<img src={skill} alt="hero skill" />
					<p>
						<strong>Умения героя</strong><br />
						Все умения отображаются в левом верхнем углу.<br />
						Некоторые из них имеют время перезарядки.
					</p>
				</div>
				
				<div className={style.section}>
					<img className={style.bosseSpecial} src={bosseSpecial} alt="boss special ability" />
					<p>
						<strong>Умения боссов</strong><br />
						Боссы обладают особыми умениями. <br />
						Чтобы защититься, используйте блок!
					</p>
				</div>
				
				<div className={style.section}>
					<img src={health} alt="health" />
					<p>
						<strong>Восстановление здоровья</strong><br />
						Собирайте жизни, чтобы восстановить здоровье.<br />
						Однако их нельзя подобрать, если потерянное здоровье меньше восстанавливаемого.
					</p>
				</div>
				
				<div className={style.section}>
					<img src={skill} alt="standard attack" />
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
				
				<div className={style.section}>
					<img src={skillW} alt="empower" />
					<p>
						<strong>Усиление: "Берсерк"</strong><br />
						Увеличивает урон всех атак.<br />
						Открыто со второго уровня.
					</p>
				</div>
				
				<div className={style.section}>
					<img src={skill2} alt="special attack 2" />
					<p>
						<strong>"Раскол Костей"</strong><br />
						Наносит критический урон.<br />
						Перезарядка: 3 секунд.<br />
						Открыт с третьего уровня.
					</p>
				</div>
				
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
			</div>
			<div className={style.start} onClick={() => dispatch(setInstructions(false))}>
				<img src={btnStart} alt="start" />
			</div>
		</div>
	);
};

export default Instructions;
