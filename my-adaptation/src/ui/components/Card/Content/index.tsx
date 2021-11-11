import React from 'react';
import cn from 'classnames';
import './styles.scss';

interface Props extends HTMLAttributesProps {
	children?: React.ReactNode;
	margin?: 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}

interface HTMLAttributesProps {
	id?: string | number;
	className?: string;
}

const Content: React.FC<Props> = (props: Props) => {
	const { children, className, margin = 'm' } = props;
	const style = cn('card-content', `margin-${ margin }`, className);

	return <div className={ style }>{ children }</div>;
};

Content.displayName = 'Card.Content';
export { Content };
