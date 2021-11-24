import React from 'react';
import './coursecard.css';

import Title from './Title';
import InfoBlock from './InfoBlock';
import Button from '@ui/components/Button';
import Table from '@ui/components/Table';
import IconPlay from '@icons/IconPlay';
import { CourseDTO } from '@modules/Course/dataContext/CourseDTO.dto';

const CourseCard = (props: CourseDTO.ICourse) => {

	const TableHeaders = [
		{ width: '40px', title: '' },
		{ width: '490px', title: 'НАЗВАНИЕ' },
		{ width: '226px', title: 'БАЛЛЫ' },
		{ width: '234px', title: 'СТАРТ' },
		{ width: '74px', title: '' }
	];

	return (
		<div className="grey_zone">
			<div className="table_padding">
				<Table>
					<Table.Head>
						<Table.Row>
							{ TableHeaders.map((item) => {
								return (
									<Table.Cell
										key={ item.title + item.width }
										type="th"
										width={ item.width }
									>
										{ item.title }
									</Table.Cell>
								);
							}) }
						</Table.Row>
					</Table.Head>
					<Table.Body>
						{ props.info.parts.map((item) => {
							return (
								<Table.Row key={ item.id }>
									<Table.Cell width="40px">
										<div className="icon_done" />
									</Table.Cell>
									<Table.Cell width="490px">{ item.title }</Table.Cell>
									<Table.Cell width="226px">{ item.score }</Table.Cell>
									<Table.Cell width="234px">{ item.last_usage_date }</Table.Cell>
									<Table.Cell width="74px">
										<Button size="xxs" type="circle">
											<IconPlay />
										</Button>
									</Table.Cell>
								</Table.Row>
							);
						}) }
					</Table.Body>
				</Table>
			</div>
		</div>
	);
};

export default CourseCard;
