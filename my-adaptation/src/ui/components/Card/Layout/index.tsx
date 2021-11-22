import React, { CSSProperties } from 'react';
import cn from 'classnames';
import './styles.scss';

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

	const { children, ...attrs } = props;
	return (
		<div
			className={ cn(
				'layout',
				`layout--${ props.design || 'default' }`,
				props.className
			) }
			style={ setDefaultStyle(props) }
			{ ...attrs }
		>
			{ children }
		</div>
	);
};

export { Layout };
