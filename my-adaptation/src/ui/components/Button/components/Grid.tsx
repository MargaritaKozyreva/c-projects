import React from 'react';
import './styles.scss';
import cn from 'classnames';

type Props = {
	children: React.ReactNode;
	className?: string;
};

const Grid = ({ children, className }: Props) => {
	const style = {
		container: cn('grid_button', className)
	};

	const renderItem = (item: any, index = 0) => (
		<Grid.Item key={ index }>{ item }</Grid.Item>
	);

	return (
		<div className={ style.container }>
			{ Array.isArray(children)
				? children.map(renderItem)
				: renderItem(children) }
		</div>
	);
};

Grid.childrenStyle = 'grid_button__item';

// eslint-disable-next-line react/display-name
Grid.Item = ({ children }: Props) => (
	<div className="grid_button__item">{ children }</div>
);

export default Grid;
