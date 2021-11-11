import React, { ButtonHTMLAttributes, useMemo } from 'react';
import cn from 'classnames';
import './Button.scss';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	size?: 's' | 'l' | 'm';
	mode?: 'primary' | 'secondary' | 'ghost';
	icon?: React.ReactNode;
	children?: string;
	value?: string;
	active?: boolean;
};

export default function Button({
	size = 'l',
	mode = 'primary',
	children,
	value,
	icon,
	className,
	active,
	...props
}: Props) {
	const text = value || children;
	const isHaveText = !!text;

	const styles = useMemo(
		() => ({
			container: cn(
				BASE,
				`${ BASE }_size_${ byDefaulSize(size) }`,
				`${ BASE }_mode_${ byDefaulMode(mode) }`,
				{ [`${ BASE }_with-text`]: isHaveText },
				className
			),
			icon: cn(ICON, { [`${ ICON }_margin`]: isHaveText }),
			text: cn(TEXT)
		}),
		[className, isHaveText, mode, size]
	);

	return (
		<button { ...props } className={ styles.container }>
			<span className={ styles.text }>{ text }</span>
			{ icon }
		</button>
	);
}

const BASE = 'x5-design-button';
const ICON = `${ BASE }__icon`;
const TEXT = `${ BASE }__text`;

const byDefaulSize = (size: Props['size'] = 'l') =>
	['s', 'l', 'm'].includes(size) ? size : 'l';
const byDefaulMode = (mode: Props['mode'] = 'primary') =>
	['primary', 'secondary', 'ghost'].includes(mode) ? mode : 'primary';
