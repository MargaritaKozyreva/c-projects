import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LearnTableDTO } from '../dataContext/LearnTableDTO.dto';
import { learnTableActions, learnTableState } from '../redux/learnTableSlices';

import Table from '@ui/components/Table';
import { WithSkeleton } from '@ui/components/WithSkeleton';
import { useLocation } from 'react-router';
import { Accordion } from '@ui/components/Accordion';
import { educationItemIcon, setState } from '../helpers/functions';
import { Chips } from '@ui/components/Chips';
import { Span } from '@ui/components/Typography';
import ButtonController from '../components/ButtonController';
import Zone from '@ui/components/Card/Zone';
import Clever from '@icons/Clever';

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
										{ title === 'clever' ? <Clever /> : title }
									</Table.Cell>
								)) }
								<Table.Cell key={ headerList?.length + 1 } type="th" />
							</Table.Row>
						</Table.Head>
						<Table.Body>
							{ block.list.map((listItem: LearnTableDTO.ITableItem, index) => {
								const Icon =
									educationItemIcon[
										educationItemIcon.findIndex((elem) => elem.type === listItem.type)
									]?.icon;
								return (
									<Table.Row key={ listItem.id }>
										<Table.Cell>
											<Zone
												direction="row"
												justify="flex-start"
												align="flex-start"
											>
												<Icon style={ { marginRight: '10px' } } />
												<Span
													transform="uppercase"
													smallCaps={ true }
													color="gray-50"
												>
													{ setState(listItem).titleRU }
												</Span>
											</Zone>
										</Table.Cell>
										<Table.Cell>
											<Zone
												direction="row"
												justify="center"
												align="flex-end"
											>
												<Span color="second">{ listItem.clever }</Span>
												<Clever style={ { marginLeft: '10px' } } />
											</Zone>
										</Table.Cell>
										<Table.Cell>
											<Span color="gray-60">{ listItem.name }</Span>
										</Table.Cell>
										<Table.Cell>
											<Chips
												design={ setState(listItem).statusColor || 'ghost' }
											>
												{ setState(listItem).status || '' }
											</Chips>
										</Table.Cell>
										<Table.Cell>
											<ButtonController item={ listItem } url={ url } />
										</Table.Cell>
									</Table.Row>
								);
							}) }
						</Table.Body>
					</Table>
				</Accordion>
			)) }
		</WithSkeleton>
	);
};

export default LearnTableContainer;
