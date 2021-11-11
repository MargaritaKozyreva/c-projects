import React, { MouseEventHandler } from 'react';
import { ProgressDTO } from 'src/modules/ProgressBar/dataContext/ProgressDTO.dto';
import cn from 'classnames';
import './styles.scss';
import StepCircle from './StepCircle';

interface Props {
	step: ProgressDTO.Step;
	onClick?: MouseEventHandler<HTMLSpanElement>;
}

const ProgressStep: React.FC<Props> = (props) => {
	const { step, onClick } = props;
	return (
		<div
			onClick={ onClick }
			className={ cn('progress-step', {
				'step-success': step.stepState === 'selected',
				'step-default': step.stepState !== 'selected',
				'step-locked': step.stepState === 'locked'
			}) }
		>
			<p>{ step.num } этап</p>
			<StepCircle type={ step.stepState } />
			<div className="progress-step__date">
				<span>{ step.dateStart }</span> - <span>{ step.dateEnd }</span>
			</div>
		</div>
	);
};

export default ProgressStep;
