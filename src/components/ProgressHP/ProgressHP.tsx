import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

interface ProgressHPProps {
	maxHP: number; // Максимальное значение здоровья
	currentHP: number; // Текущее значение здоровья
}

const ProgressHP: React.FC<ProgressHPProps> = ({ currentHP, maxHP }) => {
	// Нормализуем значение для отображения в процентах
	const normalise = (value: number) => (value / maxHP) * 100;
	
	return (
		<div style={{ width: '50%', margin: '-50px auto' }}>
			<LinearProgress
				color={'error'}
				variant="determinate"
				value={normalise(currentHP)} // Используем нормализованное значение
				style={{
					height: '10px', // Высота индикатора (можно настроить под себя)
					borderRadius: '5px', // Скругление
					backgroundColor: '#e0e0e0', // Фон прогресс-бара
				}}
			/>
		</div>
	);
};

export default ProgressHP;
