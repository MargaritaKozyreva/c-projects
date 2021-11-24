import React from 'react';
import './styled.css';

const InfoBlock = (props: any) => {
	return (
		<div className="InfoBlock">
			<div className="InfoBlockText"> { props.text }</div>
			<div className="InfoBlockValue">
				{ ' ' }
				{ props.icon == 'fire' ? '🔥' : '' } { props.value }
			</div>
		</div>
	);
};

export default InfoBlock;
