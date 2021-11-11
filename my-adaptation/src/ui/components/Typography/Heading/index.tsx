import React, { HTMLAttributes } from 'react';
import './styles.scss';
import cn from 'classnames';

// export interface Props extends React.DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
// 	className?: string;
// 	children?: React.ReactNode;
// 	type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
// 	margin?: 'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
// 	uppercase?: boolean;
// }

export interface Props {
	className?: string;
	children?: React.ReactNode;
	type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	weight?: 'regular' | 'medium' | 'bold';
	transform?: 'lowercase' | 'uppercase' | 'capitalize';
}

const setDefaultStyle = (props: Props) => {
	return { textTransform: props.transform };
};

const setDefaultClassName = (props: Props) => {
	return cn('heading', `heading--type-${ props.type }` || 'heading--type-h1', `heading--weight-${ props.weight }` || 'heading--weight-bold', props.className);
};

const Heading: React.FC<Props> = (props) => {
	const { children, ...attrs } = props;
	return (
		<h1 className={ setDefaultClassName(props) } style={ setDefaultStyle(props) } { ...attrs }>
			{ children }
		</h1>
	);
};

export { Heading };
