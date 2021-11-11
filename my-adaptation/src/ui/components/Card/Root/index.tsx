import React from 'react';
import { CardContext } from '../context';
import Zone from '../Zone';
import { Layout } from '../Layout';
import { Content } from '../Content';
import './styles.scss';

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

const Card = ({ children, design, className }: Props) => {
	return (
		<CardContext.Provider value={ {} }>
			<Layout className={className} design={ design || 'default' }>{ children }</Layout>
		</CardContext.Provider>
	);
};

Card.Zone = Zone;
Card.Content = Content;

export default Card
