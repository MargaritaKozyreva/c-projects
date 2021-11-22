import { learnTableActions } from '@modules/LearnTable/redux/learnTableSlices';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProgressDTO } from '../../dataContext/ProgressDTO.dto';
import ProgressStep from './ProgressStep';
import './styles.scss';

interface Props {
	stepsData: ProgressDTO.Step[];
}

const Steps: React.FC<Props> = (props) => {
	const dispatch = useDispatch();

	const { stepsData } = props;
	return (
		<div className="progress-steps">
			{ stepsData.length > 0 ? (
				<>
					{ stepsData.map((step: any) => (
						<Link to="/adaptation" key={ step.num }>
							<ProgressStep
								key={ step.num }
								step={ step }
								onClick={ () => {
									dispatch(learnTableActions.getEducationListByStepNumber(step.num));
								} }
							/>
						</Link>
					)) }
				</>
			) : (
				<div>...loading1...</div>
			) }
		</div>
	);
};

export default Steps;
