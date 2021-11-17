import { getEducationsById } from '@core/features/educationList/thunks/getEducationsById';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ProgressDTO } from '../../dataContext/ProgressDTO.dto';
import ProgressStep from './ProgressStep';
import './styles.scss';
import { learnTableActions } from "@modules/LearnTable/redux/learnTableSlices";

interface Props {
	stepsData: ProgressDTO.Step[];
}

const Steps: React.FC<Props> = (props) => {
	const dispatch = useDispatch();

	const { stepsData } = props;
	
	const changeStep = (id: number) => {
	  // сначала проверяешь есть ли инфа в стейте
		// если есть возвращаешь её
		// если нет, то запускаешь сагу
	}
	
	return (
		<div className="progress-steps">
			{ !!stepsData.length ? (
				<>
					{ stepsData.map((step: any) => (
						<ProgressStep
							key={ step.num }
							step={ step }
							onClick={ () => dispatch(learnTableActions.getEducationById(step.num)) }
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
