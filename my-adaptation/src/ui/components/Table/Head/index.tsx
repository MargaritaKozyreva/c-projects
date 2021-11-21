import React from 'react';

const TableHead = (props: any) => {
	const { children } = props;
	return <thead>{ children }</thead>;
};

export default TableHead;
