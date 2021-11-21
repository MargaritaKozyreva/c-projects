import React, { useState, useEffect, useRef } from 'react';
import { RefObject } from 'react';
import ArrowDown from '@icons/ArrowDown';
import './styles.scss';
import { H3 } from '../Typography';

interface AccordionProps {
	title?: string;
	children: any;
}

export const Accordion: React.FC<AccordionProps> = (props) => {
	const { title = 'title', children } = props;
	const [toggle, setToggle] = useState(false);
	const [heightEl, setHeightEl] = useState('');

	const refHeight: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

	useEffect(() => setHeightEl(`${ refHeight?.current?.scrollHeight }px`), []);

	const toggleState = () => {
		setToggle(!toggle);
	};

	return (
		<div className="accordion">
			<button onClick={ toggleState } className="accordion-visible">
				<H3>{ title }</H3>
				<ArrowDown className={ (toggle && 'active') || '' } />
			</button>

			<div
				className={ toggle ? 'accordion-toggle animated' : 'accordion-toggle' }
				style={ { height: toggle ? `${ heightEl }` : '0px' } }
				ref={ refHeight }
			>
				{ children }
			</div>
		</div>
	);
};
