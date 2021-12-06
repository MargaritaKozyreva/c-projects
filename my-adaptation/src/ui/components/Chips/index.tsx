import React, { ButtonHTMLAttributes, useMemo } from 'react';
import './styles.scss';
import cn from 'classnames';

export type Props = {
	size?: 's' | 'l';
	icon?: React.ReactNode;
	children?: React.ReactNode;
	value?: string;
	design: 'ghost' | 'primary' | 'secondary' | 'warning' | string;
	rightIcon?: boolean;
	active?: boolean;
};

interface HTMLAttributesProps {
	className?: string;
}

export const Chips: React.FC<Props & HTMLAttributesProps> = (props) => {
	const {
		children,
		size,
		value,
		icon,
		rightIcon,
		className,
		design = 'ghost',
		active,
		...attrs
	} = props;

	const BASE = 'x5-design-chips';

	const styles = useMemo(
		() => ({
			container: cn(
				BASE,
				{
					[`${ BASE }_size_s`]: size !== 'l',
					[`${ BASE }_size_l`]: size === 'l',
					[`${ BASE }_design_ghost`]: design === 'ghost',
					[`${ BASE }_design_primary`]: design === 'primary',
					[`${ BASE }_design_secondary`]: design === 'secondary',
					[`${ BASE }_design_warning`]: design === 'warning',
					[`${ BASE }_reverse`]: !!rightIcon,
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
		<div { ...props } className={ styles.container }>
			{ icon as React.ReactNode }
			<span className={ styles.text }>{ value || children }</span>
		</div>
	);
};
