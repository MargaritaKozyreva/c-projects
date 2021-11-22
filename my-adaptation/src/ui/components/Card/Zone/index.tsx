import React from 'react';
import cn from 'classnames';
import './styles.scss';

export interface Props {
	className?: string;
	children?: React.ReactNode;
	direction?: 'row' | 'column';
	margin?: 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
	line?: 'top' | 'bottom';
	alignItems?:
		| 'normal'
		| 'inherit'
		| 'initial'
		| 'unset'
		| 'stretch'
		| 'center'
		| 'flex-start'
		| 'flex-end'
		| 'self-start'
		| 'self-end'
		| 'baseline';
	justifyContent?:
		| 'normal'
		| 'inherit'
		| 'initial'
		| 'unset'
		| 'center'
		| 'flex-start'
		| 'flex-end'
		| 'space-between'
		| 'space-around';
}

const Zone: React.FC<Props> = (props) => {
	const { children, ...attrs } = props;

	const setDefaultStyle = (props: Props) => {
		const { direction = 'row', justifyContent, alignItems } = props;
		return { flexDirection: direction, justifyContent, alignItems };
	};

	const setDefaultClassName = (props: Props) => {
		const { className, margin = 'm', line } = props;
		const style = cn(
			'zone',
			`margin-${ margin }`,
			{
				'zone--line-top': line === 'top',
				'zone--line-bottom': line === 'bottom'
			},
			className
		);
		return style;
	};

	return (
		<div
			className={ setDefaultClassName(props) }
			style={ setDefaultStyle(props) }
			{ ...attrs }
		>
			{ children }
		</div>
	);
};

Zone.displayName = 'Zone';
export default Zone;
