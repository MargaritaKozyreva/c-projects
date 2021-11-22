import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LearnTableDTO } from '../dataContext/LearnTableDTO.dto';
import { learnTableActions, learnTableState } from '../redux/learnTableSlices';

import Table from '@ui/components/Table';
import { WithSkeleton } from '@ui/components/WithSkeleton';
import Button from '@ui/components/Button';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Accordion } from '@ui/components/Accordion';
interface IState {
	learnTable: {
		loading: boolean;
		learnListData: learnTableState['learnListData'];
	};
}

const LearnTableContainer: React.FC = () => {
	const url = useLocation();
	const dispatch = useDispatch();
	const learnListResponse = useSelector((state: IState) => state.learnTable);

	useEffect(() => {
		dispatch(learnTableActions.getEducationListByStepNumber(1));
	}, [dispatch]);

	const headerList = learnListResponse.learnListData[0]?.data.headerList || [];
	const blocks = learnListResponse.learnListData[0]?.data.blocks || [];

	return (
		<WithSkeleton
			isLoading={ learnListResponse.loading }
			isEmpty={ learnListResponse.learnListData.length === 0 }
		>
			{ blocks.map((block: LearnTableDTO.IBlock) => (
				<Accordion title={ block.title } key={ block.id }>
					<Table>
						<Table.Head>
							<Table.Row>
								{ headerList.map((title: string) => (
									<Table.Cell key={ title } type="th">
										{ title }
									</Table.Cell>
								)) }
								<Table.Cell key={ headerList?.length + 1 } type="th" />
							</Table.Row>
						</Table.Head>
						<Table.Body>
							
							{ block.list.map((listItem: LearnTableDTO.ITableItem) => (
								<Table.Row key={ listItem.id }>
									<Table.Cell>{ listItem.type }</Table.Cell>
									<Table.Cell>{ listItem.clever }</Table.Cell>
									<Table.Cell>{ listItem.name }</Table.Cell>
									<Table.Cell>{ listItem.state }</Table.Cell>
									<Table.Cell>
										<Link
											to={ `${ url.pathname }/${ listItem.type }/${ listItem.id }` }
										>
											<Button>{ listItem.action?.text }</Button>
										</Link>
									</Table.Cell>
								</Table.Row>
							)) }
						</Table.Body>
					</Table>
				</Accordion>
			)) }
		</WithSkeleton>
	);
};

export default LearnTableContainer;
