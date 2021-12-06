import React from 'react';
import cn from 'classnames';
import './styles.scss';

interface Props {}

const Header: React.FC<Props> = (props) => {
	const { children } = props;
	return <div className={ cn('header') }>{ children }</div>;
};

export default Header;
