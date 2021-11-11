import React, { CSSProperties } from 'react';
import './styles.scss';
import cn from 'classnames';

export interface Props extends HTMLAttributesProps {
	children?: React.ReactNode;
	actions?: React.ReactNode;
	stretch?: boolean;
	design?: 'default' | 'success';
}

interface HTMLAttributesProps {
	className?: string;
}

const Layout: React.FC<Props> = (props) => {
	const setDefaultStyle = (props: Props): CSSProperties => {
		const { stretch } = props;
		const style: any = {};
		if (stretch) {
			style.width = '100%';
		}

		return style;
	};

	const setDefaultClassName = (props: Props) => {
		return cn('layout', `layout--${ props.design || 'default' }`, props.className);
	};

	const { children, ...attrs } = props;
	return (
		<div className={ setDefaultClassName(props) } style={ setDefaultStyle(props) } { ...attrs }>
			{ children }
		</div>
	);
};

export { Layout };
