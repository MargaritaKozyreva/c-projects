import { learnTableActions } from '@modules/LearnTable/redux/learnTableSlices';
import React from 'react';
import { useDispatch } from 'react-redux';
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
						<ProgressStep
							key={ step.num }
							step={ step }
							onClick={ () => {
								dispatch(learnTableActions.getEducationListById(step.num));
							} }
						/>
					)) }
				</>
			) : (
				<div>...loading...</div>
			) }
		</div>
	);
};

export default Steps;
