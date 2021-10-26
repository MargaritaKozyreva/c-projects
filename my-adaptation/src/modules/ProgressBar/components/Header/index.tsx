import React from 'react';

interface Props {}

const Header: React.FC<Props> = (props) => {
	const { children } = props;
	return <div>{ children }</div>;
};

export default Header;
