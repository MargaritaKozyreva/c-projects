import React from 'react';
import Zone from '../Zone';
import { Layout } from '../Layout';
import { Content } from '../Content';
import './styles.scss';
import cn from 'classnames';

export interface Props extends HTMLAttributesProps {
	children?: React.ReactNode;
	actions?: React.ReactNode;
	stretch?: boolean;
	design?: 'default' | 'success';
}

interface HTMLAttributesProps {
	id?: string | number;
	className?: string;
}

const Card = ({ children, design = 'default', className }: Props) => {
	return (
		<Layout
			className={ cn('layout', {
				'layout--default': design === 'default',
				'layout--success': design === 'success'
			}) }
			design={ design }
		>
			{ children }
		</Layout>
	);
};

Card.Zone = Zone;
Card.Content = Content;

export default Card;
