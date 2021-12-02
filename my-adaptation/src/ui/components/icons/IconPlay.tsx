import React, { SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGElement> {
	[key: string]: any;
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
	color?: string;
	className?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };

const IconPlay: React.FC<IconProps> = (props): JSX.Element => {
	const { color = 'currentColor', size = 'm', ...attrs } = props;
	const d = sizes[size] || size;
	return (
		<svg
			width={ d }
			height={ d }
			fill={ color }
			style={ { padding: '5px' } }
			viewBox="0 0 15 15"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M13.5938 7.14433C14.2347 7.53381 14.2347 8.464 13.5938 8.85348L2.26933 15.7354C1.60292 16.1404 0.749999 15.6607 0.749999 14.8809L0.75 1.11695C0.75 0.337134 1.60292 -0.142606 2.26933 0.262378L13.5938 7.14433Z"
				fill="white"
			/>
		</svg>
	);
};

IconPlay.defaultProps = {
	size: 'm',
	color: 'currentColor'
};

IconPlay.displayName = 'IconPlay';
export default IconPlay