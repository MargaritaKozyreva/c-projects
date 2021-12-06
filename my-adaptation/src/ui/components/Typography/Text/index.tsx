import React, { HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import './styles.scss';

export interface Props {
	className?: string;
	children?: React.ReactNode;
	size?: 'xs' | 's' | 'm';
	type?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
	weight?: 'regular' | 'medium' | 'bold';
	transform?: 'lowercase' | 'uppercase' | 'capitalize';
	color?: 'default' | 'second';
}

const setDefaultStyle = (props: Props) => {
	return { textTransform: props.transform };
};

const setDefaultClassName = (props: Props) => {
	return cn(
		'text',
		`text--type-${ props.type || 'p' }`,
		`text--size-${ props.size || 'm' }`,
		`text--weight-${ props.weight || 'regular' }`,
		`text--color-${ props.color || 'default' }`,
		props.className
	);
};

const Text: React.FC<Props> = (props: Props) => {
	const { children, ...attrs } = props;
	let content = (
		<span
			className={ setDefaultClassName(props) }
			style={ setDefaultStyle(props) }
			{ ...attrs }
		>
			{ children }
		</span>
	);

	if (props.type === 'p') {
		content = (
			<p
				className={ setDefaultClassName(props) }
				style={ setDefaultStyle(props) }
				{ ...attrs }
			>
				{ children }
			</p>
		);
	}

	if (props.type === 'span') {
		content = (
			<span
				className={ setDefaultClassName(props) }
				style={ setDefaultStyle(props) }
				{ ...attrs }
			>
				{ children }
			</span>
		);
	}
	return content;
};

export { Text };
