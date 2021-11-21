import React from 'react';

const TableRow = (props: any) => {
	const { children } = props;
	return <tr>{ children }</tr>;
};

export default TableRow;
