import React from 'react';
import cn from 'classnames';
import { ProgressDTO } from '@modules/ProgressBar/dataContext/ProgressDTO.dto';
import './styles.scss';
import { LockIcon } from '@icons/LockIcon';

interface Props {
	type: ProgressDTO.StepState;
}

const StepCircle: React.FC<Props> = (props) => {
	const { type = 'locked' } = props;
	return (
		<div className={ cn('step-circle', type) }>
			{ type === 'locked' && <LockIcon /> }
		</div>
	);
};

export default StepCircle;
