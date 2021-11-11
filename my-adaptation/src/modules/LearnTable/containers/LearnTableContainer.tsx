import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LearnTableDTO } from '../dataContext/LearnTableDTO.dto';
import { learnTableActions, learnTableState } from '../redux/learnTableSlices';

import Table from '../components/Table';
import { WithSkeleton } from '@ui/components/WithSkeleton';

interface IState {
	learnTable: {
		loading: boolean;
		learnListData: learnTableState['learnListData'];
	};
}

const LearnTableContainer: React.FC = () => {
	const dispatch = useDispatch();
	const learnListResponse = useSelector((state: IState) => state.learnTable);

	useEffect(() => {
		dispatch(learnTableActions.getEducationRequest(1));
	}, [dispatch]);

	return (
		<WithSkeleton
			isLoading={ learnListResponse.loading }
			isEmpty={ learnListResponse.learnListData.length === 0 }
		>
			{
				<Table
					headers={ learnListResponse.learnListData[0]?.data.headerList || [] }
					rows={ learnListResponse.learnListData[0]?.data.rawList || [] }
				/>
			}
		</WithSkeleton>
	);
};

export default LearnTableContainer;
