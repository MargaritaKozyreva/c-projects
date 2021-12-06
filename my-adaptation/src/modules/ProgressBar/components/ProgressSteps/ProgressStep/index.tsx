import React, { MouseEventHandler } from 'react';
import { ProgressDTO } from '@modules/ProgressBar/dataContext/ProgressDTO.dto';
import cn from 'classnames';
import StepCircle from './StepCircle';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { learnTableActions } from '@modules/LearnTable/redux/learnTableSlices';
import './styles.scss';

interface Props {
	step: ProgressDTO.Step;
	href?: any;
}

const ProgressStep: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const { step } = props;
	return (
		<Link
			to="/adaptation"
			onClick={ () =>
				dispatch(learnTableActions.getEducationListByStepNumber(step.num))
			}
			className={ cn('progress-step', {
				'progress-step__success': step.stepState === 'selected',
				'progress-step__default': step.stepState !== 'selected',
				'progress-step__locked': step.stepState === 'readonly'
			}) }
		>
			<p className="progress-step__title">{ step.title }</p>
			<StepCircle type={ step.stepState } />
			<div className="progress-step__date">
				<span>{ step.dateStart }</span> - <span>{ step.dateEnd }</span>
			</div>
		</Link>
	);
};

export default ProgressStep;
