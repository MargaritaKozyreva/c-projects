import React, { HTMLAttributes, ReactNode, useMemo } from 'react';
import cn from 'classnames';
import './styles.scss';

export interface Props {
	className?: string;
	children?: React.ReactNode;
	size?: 'xs' | 's' | 'm';
	smallCaps?: boolean;
	type?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
	weight?: 'regular' | 'medium' | 'bold';
	transform?: 'lowercase' | 'uppercase' | 'capitalize';
	color?: 'default' | 'second' | string;
}

const Text: React.FC<Props> = (props: Props) => {
	const {
		children,
		type,
		size,
		weight,
		color,
		transform,
		smallCaps,
		...attrs
	} = props;

	const styles = useMemo(
		() => ({
			container: cn(
				'text',
				`text--type-${ props.type || 'p' }`,
				`text--size-${ props.size || 'm' }`,
				`text--weight-${ props.weight || 'regular' }`,
				`text--color-${ props.color || 'default' }`,
				`text--transform-${ transform }`,
				props.className
			),
			small: cn({
				['text--smallcaps']: smallCaps
			})
		}),
		[children, type, size, weight, color]
	);

	let content = (
		<span className={ styles.container + ' ' + styles.small } { ...attrs }>
			{ children }
		</span>
	);

	if (props.type === 'p') {
		content = (
			<p className={ styles.container + ' ' + styles.small } { ...attrs }>
				{ children }
			</p>
		);
	}

	if (props.type === 'span') {
		content = (
			<span className={ styles.container + ' ' + styles.small } { ...attrs }>
				{ children }
			</span>
		);
	}
	return content;
};

export { Text };
