import React, { ButtonHTMLAttributes, useMemo } from 'react';
import './styles.scss';
import cn from 'classnames';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	size?: 's' | 'l';
	icon?: React.ReactNode;
	children?: string;
	value?: string;
	rightIcon?: boolean;
	active?: boolean;
};

export const Cheap: React.FC<Props> = (props) => {
	const {
		children,
		size,
		value,
		icon,
		rightIcon,
		className,
		active,
		...attrs
	} = props;

	const styles = useMemo(
		() => ({
			container: cn(
				'chips',
				{
					chips_size_s: size !== 'l',
					chips_size_l: size === 'l',
					chips_reverse: !!rightIcon,
					'chips_with-text': !!children || !!value
				},
				className
			),
			icon: cn('chips__icon', {
				chips__icon_left: !rightIcon,
				chips__icon_right: !!rightIcon
			}),
			text: cn('chips__text')
		}),
		[children, value, size, rightIcon, className]
	);

	return (
		<button { ...props } className={ styles.container }>
			{ icon as React.ReactNode }
			<span className={ styles.text }>{ value || children }</span>
		</button>
	);
};
