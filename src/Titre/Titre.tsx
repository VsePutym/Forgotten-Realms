import style from '@Styles/BeginningGame.module.scss'
import { FC } from 'react'

interface TitreProps {
	text: string
}
const Titre:FC<TitreProps> = (text) => {
	return (
		<div className={style.container}>
			<div className={style.storyText}>
				<p dangerouslySetInnerHTML={{ __html: text.text }} />
			</div>
		</div>
	)
}

export default Titre