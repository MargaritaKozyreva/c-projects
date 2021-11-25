import React, { ButtonHTMLAttributes, useMemo } from 'react';
import cn from 'classnames';
import './styles.scss';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'; // размер
	mode?: 'primary' | 'secondary' | 'ghost';
	shape?: 'default' | 'circle';
	icon?: React.ReactNode;
	children?: any;
	value?: string;
	active?: boolean;
};

export default function Button({
	size = 'l',
	mode = 'primary',
	children,
	value,
	shape = 'default',
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
				{ [`${ BASE }_size_${ byDefaulSize(size) }`]: shape === 'default' },
				`${ BASE }_mode_${ byDefaulMode(mode) }`,
				{ [`${ BASE }_with-text`]: isHaveText },
				{ [`${ BASE }_circle`]: shape === 'circle' },
				className
			),
			icon: cn(ICON, { [`${ ICON }_margin`]: isHaveText }),
			text: cn(TEXT)
		}),
		[className, isHaveText, mode, size, shape]
	);

	return (
		<button { ...props } className={ styles.container }>
			{ isHaveText && <span className={ styles.text }>{ text }</span> }
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
