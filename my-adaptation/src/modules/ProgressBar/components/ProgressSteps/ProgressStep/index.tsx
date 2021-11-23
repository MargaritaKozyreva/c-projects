import React, { MouseEventHandler } from 'react';
import { ProgressDTO } from 'src/modules/ProgressBar/dataContext/ProgressDTO.dto';
import cn from 'classnames';
import './styles.scss';
import StepCircle from './StepCircle';
import { Link } from 'react-router-dom';

interface Props {
	step: ProgressDTO.Step;
	onClick?: any;
	href?: any;
}

const ProgressStep: React.FC<Props> = (props) => {
	const { step, onClick } = props;
	return (
		<Link
			to="/adaptation"
			onClick={ onClick }
			className={ cn('progress-step', {
				'progress-step__success': step.stepState === 'selected',
				'progress-step__default': step.stepState !== 'selected',
				'progress-step__locked': step.stepState === 'locked'
			}) }
		>
			<p>{ step.num } этап</p>
			<StepCircle type={ step.stepState } />
			<div className="progress-step__date">
				<span>{ step.dateStart }</span> - <span>{ step.dateEnd }</span>
			</div>
		</Link>
	);
};

export default ProgressStep;
