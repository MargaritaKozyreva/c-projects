import React from 'react';
import cn from 'classnames';
import './styles.scss';

export interface Props {
	className?: string;
	children?: React.ReactNode;
	direction?: 'row' | 'column';
	margin?: 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}

const setDefaultStyle = (props: Props) => {
	const { direction = 'row' } = props;
	return { flexDirection: direction };
};

const setDefaultClassName = (props: Props) => {
	const { className, margin = 'm' } = props;
	const style = cn('zone', `margin-${ margin }`, className);
	return style;
};

const Zone: React.FC<Props> = (props) => {
	const { children, ...attrs } = props;
	return (
		<div className={ setDefaultClassName(props) } style={ setDefaultStyle(props) } { ...attrs }>
			{ children }
		</div>
	);
};

Zone.displayName = 'Zone';
export default Zone;
