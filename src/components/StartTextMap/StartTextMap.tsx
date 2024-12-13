import style from '@Styles/BeginningGame.module.scss';
import startImg from '@Img/objects/start.png'
import { FC } from 'react'
import { useAppDispatch } from '../../hooks/hooks.ts'
import { setHistoryLevel } from '../../stores/Slices/gameSlice.ts'


interface BeginningGameProps {
	text: string,
}
const StartTextMap:FC<BeginningGameProps> = ({text}) => {
	const dispatch = useAppDispatch();
	
	return (
		<div className={style.container}>
			<div className={style.storyText}>
				<p dangerouslySetInnerHTML={{ __html: text }} />
			</div>
				<div onClick={() => dispatch(setHistoryLevel(false))} className={style.startGame}>
					<img src={startImg} alt="start Game" />
				</div>
		</div>
	);
};

export default StartTextMap;
