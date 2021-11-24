import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Steps from '../../components/ProgressSteps';
import { progressActions, ProgressState } from '../../redux/progressSlices';
import { stepsActions, StepsState } from '../../redux/stepsSlices';
import { WithSkeleton } from '@ui/components/WithSkeleton';

interface IState {
	progressData: {
		progress: ProgressState;
	};
	stepsData: {
		steps: StepsState;
	};
}

export const ProgressContainerView: React.FC = () => {
	const dispatch = useDispatch();
	const progressResponse = useSelector((state: IState) => state);

	useEffect(() => {
		dispatch(progressActions.getProgressFetch());
		dispatch(stepsActions.getStepsRequest());
	}, [dispatch]);

	return (
		<>
			<WithSkeleton
				isLoading={ progressResponse.progressData.progress.loading }
				isEmpty={
					Object.keys(progressResponse.progressData.progress.data).length === 0
				}
			>
				<h1 className="c-header">
					Моя адаптация - { progressResponse.progressData.progress.data.percent }
				</h1>
			</WithSkeleton>

			{
				<WithSkeleton
					isLoading={ progressResponse.stepsData.steps.loading }
					isEmpty={ progressResponse.stepsData.steps.data.length === 0 }
				>
					<Steps
						stepsData={ progressResponse.stepsData.steps.data[0]?.data || [] }
					/>
				</WithSkeleton>
			}
		</>
	);
};
