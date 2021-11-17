import React from 'react';
import Button from '../../../../ui/components/Button/Button';
import { LearnTableDTO } from '../../dataContext/LearnTableDTO.dto';

interface Props {
	headers: LearnTableDTO.LearnListData['data']['headerList'];
	rows: LearnTableDTO.LearnListData['data']['rawList'];
}

const Table: React.FC<Props> = (props) => {
	const { headers, rows } = props;
	console.log(rows);
	
	return (
		<table>
			<thead>
				{ headers.map((title: string) => (
					<th key={ title }>{ title }</th>
				)) }
			</thead>
			<tbody>
				{ rows.map((row: LearnTableDTO.ITableItem) => (
					<tr key={ row.id }>
						<td>{ row.type }</td>
						<td>{ row.clever }</td>
						<td>{ row.name }</td>
						<td>{ row.state }</td>
						<td>
							<Button size='m'>{ row.action?.text }</Button>
						</td>
					</tr>
				)) }
			</tbody>
		</table>
	);
};

export default Table;
