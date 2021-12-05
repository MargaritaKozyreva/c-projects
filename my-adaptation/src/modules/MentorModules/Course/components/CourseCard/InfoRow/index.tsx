import React from 'react';
import './styles.scss';

const InfoRow = (props: any) => {
	return (
		<div className="InfoRow">
			<div className="col_0" />
			<div className="col_1">Название</div>
			<div className="col_2">Баллы</div>
			<div className="col_3">Старт</div>
		</div>
	);
};

export default InfoRow;
