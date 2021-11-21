import React from 'react';
import Head from './Head';
import Body from './Body';
import Row from './Row';
import Cell from './Cell';
import './styled.scss';

const Table = (props: any) => {
	const { children } = props;
	return <table className="table-clever">{ children }</table>;
};

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
