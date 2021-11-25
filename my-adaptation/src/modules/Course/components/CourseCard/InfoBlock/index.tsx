import { Span } from '@ui/components/Typography';
import React from 'react';
import './styles.scss';

const InfoBlock = (props: any) => {
	return (
		<div className="InfoBlock">
			<Span size="xs" transform='uppercase'> { props.text }</Span>
			<div className="InfoBlockValue">
				{ props.icon == 'fire' ? '🔥' : '' } { props.value }
			</div>
		</div>
	);
};

export default InfoBlock;
