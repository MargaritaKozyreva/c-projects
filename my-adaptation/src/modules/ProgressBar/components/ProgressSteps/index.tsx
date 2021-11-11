import React from 'react';
import { ProgressDTO } from '../../dataContext/ProgressDTO.dto';
import ProgressStep from './ProgressStep';
import './styles.scss';

interface Props {
	stepsData: ProgressDTO.Step[];
}

const Steps: React.FC<Props> = (props) => {
	const { stepsData } = props;
	return (
		<div className="progress-steps">
			{ stepsData.length > 0 ? (
				<>
					{ stepsData.map((step: any) => (
						<ProgressStep key={ step.num } step={ step } />
					)) }
				</>
			) : (
				<div>...loading...</div>
			) }
		</div>
	);
};

export default Steps;