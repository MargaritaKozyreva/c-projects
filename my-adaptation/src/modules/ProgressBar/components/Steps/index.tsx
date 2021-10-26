import React from 'react';
import './styles.scss';

interface Props {}

const Steps: React.FC<Props> = (props) => {
	return (
		<div className="clever">
			<ul>
				<li>Этап 1</li>
				<li>Этап 2</li>
				<li>Этап 3</li>
				<li>Этап 4</li>
			</ul>
		</div>
	);
};

export default Steps;
